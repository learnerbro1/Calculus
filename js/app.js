/**
 * Main Application Engine for Calculus Notebook
 * Orchestrates curriculum rendering, progressive unlock, KaTeX typesetting,
 * sound synthesis, quiz grading, and navigation.
 */

window.CalculusApp = {
  currentTopicIndex: 0,
  unlockedTopicIndices: [0],
  completedTopicIndices: [],
  teacherMode: false,
  soundEnabled: true,
  fontTheme: 'neat-print', // 'neat-print', 'pen-notes', 'schoolbook'
  currentView: 'topic', // 'topic', 'quiz', 'lab'
  currentQuizPartId: 1,
  audioCtx: null,

  init() {
    this.loadState();
    this.applyFontTheme();
    this.bindGlobalEvents();
    this.renderHeader();
    this.renderTabs();
    this.renderTOC();
    this.showTopic(this.currentTopicIndex);

    // Initial audio context on first interaction
    const enableAudio = () => {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.audioCtx = new AudioContext();
      }
      window.removeEventListener('click', enableAudio);
    };
    window.addEventListener('click', enableAudio);
  },

  loadState() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedUnlocked = window.localStorage.getItem('calc_unlocked');
        if (savedUnlocked) this.unlockedTopicIndices = JSON.parse(savedUnlocked);

        const savedCompleted = window.localStorage.getItem('calc_completed');
        if (savedCompleted) this.completedTopicIndices = JSON.parse(savedCompleted);

        const savedTeacher = window.localStorage.getItem('calc_teacher');
        if (savedTeacher) this.teacherMode = JSON.parse(savedTeacher);

        const savedFont = window.localStorage.getItem('calc_font');
        if (savedFont) this.fontTheme = savedFont;
      }
    } catch (e) {
      console.warn('Could not load localStorage progress:', e);
    }
  },

  saveState() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('calc_unlocked', JSON.stringify(this.unlockedTopicIndices));
        window.localStorage.setItem('calc_completed', JSON.stringify(this.completedTopicIndices));
        window.localStorage.setItem('calc_teacher', JSON.stringify(this.teacherMode));
        window.localStorage.setItem('calc_font', this.fontTheme);
      }
    } catch (e) {
      console.warn('Could not save localStorage progress:', e);
    }
  },

  // Web Audio Synthesizer (Pencil Scratch & Soft Chimes)
  playSound(type) {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      const ctx = this.audioCtx;
      if (ctx.state === 'suspended') ctx.resume();

      if (type === 'scratch') {
        // Synthesize a brief pencil scribble sound using white noise
        const bufferSize = ctx.sampleRate * 0.12;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1800;
        filter.Q.value = 3;
        noise.connect(filter);
        filter.connect(ctx.destination);
        noise.start();
      } else if (type === 'chime') {
        // Soft positive bell chime
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.25); // A5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch (e) {
      // Audio fallback silent
    }
  },
  bindGlobalEvents() {
    // TOC Drawer open / close
    const tocBtn = document.getElementById('toc-toggle-btn');
    const tocDrawer = document.getElementById('toc-drawer');
    const tocBackdrop = document.getElementById('toc-backdrop');
    const tocCloseBtn = document.getElementById('toc-close-btn');

    if (tocBtn) tocBtn.addEventListener('click', () => {
      tocDrawer.classList.add('open');
      tocBackdrop.classList.add('open');
      this.playSound('scratch');
    });

    if (tocCloseBtn) tocCloseBtn.addEventListener('click', () => {
      tocDrawer.classList.remove('open');
      tocBackdrop.classList.remove('open');
    });

    if (tocBackdrop) tocBackdrop.addEventListener('click', () => {
      tocDrawer.classList.remove('open');
      tocBackdrop.classList.remove('open');
    });

    // Sound toggle
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) soundBtn.addEventListener('click', () => {
      this.soundEnabled = !this.soundEnabled;
      soundBtn.textContent = this.soundEnabled ? '🔔 Sound: ON' : '🔕 Sound: OFF';
    });

    // Teacher mode toggle
    const teacherBtn = document.getElementById('teacher-mode-btn');
    if (teacherBtn) teacherBtn.addEventListener('click', () => {
      this.teacherMode = !this.teacherMode;
      if (this.teacherMode) {
        this.unlockedTopicIndices = Array.from({ length: 25 }, (_, i) => i);
      }
      this.saveState();
      this.updateProgressUI();
      this.renderTOC();
      teacherBtn.textContent = this.teacherMode ? '🔓 Teacher Mode: ALL UNLOCKED' : '🔒 Strict Linear Progression';
      teacherBtn.style.color = this.teacherMode ? '#15803d' : '#475569';
      this.playSound('chime');
    });

    // Font style switcher
    const fontBtn = document.getElementById('font-style-btn');
    if (fontBtn) {
      fontBtn.addEventListener('click', () => {
        const themes = ['neat-print', 'pen-notes', 'schoolbook'];
        const nextIdx = (themes.indexOf(this.fontTheme) + 1) % themes.length;
        this.fontTheme = themes[nextIdx];
        this.saveState();
        this.applyFontTheme();
        this.playSound('scratch');
      });
    }
  },

  applyFontTheme() {
    if (typeof document === 'undefined') return;
    document.body.classList.remove('font-neat-print', 'font-pen-notes', 'font-schoolbook');
    document.body.classList.add(`font-${this.fontTheme}`);
    const fontBtn = document.getElementById('font-style-btn');
    if (fontBtn) {
      if (this.fontTheme === 'neat-print') {
        fontBtn.innerHTML = '✍️ Font: Simple Print';
      } else if (this.fontTheme === 'pen-notes') {
        fontBtn.innerHTML = '✍️ Font: Simple Pen';
      } else if (this.fontTheme === 'schoolbook') {
        fontBtn.innerHTML = '✍️ Font: Schoolbook';
      }
    }
  },

  renderHeader() {
    const teacherBtn = document.getElementById('teacher-mode-btn');
    if (teacherBtn && this.teacherMode) {
      teacherBtn.textContent = '🔓 Teacher Mode: ALL UNLOCKED';
      teacherBtn.style.color = '#15803d';
    }
    this.applyFontTheme();
  },

  renderTabs() {
    const tabsCol = document.getElementById('notebook-tabs-column');
    if (!tabsCol) return;
    tabsCol.innerHTML = '';

    const parts = window.CALCULUS_PARTS || [];
    parts.forEach(part => {
      const tab = document.createElement('div');
      tab.className = `notebook-tab tab-part-${part.id}`;
      tab.setAttribute('data-part-id', part.id);
      tab.textContent = `Part ${part.id}`;
      tab.title = part.title;

      // Check if current topic belongs to this part
      const currTopic = window.CALCULUS_TOPICS[this.currentTopicIndex];
      if (currTopic && currTopic.partId === part.id && this.currentView === 'topic') {
        tab.classList.add('active');
      }

      tab.addEventListener('click', () => {
        // Jump to first unlocked topic of this part
        const firstTopicId = part.topicIds[0];
        const targetIndex = firstTopicId - 1;
        if (this.isTopicUnlocked(targetIndex)) {
          this.showTopic(targetIndex);
          this.playSound('scratch');
        } else {
          alert(`Please complete earlier chapters first to unlock ${part.title}! (Or enable Teacher Mode to explore freely).`);
        }
      });
      tabsCol.appendChild(tab);
    });

    // Lab Tab
    const labTab = document.createElement('div');
    labTab.className = 'notebook-tab tab-lab';
    labTab.textContent = '📐 Lab';
    labTab.title = 'Interactive Graphing & Tangent Sandbox';
    if (this.currentView === 'lab') labTab.classList.add('active');
    labTab.addEventListener('click', () => {
      this.showLab();
      this.playSound('scratch');
    });
    tabsCol.appendChild(labTab);
  },

  renderTOC() {
    const tocContainer = document.getElementById('toc-list-container');
    if (!tocContainer) return;
    tocContainer.innerHTML = '';

    const parts = window.CALCULUS_PARTS || [];
    const topics = window.CALCULUS_TOPICS || [];

    parts.forEach(part => {
      const partSection = document.createElement('div');
      partSection.style.marginBottom = '20px';

      const partHeader = document.createElement('div');
      partHeader.style.fontFamily = 'var(--font-heading)';
      partHeader.style.fontSize = '18px';
      partHeader.style.fontWeight = 'bold';
      partHeader.style.color = part.color || '#1e293b';
      partHeader.style.borderBottom = '1.5px solid #cbd5e1';
      partHeader.style.paddingBottom = '4px';
      partHeader.style.marginBottom = '8px';
      partHeader.textContent = part.shortTitle;
      partSection.appendChild(partHeader);

      part.topicIds.forEach(topicId => {
        const index = topicId - 1;
        const topic = topics[index];
        if (!topic) return;

        const isUnlocked = this.isTopicUnlocked(index);
        const isCompleted = this.completedTopicIndices.includes(index);
        const isCurrent = this.currentTopicIndex === index && this.currentView === 'topic';

        const item = document.createElement('div');
        item.style.padding = '6px 10px';
        item.style.borderRadius = '6px';
        item.style.fontSize = '17px';
        item.style.cursor = isUnlocked ? 'pointer' : 'not-allowed';
        item.style.opacity = isUnlocked ? '1' : '0.45';
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'space-between';
        item.style.marginBottom = '4px';
        if (isCurrent) item.style.background = '#fef9c3';

        const titleSpan = document.createElement('span');
        titleSpan.textContent = `${topic.number}. ${topic.title}`;
        item.appendChild(titleSpan);

        const statusSpan = document.createElement('span');
        if (isCompleted) {
          statusSpan.textContent = '⭐';
        } else if (isUnlocked) {
          statusSpan.textContent = '📖';
        } else {
          statusSpan.textContent = '🔒';
        }
        item.appendChild(statusSpan);

        if (isUnlocked) {
          item.addEventListener('click', () => {
            this.showTopic(index);
            document.getElementById('toc-drawer').classList.remove('open');
            document.getElementById('toc-backdrop').classList.remove('open');
            this.playSound('scratch');
          });
        }
        partSection.appendChild(item);
      });

      // Add Quiz link for this part
      const quizItem = document.createElement('div');
      quizItem.style.padding = '4px 10px';
      quizItem.style.fontSize = '16px';
      quizItem.style.fontFamily = 'var(--font-heading)';
      quizItem.style.color = '#dc2626';
      quizItem.style.cursor = 'pointer';
      quizItem.textContent = `📝 Part ${part.id} Checkpoint Quiz`;
      quizItem.addEventListener('click', () => {
        this.showQuiz(part.id);
        document.getElementById('toc-drawer').classList.remove('open');
        document.getElementById('toc-backdrop').classList.remove('open');
        this.playSound('scratch');
      });
      partSection.appendChild(quizItem);

      tocContainer.appendChild(partSection);
    });
  },

  isTopicUnlocked(index) {
    if (this.teacherMode) return true;
    return this.unlockedTopicIndices.includes(index);
  },
  showTopic(index) {
    if (index < 0 || index >= window.CALCULUS_TOPICS.length) return;
    this.currentTopicIndex = index;
    this.currentView = 'topic';
    const topic = window.CALCULUS_TOPICS[index];
    const container = document.getElementById('notebook-content');
    if (!container) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const isCompleted = this.completedTopicIndices.includes(index);
    const hasNext = index + 1 < window.CALCULUS_TOPICS.length;
    const hasPrev = index > 0;

    container.innerHTML = `
      <div class="topic-card">
        <div class="notebook-top-bar">
          <div style="display:flex; gap:8px;">
            <button id="prev-topic-btn" class="notebook-nav-btn" ${!hasPrev ? 'disabled' : ''}>← Previous</button>
            <button id="next-topic-btn" class="notebook-nav-btn" ${!hasNext ? 'disabled' : ''}>Next →</button>
          </div>
          <div>
            <span class="topic-header-tag">Topic ${topic.number} of 25 • ${topic.tag}</span>
          </div>
        </div>

        <h1 class="topic-main-title">${topic.title}</h1>
        <div class="topic-subtitle">${topic.subtitle}</div>

        <!-- 1. Teacher's Plain-English Intuition -->
        <div class="intuition-box">
          <div class="intuition-badge">💡 Prof. Alex's Intuitive Story:</div>
          <div class="intuition-text">${topic.intuition}</div>
        </div>

        <!-- 2. Hand-Boxed Formal Formula -->
        <div class="hand-boxed-formula">
          <div class="hand-boxed-title">📐 ${topic.formulaTitle}</div>
          <div class="formula-display">$$${topic.formulaLatex}$$</div>
          <div class="formula-note">${topic.formulaNote}</div>
        </div>

        <!-- 3. Sketched Rough.js Diagram -->
        <div class="diagram-container">
          <div id="rough-diagram-box"></div>
          <div class="diagram-caption">✎ ${topic.diagramCaption}</div>
        </div>

        <!-- 4. Fully Worked Step-by-Step Example -->
        <div class="worked-example-card">
          <div class="example-title-badge">Step-by-Step Worked Example</div>
          <div class="example-problem-text">Problem: ${topic.example.problem}</div>
          <div class="example-steps-list">
            ${topic.example.steps.map(s => `
              <div class="example-step-item">
                <div class="step-label">${s.step}</div>
                <div class="step-math">$$${s.math}$$</div>
                <div class="step-explanation">↳ Note: ${s.explanation}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 5. Common Mistake Sticky Note -->
        <div class="sticky-note">
          <div class="sticky-tape"></div>
          <div class="sticky-note-title">⚠️ Common Trap: ${topic.commonMistake.title}</div>
          <div class="sticky-note-body">${topic.commonMistake.note}</div>
        </div>

        <!-- 6. Try It Yourself Practice Problem -->
        <div class="practice-card">
          <div class="practice-badge">Try It Yourself!</div>
          <div class="practice-question">${topic.practice.question}</div>
          <button id="hint-toggle-btn" class="practice-hint-toggle">💡 Need a hint?</button>
          <div id="hint-box" class="practice-hint-box">${topic.practice.hint}</div>
          <div>
            <button id="reveal-sol-btn" class="reveal-solution-btn">👁️ Reveal Step-by-Step Solution</button>
            <div id="solution-container" class="solution-steps-container">
              ${topic.practice.solutionSteps.map(step => `
                <div class="solution-step-line">✔ ${step}</div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Section Torn Divider -->
        <div class="torn-paper-divider">
          <span class="torn-paper-label">--- End of Lesson ${topic.number} ---</span>
        </div>

        <!-- Footer Actions -->
        <div class="topic-footer-actions">
          <button id="mark-understood-btn" class="mark-understood-btn ${isCompleted ? 'completed' : ''}">
            ${isCompleted ? '⭐ Mastered! (Re-read)' : '✏️ Mark Understood & Unlock Next Topic'}
          </button>
          <button id="open-lab-btn" class="notebook-nav-btn">🔬 Open Graphing Lab</button>
        </div>
      </div>
    `;

    // Render MathJax / KaTeX
    this.renderMath(container);

    // Render Sketched Rough.js Diagram
    const diagBox = document.getElementById('rough-diagram-box');
    if (diagBox && window.RoughDiagrams) {
      window.RoughDiagrams.render(topic.diagramType, diagBox);
    }

    // Attach event listeners for this topic view
    document.getElementById('prev-topic-btn')?.addEventListener('click', () => {
      this.showTopic(index - 1);
      this.playSound('scratch');
    });

    document.getElementById('next-topic-btn')?.addEventListener('click', () => {
      if (this.isTopicUnlocked(index + 1)) {
        this.showTopic(index + 1);
        this.playSound('scratch');
      } else {
        alert('Please click "Mark Understood" to unlock the next chapter!');
      }
    });

    document.getElementById('hint-toggle-btn')?.addEventListener('click', () => {
      const hintBox = document.getElementById('hint-box');
      if (hintBox) {
        hintBox.style.display = hintBox.style.display === 'block' ? 'none' : 'block';
      }
    });

    document.getElementById('reveal-sol-btn')?.addEventListener('click', () => {
      const sol = document.getElementById('solution-container');
      if (sol) {
        const isOpen = sol.style.display === 'block';
        sol.style.display = isOpen ? 'none' : 'block';
        document.getElementById('reveal-sol-btn').textContent = isOpen ? '👁️ Reveal Step-by-Step Solution' : '🙈 Hide Solution';
        if (!isOpen) this.renderMath(sol);
      }
    });

    document.getElementById('open-lab-btn')?.addEventListener('click', () => {
      this.showLab();
      this.playSound('scratch');
    });

    document.getElementById('mark-understood-btn')?.addEventListener('click', () => {
      this.handleMarkUnderstood(index);
    });

    this.updateProgressUI();
    this.renderTabs();
    this.renderTOC();
  },

  handleMarkUnderstood(index) {
    if (!this.completedTopicIndices.includes(index)) {
      this.completedTopicIndices.push(index);
    }
    const nextIndex = index + 1;
    if (nextIndex < window.CALCULUS_TOPICS.length && !this.unlockedTopicIndices.includes(nextIndex)) {
      this.unlockedTopicIndices.push(nextIndex);
    }
    this.saveState();
    this.playSound('chime');

    const btn = document.getElementById('mark-understood-btn');
    if (btn) {
      btn.className = 'mark-understood-btn completed';
      btn.innerHTML = '⭐ Mastered! Moving to next topic...';
    }

    if (window.confetti) {
      window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    }

    setTimeout(() => {
      // Check if this topic ended a Part
      const currentTopic = window.CALCULUS_TOPICS[index];
      const nextTopic = window.CALCULUS_TOPICS[nextIndex];
      if (nextTopic && nextTopic.partId !== currentTopic.partId) {
        // Invite to Quiz
        if (confirm(`Congratulations! You just finished ${currentTopic.tag}!\n\nWould you like to take the Part ${currentTopic.partId} Checkpoint Quiz to test your skills?`)) {
          this.showQuiz(currentTopic.partId);
          return;
        }
      }

      if (nextIndex < window.CALCULUS_TOPICS.length) {
        this.showTopic(nextIndex);
      } else {
        alert("🎓 INCREDIBLE! You have completed all 25 topics in the Calculus Notebook! You are now a Calculus graduate!");
      }
    }, 600);
  },
  renderMath(element) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(element, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX rendering error:', e);
      }
    } else {
      setTimeout(() => this.renderMath(element), 200);
    }
  },

  updateProgressUI() {
    const total = window.CALCULUS_TOPICS.length || 25;
    const completed = this.completedTopicIndices.length;
    const pct = Math.min(100, Math.max(4, Math.round((completed / total) * 100)));

    const fillBar = document.getElementById('pencil-progress-fill');
    if (fillBar) fillBar.style.width = `${pct}%`;

    const label = document.getElementById('progress-text-label');
    if (label) label.textContent = `${completed} of ${total} Topics Mastered (${pct}%)`;
  },

  showLab() {
    this.currentView = 'lab';
    const container = document.getElementById('notebook-content');
    if (!container) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    container.innerHTML = `
      <div class="topic-card">
        <div class="notebook-top-bar">
          <button id="back-to-topic-btn" class="notebook-nav-btn">← Back to Lesson</button>
          <span class="topic-header-tag">Interactive Sandbox</span>
        </div>
        <h1 class="topic-main-title">📐 The Calculus Graphing & Tangent Sandbox</h1>
        <div class="topic-subtitle">Test any function, drag contact points, explore limits, and watch Riemann rectangles converge!</div>

        <div id="interactive-grapher-slot"></div>

        <div class="torn-paper-divider">
          <span class="torn-paper-label">--- End of Sandbox Lab ---</span>
        </div>
      </div>
    `;

    document.getElementById('back-to-topic-btn')?.addEventListener('click', () => {
      this.showTopic(this.currentTopicIndex);
      this.playSound('scratch');
    });

    if (window.CalculusGrapher) {
      window.CalculusGrapher.init('interactive-grapher-slot');
    }
    this.renderTabs();
  },

  showQuiz(partId) {
    this.currentView = 'quiz';
    this.currentQuizPartId = partId;
    const container = document.getElementById('notebook-content');
    if (!container) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const quizData = (window.CALCULUS_QUIZZES || []).find(q => q.partId === partId);
    if (!quizData) {
      alert("Quiz not found for this part.");
      this.showTopic(this.currentTopicIndex);
      return;
    }

    container.innerHTML = `
      <div class="quiz-container-card">
        <div class="notebook-top-bar">
          <button id="quiz-back-btn" class="notebook-nav-btn">← Back to Lessons</button>
          <span class="quiz-header-badge">Part ${partId} Checkpoint Test</span>
        </div>

        <h1 class="quiz-title">📝 ${quizData.title}</h1>
        <div style="font-size:20px; color:#64748b; margin-bottom:24px;">${quizData.description}</div>

        <form id="quiz-form">
          ${quizData.questions.map((q, qIndex) => `
            <div class="quiz-question-block" id="q-block-${qIndex}">
              <div class="quiz-q-text">${qIndex + 1}. ${q.question}</div>
              <div class="quiz-options-list">
                ${q.options.map((opt, optIdx) => `
                  <label class="quiz-option-label" id="label-${qIndex}-${optIdx}">
                    <input type="radio" name="question_${qIndex}" value="${optIdx}" style="transform:scale(1.2);" />
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
              <div class="quiz-explanation-box" id="explanation-${qIndex}"></div>
            </div>
          `).join('')}

          <div style="margin-top:24px; display:flex; gap:16px; align-items:center;">
            <button type="button" id="grade-quiz-btn" class="mark-understood-btn">
              ✍️ Grade My Quiz (Red Pen Check)
            </button>
            <div id="quiz-score-badge" style="font-family:var(--font-heading); font-size:22px; font-weight:bold;"></div>
          </div>
        </form>
      </div>
    `;

    this.renderMath(container);

    document.getElementById('quiz-back-btn')?.addEventListener('click', () => {
      this.showTopic(this.currentTopicIndex);
      this.playSound('scratch');
    });

    document.getElementById('grade-quiz-btn')?.addEventListener('click', () => {
      this.gradeQuiz(quizData);
    });

    this.renderTabs();
  },

  gradeQuiz(quizData) {
    let score = 0;
    const total = quizData.questions.length;

    quizData.questions.forEach((q, qIdx) => {
      const selected = document.querySelector(`input[name="question_${qIdx}"]:checked`);
      const expBox = document.getElementById(`explanation-${qIdx}`);
      const correctIdx = q.correctIndex;

      // Reset styles
      q.options.forEach((_, optIdx) => {
        const lbl = document.getElementById(`label-${qIdx}-${optIdx}`);
        if (lbl) {
          lbl.classList.remove('selected', 'correct', 'incorrect');
        }
      });

      const correctLbl = document.getElementById(`label-${qIdx}-${correctIdx}`);
      if (correctLbl) correctLbl.classList.add('correct');

      if (selected) {
        const userChoice = parseInt(selected.value, 10);
        if (userChoice === correctIdx) {
          score++;
        } else {
          const wrongLbl = document.getElementById(`label-${qIdx}-${userChoice}`);
          if (wrongLbl) wrongLbl.classList.add('incorrect');
        }
      }

      if (expBox) {
        expBox.style.display = 'block';
        expBox.innerHTML = `<strong>Teacher Note:</strong> ${q.explanation}`;
        this.renderMath(expBox);
      }
    });

    const badge = document.getElementById('quiz-score-badge');
    if (badge) {
      const pct = Math.round((score / total) * 100);
      if (pct >= 75) {
        badge.style.color = '#15803d';
        badge.innerHTML = `⭐ Score: ${score} / ${total} (${pct}%) — Excellent! Passed!`;
        this.playSound('chime');
        if (window.confetti) {
          window.confetti({ particleCount: 70, spread: 80, origin: { y: 0.7 } });
        }
      } else {
        badge.style.color = '#dc2626';
        badge.innerHTML = `⚠️ Score: ${score} / ${total} (${pct}%) — Review teacher notes and try again!`;
        this.playSound('scratch');
      }
    }
  }
};

// Bootstrap application on window load
window.addEventListener('DOMContentLoaded', () => {
  window.CalculusApp.init();
});
