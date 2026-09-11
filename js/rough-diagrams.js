/**
 * Rough.js Hand-Drawn Diagram Engine for Calculus Notebook
 * Sketched SVG diagrams with organic wobbly lines, handwritten labels, and arrows.
 */
window.RoughDiagrams = {
  initSvg(container, width = 560, height = 280) {
    container.innerHTML = '';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.maxWidth = `${width}px`;
    svg.style.maxHeight = `${height}px`;
    svg.style.display = 'block';
    svg.style.margin = '0 auto';
    svg.style.overflow = 'visible';
    container.appendChild(svg);
    return { svg, width, height };
  },

  addText(svg, text, x, y, options = {}) {
    const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textEl.setAttribute('x', x);
    textEl.setAttribute('y', y);
    textEl.setAttribute('font-family', options.font || "'Comic Neue', 'Patrick Hand', sans-serif");
    textEl.setAttribute('font-size', options.size || '18px');
    textEl.setAttribute('font-weight', options.weight || 'bold');
    textEl.setAttribute('fill', options.color || '#1e293b');
    textEl.setAttribute('text-anchor', options.anchor || 'start');
    if (options.rotate) {
      textEl.setAttribute('transform', `rotate(${options.rotate} ${x} ${y})`);
    }
    textEl.textContent = text;
    svg.appendChild(textEl);
    return textEl;
  },

  addArrow(rc, svg, x1, y1, x2, y2, color = '#1e293b', strokeWidth = 2) {
    svg.appendChild(rc.line(x1, y1, x2, y2, { stroke: color, strokeWidth, roughness: 1.5 }));
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const arrowLength = 12;
    const xA = x2 - arrowLength * Math.cos(angle - Math.PI / 6);
    const yA = y2 - arrowLength * Math.sin(angle - Math.PI / 6);
    const xB = x2 - arrowLength * Math.cos(angle + Math.PI / 6);
    const yB = y2 - arrowLength * Math.sin(angle + Math.PI / 6);
    svg.appendChild(rc.line(x2, y2, xA, yA, { stroke: color, strokeWidth, roughness: 1.2 }));
    svg.appendChild(rc.line(x2, y2, xB, yB, { stroke: color, strokeWidth, roughness: 1.2 }));
  },

  createFallbackRc(svg) {
    return {
      line: (x1, y1, x2, y2, opts = {}) => {
        const el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        el.setAttribute('x1', x1); el.setAttribute('y1', y1);
        el.setAttribute('x2', x2); el.setAttribute('y2', y2);
        el.setAttribute('stroke', opts.stroke || '#1e293b');
        el.setAttribute('stroke-width', opts.strokeWidth || 2);
        return el;
      },
      rectangle: (x, y, w, h, opts = {}) => {
        const el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        el.setAttribute('x', x); el.setAttribute('y', y);
        el.setAttribute('width', w); el.setAttribute('height', h);
        el.setAttribute('stroke', opts.stroke || '#1e293b');
        el.setAttribute('fill', opts.fill || 'none');
        el.setAttribute('stroke-width', opts.strokeWidth || 2);
        return el;
      },
      circle: (cx, cy, d, opts = {}) => {
        const el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        el.setAttribute('cx', cx); el.setAttribute('cy', cy); el.setAttribute('r', d / 2);
        el.setAttribute('stroke', opts.stroke || '#1e293b');
        el.setAttribute('fill', opts.fill || 'none');
        el.setAttribute('stroke-width', opts.strokeWidth || 2);
        return el;
      },
      curve: (pts, opts = {}) => {
        const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ');
        el.setAttribute('d', d);
        el.setAttribute('stroke', opts.stroke || '#1e293b');
        el.setAttribute('fill', 'none');
        el.setAttribute('stroke-width', opts.strokeWidth || 2);
        return el;
      }
    };
  },

  render(type, container) {
    if (!container) return;
    const { svg, width, height } = this.initSvg(container);
    const rc = window.rough ? window.rough.svg(svg) : this.createFallbackRc(svg);

    switch (type) {
      case 'function_machine': this.renderFunctionMachine(rc, svg, width, height); break;
      case 'speedometer_trip': this.renderSpeedometer(rc, svg, width, height); break;
      case 'slope_triangle': this.renderSlopeTriangle(rc, svg, width, height); break;
      case 'curving_rollercoaster': this.renderRollerCoaster(rc, svg, width, height); break;
      case 'canyon_bridge': this.renderCanyonBridge(rc, svg, width, height); break;
      case 'limit_graph_jump': this.renderLimitGraphJump(rc, svg, width, height); break;
      case 'squeeze_sandwich': this.renderSqueezeSandwich(rc, svg, width, height); break;
      case 'pencil_continuity': this.renderPencilContinuity(rc, svg, width, height); break;
      case 'arrow_freeze': this.renderArrowFreeze(rc, svg, width, height); break;
      case 'first_principles_secant': this.renderFirstPrinciples(rc, svg, width, height); break;
      case 'tangent_kisses_curve': this.renderTangentKisses(rc, svg, width, height); break;
      case 'power_rule_geometry': this.renderPowerRule(rc, svg, width, height); break;
      case 'product_rectangle_chain_gears': this.renderProductAndChain(rc, svg, width, height); break;
      case 'trig_unit_circle_exp': this.renderTrigAndExp(rc, svg, width, height); break;
      case 'sliding_ladder_optimization': this.renderSlidingLadder(rc, svg, width, height); break;
      case 'curved_area_puzzle': this.renderCurvedAreaPuzzle(rc, svg, width, height); break;
      case 'riemann_rectangles_bars': this.renderRiemannBars(rc, svg, width, height); break;
      case 'integral_net_signed_area': this.renderNetSignedArea(rc, svg, width, height); break;
      case 'ftc_accumulator_showcase': this.renderFTCShowcase(rc, svg, width, height); break;
      case 'usub_and_byparts': this.renderUSubAndByParts(rc, svg, width, height); break;
      case 'volume_revolution_3d': this.renderVolumeRevolution(rc, svg, width, height); break;
      case 'geometric_series_chocolate': this.renderGeometricChocolate(rc, svg, width, height); break;
      case 'taylor_polynomials_hugging': this.renderTaylorPolynomials(rc, svg, width, height); break;
      case 'multivariable_hill_3d': this.renderMultivariableHill(rc, svg, width, height); break;
      case 'diff_eq_slope_field': this.renderSlopeField(rc, svg, width, height); break;
      default: this.renderDefaultGraph(rc, svg, width, height);
    }
  },
  // 1. Function Machine
  renderFunctionMachine(rc, svg, w, h) {
    svg.appendChild(rc.rectangle(180, 80, 200, 120, {
      fill: '#fef08a', fillStyle: 'solid', roughness: 1.8, stroke: '#1e293b', strokeWidth: 2.5
    }));
    this.addText(svg, "FUNCTION MACHINE [ f ]", 280, 125, { anchor: 'middle', size: '20px' });
    this.addText(svg, "Rule: Multiply by 15, subtract 120", 280, 155, { anchor: 'middle', size: '15px', color: '#4b5563' });

    this.addArrow(rc, svg, 60, 140, 175, 140, '#2563eb', 2.5);
    svg.appendChild(rc.rectangle(50, 115, 55, 50, { fill: '#fed7aa', stroke: '#9a3412', roughness: 1.5 }));
    this.addText(svg, "Input x", 77, 145, { anchor: 'middle', size: '16px', color: '#7c2d12' });
    this.addText(svg, "(Domain)", 77, 185, { anchor: 'middle', size: '14px', color: '#6b7280' });

    this.addArrow(rc, svg, 385, 140, 480, 140, '#16a34a', 2.5);
    svg.appendChild(rc.rectangle(485, 115, 55, 50, { fill: '#bbf7d0', stroke: '#166534', roughness: 1.5 }));
    this.addText(svg, "f(x)", 512, 145, { anchor: 'middle', size: '16px', color: '#14532d' });
    this.addText(svg, "(Range)", 512, 185, { anchor: 'middle', size: '14px', color: '#6b7280' });

    this.addText(svg, "⭐ Exactly ONE output for every input!", 280, 240, { anchor: 'middle', size: '18px', color: '#dc2626' });
  },

  // 2. Speedometer
  renderSpeedometer(rc, svg, w, h) {
    svg.appendChild(rc.line(60, 220, 260, 220, { stroke: '#1e293b', strokeWidth: 2 }));
    svg.appendChild(rc.line(60, 220, 60, 60, { stroke: '#1e293b', strokeWidth: 2 }));
    this.addText(svg, "Time t (hours)", 160, 245, { anchor: 'middle', size: '14px' });
    this.addText(svg, "Distance s (miles)", 45, 50, { anchor: 'start', size: '14px' });

    const tripPts = [[60, 220], [100, 200], [140, 170], [180, 110], [220, 90], [250, 70]];
    svg.appendChild(rc.curve(tripPts, { stroke: '#2563eb', strokeWidth: 3, roughness: 1.2 }));
    this.addText(svg, "Curving road trip", 160, 140, { size: '15px', color: '#2563eb' });

    svg.appendChild(rc.circle(410, 150, 160, { stroke: '#1e293b', strokeWidth: 2.5, fill: '#f8fafc' }));
    svg.appendChild(rc.line(410, 150, 440, 95, { stroke: '#dc2626', strokeWidth: 3.5, roughness: 1 }));
    svg.appendChild(rc.circle(410, 150, 12, { fill: '#1e293b', stroke: '#1e293b' }));
    this.addText(svg, "0", 350, 165, { size: '14px' });
    this.addText(svg, "60", 405, 80, { size: '15px', color: '#dc2626', weight: 'bold' });
    this.addText(svg, "120", 460, 165, { size: '14px' });
    this.addText(svg, "SPEEDOMETER: Instantaneous!", 410, 240, { anchor: 'middle', size: '17px', color: '#dc2626' });
  },

  // 3. Slope Triangle
  renderSlopeTriangle(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 230, 480, 230, { stroke: '#94a3b8', strokeWidth: 1.5 }));
    svg.appendChild(rc.line(100, 250, 100, 40, { stroke: '#94a3b8', strokeWidth: 1.5 }));
    svg.appendChild(rc.line(120, 210, 420, 70, { stroke: '#2563eb', strokeWidth: 3, roughness: 1.3 }));

    const p1 = [180, 182];
    const corner = [340, 182];
    const p2 = [340, 108];
    svg.appendChild(rc.line(p1[0], p1[1], corner[0], corner[1], { stroke: '#dc2626', strokeWidth: 2, strokeLineDash: [4, 4] }));
    svg.appendChild(rc.line(corner[0], corner[1], p2[0], p2[1], { stroke: '#16a34a', strokeWidth: 2, strokeLineDash: [4, 4] }));
    svg.appendChild(rc.rectangle(325, 167, 15, 15, { stroke: '#64748b', strokeWidth: 1.5 }));

    this.addText(svg, "Run: Δx = x₂ - x₁", 260, 205, { anchor: 'middle', size: '17px', color: '#dc2626' });
    this.addText(svg, "Rise: Δy = y₂ - y₁", 355, 150, { anchor: 'start', size: '17px', color: '#16a34a' });
    this.addText(svg, "Constant Slope m = Rise / Run", 280, 50, { anchor: 'middle', size: '20px', color: '#1e293b' });
  },

  // 4. Rollercoaster
  renderRollerCoaster(rc, svg, w, h) {
    svg.appendChild(rc.line(70, 230, 490, 230, { stroke: '#94a3b8' }));
    svg.appendChild(rc.line(90, 250, 90, 40, { stroke: '#94a3b8' }));

    const curvePts = [[90, 200], [160, 80], [240, 210], [330, 120], [420, 180], [480, 90]];
    svg.appendChild(rc.curve(curvePts, { stroke: '#2563eb', strokeWidth: 3.5, roughness: 1.4 }));

    svg.appendChild(rc.line(160, 80, 330, 120, { stroke: '#dc2626', strokeWidth: 2.5, roughness: 1 }));
    svg.appendChild(rc.circle(160, 80, 10, { fill: '#dc2626', stroke: '#dc2626' }));
    svg.appendChild(rc.circle(330, 120, 10, { fill: '#dc2626', stroke: '#dc2626' }));

    this.addText(svg, "Secant line cuts straight through!", 250, 75, { anchor: 'middle', size: '16px', color: '#dc2626' });
    this.addText(svg, "Completely misses the deep valley in between!", 250, 255, { anchor: 'middle', size: '17px', color: '#1e293b' });
  },
  // 5. Canyon Bridge / Limit story
  renderCanyonBridge(rc, svg, w, h) {
    svg.appendChild(rc.rectangle(60, 140, 160, 90, { fill: '#e2e8f0', stroke: '#334155', roughness: 1.5 }));
    this.addText(svg, "Left Trail (x → c⁻)", 130, 130, { anchor: 'middle', size: '15px', color: '#2563eb' });

    svg.appendChild(rc.rectangle(340, 140, 160, 90, { fill: '#e2e8f0', stroke: '#334155', roughness: 1.5 }));
    this.addText(svg, "Right Trail (x → c⁺)", 410, 130, { anchor: 'middle', size: '15px', color: '#16a34a' });

    this.addArrow(rc, svg, 170, 135, 240, 135, '#2563eb', 2);
    this.addArrow(rc, svg, 390, 135, 320, 135, '#16a34a', 2);

    svg.appendChild(rc.circle(280, 135, 14, { stroke: '#dc2626', strokeWidth: 2.5, fill: '#fff' }));
    this.addText(svg, "Hole at x = c", 280, 115, { anchor: 'middle', size: '15px', color: '#dc2626' });
    this.addText(svg, "Both sides aim at altitude L = 500m!", 280, 255, { anchor: 'middle', size: '18px', color: '#1e293b' });
  },

  // 6. Limit Jump Graph
  renderLimitGraphJump(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 220, 480, 220, { stroke: '#94a3b8' }));
    svg.appendChild(rc.line(260, 240, 260, 40, { stroke: '#94a3b8' }));
    this.addText(svg, "x = 1", 260, 245, { anchor: 'middle', size: '15px' });

    svg.appendChild(rc.line(100, 190, 255, 120, { stroke: '#2563eb', strokeWidth: 3 }));
    svg.appendChild(rc.circle(260, 120, 10, { stroke: '#2563eb', strokeWidth: 2, fill: '#fff' }));
    this.addText(svg, "Left limit = 3", 180, 110, { size: '16px', color: '#2563eb' });

    svg.appendChild(rc.line(265, 80, 440, 140, { stroke: '#16a34a', strokeWidth: 3 }));
    svg.appendChild(rc.circle(260, 80, 10, { stroke: '#16a34a', strokeWidth: 2, fill: '#16a34a' }));
    this.addText(svg, "Right limit = 4", 340, 75, { size: '16px', color: '#16a34a' });

    this.addText(svg, "JUMP DISCONTINUITY: 3 ≠ 4 ⇒ Overall Limit DNE!", 280, 260, { anchor: 'middle', size: '18px', color: '#dc2626' });
  },

  // 7. Squeeze Sandwich
  renderSqueezeSandwich(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 140, 480, 140, { stroke: '#94a3b8' }));
    svg.appendChild(rc.line(280, 240, 280, 40, { stroke: '#94a3b8' }));

    const topPts = [[140, 60], [210, 110], [280, 140], [350, 110], [420, 60]];
    svg.appendChild(rc.curve(topPts, { stroke: '#16a34a', strokeWidth: 2.5 }));
    this.addText(svg, "Top: g(x) = x²", 380, 50, { size: '15px', color: '#16a34a' });

    const botPts = [[140, 220], [210, 170], [280, 140], [350, 170], [420, 220]];
    svg.appendChild(rc.curve(botPts, { stroke: '#dc2626', strokeWidth: 2.5 }));
    this.addText(svg, "Bottom: h(x) = -x²", 380, 230, { size: '15px', color: '#dc2626' });

    const midPts = [[140, 120], [170, 155], [200, 128], [230, 148], [260, 138], [280, 140], [300, 142], [330, 132], [360, 152], [390, 125], [420, 160]];
    svg.appendChild(rc.curve(midPts, { stroke: '#2563eb', strokeWidth: 2.5 }));
    this.addText(svg, "Squeezed to 0!", 280, 165, { anchor: 'middle', size: '16px', color: '#2563eb' });
  },

  // 8. Pencil Continuity
  renderPencilContinuity(rc, svg, w, h) {
    svg.appendChild(rc.curve([[60, 180], [110, 100], [170, 150]], { stroke: '#16a34a', strokeWidth: 3 }));
    this.addText(svg, "Continuous", 115, 210, { anchor: 'middle', size: '16px', color: '#16a34a' });
    this.addText(svg, "(No pencil lift)", 115, 230, { anchor: 'middle', size: '13px', color: '#6b7280' });

    svg.appendChild(rc.line(210, 170, 260, 120, { stroke: '#2563eb', strokeWidth: 2.5 }));
    svg.appendChild(rc.circle(265, 115, 8, { stroke: '#2563eb', strokeWidth: 2, fill: '#fff' }));
    svg.appendChild(rc.line(270, 110, 320, 70, { stroke: '#2563eb', strokeWidth: 2.5 }));
    this.addText(svg, "Hole (Removable)", 265, 210, { anchor: 'middle', size: '16px', color: '#2563eb' });

    svg.appendChild(rc.line(410, 60, 410, 200, { stroke: '#dc2626', strokeWidth: 1.5, strokeLineDash: [4, 4] }));
    svg.appendChild(rc.curve([[360, 190], [390, 180], [405, 70]], { stroke: '#dc2626', strokeWidth: 2.5 }));
    svg.appendChild(rc.curve([[415, 195], [430, 80], [470, 70]], { stroke: '#dc2626', strokeWidth: 2.5 }));
    this.addText(svg, "Asymptote (Infinite)", 415, 210, { anchor: 'middle', size: '16px', color: '#dc2626' });
  },
  // 9. Arrow freeze
  renderArrowFreeze(rc, svg, w, h) {
    svg.appendChild(rc.line(100, 140, 360, 140, { stroke: '#1e293b', strokeWidth: 4 }));
    this.addArrow(rc, svg, 330, 140, 370, 140, '#1e293b', 4);
    svg.appendChild(rc.line(100, 140, 80, 120, { stroke: '#d97706', strokeWidth: 3 }));
    svg.appendChild(rc.line(100, 140, 80, 160, { stroke: '#d97706', strokeWidth: 3 }));

    svg.appendChild(rc.rectangle(200, 80, 120, 120, { stroke: '#dc2626', strokeWidth: 2.5, strokeLineDash: [6, 4] }));
    this.addText(svg, "FROZEN FRAME (Δt → 0)", 260, 70, { anchor: 'middle', size: '16px', color: '#dc2626' });
    this.addText(svg, "Instantaneous Speed = ds / dt", 260, 240, { anchor: 'middle', size: '19px', color: '#2563eb' });
  },

  // 10. First Principles Secant to Tangent
  renderFirstPrinciples(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 230, 480, 230, { stroke: '#94a3b8' }));
    svg.appendChild(rc.line(100, 250, 100, 40, { stroke: '#94a3b8' }));

    const pts = [[110, 210], [180, 190], [250, 145], [330, 80], [400, 40]];
    svg.appendChild(rc.curve(pts, { stroke: '#2563eb', strokeWidth: 3 }));

    svg.appendChild(rc.circle(180, 190, 8, { fill: '#16a34a', stroke: '#16a34a' }));
    this.addText(svg, "P(x, f(x))", 150, 210, { size: '15px', color: '#16a34a' });

    svg.appendChild(rc.circle(330, 80, 8, { fill: '#dc2626', stroke: '#dc2626' }));
    this.addText(svg, "Q(x+h, f(x+h))", 345, 80, { size: '15px', color: '#dc2626' });

    svg.appendChild(rc.line(120, 230, 390, 35, { stroke: '#dc2626', strokeWidth: 2, roughness: 1.2 }));
    this.addArrow(rc, svg, 310, 100, 210, 170, '#f59e0b', 2.5);
    this.addText(svg, "Slide Q toward P (h → 0)", 320, 145, { size: '16px', color: '#f59e0b' });
  },

  // 11. Tangent kisses curve
  renderTangentKisses(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 220, 480, 220, { stroke: '#94a3b8' }));
    svg.appendChild(rc.line(100, 240, 100, 40, { stroke: '#94a3b8' }));

    svg.appendChild(rc.curve([[110, 190], [200, 160], [280, 120], [380, 60]], { stroke: '#2563eb', strokeWidth: 3.5 }));
    svg.appendChild(rc.line(180, 170, 380, 70, { stroke: '#dc2626', strokeWidth: 3, roughness: 1.2 }));
    svg.appendChild(rc.circle(280, 120, 10, { fill: '#fef08a', stroke: '#dc2626', strokeWidth: 2.5 }));

    this.addText(svg, "Contact Point (x₀, y₀)", 280, 150, { anchor: 'middle', size: '16px', color: '#1e293b' });
    this.addText(svg, "Tangent kisses curve at exactly one point!", 280, 40, { anchor: 'middle', size: '18px', color: '#dc2626' });
  },

  // 12. Power Rule Geometry
  renderPowerRule(rc, svg, w, h) {
    svg.appendChild(rc.rectangle(140, 80, 110, 110, { fill: '#bfdbfe', stroke: '#1d4ed8', strokeWidth: 2 }));
    this.addText(svg, "x²", 195, 140, { anchor: 'middle', size: '24px', color: '#1e3a8a' });

    svg.appendChild(rc.rectangle(250, 80, 25, 110, { fill: '#fef08a', stroke: '#ca8a04', strokeWidth: 2 }));
    this.addText(svg, "x·dx", 262, 140, { anchor: 'middle', size: '14px', color: '#854d0e', rotate: 90 });

    svg.appendChild(rc.rectangle(140, 55, 110, 25, { fill: '#fef08a', stroke: '#ca8a04', strokeWidth: 2 }));
    this.addText(svg, "x·dx", 195, 72, { anchor: 'middle', size: '14px', color: '#854d0e' });

    svg.appendChild(rc.rectangle(250, 55, 25, 25, { fill: '#fecaca', stroke: '#dc2626', strokeWidth: 1.5 }));
    this.addText(svg, "dx² ≈ 0", 310, 68, { size: '13px', color: '#dc2626' });

    this.addText(svg, "Total growth d(x²) = 2x·dx ⇒ d/dx[x²] = 2x", 280, 235, { anchor: 'middle', size: '18px', color: '#16a34a' });
  },
  // 13. Product Rule Rectangle & Chain Rule Gears
  renderProductAndChain(rc, svg, w, h) {
    svg.appendChild(rc.rectangle(60, 70, 100, 90, { fill: '#bfdbfe', stroke: '#1d4ed8', strokeWidth: 2 }));
    svg.appendChild(rc.rectangle(160, 70, 25, 90, { fill: '#bbf7d0', stroke: '#16a34a', strokeWidth: 2 }));
    svg.appendChild(rc.rectangle(60, 45, 100, 25, { fill: '#fef08a', stroke: '#ca8a04', strokeWidth: 2 }));
    this.addText(svg, "u·v", 110, 120, { anchor: 'middle', size: '18px' });
    this.addText(svg, "u·dv", 172, 120, { anchor: 'middle', size: '13px', rotate: 90 });
    this.addText(svg, "v·du", 110, 62, { anchor: 'middle', size: '13px' });
    this.addText(svg, "d(uv) = u·dv + v·du", 120, 195, { anchor: 'middle', size: '16px', color: '#1e293b' });

    svg.appendChild(rc.circle(360, 100, 70, { stroke: '#d97706', strokeWidth: 2.5, fill: '#fef3c7' }));
    svg.appendChild(rc.circle(440, 125, 50, { stroke: '#2563eb', strokeWidth: 2.5, fill: '#dbeafe' }));
    this.addText(svg, "Gear A (×3)", 360, 105, { anchor: 'middle', size: '14px', color: '#b45309' });
    this.addText(svg, "Gear B (×4)", 440, 130, { anchor: 'middle', size: '13px', color: '#1d4ed8' });
    this.addText(svg, "Chain Rule: 3 × 4 = 12 (Multiply rates!)", 380, 195, { anchor: 'middle', size: '16px', color: '#dc2626' });
  },

  // 14. Trig & Exp
  renderTrigAndExp(rc, svg, w, h) {
    svg.appendChild(rc.line(50, 140, 250, 140, { stroke: '#94a3b8' }));
    svg.appendChild(rc.curve([[50, 140], [100, 70], [150, 140], [200, 210], [250, 140]], { stroke: '#2563eb', strokeWidth: 3 }));
    this.addText(svg, "y = sin(x)", 100, 60, { size: '15px', color: '#2563eb' });

    svg.appendChild(rc.line(30, 160, 80, 110, { stroke: '#dc2626', strokeWidth: 2 }));
    this.addText(svg, "Slope = cos(0) = 1", 100, 165, { size: '14px', color: '#dc2626' });

    svg.appendChild(rc.line(310, 210, 510, 210, { stroke: '#94a3b8' }));
    svg.appendChild(rc.curve([[320, 205], [380, 180], [440, 120], [490, 50]], { stroke: '#16a34a', strokeWidth: 3 }));
    this.addText(svg, "y = eˣ", 440, 45, { size: '18px', color: '#16a34a' });
    this.addText(svg, "⭐ Slope ALWAYS equals current Height!", 410, 245, { anchor: 'middle', size: '15px', color: '#166534' });
  },

  // 15. Sliding Ladder
  renderSlidingLadder(rc, svg, w, h) {
    svg.appendChild(rc.line(160, 50, 160, 220, { stroke: '#1e293b', strokeWidth: 4 }));
    svg.appendChild(rc.line(160, 220, 440, 220, { stroke: '#1e293b', strokeWidth: 4 }));

    svg.appendChild(rc.line(160, 90, 320, 220, { stroke: '#d97706', strokeWidth: 5, roughness: 1.2 }));

    this.addText(svg, "y = 8 ft", 120, 155, { size: '16px', color: '#2563eb' });
    this.addText(svg, "x = 6 ft", 240, 245, { anchor: 'middle', size: '16px', color: '#16a34a' });
    this.addText(svg, "Ladder L = 10 ft", 255, 145, { size: '16px', color: '#d97706' });

    this.addArrow(rc, svg, 320, 220, 380, 220, '#16a34a', 3);
    this.addText(svg, "dx/dt = +2 ft/s", 390, 215, { size: '14px', color: '#16a34a' });
    this.addArrow(rc, svg, 160, 90, 160, 140, '#dc2626', 3);
    this.addText(svg, "dy/dt = -1.5 ft/s", 170, 120, { size: '14px', color: '#dc2626' });
  },
  // 16. Curved Area Puzzle
  renderCurvedAreaPuzzle(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 220, 480, 220, { stroke: '#94a3b8' }));
    svg.appendChild(rc.line(100, 240, 100, 40, { stroke: '#94a3b8' }));

    const pts = [[120, 200], [200, 150], [280, 90], [380, 60], [440, 50]];
    svg.appendChild(rc.curve(pts, { stroke: '#2563eb', strokeWidth: 3.5 }));

    const strips = [[120, 200, 60], [180, 160, 60], [240, 115, 60], [300, 80, 60], [360, 65, 60]];
    strips.forEach(([x, yTop, width]) => {
      svg.appendChild(rc.rectangle(x, yTop, width, 220 - yTop, {
        fill: '#fef08a', fillStyle: 'hachure', stroke: '#d97706', strokeWidth: 1.5, roughness: 1.3
      }));
    });

    this.addText(svg, "Divide into thin strips: Base × Height", 280, 255, { anchor: 'middle', size: '17px', color: '#1e293b' });
  },

  // 17. Riemann Rectangles Bars
  renderRiemannBars(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 220, 480, 220, { stroke: '#94a3b8', strokeWidth: 2 }));
    svg.appendChild(rc.line(100, 240, 100, 40, { stroke: '#94a3b8', strokeWidth: 2 }));

    svg.appendChild(rc.curve([[100, 220], [180, 210], [260, 175], [340, 115], [420, 40]], { stroke: '#2563eb', strokeWidth: 3 }));

    const rects = [[100, 210, 80], [180, 175, 80], [260, 115, 80], [340, 40, 80]];
    rects.forEach(([x, y, rw]) => {
      svg.appendChild(rc.rectangle(x, y, rw, 220 - y, {
        fill: '#fed7aa', stroke: '#ea580c', strokeWidth: 2, fillStyle: 'zigzag', roughness: 1.2
      }));
    });

    this.addText(svg, "Right Sum: Rectangles stick out (Overestimate)", 280, 30, { anchor: 'middle', size: '16px', color: '#ea580c' });
    this.addText(svg, "As n → ∞, the jagged staircase melts into exact area!", 280, 255, { anchor: 'middle', size: '17px', color: '#16a34a' });
  },

  // 18. Net signed area
  renderNetSignedArea(rc, svg, w, h) {
    svg.appendChild(rc.line(60, 140, 500, 140, { stroke: '#1e293b', strokeWidth: 2 }));
    svg.appendChild(rc.line(100, 240, 100, 40, { stroke: '#94a3b8' }));

    svg.appendChild(rc.curve([[100, 140], [170, 60], [250, 140], [330, 220], [410, 140]], { stroke: '#2563eb', strokeWidth: 3 }));

    svg.appendChild(rc.circle(175, 105, 50, { fill: '#bbf7d0', stroke: '#16a34a', fillStyle: 'dots' }));
    this.addText(svg, "+ Positive Area", 175, 105, { anchor: 'middle', size: '16px', color: '#15803d' });

    svg.appendChild(rc.circle(330, 175, 50, { fill: '#fecaca', stroke: '#dc2626', fillStyle: 'dots' }));
    this.addText(svg, "- Negative Area", 330, 175, { anchor: 'middle', size: '16px', color: '#b91c1c' });

    this.addText(svg, "Definite Integral = [Positive Area] - [Negative Area]", 280, 260, { anchor: 'middle', size: '18px', color: '#1e293b' });
  },
  // 19. FTC Showcase
  renderFTCShowcase(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 220, 480, 220, { stroke: '#94a3b8', strokeWidth: 2 }));
    svg.appendChild(rc.line(100, 240, 100, 40, { stroke: '#94a3b8', strokeWidth: 2 }));

    svg.appendChild(rc.curve([[100, 200], [200, 140], [300, 90], [420, 70]], { stroke: '#2563eb', strokeWidth: 3 }));
    this.addText(svg, "y = f(t)", 430, 70, { size: '16px', color: '#2563eb' });

    svg.appendChild(rc.rectangle(120, 150, 160, 70, { fill: '#e0e7ff', stroke: '#4338ca', strokeWidth: 1.5, fillStyle: 'cross-hatch' }));
    this.addText(svg, "Accumulated Area A(x)", 200, 185, { anchor: 'middle', size: '15px', color: '#3730a3' });

    svg.appendChild(rc.rectangle(280, 98, 20, 122, { fill: '#fef08a', stroke: '#dc2626', strokeWidth: 2 }));
    this.addText(svg, "dx", 290, 238, { anchor: 'middle', size: '14px', color: '#dc2626' });
    this.addText(svg, "Height = f(x)", 340, 125, { size: '15px', color: '#dc2626' });

    this.addText(svg, "Area Growth dA = f(x) · dx  ⇒  dA / dx = f(x) !", 280, 40, { anchor: 'middle', size: '19px', color: '#dc2626' });
  },

  // 20. U-Sub and By Parts
  renderUSubAndByParts(rc, svg, w, h) {
    svg.appendChild(rc.line(50, 110, 220, 110, { stroke: '#2563eb', strokeWidth: 3 }));
    this.addText(svg, "x-axis", 135, 95, { anchor: 'middle', size: '15px', color: '#2563eb' });
    this.addArrow(rc, svg, 135, 125, 135, 165, '#d97706', 2.5);
    this.addText(svg, "u = g(x)", 175, 148, { size: '15px', color: '#d97706' });
    svg.appendChild(rc.line(50, 180, 220, 180, { stroke: '#16a34a', strokeWidth: 3 }));
    this.addText(svg, "u-axis (Clean simplified!)", 135, 205, { anchor: 'middle', size: '14px', color: '#16a34a' });

    svg.appendChild(rc.rectangle(320, 60, 140, 120, { stroke: '#1e293b', strokeWidth: 2 }));
    svg.appendChild(rc.curve([[320, 180], [380, 140], [460, 60]], { stroke: '#dc2626', strokeWidth: 2.5 }));
    this.addText(svg, "∫ u dv", 410, 140, { size: '16px', color: '#2563eb' });
    this.addText(svg, "∫ v du", 340, 90, { size: '16px', color: '#16a34a' });
    this.addText(svg, "Total Box = u·v = ∫ u dv + ∫ v du", 390, 220, { anchor: 'middle', size: '16px', color: '#1e293b' });
  },

  // 21. Volume of Revolution 3D
  renderVolumeRevolution(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 140, 480, 140, { stroke: '#94a3b8', strokeWidth: 2, strokeLineDash: [6, 4] }));
    this.addText(svg, "Rotation Axis (x-axis)", 410, 160, { size: '13px', color: '#64748b' });

    svg.appendChild(rc.curve([[140, 90], [240, 60], [360, 80], [440, 50]], { stroke: '#2563eb', strokeWidth: 3 }));
    svg.appendChild(rc.curve([[140, 190], [240, 220], [360, 200], [440, 230]], { stroke: '#2563eb', strokeWidth: 3 }));

    svg.appendChild(rc.circle(280, 140, 130, { fill: '#fef08a', stroke: '#d97706', strokeWidth: 2, roughness: 1.3 }));
    this.addText(svg, "Circular Disk", 280, 135, { anchor: 'middle', size: '15px' });
    this.addText(svg, "Volume dV = π·[f(x)]²·dx", 280, 155, { anchor: 'middle', size: '14px', color: '#dc2626' });
  },
  // 22. Geometric Chocolate
  renderGeometricChocolate(rc, svg, w, h) {
    const x0 = 180, y0 = 50, size = 180;
    svg.appendChild(rc.rectangle(x0, y0, size, size, { stroke: '#1e293b', strokeWidth: 3 }));

    svg.appendChild(rc.rectangle(x0, y0, size / 2, size, { fill: '#93c5fd', stroke: '#1d4ed8', strokeWidth: 2 }));
    this.addText(svg, "1/2", x0 + 45, y0 + 95, { anchor: 'middle', size: '20px', color: '#1e3a8a' });

    svg.appendChild(rc.rectangle(x0 + size / 2, y0, size / 2, size / 2, { fill: '#fde047', stroke: '#ca8a04', strokeWidth: 2 }));
    this.addText(svg, "1/4", x0 + 135, y0 + 50, { anchor: 'middle', size: '18px', color: '#854d0e' });

    svg.appendChild(rc.rectangle(x0 + size / 2, y0 + size / 2, size / 4, size / 2, { fill: '#fca5a5', stroke: '#dc2626', strokeWidth: 2 }));
    this.addText(svg, "1/8", x0 + 112, y0 + 140, { anchor: 'middle', size: '15px', color: '#991b1b' });

    svg.appendChild(rc.rectangle(x0 + 3 * size / 4, y0 + size / 2, size / 4, size / 4, { fill: '#86efac', stroke: '#16a34a', strokeWidth: 2 }));
    this.addText(svg, "1/16", x0 + 158, y0 + 120, { anchor: 'middle', size: '13px', color: '#166534' });

    this.addText(svg, "1/2 + 1/4 + 1/8 + 1/16 + ... = Exactly 1 Chocolate Bar!", 270, 255, { anchor: 'middle', size: '18px', color: '#1e293b' });
  },

  // 23. Taylor Polynomials Hugging
  renderTaylorPolynomials(rc, svg, w, h) {
    svg.appendChild(rc.line(80, 140, 480, 140, { stroke: '#94a3b8' }));
    svg.appendChild(rc.line(280, 230, 280, 40, { stroke: '#94a3b8' }));

    svg.appendChild(rc.curve([[120, 210], [200, 70], [280, 140], [360, 210], [440, 70]], { stroke: '#1e293b', strokeWidth: 4 }));
    this.addText(svg, "f(x) = sin(x)", 440, 60, { size: '15px', color: '#1e293b' });

    svg.appendChild(rc.line(200, 220, 360, 60, { stroke: '#dc2626', strokeWidth: 2, strokeLineDash: [4, 4] }));
    this.addText(svg, "Degree 1 (Line: x)", 365, 80, { size: '13px', color: '#dc2626' });

    svg.appendChild(rc.curve([[180, 230], [240, 175], [280, 140], [320, 105], [380, 50]], { stroke: '#2563eb', strokeWidth: 2.5 }));
    this.addText(svg, "Degree 3 (x - x³/6)", 385, 110, { size: '13px', color: '#2563eb' });

    this.addText(svg, "Higher polynomials hug the true curve wider and wider!", 280, 260, { anchor: 'middle', size: '17px', color: '#16a34a' });
  },

  // 24. Multivariable Hill 3D
  renderMultivariableHill(rc, svg, w, h) {
    svg.appendChild(rc.curve([[140, 200], [220, 130], [280, 90], [340, 130], [420, 200]], { stroke: '#1e293b', strokeWidth: 3 }));
    svg.appendChild(rc.circle(280, 180, 260, { stroke: '#94a3b8', strokeWidth: 1.5, fill: '#f8fafc' }));

    svg.appendChild(rc.circle(280, 90, 10, { fill: '#dc2626', stroke: '#dc2626' }));
    this.addText(svg, "Peak (x₀, y₀, z₀)", 280, 70, { anchor: 'middle', size: '16px', color: '#dc2626' });

    this.addArrow(rc, svg, 280, 130, 360, 130, '#2563eb', 3);
    this.addText(svg, "∂z/∂x (Walk East, freeze y)", 370, 125, { size: '14px', color: '#2563eb' });

    this.addArrow(rc, svg, 280, 130, 280, 185, '#16a34a', 3);
    this.addText(svg, "∂z/∂y (Walk North, freeze x)", 280, 215, { anchor: 'middle', size: '14px', color: '#16a34a' });
  },

  // 25. Differential Equations Slope Field
  renderSlopeField(rc, svg, w, h) {
    for (let x = 120; x <= 440; x += 40) {
      for (let y = 60; y <= 220; y += 35) {
        const slope = (x - 280) * 0.008;
        const len = 14;
        const dx = len / Math.sqrt(1 + slope * slope);
        const dy = slope * dx;
        svg.appendChild(rc.line(x - dx, y + dy, x + dx, y - dy, { stroke: '#94a3b8', strokeWidth: 1.8, roughness: 1.2 }));
      }
    }

    svg.appendChild(rc.curve([[140, 210], [200, 190], [280, 140], [360, 80], [420, 50]], { stroke: '#dc2626', strokeWidth: 3.5 }));
    this.addText(svg, "Solution Curve y(t) = y₀ eᵏᵗ", 340, 45, { size: '16px', color: '#dc2626' });
    this.addText(svg, "Slope field arrows guide the curve like ocean currents!", 280, 255, { anchor: 'middle', size: '17px', color: '#1e293b' });
  },

  // Fallback default graph
  renderDefaultGraph(rc, svg, w, h) {
    svg.appendChild(rc.line(60, 220, 480, 220, { stroke: '#1e293b', strokeWidth: 2 }));
    svg.appendChild(rc.line(100, 240, 100, 40, { stroke: '#1e293b', strokeWidth: 2 }));
    svg.appendChild(rc.curve([[100, 200], [200, 120], [300, 160], [400, 60]], { stroke: '#2563eb', strokeWidth: 3 }));
    this.addText(svg, "Calculus: The Study of Change", 280, 255, { anchor: 'middle', size: '18px' });
  }
};
