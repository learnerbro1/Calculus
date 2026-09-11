/**
 * Interactive Grapher & Calculus Sandbox
 * Features:
 * - Real-time function plotting with sketchy notebook aesthetics
 * - Draggable / slider contact point (x0, f(x0))
 * - Tangent line with live instantaneous slope calculation
 * - Secant line limit animation (h -> 0)
 * - Riemann Sums rectangle visualizer with adjustable n and method (Left, Right, Midpoint)
 */

window.CalculusGrapher = {
  canvas: null,
  ctx: null,
  currentPreset: 'x2',
  customExpr: 'x^2',
  x0: 1.0,
  h: 0.8,
  riemannN: 6,
  riemannMethod: 'midpoint',
  mode: 'tangent', // 'tangent', 'secant', 'riemann'
  xRange: [-3.5, 3.5],
  yRange: [-2.5, 8.5],
  width: 600,
  height: 380,

  init(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="grapher-card">
        <div class="grapher-header">
          <div class="grapher-title">
            <span class="pencil-icon">✏️</span>
            <strong>The Interactive Calculus Lab: Slopes & Areas Sandbox</strong>
          </div>
          <div class="grapher-mode-pills">
            <button class="pill-btn active" data-mode="tangent">Tangent & Slope</button>
            <button class="pill-btn" data-mode="secant">Secant Limit (h → 0)</button>
            <button class="pill-btn" data-mode="riemann">Riemann Rectangles</button>
          </div>
        </div>

        <div class="grapher-controls-bar">
          <div class="control-group">
            <label>Function:</label>
            <select id="grapher-func-select" class="notebook-select">
              <option value="x2">f(x) = x² (Parabola)</option>
              <option value="cubic">f(x) = x³ - 3x (Cubic Curve)</option>
              <option value="sin">f(x) = sin(x) (Wave)</option>
              <option value="exp">f(x) = eˣ (Exponential)</option>
              <option value="inv">f(x) = 1/x (Hyperbola)</option>
              <option value="custom">Custom Input ✎</option>
            </select>
          </div>

          <div class="control-group" id="custom-input-group" style="display:none;">
            <label>f(x) =</label>
            <input type="text" id="custom-func-input" class="notebook-input" value="x^2 - 2*x" placeholder="e.g. x^3 - 2*x" />
            <button id="custom-func-btn" class="notebook-btn small">Plot</button>
          </div>

          <div class="control-group" id="point-control-group">
            <label>Point x₀: <span id="x0-val" class="hand-num">1.0</span></label>
            <input type="range" id="x0-slider" min="-3" max="3" step="0.05" value="1.0" class="notebook-slider" />
          </div>

          <div class="control-group" id="secant-control-group" style="display:none;">
            <label>Step h: <span id="h-val" class="hand-num">0.80</span></label>
            <input type="range" id="h-slider" min="0.02" max="2.0" step="0.02" value="0.80" class="notebook-slider" />
          </div>

          <div class="control-group" id="riemann-control-group" style="display:none;">
            <label>Subintervals n: <span id="n-val" class="hand-num">6</span></label>
            <input type="range" id="n-slider" min="2" max="30" step="1" value="6" class="notebook-slider" />
            <div class="method-toggle">
              <button class="method-btn active" data-method="midpoint">Mid</button>
              <button class="method-btn" data-method="left">Left</button>
              <button class="method-btn" data-method="right">Right</button>
            </div>
          </div>
        </div>

        <div class="grapher-canvas-wrapper">
          <canvas id="grapher-canvas" width="600" height="380"></canvas>
          <div class="grapher-overlay-stats" id="grapher-stats"></div>
        </div>
      </div>
    `;

    this.canvas = document.getElementById('grapher-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.bindEvents();
    this.updateRangesForPreset();
    this.render();
  },
  bindEvents() {
    // Mode Pills
    document.querySelectorAll('.grapher-mode-pills .pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.grapher-mode-pills .pill-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.mode = e.target.getAttribute('data-mode');
        this.updateControlVisibility();
        this.render();
      });
    });

    // Preset Function Select
    const select = document.getElementById('grapher-func-select');
    select.addEventListener('change', (e) => {
      this.currentPreset = e.target.value;
      const customGroup = document.getElementById('custom-input-group');
      if (this.currentPreset === 'custom') {
        customGroup.style.display = 'flex';
      } else {
        customGroup.style.display = 'none';
      }
      this.updateRangesForPreset();
      this.render();
    });

    // Custom Input
    document.getElementById('custom-func-btn')?.addEventListener('click', () => {
      const input = document.getElementById('custom-func-input');
      this.customExpr = input.value;
      this.render();
    });

    // Slider x0
    const x0Slider = document.getElementById('x0-slider');
    x0Slider.addEventListener('input', (e) => {
      this.x0 = parseFloat(e.target.value);
      document.getElementById('x0-val').textContent = this.x0.toFixed(2);
      this.render();
    });

    // Slider h (Secant)
    const hSlider = document.getElementById('h-slider');
    hSlider.addEventListener('input', (e) => {
      this.h = parseFloat(e.target.value);
      document.getElementById('h-val').textContent = this.h.toFixed(2);
      this.render();
    });

    // Slider n (Riemann)
    const nSlider = document.getElementById('n-slider');
    nSlider.addEventListener('input', (e) => {
      this.riemannN = parseInt(e.target.value, 10);
      document.getElementById('n-val').textContent = this.riemannN;
      this.render();
    });

    // Riemann Method buttons
    document.querySelectorAll('.method-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.riemannMethod = e.target.getAttribute('data-method');
        this.render();
      });
    });

    // Mouse drag on canvas to change x0
    let isDragging = false;
    this.canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      this.handlePointer(e);
    });
    window.addEventListener('mousemove', (e) => {
      if (isDragging) this.handlePointer(e);
    });
    window.addEventListener('mouseup', () => { isDragging = false; });
  },

  handlePointer(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mathX = this.pixelToMathX(mouseX);
    if (mathX >= this.xRange[0] && mathX <= this.xRange[1]) {
      this.x0 = Math.max(this.xRange[0], Math.min(this.xRange[1], mathX));
      const slider = document.getElementById('x0-slider');
      if (slider) slider.value = this.x0;
      const numSpan = document.getElementById('x0-val');
      if (numSpan) numSpan.textContent = this.x0.toFixed(2);
      this.render();
    }
  },

  updateControlVisibility() {
    const pointGroup = document.getElementById('point-control-group');
    const secantGroup = document.getElementById('secant-control-group');
    const riemannGroup = document.getElementById('riemann-control-group');

    if (this.mode === 'tangent') {
      pointGroup.style.display = 'flex';
      secantGroup.style.display = 'none';
      riemannGroup.style.display = 'none';
    } else if (this.mode === 'secant') {
      pointGroup.style.display = 'flex';
      secantGroup.style.display = 'flex';
      riemannGroup.style.display = 'none';
    } else if (this.mode === 'riemann') {
      pointGroup.style.display = 'none';
      secantGroup.style.display = 'none';
      riemannGroup.style.display = 'flex';
    }
  },

  updateRangesForPreset() {
    if (this.currentPreset === 'x2') {
      this.xRange = [-3, 3];
      this.yRange = [-1, 9];
    } else if (this.currentPreset === 'cubic') {
      this.xRange = [-3, 3];
      this.yRange = [-4, 4];
    } else if (this.currentPreset === 'sin') {
      this.xRange = [-4, 4];
      this.yRange = [-2, 2];
    } else if (this.currentPreset === 'exp') {
      this.xRange = [-3, 2.5];
      this.yRange = [-1, 8];
    } else if (this.currentPreset === 'inv') {
      this.xRange = [-4, 4];
      this.yRange = [-4, 4];
    }
  },
  evaluateF(x) {
    if (this.currentPreset === 'x2') return x * x;
    if (this.currentPreset === 'cubic') return x * x * x - 3 * x;
    if (this.currentPreset === 'sin') return Math.sin(x);
    if (this.currentPreset === 'exp') return Math.exp(x);
    if (this.currentPreset === 'inv') return x !== 0 ? 1 / x : NaN;

    // Custom
    try {
      let code = this.customExpr
        .replace(/\^/g, '**')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/exp/g, 'Math.exp')
        .replace(/ln/g, 'Math.log')
        .replace(/sqrt/g, 'Math.sqrt');
      const fn = new Function('x', `return ${code};`);
      return fn(x);
    } catch (e) {
      return NaN;
    }
  },

  evaluateDerivative(x) {
    if (this.currentPreset === 'x2') return 2 * x;
    if (this.currentPreset === 'cubic') return 3 * x * x - 3;
    if (this.currentPreset === 'sin') return Math.cos(x);
    if (this.currentPreset === 'exp') return Math.exp(x);
    if (this.currentPreset === 'inv') return -1 / (x * x);

    // Numerical central difference fallback
    const dx = 1e-5;
    return (this.evaluateF(x + dx) - this.evaluateF(x - dx)) / (2 * dx);
  },

  mathToPixelX(x) {
    const [minX, maxX] = this.xRange;
    return ((x - minX) / (maxX - minX)) * this.width;
  },

  mathToPixelY(y) {
    const [minY, maxY] = this.yRange;
    return this.height - ((y - minY) / (maxY - minY)) * this.height;
  },

  pixelToMathX(px) {
    const [minX, maxX] = this.xRange;
    return minX + (px / this.width) * (maxX - minX);
  },

  pixelToMathY(py) {
    const [minY, maxY] = this.yRange;
    return minY + ((this.height - py) / this.height) * (maxY - minY);
  },
  render() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw notebook graph paper background
    ctx.fillStyle = '#fdfbf7';
    ctx.fillRect(0, 0, this.width, this.height);

    // Faint grid lines
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    for (let x = Math.ceil(this.xRange[0]); x <= Math.floor(this.xRange[1]); x++) {
      const px = this.mathToPixelX(x);
      ctx.beginPath();
      ctx.moveTo(px, 0);
      ctx.lineTo(px, this.height);
      ctx.stroke();
    }
    for (let y = Math.ceil(this.yRange[0]); y <= Math.floor(this.yRange[1]); y++) {
      const py = this.mathToPixelY(y);
      ctx.beginPath();
      ctx.moveTo(0, py);
      ctx.lineTo(this.width, py);
      ctx.stroke();
    }

    // 2. Axes (x=0 and y=0)
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    const y0 = this.mathToPixelY(0);
    const x0 = this.mathToPixelX(0);

    // X axis
    ctx.beginPath();
    ctx.moveTo(0, y0);
    ctx.lineTo(this.width, y0);
    ctx.stroke();

    // Y axis
    ctx.beginPath();
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, this.height);
    ctx.stroke();

    // Axis tick labels
    ctx.fillStyle = '#64748b';
    ctx.font = "14px 'Patrick Hand', cursive";
    for (let x = Math.ceil(this.xRange[0]); x <= Math.floor(this.xRange[1]); x++) {
      if (x === 0) continue;
      const px = this.mathToPixelX(x);
      ctx.fillText(x.toString(), px - 5, y0 + 16);
    }
    for (let y = Math.ceil(this.yRange[0]); y <= Math.floor(this.yRange[1]); y++) {
      if (y === 0) continue;
      const py = this.mathToPixelY(y);
      ctx.fillText(y.toString(), x0 + 6, py + 4);
    }

    // 3. Draw Riemann Rectangles if in Riemann Mode
    if (this.mode === 'riemann') {
      this.drawRiemannRectangles(ctx);
    }

    // 4. Draw Main Function Curve
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 3.5;
    ctx.lineJoin = 'round';
    ctx.beginPath();

    let started = false;
    const stepPx = 2;
    for (let px = 0; px <= this.width; px += stepPx) {
      const mx = this.pixelToMathX(px);
      const my = this.evaluateF(mx);
      if (isNaN(my) || !isFinite(my) || my < this.yRange[0] - 10 || my > this.yRange[1] + 10) {
        started = false;
        continue;
      }
      const py = this.mathToPixelY(my);
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.stroke();

    // 5. Draw Tangent or Secant Line
    if (this.mode === 'tangent') {
      this.drawTangent(ctx);
    } else if (this.mode === 'secant') {
      this.drawSecant(ctx);
    }

    this.updateStats();
  },

  drawTangent(ctx) {
    const x0 = this.x0;
    const y0 = this.evaluateF(x0);
    const m = this.evaluateDerivative(x0);

    // Tangent Line
    const xLeft = this.xRange[0];
    const yLeft = y0 + m * (xLeft - x0);
    const xRight = this.xRange[1];
    const yRight = y0 + m * (xRight - x0);

    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([6, 3]);
    ctx.beginPath();
    ctx.moveTo(this.mathToPixelX(xLeft), this.mathToPixelY(yLeft));
    ctx.lineTo(this.mathToPixelX(xRight), this.mathToPixelY(yRight));
    ctx.stroke();
    ctx.setLineDash([]);

    // Contact Point
    const px = this.mathToPixelX(x0);
    const py = this.mathToPixelY(y0);
    ctx.fillStyle = '#fef08a';
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(px, py, 7, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  },

  drawSecant(ctx) {
    const x0 = this.x0;
    const x1 = x0 + this.h;
    const y0 = this.evaluateF(x0);
    const y1 = this.evaluateF(x1);
    const mSec = (y1 - y0) / this.h;

    // Secant Line
    const xLeft = this.xRange[0];
    const yLeft = y0 + mSec * (xLeft - x0);
    const xRight = this.xRange[1];
    const yRight = y0 + mSec * (xRight - x0);

    ctx.strokeStyle = '#ea580c';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(this.mathToPixelX(xLeft), this.mathToPixelY(yLeft));
    ctx.lineTo(this.mathToPixelX(xRight), this.mathToPixelY(yRight));
    ctx.stroke();

    // Two contact points
    const px0 = this.mathToPixelX(x0);
    const py0 = this.mathToPixelY(y0);
    const px1 = this.mathToPixelX(x1);
    const py1 = this.mathToPixelY(y1);

    ctx.fillStyle = '#16a34a';
    ctx.beginPath(); ctx.arc(px0, py0, 6, 0, 2 * Math.PI); ctx.fill();

    ctx.fillStyle = '#ea580c';
    ctx.beginPath(); ctx.arc(px1, py1, 6, 0, 2 * Math.PI); ctx.fill();
  },

  drawRiemannRectangles(ctx) {
    const a = 0;
    const b = 2.5;
    const n = this.riemannN;
    const dx = (b - a) / n;

    ctx.fillStyle = 'rgba(254, 240, 138, 0.45)';
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 1.5;

    for (let i = 0; i < n; i++) {
      const leftX = a + i * dx;
      const rightX = leftX + dx;
      let sampleX;
      if (this.riemannMethod === 'left') sampleX = leftX;
      else if (this.riemannMethod === 'right') sampleX = rightX;
      else sampleX = (leftX + rightX) / 2; // midpoint

      const sampleY = Math.max(0, this.evaluateF(sampleX));
      const px = this.mathToPixelX(leftX);
      const pw = this.mathToPixelX(rightX) - px;
      const py = this.mathToPixelY(sampleY);
      const pBase = this.mathToPixelY(0);
      const ph = pBase - py;

      ctx.fillRect(px, py, pw, ph);
      ctx.strokeRect(px, py, pw, ph);
    }
  },

  updateStats() {
    const stats = document.getElementById('grapher-stats');
    if (!stats) return;

    if (this.mode === 'tangent') {
      const x0 = this.x0;
      const y0 = this.evaluateF(x0);
      const m = this.evaluateDerivative(x0);
      stats.innerHTML = `
        <div class="stat-pill"><strong>Point (x₀, y₀):</strong> (${x0.toFixed(2)}, ${y0.toFixed(2)})</div>
        <div class="stat-pill"><strong>Slope m = f'(x₀):</strong> <span class="highlight-red">${m.toFixed(2)}</span></div>
        <div class="stat-pill"><strong>Tangent Line:</strong> y - ${y0.toFixed(2)} = ${m.toFixed(2)}(x - ${x0.toFixed(2)})</div>
      `;
    } else if (this.mode === 'secant') {
      const x0 = this.x0;
      const x1 = x0 + this.h;
      const y0 = this.evaluateF(x0);
      const y1 = this.evaluateF(x1);
      const mSec = (y1 - y0) / this.h;
      const mTrue = this.evaluateDerivative(x0);
      stats.innerHTML = `
        <div class="stat-pill"><strong>Secant Slope (Δy/Δx):</strong> <span class="highlight-orange">${mSec.toFixed(3)}</span></div>
        <div class="stat-pill"><strong>True Tangent (h → 0):</strong> <span class="highlight-red">${mTrue.toFixed(3)}</span></div>
        <div class="stat-pill"><strong>Difference:</strong> ${Math.abs(mSec - mTrue).toFixed(4)}</div>
      `;
    } else if (this.mode === 'riemann') {
      const a = 0, b = 2.5;
      const n = this.riemannN;
      const dx = (b - a) / n;
      let sum = 0;
      for (let i = 0; i < n; i++) {
        let sx = a + (i + 0.5) * dx;
        if (this.riemannMethod === 'left') sx = a + i * dx;
        if (this.riemannMethod === 'right') sx = a + (i + 1) * dx;
        sum += this.evaluateF(sx) * dx;
      }
      stats.innerHTML = `
        <div class="stat-pill"><strong>Interval:</strong> [0, 2.5] (dx = ${dx.toFixed(3)})</div>
        <div class="stat-pill"><strong>Riemann Area (n = ${n}):</strong> <span class="highlight-yellow">${sum.toFixed(3)}</span></div>
        <div class="stat-pill"><strong>Method:</strong> ${this.riemannMethod.toUpperCase()}</div>
      `;
    }
  }
};
