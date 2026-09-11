/**
 * Complete Curriculum Dataset for Calculus Notebook
 * 25 Topics across 5 Parts
 */

window.CALCULUS_PARTS = [
  {
    "id": 1,
    "title": "Part 1 \u2014 Foundations (Before Calculus)",
    "shortTitle": "Part 1: Foundations",
    "description": "Functions, everyday rates of change, straight-line algebra, and the cliffhanger of curves.",
    "topicIds": [
      1,
      2,
      3,
      4
    ],
    "color": "#e06c75"
  },
  {
    "id": 2,
    "title": "Part 2 \u2014 The Magic of Limits",
    "shortTitle": "Part 2: Limits",
    "description": "Approaching the forbidden without touching it: stories, visual graphs, limit laws, and continuity.",
    "topicIds": [
      5,
      6,
      7,
      8
    ],
    "color": "#61afef"
  },
  {
    "id": 3,
    "title": "Part 3 \u2014 Differentiation (The Art of the Instant)",
    "shortTitle": "Part 3: Derivatives",
    "description": "Instantaneous rates, limit definition, rules of differentiation, and real-world optimization.",
    "topicIds": [
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "color": "#98c379"
  },
  {
    "id": 4,
    "title": "Part 4 \u2014 Integration (The Art of Accumulation)",
    "shortTitle": "Part 4: Integrals",
    "description": "Areas under curves, Riemann sums, the Fundamental Theorem of Calculus, and volume of revolution.",
    "topicIds": [
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "color": "#d19a66"
  },
  {
    "id": 5,
    "title": "Part 5 \u2014 Advanced Horizons",
    "shortTitle": "Part 5: Advanced",
    "description": "Infinite series, Taylor polynomials, partial derivatives teaser, and differential equations.",
    "topicIds": [
      22,
      23,
      24,
      25
    ],
    "color": "#c678dd"
  }
];

window.CALCULUS_TOPICS = [
  {
    "id": 1,
    "partId": 1,
    "number": "01",
    "title": "What is a Function, and Why Do We Care About Change?",
    "tag": "Foundations",
    "subtitle": "The relationship machine and why static math isn't enough",
    "intuition": "Think of a function as an honest kitchen toaster: you drop in sliced bread (input x), and out pops toast (output y or f(x)). For every single slice you drop in, you get exactly one predictable piece of toast out. Geometry and elementary algebra are great at measuring motionless things \u2014 the area of a static garden, the height of a flagpole on a windless day. But the real universe refuses to sit still! Planets orbit, coffee cools down in your mug, bank accounts compound, and rockets accelerate through thinning atmosphere. Calculus was born because we needed a language not just to describe objects, but to describe how one quantity dynamically reacts as another quantity changes.",
    "formulaTitle": "The Function & Dependency Relation",
    "formulaLatex": "y = f(x) \\quad \\text{where } x \\in \\text{Domain}, \\, y \\in \\text{Range}",
    "formulaNote": "Input x is independent; output y depends entirely on x. When x wiggles by an amount \\Delta x, y shifts by \\Delta y = f(x + \\Delta x) - f(x).",
    "diagramType": "function_machine",
    "diagramCaption": "Sketch: The Function Box takes input x, applies rule f, and produces predictable output f(x).",
    "example": {
      "problem": "A bakery's daily profit P(c) depends on the number of cakes c sold according to P(c) = 15c - 120. Calculate the profit when selling 10 cakes versus 25 cakes, and determine how much profit changes per cake sold.",
      "steps": [
        {
          "step": "1. Evaluate profit for 10 cakes:",
          "math": "P(10) = 15(10) - 120 = 150 - 120 = \\$30",
          "explanation": "Plug c = 10 directly into the function formula."
        },
        {
          "step": "2. Evaluate profit for 25 cakes:",
          "math": "P(25) = 15(25) - 120 = 375 - 120 = \\$255",
          "explanation": "Plug c = 25 directly into the formula."
        },
        {
          "step": "3. Calculate the change in profit \\Delta P and change in cakes \\Delta c:",
          "math": "\\Delta P = P(25) - P(10) = 255 - 30 = 225, \\quad \\Delta c = 25 - 10 = 15",
          "explanation": "Change is always (New Value - Old Value)."
        },
        {
          "step": "4. Compute the rate of change:",
          "math": "\\frac{\\Delta P}{\\Delta c} = \\frac{225}{15} = 15 \\text{ dollars per cake}",
          "explanation": "Notice this matches the coefficient 15! Each additional cake consistently increases profit by exactly $15."
        }
      ]
    },
    "practice": {
      "question": "Suppose the temperature of a fresh pizza cooling on a counter is given by T(m) = 20 + 80(0.9)^m where m is minutes and T is in Celsius. Find T(0) and T(1), and calculate the average rate of cooling over that first minute.",
      "hint": "Remember that any non-zero number raised to the power 0 is 1: (0.9)^0 = 1.",
      "solutionSteps": [
        "Initial temperature at m = 0: T(0) = 20 + 80(0.9)^0 = 20 + 80(1) = 100^\\circ\\text{C}.",
        "Temperature after 1 minute at m = 1: T(1) = 20 + 80(0.9)^1 = 20 + 72 = 92^\\circ\\text{C}.",
        "Change in temperature: \\Delta T = T(1) - T(0) = 92 - 100 = -8^\\circ\\text{C}.",
        "Average rate of change: \\frac{\\Delta T}{\\Delta m} = \\frac{-8^\\circ\\text{C}}{1\\text{ min}} = -8^\\circ\\text{C/min}. (The negative sign means cooling!)"
      ]
    },
    "commonMistake": {
      "title": "Confusing f(x) with multiplication!",
      "note": "Students often see f(a + b) and instinctively try to 'distribute' f like algebra: writing f(a) + f(b). That is WRONG for almost all functions! f is a machine name, not a multiplier. For example, if f(x) = x^2, then f(2 + 3) = f(5) = 25, but f(2) + f(3) = 4 + 9 = 13 \\neq 25."
    }
  },
  {
    "id": 2,
    "partId": 1,
    "number": "02",
    "title": "Rate of Change in Everyday Life",
    "tag": "Foundations",
    "subtitle": "Speed, growth, and steepness \u2014 building pure intuition without formulas",
    "intuition": "You already understand calculus in your bones whenever you ride in a car. If you drive 120 miles from City A to City B in exactly 2 hours, your average speed was 60 miles per hour. That is a basic ratio: total distance divided by total time. But did your speedometer hover rigidly at 60 mph the entire journey? Of course not! You waited at red traffic lights at 0 mph, backed out of a driveway at 5 mph, and cruised on the freeway at 75 mph. That fleeting number displayed on your speedometer at any single blink of an eye is what calculus calls an 'instantaneous rate of change'. How can you have a speed at a single instant when zero time has elapsed? That deep question will unlock all of calculus.",
    "formulaTitle": "Average Rate of Change Formula",
    "formulaLatex": "\\text{Average Rate of Change} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}",
    "formulaNote": "This measures the overall trend over a finite window [x_1, x_2]. As we shrink that window to zero width, average rate becomes instantaneous rate!",
    "diagramType": "speedometer_trip",
    "diagramCaption": "Sketch: The road trip graph showing total distance vs time, and the speedometer needle at an instant.",
    "example": {
      "problem": "A runner's distance in meters during a 10-second sprint is tracked: at t = 2 s they are at d = 8 m, and at t = 6 s they are at d = 40 m. Find their average velocity between t = 2 and t = 6, and explain what it means physically.",
      "steps": [
        {
          "step": "1. Identify the input and output variables:",
          "math": "x_1 = 2\\text{ s}, \\quad y_1 = 8\\text{ m}; \\qquad x_2 = 6\\text{ s}, \\quad y_2 = 40\\text{ m}",
          "explanation": "Time is the independent variable on the horizontal axis; distance is the dependent variable."
        },
        {
          "step": "2. Compute the increments:",
          "math": "\\Delta d = 40 - 8 = 32\\text{ meters}, \\qquad \\Delta t = 6 - 2 = 4\\text{ seconds}",
          "explanation": "Calculate how far they ran and how many seconds elapsed."
        },
        {
          "step": "3. Divide change in distance by change in time:",
          "math": "v_{\\text{avg}} = \\frac{\\Delta d}{\\Delta t} = \\frac{32\\text{ m}}{4\\text{ s}} = 8\\text{ m/s}",
          "explanation": "Physical meaning: On average, the runner covered 8 meters every second during this 4-second interval."
        }
      ]
    },
    "practice": {
      "question": "A company's revenue was $120,000 in the year 2020 and grew to $195,000 in 2023. What was the average rate of revenue growth per year?",
      "hint": "Let t_1 = 2020, R_1 = 120000 and t_2 = 2023, R_2 = 195000.",
      "solutionSteps": [
        "Change in revenue: \\Delta R = 195{,}000 - 120{,}000 = \\$75{,}000.",
        "Change in time: \\Delta t = 2023 - 2020 = 3\\text{ years}.",
        "Average growth rate: \\frac{\\Delta R}{\\Delta t} = \\frac{75{,}000}{3} = \\$25{,}000\\text{ per year}."
      ]
    },
    "commonMistake": {
      "title": "Forgetting the units on rates!",
      "note": "A rate of change is never just a plain number like '8' or '25000'. It is always a compound unit: (output unit) per (input unit), such as meters/second, dollars/year, or degrees Celsius/minute. Keeping track of units prevents fatal errors when applying calculus to physics or economics!"
    }
  },
  {
    "id": 3,
    "partId": 1,
    "number": "03",
    "title": "Slope of a Straight Line (Algebra Recap)",
    "tag": "Foundations",
    "subtitle": "Constant steepness and the rise-over-run triangle",
    "intuition": "A straight line is unique in the mathematical world because its steepness never changes. If you hike up a straight wheelchair ramp or a steady incline, every single foot you step forward lifts you by the exact same vertical amount. Whether you measure the slope between two points 1 millimeter apart or 1 mile apart, you will calculate the identical fraction: rise over run. Because the slope is constant, straight lines are easy to master. Calculus becomes necessary only when lines start bending!",
    "formulaTitle": "Slope of a Line & Point-Slope Equation",
    "formulaLatex": "m = \\frac{\\text{Rise}}{\\text{Run}} = \\frac{y_2 - y_1}{x_2 - x_1}, \\quad y - y_1 = m(x - x_1)",
    "formulaNote": "The slope m tells you the direction and steepness: m > 0 climbs up, m < 0 slides down, and m = 0 is a flat horizontal line.",
    "diagramType": "slope_triangle",
    "diagramCaption": "Sketch: The classic 'Rise over Run' right-angled triangle along a straight line with slope m.",
    "example": {
      "problem": "Find the slope of the line passing through (-1, 4) and (3, -4), and write down its equation in slope-intercept form y = mx + b.",
      "steps": [
        {
          "step": "1. Assign coordinates:",
          "math": "(x_1, y_1) = (-1, 4), \\quad (x_2, y_2) = (3, -4)",
          "explanation": "Label the points so you do not mix up inputs and outputs."
        },
        {
          "step": "2. Calculate slope m:",
          "math": "m = \\frac{-4 - 4}{3 - (-1)} = \\frac{-8}{3 + 1} = \\frac{-8}{4} = -2",
          "explanation": "The slope is negative, meaning the line slants downwards from left to right."
        },
        {
          "step": "3. Use point-slope form with (-1, 4):",
          "math": "y - 4 = -2(x - (-1)) \\implies y - 4 = -2(x + 1) = -2x - 2",
          "explanation": "Substitute m = -2 and the point (-1, 4)."
        },
        {
          "step": "4. Solve for y to get slope-intercept form:",
          "math": "y = -2x - 2 + 4 \\implies y = -2x + 2",
          "explanation": "Here m = -2 and the y-intercept is (0, 2)."
        }
      ]
    },
    "practice": {
      "question": "A line passes through (2, 5) and has a slope of m = 3. Find the value of y when x = 6.",
      "hint": "Use point-slope form y - y_1 = m(x - x_1) or calculate \\Delta y = m \\cdot \\Delta x.",
      "solutionSteps": [
        "Change in x: \\Delta x = 6 - 2 = 4.",
        "Since m = \\frac{\\Delta y}{\\Delta x} = 3, we have \\Delta y = 3 \\cdot \\Delta x = 3(4) = 12.",
        "New y-value: y = y_1 + \\Delta y = 5 + 12 = 17."
      ]
    },
    "commonMistake": {
      "title": "Subtracting coordinates in reverse order!",
      "note": "If you calculate y_2 - y_1 in the numerator, you MUST calculate x_2 - x_1 in the denominator! Computing (y_2 - y_1)/(x_1 - x_2) will give you the opposite sign, turning an uphill line into a downhill line."
    }
  },
  {
    "id": 4,
    "partId": 1,
    "number": "04",
    "title": "The Problem with Curves",
    "tag": "Foundations",
    "subtitle": "Why straight-line slope formulas fail miserably on curved graphs",
    "intuition": "Imagine riding a roller coaster or launching a rocket. A curve does NOT have a single slope! At the bottom of a drop, the track is momentarily flat (slope = 0). Halfway up a hill, it is steep. At the summit, it levels off again. If you pick two points far apart on a curve and calculate (y_2 - y_1)/(x_2 - x_1), you get the slope of a straight chord connecting them (called a secant line). But that chord completely ignores all the loops, dips, and swoops in between! If you want to know how fast the coaster is plummeting at one specific millimeter of track, the standard algebra formula crashes into a wall: 0/0. We need a brand-new tool to zoom in on curves until they look flat.",
    "formulaTitle": "The Secant Slope vs. The 0/0 Dilemma",
    "formulaLatex": "m_{\\text{secant}} = \\frac{f(x + h) - f(x)}{h} \\quad \\xrightarrow{h \\to 0} \\quad \\frac{0}{0} \\quad (\\text{undefined in algebra!})",
    "formulaNote": "As the distance h between two points shrinks to zero, both numerator and denominator vanish to 0. Calculus is the art of evaluating this ratio without dividing by zero!",
    "diagramType": "curving_rollercoaster",
    "diagramCaption": "Sketch: A curving graph where secant lines fail to capture the true instantaneous steepness.",
    "example": {
      "problem": "Consider the parabola f(x) = x^2. Calculate the average slope (secant slope) between x = 1 and x = 1 + h for three shrinking values of h: h = 1, h = 0.1, and h = 0.01. What number are these slopes approaching?",
      "steps": [
        {
          "step": "1. For h = 1 (points are x = 1 and x = 2):",
          "math": "m_{\\text{sec}} = \\frac{f(2) - f(1)}{2 - 1} = \\frac{2^2 - 1^2}{1} = \\frac{4 - 1}{1} = 3.0",
          "explanation": "The secant line between x=1 and x=2 has slope 3."
        },
        {
          "step": "2. For h = 0.1 (points are x = 1 and x = 1.1):",
          "math": "m_{\\text{sec}} = \\frac{(1.1)^2 - 1^2}{0.1} = \\frac{1.21 - 1}{0.1} = \\frac{0.21}{0.1} = 2.1",
          "explanation": "Closer points give slope 2.1."
        },
        {
          "step": "3. For h = 0.01 (points are x = 1 and x = 1.01):",
          "math": "m_{\\text{sec}} = \\frac{(1.01)^2 - 1^2}{0.01} = \\frac{1.0201 - 1}{0.01} = \\frac{0.0201}{0.01} = 2.01",
          "explanation": "Even closer points yield 2.01."
        },
        {
          "step": "4. Observe the unmistakable trend:",
          "math": "\\lim_{h \\to 0} m_{\\text{sec}} = 2.00",
          "explanation": "As h gets tinier, the slope clearly approaches exactly 2! But if you plugged in h = 0 directly, you would get 0/0."
        }
      ]
    },
    "practice": {
      "question": "For the same curve f(x) = x^2, calculate the secant slope between x = 3 and x = 3.1 (h = 0.1). What slope do you guess the curve has at exactly x = 3?",
      "hint": "Compute \\frac{f(3.1) - f(3)}{0.1} = \\frac{(3.1)^2 - 3^2}{0.1}.",
      "solutionSteps": [
        "(3.1)^2 = 9.61 and 3^2 = 9.",
        "\\text{Secant slope} = \\frac{9.61 - 9}{0.1} = \\frac{0.61}{0.1} = 6.1.",
        "As h \\to 0, the slope at exactly x = 3 approaches 6 (notice it is 2 \\times 3 = 6!)."
      ]
    },
    "commonMistake": {
      "title": "Assuming 0/0 equals 0 or 1!",
      "note": "In elementary arithmetic, 0/5 = 0 and 5/5 = 1. But 0/0 is indeterminate \u2014 it can equal literally ANY number depending on which zero is vanishing faster! In calculus, we never just divide zeros; we investigate the limiting ratio."
    }
  },
  {
    "id": 5,
    "partId": 2,
    "number": "05",
    "title": "What is a Limit? (A Real-World Story)",
    "tag": "Limits",
    "subtitle": "Approaching the cliff without ever stepping off the edge",
    "intuition": "Imagine two hikers walking along a trail toward a scenic canyon overlook from opposite sides. As they take each step closer to the guardrail at coordinate x = c, their elevation above sea level climbs toward 500 meters. Even if a lightning bolt struck and vaporized the exact wooden platform at the guardrail leaving a deep hole, both hikers were still clearly aiming at 500 meters as they approached! A limit is NOT about what happens AT the destination; it is exclusively about what value the function is heading toward as you get closer and closer from both sides. This subtle distinction allows calculus to dance right across holes and divisions by zero!",
    "formulaTitle": "The Intuitive Definition of a Limit",
    "formulaLatex": "\\lim_{x \\to c} f(x) = L",
    "formulaNote": "Reads: 'The limit of f(x) as x approaches c equals L'. It means f(x) gets arbitrarily close to L whenever x is sufficiently close to c (with x != c).",
    "diagramType": "canyon_bridge",
    "diagramCaption": "Sketch: Hikers approaching a canyon platform from both left and right, converging on the same height L.",
    "example": {
      "problem": "Evaluate the limit \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}. Notice that plugging in x = 2 directly gives 0/0.",
      "steps": [
        {
          "step": "1. Recognize the indeterminate form:",
          "math": "\\frac{2^2 - 4}{2 - 2} = \\frac{4 - 4}{0} = \\frac{0}{0}",
          "explanation": "Direct substitution fails. We need algebraic factoring to expose what is hidden."
        },
        {
          "step": "2. Factor the numerator using difference of squares:",
          "math": "x^2 - 4 = (x - 2)(x + 2)",
          "explanation": "Remember: a^2 - b^2 = (a - b)(a + b)."
        },
        {
          "step": "3. Cancel the offending (x - 2) factor:",
          "math": "\\frac{(x - 2)(x + 2)}{x - 2} = x + 2 \\quad (\\text{valid for all } x \\neq 2)",
          "explanation": "Since a limit only cares about x near 2, x != 2, so dividing by (x - 2) is completely legal!"
        },
        {
          "step": "4. Now evaluate the limit as x -> 2:",
          "math": "\\lim_{x \\to 2} (x + 2) = 2 + 2 = 4",
          "explanation": "Even though the graph has a hole at (2, 4), the limit is unambiguously 4."
        }
      ]
    },
    "practice": {
      "question": "Evaluate \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} using the factoring technique.",
      "hint": "Factor x^2 - 9 as (x - 3)(x + 3) and cancel the common term.",
      "solutionSteps": [
        "Direct substitution yields \\frac{3^2 - 9}{3 - 3} = \\frac{0}{0}.",
        "Factor: \\frac{x^2 - 9}{x - 3} = \\frac{(x - 3)(x + 3)}{x - 3} = x + 3 (for x != 3).",
        "Evaluate limit: \\lim_{x \\to 3} (x + 3) = 3 + 3 = 6."
      ]
    },
    "commonMistake": {
      "title": "Confusing the limit with the function value f(c)!",
      "note": "A function can have f(2) = 100 or even be completely undefined (f(2) = DNE), and yet \\lim_{x \\to 2} f(x) can still equal 4! The limit asks: 'Where were we heading?', NOT 'What is standing there?'"
    }
  },
  {
    "id": 6,
    "partId": 2,
    "number": "06",
    "title": "Limits from Graphs (Visual & Hands-on)",
    "tag": "Limits",
    "subtitle": "One-sided limits: what happens when paths from left and right disagree?",
    "intuition": "Imagine driving toward a broken bridge. If you approach from the west, you are at elevation 100 feet. But if someone approaches from the east on the lower road, they are at elevation 20 feet. Do you meet in the middle? No! In calculus, we call these one-sided limits: approaching from the left (denoted x -> c^-) and approaching from the right (denoted x -> c^+). For an overall, two-sided limit \\lim_{x \\to c} f(x) to exist, the two paths MUST agree on the exact same altitude. If the left-hand limit and right-hand limit do not match, the overall limit Does Not Exist (DNE)!",
    "formulaTitle": "Existence Criterion for Two-Sided Limits",
    "formulaLatex": "\\lim_{x \\to c} f(x) = L \\iff \\lim_{x \\to c^-} f(x) = L \\quad \\text{AND} \\quad \\lim_{x \\to c^+} f(x) = L",
    "formulaNote": "The small superscript minus means 'approaching from numbers less than c'; plus means 'approaching from numbers greater than c'.",
    "diagramType": "limit_graph_jump",
    "diagramCaption": "Sketch: A piecewise graph showing a jump discontinuity where left limit != right limit, and a hole.",
    "example": {
      "problem": "Consider the piecewise function g(x) = { 2x + 1 if x < 1; 5 - x if x >= 1 }. Determine \\lim_{x \\to 1^-} g(x), \\lim_{x \\to 1^+} g(x), and whether \\lim_{x \\to 1} g(x) exists.",
      "steps": [
        {
          "step": "1. Evaluate the left-hand limit (x -> 1^-):",
          "math": "\\lim_{x \\to 1^-} (2x + 1) = 2(1) + 1 = 3",
          "explanation": "For x < 1, the function follows the rule 2x + 1."
        },
        {
          "step": "2. Evaluate the right-hand limit (x -> 1^+):",
          "math": "\\lim_{x \\to 1^+} (5 - x) = 5 - 1 = 4",
          "explanation": "For x > 1, the function follows the rule 5 - x."
        },
        {
          "step": "3. Compare both one-sided limits:",
          "math": "\\lim_{x \\to 1^-} g(x) = 3 \\neq 4 = \\lim_{x \\to 1^+} g(x)",
          "explanation": "The left path aims at height 3, while the right path aims at height 4."
        },
        {
          "step": "4. Conclusion:",
          "math": "\\lim_{x \\to 1} g(x) \\text{ Does Not Exist (DNE)}",
          "explanation": "Because there is an abrupt vertical jump of size 1 at x = 1."
        }
      ]
    },
    "practice": {
      "question": "For the function h(x) = { x^2 if x < 2; 4 if x = 2; 6 - x if x > 2 }, find \\lim_{x \\to 2^-} h(x), \\lim_{x \\to 2^+} h(x), and the overall \\lim_{x \\to 2} h(x).",
      "hint": "Evaluate the left branch x^2 and the right branch 6 - x at x = 2.",
      "solutionSteps": [
        "Left limit: \\lim_{x \\to 2^-} (x^2) = 2^2 = 4.",
        "Right limit: \\lim_{x \\to 2^+} (6 - x) = 6 - 2 = 4.",
        "Since 4 = 4, both paths agree! Therefore, \\lim_{x \\to 2} h(x) = 4."
      ]
    },
    "commonMistake": {
      "title": "Thinking x -> c^- means x is a negative number!",
      "note": "The minus sign in x -> 3^- does NOT mean negative three! It simply indicates approaching positive 3 from the left side (e.g. from 2.9, 2.99, 2.999)."
    }
  },
  {
    "id": 7,
    "partId": 2,
    "number": "07",
    "title": "Formal Limit Notation & Simple Limit Laws",
    "tag": "Limits",
    "subtitle": "The algebra of limits: sum, product, quotient, and the squeeze theorem",
    "intuition": "The wonderful thing about limits is that they behave just like your well-behaved elementary arithmetic rules \u2014 as long as you don't hit an undefined trap like dividing by zero. If function f is heading toward 10 and function g is heading toward 3, their sum is heading toward 13, their product is heading toward 30, and their ratio is heading toward 10/3. These algebraic guarantees are known as Limit Laws. And when a tricky function is too chaotic to calculate directly, we can trap it between two simpler functions like a slice of cheese inside a sandwich: this is the famous Squeeze Theorem!",
    "formulaTitle": "Essential Limit Laws",
    "formulaLatex": "\\lim_{x \\to c} [f(x) \\pm g(x)] = L \\pm M, \\quad \\lim_{x \\to c} [f(x) \\cdot g(x)] = L \\cdot M, \\quad \\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{L}{M} \\; (M \\neq 0)",
    "formulaNote": "Assuming \\lim_{x \\to c} f(x) = L and \\lim_{x \\to c} g(x) = M. If M = 0, you must do more algebra first!",
    "diagramType": "squeeze_sandwich",
    "diagramCaption": "Sketch: The Squeeze Theorem where two outer functions force the middle function into the same point L.",
    "example": {
      "problem": "Evaluate \\lim_{x \\to 0} x^2 \\sin(1/x). Notice that \\sin(1/0) oscillates wildly infinitely many times between -1 and +1.",
      "steps": [
        {
          "step": "1. Bound the oscillating sine function:",
          "math": "-1 \\le \\sin\\left(\\frac{1}{x}\\right) \\le 1 \\quad \\text{for all } x \\neq 0",
          "explanation": "No matter how wild the angle is, sine is permanently trapped between -1 and +1."
        },
        {
          "step": "2. Multiply the entire inequality by x^2 (which is always >= 0):",
          "math": "-x^2 \\le x^2 \\sin\\left(\\frac{1}{x}\\right) \\le x^2",
          "explanation": "Multiplying by a non-negative number preserves the inequality direction."
        },
        {
          "step": "3. Take the limit of the bounding outer functions as x -> 0:",
          "math": "\\lim_{x \\to 0} (-x^2) = 0 \\quad \\text{and} \\quad \\lim_{x \\to 0} (x^2) = 0",
          "explanation": "Both the floor and the ceiling collapse to 0."
        },
        {
          "step": "4. Apply the Squeeze Theorem:",
          "math": "\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right) = 0",
          "explanation": "The inner function has nowhere to go; it is squeezed to exactly 0!"
        }
      ]
    },
    "practice": {
      "question": "If \\lim_{x \\to 4} f(x) = 5 and \\lim_{x \\to 4} g(x) = -2, find \\lim_{x \\to 4} \\frac{2f(x) - [g(x)]^2}{f(x) + g(x)}.",
      "hint": "Apply the sum, product, and quotient limit laws directly since the denominator will not be zero.",
      "solutionSteps": [
        "Numerator limit: 2(5) - (-2)^2 = 10 - 4 = 6.",
        "Denominator limit: 5 + (-2) = 3.",
        "Ratio: 6 / 3 = 2."
      ]
    },
    "commonMistake": {
      "title": "Applying the quotient rule when the denominator is zero!",
      "note": "You cannot write \\lim (f/g) = (\\lim f)/(\\lim g) if \\lim g = 0! That produces L/0 or 0/0, which is invalid arithmetic. When the bottom is zero, you must factor, rationalize, or simplify first."
    }
  },
  {
    "id": 8,
    "partId": 2,
    "number": "08",
    "title": "Continuity \u2014 Functions with 'No Jumps'",
    "tag": "Limits",
    "subtitle": "The pencil test, holes, vertical asymptotes, and the Intermediate Value Theorem",
    "intuition": "The intuitive test for continuity taught in grade school is simple: a curve is continuous if you can draw it from left to right without ever lifting your pencil from the paper. But in calculus, we need an exact mathematical definition. A function is continuous at point x = c if three strict conditions are satisfied: (1) f(c) is defined (no missing point), (2) the limit as x -> c exists (the left and right paths meet), and (3) the limit equals that exact function value (the point plugs the hole seamlessly!). If a function is continuous, it possesses superpowers \u2014 like the Intermediate Value Theorem, which guarantees it must cross every single elevation in between.",
    "formulaTitle": "The Three-Part Definition of Continuity",
    "formulaLatex": "\\lim_{x \\to c} f(x) = f(c)",
    "formulaNote": "Compactly requires: 1. f(c) exists. 2. \\lim_{x \\to c} f(x) exists. 3. They are equal. Any violation is a discontinuity!",
    "diagramType": "pencil_continuity",
    "diagramCaption": "Sketch: Drawing without lifting pencil vs. three types of breaks: Removable hole, Jump, and Infinite asymptote.",
    "example": {
      "problem": "Find the value of constant k that makes the function f(x) = { k x^2 if x <= 2; 3x + 2 if x > 2 } continuous everywhere.",
      "steps": [
        {
          "step": "1. For x < 2 and x > 2, both pieces are polynomials:",
          "math": "kx^2 \\text{ and } 3x + 2 \\text{ are continuous on their open intervals.}",
          "explanation": "Polynomials are continuous everywhere. The only potential tear is at the seam x = 2."
        },
        {
          "step": "2. Compute the left limit and value f(2):",
          "math": "f(2) = k(2^2) = 4k, \\quad \\lim_{x \\to 2^-} f(x) = 4k",
          "explanation": "Use the top piece kx^2."
        },
        {
          "step": "3. Compute the right limit (x -> 2^+):",
          "math": "\\lim_{x \\to 2^+} (3x + 2) = 3(2) + 2 = 6 + 2 = 8",
          "explanation": "Use the bottom piece 3x + 2."
        },
        {
          "step": "4. Set the two limits equal for continuity:",
          "math": "4k = 8 \\implies k = 2",
          "explanation": "When k = 2, the left piece seamlessly welds to the right piece at height 8."
        }
      ]
    },
    "practice": {
      "question": "Is f(x) = \\frac{x^2 - 16}{x - 4} continuous at x = 4? If not, what kind of discontinuity is it?",
      "hint": "Check whether f(4) is defined.",
      "solutionSteps": [
        "Plug in x = 4: f(4) = \\frac{4^2 - 16}{4 - 4} = \\frac{0}{0} (undefined!).",
        "Since f(4) does not exist, condition 1 fails: f(x) is NOT continuous at x = 4.",
        "However, \\lim_{x \\to 4} \\frac{(x-4)(x+4)}{x-4} = 4 + 4 = 8 exists! Because the limit exists, it is a Removable Discontinuity (a single hole)."
      ]
    },
    "commonMistake": {
      "title": "Assuming continuous means 'differentiable'!",
      "note": "A function can be perfectly continuous (drawn without lifting pencil) and yet fail to have a derivative! The classic example is the sharp corner f(x) = |x| at x = 0. Continuity prevents jumps, but allows sharp spikes."
    }
  },
  {
    "id": 9,
    "partId": 3,
    "number": "09",
    "title": "The Problem of Instantaneous Rate of Change",
    "tag": "Differentiation",
    "subtitle": "How can you have speed at a single frozen moment in time?",
    "intuition": "Think of a high-speed photograph of an arrow flying through the air. In that frozen photograph, the arrow is sitting completely still at one exact pixel location. Distance moved during the zero-second shutter speed: 0 meters. Time elapsed: 0 seconds. Speed formula: 0/0. The ancient Greek philosopher Zeno argued that motion is therefore an illusion! But you know that if you step in front of that arrow, it has plenty of speed. Calculus resolves Zeno's paradox: instantaneous speed is NOT dividing zero by zero. It is the destination that the average speeds approach as the time interval shrinks toward zero. This single breakthrough launched the modern scientific revolution.",
    "formulaTitle": "The Instantaneous Velocity Concept",
    "formulaLatex": "v(t) = \\lim_{\\Delta t \\to 0} \\frac{s(t + \\Delta t) - s(t)}{\\Delta t} = \\frac{ds}{dt}",
    "formulaNote": "We replace the clumsy finite increment \\Delta with the celebrated differential notation d, representing an infinitesimal change.",
    "diagramType": "arrow_freeze",
    "diagramCaption": "Sketch: An arrow frozen in a photograph vs. the sequence of shrinking time intervals approaching instantaneous speed.",
    "example": {
      "problem": "An apple falls from a tree branch with position s(t) = 4.9 t^2 meters. Find its exact instantaneous speed at the exact instant t = 2 seconds.",
      "steps": [
        {
          "step": "1. Write the average speed over a tiny time interval h starting at t = 2:",
          "math": "v_{\\text{avg}} = \\frac{s(2 + h) - s(2)}{h}",
          "explanation": "Here h represents the duration \\Delta t."
        },
        {
          "step": "2. Expand s(2 + h):",
          "math": "s(2 + h) = 4.9(2 + h)^2 = 4.9(4 + 4h + h^2) = 19.6 + 19.6h + 4.9h^2",
          "explanation": "Use (a+b)^2 = a^2 + 2ab + b^2 and distribute 4.9."
        },
        {
          "step": "3. Subtract s(2) = 4.9(2^2) = 19.6:",
          "math": "s(2 + h) - s(2) = (19.6 + 19.6h + 4.9h^2) - 19.6 = 19.6h + 4.9h^2",
          "explanation": "Notice the constant terms cancel out completely!"
        },
        {
          "step": "4. Divide by h and take the limit as h -> 0:",
          "math": "v(2) = \\lim_{h \\to 0} \\frac{19.6h + 4.9h^2}{h} = \\lim_{h \\to 0} (19.6 + 4.9h) = 19.6 + 0 = 19.6\\text{ m/s}",
          "explanation": "At exactly 2 seconds, the apple is falling at precisely 19.6 meters per second."
        }
      ]
    },
    "practice": {
      "question": "If an object's position is s(t) = 3t^2, use the limit ratio \\frac{s(1+h) - s(1)}{h} to find its instantaneous velocity at t = 1.",
      "hint": "Expand 3(1+h)^2 = 3(1 + 2h + h^2) = 3 + 6h + 3h^2.",
      "solutionSteps": [
        "s(1) = 3(1^2) = 3.",
        "Numerator: s(1+h) - s(1) = 3 + 6h + 3h^2 - 3 = 6h + 3h^2.",
        "Divide by h: \\frac{6h + 3h^2}{h} = 6 + 3h.",
        "As h -> 0, v(1) = 6 units/s."
      ]
    },
    "commonMistake": {
      "title": "Setting h = 0 before cancelling!",
      "note": "If you plug in h = 0 immediately, you get 0/0 and are stuck. You must factor out the h from the numerator and cancel it with the denominator FIRST, and only then evaluate the limit."
    }
  },
  {
    "id": 10,
    "partId": 3,
    "number": "10",
    "title": "Deriving the Derivative from First Principles",
    "tag": "Differentiation",
    "subtitle": "The famous limit definition that unlocks all formulas of calculus",
    "intuition": "Up until now, we have solved for rates of change at specific individual numbers like x = 1 or x = 2. But doing all that tedious algebra every single time you change points would be maddening! Instead, what if we keep x as an arbitrary general variable? We run the exact same secant limit formula with an algebraic x, and out pops an entirely new machine: a formula that gives us the exact instantaneous slope at ANY point on the graph! This master formula is called the derivative, denoted f'(x) or df/dx.",
    "formulaTitle": "The Limit Definition of the Derivative",
    "formulaLatex": "f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}",
    "formulaNote": "Also written in Leibniz notation as \\frac{df}{dx}. This is the foundational definition from which all shortcut rules are derived.",
    "diagramType": "first_principles_secant",
    "diagramCaption": "Sketch: A point (x, f(x)) and nearby point (x+h, f(x+h)) with the secant line pivoting into the tangent line as h -> 0.",
    "example": {
      "problem": "Derive the derivative formula for f(x) = x^3 directly from first principles using the limit definition.",
      "steps": [
        {
          "step": "1. State the limit definition:",
          "math": "f'(x) = \\lim_{h \\to 0} \\frac{(x + h)^3 - x^3}{h}",
          "explanation": "Replace input with (x + h)."
        },
        {
          "step": "2. Expand (x + h)^3 using binomial expansion:",
          "math": "(x + h)^3 = x^3 + 3x^2 h + 3x h^2 + h^3",
          "explanation": "Use (a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3."
        },
        {
          "step": "3. Subtract f(x) = x^3:",
          "math": "(x + h)^3 - x^3 = 3x^2 h + 3x h^2 + h^3",
          "explanation": "The x^3 subtracts away cleanly."
        },
        {
          "step": "4. Factor out h and cancel with denominator:",
          "math": "\\frac{h(3x^2 + 3xh + h^2)}{h} = 3x^2 + 3xh + h^2",
          "explanation": "Valid because h != 0."
        },
        {
          "step": "5. Take the limit as h -> 0:",
          "math": "f'(x) = \\lim_{h \\to 0} (3x^2 + 3xh + h^2) = 3x^2 + 0 + 0 = 3x^2",
          "explanation": "The derivative of x^3 is 3x^2! We just derived the power rule!"
        }
      ]
    },
    "practice": {
      "question": "Use the limit definition to derive the derivative of f(x) = 5x + 7.",
      "hint": "Compute \\frac{f(x+h) - f(x)}{h} = \\frac{[5(x+h) + 7] - [5x + 7]}{h}.",
      "solutionSteps": [
        "Numerator: 5x + 5h + 7 - 5x - 7 = 5h.",
        "Ratio: 5h / h = 5.",
        "Limit as h -> 0: f'(x) = 5. (Makes sense: a line of slope 5 has a constant derivative of 5 everywhere!)."
      ]
    },
    "commonMistake": {
      "title": "Dropping the \\lim_{h \\to 0} symbol prematurely!",
      "note": "You must keep writing \\lim_{h \\to 0} in front of every step of your work until the very final moment where you actually replace h with 0. Leaving it off is a severe mathematical syntax error on exams."
    }
  },
  {
    "id": 11,
    "partId": 3,
    "number": "11",
    "title": "The Derivative as the Tangent Line Slope",
    "tag": "Differentiation",
    "subtitle": "Visual geometry: the unique line that kisses the curve at exactly one point",
    "intuition": "If a curved road represents a function y = f(x), imagine your car's headlights pointing forward. If you suddenly hit a patch of frictionless black ice at point (x_0, y_0), your car won't follow the curve; it will shoot off in a straight line in the exact direction you were pointing at that instant! That line is the tangent line. While a secant line cuts through the curve at two separate points, the tangent line grazes the curve at a single point, matching the curve's exact instantaneous heading. The slope of this tangent line is precisely f'(x_0).",
    "formulaTitle": "Equation of the Tangent Line",
    "formulaLatex": "y - y_0 = f'(x_0)(x - x_0) \\iff y = f(x_0) + f'(x_0)(x - x_0)",
    "formulaNote": "This equation is also called the local linear approximation L(x) of the function near x_0.",
    "diagramType": "tangent_kisses_curve",
    "diagramCaption": "Sketch: A curve y = f(x) with tangent line touching at (x0, y0) with slope m = f'(x0).",
    "example": {
      "problem": "Find the equation of the tangent line to the curve f(x) = x^2 - 3x + 4 at the point where x = 2.",
      "steps": [
        {
          "step": "1. Find the y-coordinate of the contact point:",
          "math": "y_0 = f(2) = 2^2 - 3(2) + 4 = 4 - 6 + 4 = 2",
          "explanation": "The tangent line touches the curve at (2, 2)."
        },
        {
          "step": "2. Find the derivative formula f'(x):",
          "math": "f'(x) = 2x - 3",
          "explanation": "Using the derivative of x^2 which is 2x, and the derivative of -3x which is -3."
        },
        {
          "step": "3. Evaluate the slope at x = 2:",
          "math": "m = f'(2) = 2(2) - 3 = 4 - 3 = 1",
          "explanation": "The slope of the curve at x = 2 is exactly 1."
        },
        {
          "step": "4. Write point-slope equation:",
          "math": "y - 2 = 1(x - 2) \\implies y = x - 2 + 2 \\implies y = x",
          "explanation": "The tangent line is the simple diagonal line y = x."
        }
      ]
    },
    "practice": {
      "question": "Find the slope and equation of the tangent line to y = x^3 at the point (1, 1), knowing that \\frac{d}{dx}[x^3] = 3x^2.",
      "hint": "Evaluate m = 3(1^2) and use y - y_1 = m(x - x_1).",
      "solutionSteps": [
        "Slope: m = 3(1^2) = 3.",
        "Point is (1, 1).",
        "Tangent equation: y - 1 = 3(x - 1) \\implies y = 3x - 3 + 1 \\implies y = 3x - 2."
      ]
    },
    "commonMistake": {
      "title": "Using f'(x) instead of a number for the slope of a line!",
      "note": "A tangent line is a straight line, so its slope m MUST be a fixed constant number like 1 or 3, not a variable expression like 2x - 3. Always evaluate f'(x_0) at the specific coordinate point before writing the line's equation!"
    }
  },
  {
    "id": 12,
    "partId": 3,
    "number": "12",
    "title": "Basic Derivative Rules: Power, Constant, Sum",
    "tag": "Differentiation",
    "subtitle": "Say goodbye to long limits: the shortcut engine of calculus",
    "intuition": "Deriving derivatives from first principles using (x+h) is like walking across the country on foot: it builds great character, but you wouldn't want to do it every morning to get groceries. Fortunately, mathematicians noticed patterns. If f(x) = x^2, the derivative is 2x^1. If f(x) = x^3, the derivative is 3x^2. If f(x) = x^4, it is 4x^3. Notice the pattern? The exponent leaps down to become the front multiplier, and the power drops by 1! With this Power Rule, along with the Constant Rule and Sum Rule, you can differentiate any polynomial in 5 seconds flat.",
    "formulaTitle": "The Big Three Basic Rules",
    "formulaLatex": "\\frac{d}{dx}[c] = 0, \\quad \\frac{d}{dx}[x^n] = n x^{n-1}, \\quad \\frac{d}{dx}[c f(x) + g(x)] = c f'(x) + g'(x)",
    "formulaNote": "The power rule works for ANY real number n: positive, negative, or fractional (e.g. \\sqrt{x} = x^{1/2})! A constant by itself doesn't change, so its rate of change is 0.",
    "diagramType": "power_rule_geometry",
    "diagramCaption": "Sketch: Geometric derivation of power rule: a square x by x grows by two thin strips x*dx and one tiny corner dx^2.",
    "example": {
      "problem": "Differentiate the function f(x) = 4x^5 - 2x^3 + \\frac{7}{x^2} + 3\\sqrt{x} - 9.",
      "steps": [
        {
          "step": "1. Rewrite all terms as powers of x:",
          "math": "f(x) = 4x^5 - 2x^3 + 7x^{-2} + 3x^{1/2} - 9",
          "explanation": "Convert denominators to negative exponents: 1/x^2 = x^{-2}, and radicals to fractional exponents: \\sqrt{x} = x^{1/2}."
        },
        {
          "step": "2. Differentiate term by term using power rule \\frac{d}{dx}[x^n] = n x^{n-1}:",
          "math": "\\frac{d}{dx}[4x^5] = 4(5x^4) = 20x^4",
          "explanation": "Multiply coefficient by power, decrement power by 1."
        },
        {
          "step": "3. Differentiate remaining terms:",
          "math": "\\frac{d}{dx}[-2x^3] = -6x^2, \\quad \\frac{d}{dx}[7x^{-2}] = 7(-2x^{-3}) = -14x^{-3}",
          "explanation": "Be careful: -2 - 1 = -3."
        },
        {
          "step": "4. Differentiate radical and constant:",
          "math": "\\frac{d}{dx}[3x^{1/2}] = 3\\left(\\frac{1}{2}x^{-1/2}\\right) = \\frac{3}{2}x^{-1/2}, \\quad \\frac{d}{dx}[-9] = 0",
          "explanation": "1/2 - 1 = -1/2. The constant 9 vanishes."
        },
        {
          "step": "5. Assemble the complete derivative:",
          "math": "f'(x) = 20x^4 - 6x^2 - \\frac{14}{x^3} + \\frac{3}{2\\sqrt{x}}",
          "explanation": "Clean, elegant, and calculated without a single limit calculation."
        }
      ]
    },
    "practice": {
      "question": "Differentiate y = 6\\sqrt[3]{x} + \\frac{5}{x}.",
      "hint": "Rewrite as 6x^{1/3} + 5x^{-1} before applying n x^{n-1}.",
      "solutionSteps": [
        "Rewrite: y = 6x^{1/3} + 5x^{-1}.",
        "\\frac{d}{dx}[6x^{1/3}] = 6 \\cdot \\frac{1}{3} x^{1/3 - 1} = 2x^{-2/3} = \\frac{2}{\\sqrt[3]{x^2}}.",
        "\\frac{d}{dx}[5x^{-1}] = 5(-1)x^{-2} = -5x^{-2} = -\\frac{5}{x^2}.",
        "Final result: y' = \\frac{2}{\\sqrt[3]{x^2}} - \\frac{5}{x^2}."
      ]
    },
    "commonMistake": {
      "title": "Subtracting from negative powers the wrong way!",
      "note": "Students often think -2 - 1 = -1. Remember your number line: subtracting 1 moves left! -2 - 1 = -3. So the derivative of x^{-2} is -2x^{-3}, NOT -2x^{-1}."
    }
  },
  {
    "id": 13,
    "partId": 3,
    "number": "13",
    "title": "Product Rule, Quotient Rule, Chain Rule",
    "tag": "Differentiation",
    "subtitle": "The holy trinity of calculus shortcuts explained through intuitive analogies",
    "intuition": "What if two functions are multiplying each other, like u(x) * v(x)? Imagine a rectangular farm field of length u and width v. Its area is A = u * v. If both length and width grow slightly over time, how does the area grow? You get a strip added on the right side (u * \\Delta v) and a strip added on the top (v * \\Delta u). You do NOT simply multiply the growth rates! Thus: (uv)' = u'v + uv'. Next comes the Chain Rule \u2014 the single most used rule in all of calculus. Think of connected gears: if Gear A turns 3 times as fast as Gear B, and Gear B turns 4 times as fast as Gear C, how fast does Gear A turn relative to Gear C? 3 * 4 = 12 times! You multiply rates along the chain.",
    "formulaTitle": "Product, Quotient, and Chain Rules",
    "formulaLatex": "(u v)' = u' v + u v', \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u' v - u v'}{v^2}, \\quad \\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)",
    "formulaNote": "Memorable mnemonic for quotient: 'Low d-High minus High d-Low, over the square of what's below!' For chain: 'Differentiate the outside, leave the inside alone, then multiply by the derivative of the inside.'",
    "diagramType": "product_rectangle_chain_gears",
    "diagramCaption": "Sketch: Growing rectangle showing why area change is u*dv + v*du, plus interlocking gears for chain rule.",
    "example": {
      "problem": "Differentiate h(x) = (3x^2 - 5)^4 * (2x + 1).",
      "steps": [
        {
          "step": "1. Recognize overall structure:",
          "math": "h(x) = u(x) \\cdot v(x) \\quad \\text{with } u(x) = (3x^2 - 5)^4, \\, v(x) = 2x + 1",
          "explanation": "This is a product of two functions, and the first factor u(x) requires the Chain Rule!"
        },
        {
          "step": "2. Find u'(x) using the Chain Rule:",
          "math": "u'(x) = 4(3x^2 - 5)^3 \\cdot (6x) = 24x(3x^2 - 5)^3",
          "explanation": "Outside function is (...)^4, inside function is 3x^2 - 5."
        },
        {
          "step": "3. Find v'(x):",
          "math": "v'(x) = 2",
          "explanation": "Simple linear derivative."
        },
        {
          "step": "4. Apply the Product Rule (u'v + uv'):",
          "math": "h'(x) = [24x(3x^2 - 5)^3](2x + 1) + (3x^2 - 5)^4[2]",
          "explanation": "Substitute into u'v + uv'."
        },
        {
          "step": "5. Factor out common terms to simplify:",
          "math": "h'(x) = 2(3x^2 - 5)^3 \\left[ 12x(2x + 1) + (3x^2 - 5) \\right] = 2(3x^2 - 5)^3 (27x^2 + 12x - 5)",
          "explanation": "Factoring makes finding critical points much easier later!"
        }
      ]
    },
    "practice": {
      "question": "Differentiate f(x) = \\frac{x^2 + 1}{2x - 3} using the Quotient Rule.",
      "hint": "Let u = x^2 + 1 (High) and v = 2x - 3 (Low).",
      "solutionSteps": [
        "u' = 2x and v' = 2.",
        "Quotient formula: \\frac{u'v - uv'}{v^2} = \\frac{(2x)(2x - 3) - (x^2 + 1)(2)}{(2x - 3)^2}.",
        "Expand numerator: 4x^2 - 6x - 2x^2 - 2 = 2x^2 - 6x - 2.",
        "Final result: f'(x) = \\frac{2x^2 - 6x - 2}{(2x - 3)^2}."
      ]
    },
    "commonMistake": {
      "title": "Writing (f * g)' = f' * g'!",
      "note": "The product rule is NOT just multiplying the derivatives! If f(x) = x and g(x) = x, their product is x^2 whose derivative is 2x. But f' * g' = 1 * 1 = 1 != 2x. Never make this beginner blunder!"
    }
  },
  {
    "id": 14,
    "partId": 3,
    "number": "14",
    "title": "Derivatives of Trig, Exponential, and Log Functions",
    "tag": "Differentiation",
    "subtitle": "The special functions that govern oscillations, waves, and organic growth",
    "intuition": "Why is Euler's number e approximately 2.71828 the most famous constant in higher mathematics? Because the exponential curve y = e^x is the ONLY non-trivial function whose slope at every single point is exactly equal to its current height! If y = 10, its slope is 10. If y = 1000, its slope is 1000. It is its own derivative: d/dx[e^x] = e^x! Meanwhile, trigonometric functions dance in a perpetual four-step circle: the derivative of sin(x) is cos(x), the derivative of cos(x) is -sin(x), then -cos(x), and back to sin(x). And the natural logarithm ln(x) turns out to be the magical missing puzzle piece whose derivative fills the hole 1/x.",
    "formulaTitle": "Transcendental Derivative Formulas",
    "formulaLatex": "\\frac{d}{dx}[\\sin x] = \\cos x, \\quad \\frac{d}{dx}[\\cos x] = -\\sin x, \\quad \\frac{d}{dx}[e^x] = e^x, \\quad \\frac{d}{dx}[\\ln x] = \\frac{1}{x}",
    "formulaNote": "With chain rule: \\frac{d}{dx}[e^{g(x)}] = e^{g(x)} g'(x) and \\frac{d}{dx}[\\ln(g(x))] = \\frac{g'(x)}{g(x)}. Tangent derivative: \\frac{d}{dx}[\\tan x] = \\sec^2 x.",
    "diagramType": "trig_unit_circle_exp",
    "diagramCaption": "Sketch: Sine/cosine wave slopes showing slope of sin(x) at x=0 is 1, and the unique e^x curve with slope = height.",
    "example": {
      "problem": "Differentiate y = e^{3x} \\cos(2x).",
      "steps": [
        {
          "step": "1. Identify product structure:",
          "math": "y = u \\cdot v \\quad \\text{with } u = e^{3x} \\text{ and } v = \\cos(2x)",
          "explanation": "Requires Product Rule combined with Chain Rule on both factors."
        },
        {
          "step": "2. Differentiate u = e^{3x} using Chain Rule:",
          "math": "u' = e^{3x} \\cdot \\frac{d}{dx}[3x] = 3e^{3x}",
          "explanation": "Derivative of e^{g(x)} is e^{g(x)} g'(x)."
        },
        {
          "step": "3. Differentiate v = \\cos(2x) using Chain Rule:",
          "math": "v' = -\\sin(2x) \\cdot \\frac{d}{dx}[2x] = -2\\sin(2x)",
          "explanation": "Derivative of cos(u) is -sin(u) * u'."
        },
        {
          "step": "4. Apply the Product Rule:",
          "math": "y' = u'v + uv' = [3e^{3x}]\\cos(2x) + [e^{3x}][-2\\sin(2x)]",
          "explanation": "Substitute pieces."
        },
        {
          "step": "5. Factor out common term e^{3x}:",
          "math": "y' = e^{3x}\\left[3\\cos(2x) - 2\\sin(2x)\\right]",
          "explanation": "Factored form reveals the exponential envelope."
        }
      ]
    },
    "practice": {
      "question": "Differentiate g(x) = \\ln(x^2 + 5).",
      "hint": "Use the Chain Rule for logarithms: \\frac{d}{dx}[\\ln(u)] = \\frac{u'}{u}.",
      "solutionSteps": [
        "Inside function is u = x^2 + 5.",
        "Derivative of inside: u' = 2x.",
        "Result: g'(x) = \\frac{u'}{u} = \\frac{2x}{x^2 + 5}."
      ]
    },
    "commonMistake": {
      "title": "Forgetting the negative sign when differentiating cosine!",
      "note": "All co-functions in trigonometry (cosine, cotangent, cosecant) produce a NEGATIVE sign when you differentiate them: d/dx[cos x] = -sin x. Sine does not have a negative sign: d/dx[sin x] = +cos x."
    }
  },
  {
    "id": 15,
    "partId": 3,
    "number": "15",
    "title": "Applications: Max/Min & Related Rates",
    "tag": "Differentiation",
    "subtitle": "Real-world engineering: finding peak efficiency and tracking moving ladders",
    "intuition": "Why do companies hire mathematicians? To maximize profit and minimize cost! At the very crest of a hill or the lowest point in a valley, the slope of the terrain momentarily becomes perfectly flat (f'(x) = 0). By setting the derivative equal to zero, we can pinpoint optimal points instantly. Another thrilling application is Related Rates: if two quantities are bound together by geometry (like the sides of a right triangle formed by a ladder leaning against a wall), knowing how fast the bottom of the ladder is sliding away tells you precisely how fast the top of the ladder is plummeting downward!",
    "formulaTitle": "Critical Points & Related Rates Chain",
    "formulaLatex": "f'(c) = 0 \\text{ or undefined} \\implies c \\text{ is a critical point}; \\quad \\frac{d}{dt}[x^2 + y^2 = L^2] \\implies 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0",
    "formulaNote": "Second derivative test: If f'(c) = 0 and f''(c) > 0, the curve is cupped upward like a smile (local minimum). If f''(c) < 0, it is a local maximum.",
    "diagramType": "sliding_ladder_optimization",
    "diagramCaption": "Sketch: Ladder sliding down a wall showing x(t), y(t) with velocity vectors, and peak of a profit curve.",
    "example": {
      "problem": "A 10-foot ladder leans against a vertical wall. The base of the ladder is pulled away from the wall at a constant rate of 2 ft/s. How fast is the top of the ladder sliding down the wall when the base is 6 ft from the wall?",
      "steps": [
        {
          "step": "1. Draw a sketch and write the geometric relation:",
          "math": "x^2 + y^2 = 10^2 = 100",
          "explanation": "Pythagorean theorem connects horizontal distance x and vertical height y."
        },
        {
          "step": "2. Find y when x = 6:",
          "math": "6^2 + y^2 = 100 \\implies 36 + y^2 = 100 \\implies y^2 = 64 \\implies y = 8\\text{ ft}",
          "explanation": "Classic 6-8-10 right triangle."
        },
        {
          "step": "3. Differentiate both sides with respect to time t using Chain Rule:",
          "math": "\\frac{d}{dt}[x^2 + y^2] = \\frac{d}{dt}[100] \\implies 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0",
          "explanation": "Both x and y depend on time t, so we use implicit differentiation."
        },
        {
          "step": "4. Substitute known values (x = 6, y = 8, dx/dt = 2):",
          "math": "2(6)(2) + 2(8)\\frac{dy}{dt} = 0 \\implies 24 + 16\\frac{dy}{dt} = 0",
          "explanation": "Plug in the known rates."
        },
        {
          "step": "5. Solve for dy/dt:",
          "math": "16\\frac{dy}{dt} = -24 \\implies \\frac{dy}{dt} = -\\frac{24}{16} = -1.5\\text{ ft/s}",
          "explanation": "The negative sign confirms the ladder is sliding DOWN at 1.5 feet per second."
        }
      ]
    },
    "practice": {
      "question": "Find the maximum value of the profit function P(x) = -2x^2 + 12x + 50, and verify it is a maximum using the second derivative test.",
      "hint": "Set P'(x) = 0 to find the critical point, then evaluate P''(x).",
      "solutionSteps": [
        "P'(x) = -4x + 12.",
        "Set -4x + 12 = 0 ==> 4x = 12 ==> x = 3.",
        "P''(x) = -4. Since P''(3) = -4 < 0, concave down, confirming a maximum!",
        "Max profit: P(3) = -2(3^2) + 12(3) + 50 = -18 + 36 + 50 = 68."
      ]
    },
    "commonMistake": {
      "title": "Plugging in numbers before differentiating in related rates!",
      "note": "If you plug in x = 6 into x^2 + y^2 = 100 BEFORE differentiating, you get 36 + y^2 = 100, and its derivative with respect to time would lose the dx/dt term completely! Always differentiate variables with respect to t first, and plug in the instant's numbers second."
    }
  },
  {
    "id": 16,
    "partId": 4,
    "number": "16",
    "title": "The Problem of Finding Area Under a Curve",
    "tag": "Integration",
    "subtitle": "From ancient geometry to measuring curved, irregular spaces",
    "intuition": "Ancient surveyors knew how to calculate the area of squares, rectangles, and triangles. If a shape has straight edges, you can chop it up into neat triangles and add their areas together. But what happens if you need to measure the area under a smooth, curving parabola or ocean coastline? A curved boundary laughs at straight triangles! For centuries, mathematicians could only guess. The genius idea: what if we fill the region under the curve with a massive army of ultra-thin vertical rectangles? Rectangles are easy to calculate: base * height. As the rectangles get thinner and thinner, the jagged staircase error shrinks to zero!",
    "formulaTitle": "The Area Goal Under a Curve",
    "formulaLatex": "\\text{Area} = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x = \\int_a^b f(x) \\, dx",
    "formulaNote": "The elongated 'S' symbol \\int was invented by Leibniz from the Latin word 'Summa' (sum). It represents adding together an infinite number of infinitely thin strips!",
    "diagramType": "curved_area_puzzle",
    "diagramCaption": "Sketch: An irregular curved lake/hill region being approximated by vertical rectangular slices.",
    "example": {
      "problem": "Estimate the area under f(x) = x^2 from x = 0 to x = 2 using just 2 equal-width rectangles with right endpoints.",
      "steps": [
        {
          "step": "1. Calculate rectangle width \\Delta x:",
          "math": "\\Delta x = \\frac{b - a}{n} = \\frac{2 - 0}{2} = 1",
          "explanation": "Divide the total interval [0, 2] into 2 equal pieces: [0, 1] and [1, 2]."
        },
        {
          "step": "2. Determine right-endpoint sample points:",
          "math": "x_1 = 1, \\quad x_2 = 2",
          "explanation": "Use the right edge of each sub-interval."
        },
        {
          "step": "3. Calculate height of each rectangle:",
          "math": "h_1 = f(1) = 1^2 = 1, \\quad h_2 = f(2) = 2^2 = 4",
          "explanation": "Evaluate the function at each sample point."
        },
        {
          "step": "4. Sum the rectangular areas:",
          "math": "\\text{Area} \\approx (1 \\cdot 1) + (4 \\cdot 1) = 1 + 4 = 5",
          "explanation": "This is an overestimate because the right rectangles jut out above the rising curve."
        }
      ]
    },
    "practice": {
      "question": "For the exact same function f(x) = x^2 on [0, 2] with n = 2 rectangles, calculate the area using LEFT endpoints (x_0 = 0 and x_1 = 1).",
      "hint": "Heights will be f(0) = 0 and f(1) = 1.",
      "solutionSteps": [
        "Width \\Delta x = 1.",
        "Heights: h_1 = f(0) = 0^2 = 0, h_2 = f(1) = 1^2 = 1.",
        "Area sum: (0 * 1) + (1 * 1) = 0 + 1 = 1.",
        "Notice the true area must lie between lower bound 1 and upper bound 5!"
      ]
    },
    "commonMistake": {
      "title": "Thinking rectangles can only approximate, never give the exact area!",
      "note": "A finite number of rectangles is indeed an approximation. But when we take the limit as n -> \\infty (rectangles become infinitely numerous and infinitely thin), the approximation error vanishes completely to zero, yielding the 100% exact true area!"
    }
  },
  {
    "id": 17,
    "partId": 4,
    "number": "17",
    "title": "Riemann Sums (Visualizing Rectangles)",
    "tag": "Integration",
    "subtitle": "Left, Right, Midpoint, and Trapezoid approximations",
    "intuition": "Named after German mathematician Bernhard Riemann, a Riemann sum is simply the formal machinery for slicing an area into n vertical strips. You have choices for how to pick the height of each rectangle: Left Endpoint (LRAM), Right Endpoint (RRAM), or Midpoint (MRAM). If a curve is increasing (sloping upward), Left rectangles always underestimate the true area (they sit under the curve), while Right rectangles always overestimate it (they stick out like stairs). The Midpoint and Trapezoid methods balance out the peaks and valleys, converging to the exact answer with incredible speed!",
    "formulaTitle": "Riemann Sum Formula",
    "formulaLatex": "R_n = \\sum_{i=1}^n f(x_i) \\Delta x \\quad \\text{where } \\Delta x = \\frac{b - a}{n}, \\, x_i = a + i \\Delta x",
    "formulaNote": "The sigma \\sum notation simply means: calculate f(x_i) * \\Delta x for strip 1, strip 2, up to strip n, and add them all together.",
    "diagramType": "riemann_rectangles_bars",
    "diagramCaption": "Sketch: Left vs Right vs Midpoint Riemann rectangles showing overestimates and underestimates under a curve.",
    "example": {
      "problem": "Approximate \\int_1^4 (2x + 1) \\, dx using n = 3 equal subintervals and Midpoint Riemann sum.",
      "steps": [
        {
          "step": "1. Calculate strip width \\Delta x:",
          "math": "\\Delta x = \\frac{4 - 1}{3} = \\frac{3}{3} = 1",
          "explanation": "Subintervals are [1, 2], [2, 3], and [3, 4]."
        },
        {
          "step": "2. Find midpoints of each subinterval:",
          "math": "m_1 = 1.5, \\quad m_2 = 2.5, \\quad m_3 = 3.5",
          "explanation": "Average the endpoints of each interval."
        },
        {
          "step": "3. Evaluate function heights at midpoints f(x) = 2x + 1:",
          "math": "f(1.5) = 2(1.5) + 1 = 4, \\quad f(2.5) = 2(2.5) + 1 = 6, \\quad f(3.5) = 2(3.5) + 1 = 8",
          "explanation": "Calculate the heights."
        },
        {
          "step": "4. Compute the Midpoint sum:",
          "math": "M_3 = \\Delta x \\cdot [f(m_1) + f(m_2) + f(m_3)] = 1 \\cdot (4 + 6 + 8) = 18",
          "explanation": "Because f(x) is a straight line, the midpoint sum is actually 100% exact here!"
        }
      ]
    },
    "practice": {
      "question": "Find the width \\Delta x and sample points x_1, x_2, x_3, x_4 for a Right Riemann sum on the interval [2, 10] with n = 4 rectangles.",
      "hint": "\\Delta x = \\frac{b-a}{n} = \\frac{10-2}{4}.",
      "solutionSteps": [
        "\\Delta x = \\frac{10 - 2}{4} = \\frac{8}{4} = 2.",
        "Right endpoints start by adding \\Delta x to a = 2:",
        "x_1 = 2 + 2 = 4, x_2 = 4 + 2 = 6, x_3 = 6 + 2 = 8, x_4 = 8 + 2 = 10."
      ]
    },
    "commonMistake": {
      "title": "Confusing the number of intervals n with the number of boundary tick marks!",
      "note": "If you divide an interval into n = 4 strips, there are 5 boundary points (x_0, x_1, x_2, x_3, x_4). For a Left sum, you use the first four (x_0 ... x_3); for a Right sum, you use the last four (x_1 ... x_4)."
    }
  },
  {
    "id": 18,
    "partId": 4,
    "number": "18",
    "title": "The Definite Integral as a Limit of Sums",
    "tag": "Integration",
    "subtitle": "From clunky sum notation to the elegant Leibniz integral",
    "intuition": "What happens when you let the number of rectangles n rocket toward infinity? Each individual rectangle becomes so paper-thin that its width is written as dx (an infinitesimal sliver of width). The discrete jagged summation sign \\sum smoothly morphs into the continuous flowing integration symbol \\int. A definite integral \\int_a^b f(x) dx is nothing more and nothing less than the exact net signed area between the curve and the horizontal x-axis from x = a to x = b. Regions above the axis count as positive area; regions below count as negative area!",
    "formulaTitle": "The Definite Integral Definition",
    "formulaLatex": "\\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i) \\Delta x",
    "formulaNote": "Properties: \\int_a^a f(x)dx = 0, \\int_a^b f(x)dx = -\\int_b^a f(x)dx, and \\int_a^c f(x)dx + \\int_c^b f(x)dx = \\int_a^b f(x)dx.",
    "diagramType": "integral_net_signed_area",
    "diagramCaption": "Sketch: Continuous area under curve showing positive area above x-axis and negative area below x-axis.",
    "example": {
      "problem": "Evaluate \\int_{-2}^3 4 \\, dx using geometric area rather than algebra.",
      "steps": [
        {
          "step": "1. Graph the function:",
          "math": "f(x) = 4 \\quad \\text{for } x \\in [-2, 3]",
          "explanation": "The graph is a flat horizontal line at height y = 4."
        },
        {
          "step": "2. Identify the geometric shape formed under the curve:",
          "math": "\\text{Width} = 3 - (-2) = 5, \\quad \\text{Height} = 4",
          "explanation": "It is a simple rectangle!"
        },
        {
          "step": "3. Calculate the area:",
          "math": "\\text{Area} = \\text{Width} \\times \\text{Height} = 5 \\times 4 = 20",
          "explanation": "Since it is completely above the x-axis, the net signed area is +20."
        },
        {
          "step": "4. Write final result:",
          "math": "\\int_{-2}^3 4 \\, dx = 20",
          "explanation": "Integrals represent geometric area!"
        }
      ]
    },
    "practice": {
      "question": "Evaluate \\int_0^4 (2x) \\, dx geometrically by recognizing the shape formed with the x-axis.",
      "hint": "Graph y = 2x from x = 0 to x = 4. What standard triangle does it form?",
      "solutionSteps": [
        "At x = 0, y = 0. At x = 4, y = 2(4) = 8.",
        "The shape is a right-angled triangle with base b = 4 and height h = 8.",
        "Area of triangle: 0.5 * base * height = 0.5 * 4 * 8 = 16.",
        "Therefore, \\int_0^4 2x \\, dx = 16."
      ]
    },
    "commonMistake": {
      "title": "Ignoring negative area below the x-axis!",
      "note": "The definite integral computes NET signed area! If a function dips below the x-axis (like \\sin x from 0 to 2\\pi), the area beneath the axis is counted as NEGATIVE and cancels out the positive area above: \\int_0^{2\\pi} \\sin x \\, dx = 0."
    }
  },
  {
    "id": 19,
    "partId": 4,
    "number": "19",
    "title": "The Fundamental Theorem of Calculus (The Heart of Calculus)",
    "tag": "Integration",
    "subtitle": "WHY differentiation and integration are exact inverse operations",
    "intuition": "Stop and appreciate this moment: this is the crown jewel of mathematics. For centuries, the problem of tangents (differentiation: how fast is something changing?) and the problem of areas (integration: how much stuff has accumulated?) were treated as two completely unrelated branches of science. Then Isaac Newton and Gottfried Wilhelm Leibniz discovered something mind-blowing: THEY ARE EXACT INVERSES OF EACH OTHER! If you accumulate area under a curve f(t) from a to x, the rate at which that accumulated area grows as you drag the right wall forward is EXACTLY equal to the current height of the curve f(x)! Differentiation undoes integration, and integration undoes differentiation.",
    "formulaTitle": "The Fundamental Theorem of Calculus (FTC)",
    "formulaLatex": "\\text{Part 1: } \\frac{d}{dx} \\left[ \\int_a^x f(t) \\, dt \\right] = f(x) \\qquad \\text{Part 2: } \\int_a^b f(x) \\, dx = F(b) - F(a)",
    "formulaNote": "Where F'(x) = f(x) (F is an antiderivative of f). This means you never have to calculate infinite Riemann sums again \u2014 just find an antiderivative and subtract endpoints!",
    "diagramType": "ftc_accumulator_showcase",
    "diagramCaption": "Sketch: The accumulator area A(x) growing by a thin sliver of width dx and height f(x), proving dA/dx = f(x).",
    "example": {
      "problem": "Evaluate \\int_1^3 (3x^2 + 2x) \\, dx using the Fundamental Theorem of Calculus Part 2.",
      "steps": [
        {
          "step": "1. Find an antiderivative F(x) such that F'(x) = 3x^2 + 2x:",
          "math": "F(x) = x^3 + x^2",
          "explanation": "Reverse the power rule: add 1 to the exponent and divide by the new exponent."
        },
        {
          "step": "2. Set up the bracket evaluation notation:",
          "math": "\\int_1^3 (3x^2 + 2x) \\, dx = \\left[ x^3 + x^2 \\right]_1^3",
          "explanation": "We must evaluate F(3) - F(1)."
        },
        {
          "step": "3. Evaluate at upper limit x = 3:",
          "math": "F(3) = 3^3 + 3^2 = 27 + 9 = 36",
          "explanation": "Plug in the top bound."
        },
        {
          "step": "4. Evaluate at lower limit x = 1:",
          "math": "F(1) = 1^3 + 1^2 = 1 + 1 = 2",
          "explanation": "Plug in the bottom bound."
        },
        {
          "step": "5. Subtract F(3) - F(1):",
          "math": "36 - 2 = 34",
          "explanation": "The exact area under 3x^2 + 2x from 1 to 3 is precisely 34!"
        }
      ]
    },
    "practice": {
      "question": "Evaluate \\int_0^2 4x^3 \\, dx using the Fundamental Theorem of Calculus.",
      "hint": "What function has derivative 4x^3? Remember \\frac{d}{dx}[x^4] = 4x^3.",
      "solutionSteps": [
        "Antiderivative of 4x^3 is F(x) = x^4.",
        "Evaluate at upper limit x = 2: F(2) = 2^4 = 16.",
        "Evaluate at lower limit x = 0: F(0) = 0^4 = 0.",
        "Result: F(2) - F(0) = 16 - 0 = 16."
      ]
    },
    "commonMistake": {
      "title": "Subtracting in the wrong direction: F(a) - F(b)!",
      "note": "It is ALWAYS [Upper Limit Evaluation] minus [Lower Limit Evaluation]: F(b) - F(a). If you reverse the order, you will get the opposite sign!"
    }
  },
  {
    "id": 20,
    "partId": 4,
    "number": "20",
    "title": "Basic Integration Rules: Substitution & By Parts",
    "tag": "Integration",
    "subtitle": "Reversing the Chain Rule and Product Rule to solve complex integrals",
    "intuition": "Finding derivatives was mechanical: as long as you follow the rules, every function can be differentiated. But integration is an art! It is like un-scrambling an egg. To undo the Chain Rule, we use U-Substitution: we spot an inner function u whose derivative du is sitting right nearby in the integral, allowing us to swap complicated variables for a clean, simple u. To undo the Product Rule, we use Integration by Parts: \\int u dv = uv - \\int v du. This allows us to trade a difficult integral for an easier one!",
    "formulaTitle": "U-Substitution & Integration by Parts",
    "formulaLatex": "\\int f(g(x)) g'(x) \\, dx = \\int f(u) \\, du, \\qquad \\int u \\, dv = u v - \\int v \\, du",
    "formulaNote": "Mnemonic for choosing u in integration by parts: LIATE (Logarithmic, Inverse trig, Algebraic, Trig, Exponential). Choose u as whichever comes first!",
    "diagramType": "usub_and_byparts",
    "diagramCaption": "Sketch: U-sub variable transformation stretching the axis, and geometric rectangle dissection for Integration by Parts.",
    "example": {
      "problem": "Evaluate \\int x e^{x^2} \\, dx using u-substitution.",
      "steps": [
        {
          "step": "1. Identify the inner composite function:",
          "math": "u = x^2",
          "explanation": "The exponent x^2 is trapped inside the exponential function."
        },
        {
          "step": "2. Take the differential du:",
          "math": "du = 2x \\, dx \\implies x \\, dx = \\frac{1}{2} du",
          "explanation": "Notice the factor x dx is already present in our original integral!"
        },
        {
          "step": "3. Substitute completely into terms of u:",
          "math": "\\int e^{x^2} (x \\, dx) = \\int e^u \\left(\\frac{1}{2} du\\right) = \\frac{1}{2} \\int e^u \\, du",
          "explanation": "All traces of the variable x have cleanly vanished."
        },
        {
          "step": "4. Integrate with respect to u:",
          "math": "\\frac{1}{2} e^u + C",
          "explanation": "Since the integral of e^u is just e^u."
        },
        {
          "step": "5. Back-substitute u = x^2:",
          "math": "\\frac{1}{2} e^{x^2} + C",
          "explanation": "Always express your final indefinite integral in the original variable!"
        }
      ]
    },
    "practice": {
      "question": "Evaluate \\int 2x (x^2 + 3)^4 \\, dx using substitution.",
      "hint": "Let u = x^2 + 3, so du = 2x dx.",
      "solutionSteps": [
        "Let u = x^2 + 3, then du = 2x dx.",
        "Integral becomes: \\int u^4 du.",
        "Integrate using power rule: \\frac{u^5}{5} + C.",
        "Back-substitute: \\frac{(x^2 + 3)^5}{5} + C."
      ]
    },
    "commonMistake": {
      "title": "Forgetting the constant of integration + C!",
      "note": "Any indefinite integral has infinitely many antiderivatives differing by a constant (since d/dx[C] = 0). Forgetting to write + C on exams is the number one point deduction in calculus worldwide!"
    }
  },
  {
    "id": 21,
    "partId": 4,
    "number": "21",
    "title": "Applications: Area Between Curves & Solids of Revolution",
    "tag": "Integration",
    "subtitle": "Spinning 2D graphs into 3D vases and computing mechanical work in physics",
    "intuition": "Integration is not restricted to flat land under a curve. If two curves cross each other (like a line and a parabola), the area trapped between them is simply the integral of [Top Function - Bottom Function]. Even cooler: imagine taking a 2D curve and spinning it 360 degrees around the x-axis like a clay pot on a potter's wheel. That sweep creates a 3D solid of revolution! By slicing that 3D solid into round pancake-like circular disks of radius r = f(x) and volume dV = \\pi r^2 dx, integration adds them up to calculate the exact volume of wine glasses, rocket cones, and machine parts.",
    "formulaTitle": "Area Between Curves & Disk Volume",
    "formulaLatex": "\\text{Area} = \\int_a^b [f_{\\text{top}}(x) - g_{\\text{bottom}}(x)] \\, dx, \\qquad V = \\int_a^b \\pi [f(x)]^2 \\, dx",
    "formulaNote": "Physics work formula: W = \\int_a^b F(x) dx. For a spring obeying Hooke's Law F(x) = kx, Work = \\int_0^x ks ds = \\frac{1}{2} k x^2.",
    "diagramType": "volume_revolution_3d",
    "diagramCaption": "Sketch: A 2D curve rotated 360 degrees around x-axis creating circular cross-section disks of volume pi*y^2*dx.",
    "example": {
      "problem": "Find the volume of the solid generated by revolving the region under y = \\sqrt{x} from x = 0 to x = 4 around the x-axis.",
      "steps": [
        {
          "step": "1. State the disk method formula:",
          "math": "V = \\int_a^b \\pi [R(x)]^2 \\, dx",
          "explanation": "Each cross-section perpendicular to the axis is a disk of radius R(x) = \\sqrt{x}."
        },
        {
          "step": "2. Square the radius:",
          "math": "[R(x)]^2 = (\\sqrt{x})^2 = x",
          "explanation": "The radical vanishes cleanly."
        },
        {
          "step": "3. Set up the definite integral:",
          "math": "V = \\pi \\int_0^4 x \\, dx",
          "explanation": "Limits are from x = 0 to x = 4."
        },
        {
          "step": "4. Integrate and evaluate:",
          "math": "V = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\pi \\left( \\frac{4^2}{2} - 0 \\right) = \\pi (8) = 8\\pi",
          "explanation": "The exact 3D volume is 8\\pi \\approx 25.132 cubic units."
        }
      ]
    },
    "practice": {
      "question": "Find the area of the region enclosed between the line y = 4 and the parabola y = x^2.",
      "hint": "Find intersection points where x^2 = 4 ==> x = -2 and x = 2. Then integrate Top - Bottom.",
      "solutionSteps": [
        "Intersection bounds: x = -2 to x = 2.",
        "Top curve is y = 4; Bottom curve is y = x^2.",
        "Integral: \\int_{-2}^2 (4 - x^2) \\, dx = \\left[ 4x - \\frac{x^3}{3} \\right]_{-2}^2.",
        "At x = 2: 8 - 8/3 = 16/3.",
        "At x = -2: -8 - (-8/3) = -16/3.",
        "Subtract: 16/3 - (-16/3) = 32/3 = 10.67."
      ]
    },
    "commonMistake": {
      "title": "Forgetting the factor of \\pi in volume integrals!",
      "note": "Each slice is a circular disk with area A = \\pi r^2. Leaving off the \\pi turns your 3D volume into a meaningless number that is off by more than a factor of 3!"
    }
  },
  {
    "id": 22,
    "partId": 5,
    "number": "22",
    "title": "Sequences and Series Basics",
    "tag": "Advanced",
    "subtitle": "Adding infinitely many numbers together without reaching infinity",
    "intuition": "Can you add an infinite list of numbers and get a normal, finite number? It sounds like a riddle! But suppose you have a chocolate bar. You eat half of it (1/2). Next day you eat half of what's left (1/4). Next day half again (1/8), then 1/16, forever. Notice that no matter how many days you continue, you will never eat more than ONE chocolate bar! The infinite sum 1/2 + 1/4 + 1/8 + ... converges precisely to 1. A sequence is an ordered list of numbers; a series is the sum of a sequence. Determining whether an infinite series converges (settles on a number) or diverges (blows up to infinity) is the gateway to advanced mathematics.",
    "formulaTitle": "Geometric Series Sum Formula",
    "formulaLatex": "\\sum_{n=0}^\\infty a r^n = a + a r + a r^2 + a r^3 + \\dots = \\frac{a}{1 - r} \\quad \\text{if and only if } |r| < 1",
    "formulaNote": "If the common ratio |r| >= 1, the series diverges. For example, 1 + 2 + 4 + 8 + ... blows up to infinity.",
    "diagramType": "geometric_series_chocolate",
    "diagramCaption": "Sketch: A 1x1 square chopped into 1/2, 1/4, 1/8, 1/16, visually proving the infinite sum fills the square to 1.",
    "example": {
      "problem": "A rubber superball is dropped from a height of 10 meters. Each time it hits the ground, it bounces back to exactly 60% (r = 0.6) of its previous height. Find the total vertical distance traveled by the ball before it comes to rest.",
      "steps": [
        {
          "step": "1. Break down the motion:",
          "math": "\\text{Down 1: } 10\\text{ m}. \\quad \\text{Up/Down 1: } 2(10 \\times 0.6) = 12\\text{ m}.",
          "explanation": "Every bounce after the initial drop travels up and back down, doubling the distance."
        },
        {
          "step": "2. Write total distance as a series:",
          "math": "D = 10 + 2(6) + 2(6 \\times 0.6) + 2(6 \\times 0.6^2) + \\dots = 10 + 2 \\sum_{n=0}^\\infty 6(0.6)^n",
          "explanation": "The bouncing part is an infinite geometric series with a = 6 and r = 0.6."
        },
        {
          "step": "3. Evaluate the infinite geometric series:",
          "math": "S = \\frac{a}{1 - r} = \\frac{6}{1 - 0.6} = \\frac{6}{0.4} = 15\\text{ meters}",
          "explanation": "Since |r| = 0.6 < 1, the sum converges cleanly."
        },
        {
          "step": "4. Compute total distance:",
          "math": "D = 10 + 2(15) = 10 + 30 = 40\\text{ meters}",
          "explanation": "The ball bounces an infinite number of times, yet travels a total finite distance of 40 meters!"
        }
      ]
    },
    "practice": {
      "question": "Find the sum of the infinite geometric series 5 + 5/3 + 5/9 + 5/27 + ...",
      "hint": "Identify the first term a = 5 and ratio r = 1/3, then use \\frac{a}{1-r}.",
      "solutionSteps": [
        "First term a = 5.",
        "Common ratio r = (5/3) / 5 = 1/3.",
        "Since |1/3| < 1, the series converges.",
        "Sum: S = \\frac{5}{1 - 1/3} = \\frac{5}{2/3} = 5 \\times \\frac{3}{2} = 7.5."
      ]
    },
    "commonMistake": {
      "title": "Applying \\frac{a}{1-r} when |r| >= 1!",
      "note": "You cannot use the formula \\frac{a}{1-r} if the ratio is 1 or greater! For instance, for 1 + 2 + 4 + ..., plugging in a=1, r=2 gives 1/(1-2) = -1, which is completely absurd because adding positive numbers cannot sum to -1!"
    }
  },
  {
    "id": 23,
    "partId": 5,
    "number": "23",
    "title": "Taylor and Maclaurin Series",
    "tag": "Advanced",
    "subtitle": "Approximating ANY curved function with simple polynomials",
    "intuition": "Calculators and computers do not possess magic brains that know how to compute sin(0.34) or e^{1.72}. Microchips only know how to perform four basic operations: addition, subtraction, multiplication, and division. So how does your phone calculate sin(x)? It uses a Taylor Series! Brook Taylor discovered that if you match the value, the slope, the concavity, and higher derivatives of a function at a single anchor point, you can construct a simple polynomial a_0 + a_1 x + a_2 x^2 + a_3 x^3 + ... that hugs the original complicated function with breathtaking precision. It turns transcendental curves into friendly algebra!",
    "formulaTitle": "Taylor and Maclaurin Series Expansion",
    "formulaLatex": "f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(c)}{n!} (x - c)^n = f(c) + f'(c)(x-c) + \\frac{f''(c)}{2!}(x-c)^2 + \\dots",
    "formulaNote": "When centered at c = 0, it is called a Maclaurin series. Famous example: e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots",
    "diagramType": "taylor_polynomials_hugging",
    "diagramCaption": "Sketch: Sine wave being approximated near 0 by degree 1 (line), degree 3 (cubic), and degree 5 polynomials.",
    "example": {
      "problem": "Find the first four terms of the Maclaurin series (c = 0) for f(x) = \\cos x.",
      "steps": [
        {
          "step": "1. Calculate successive derivatives at x = 0:",
          "math": "f(0) = \\cos(0) = 1, \\quad f'(0) = -\\sin(0) = 0",
          "explanation": "The zeroth and first derivative."
        },
        {
          "step": "2. Higher derivatives:",
          "math": "f''(0) = -\\cos(0) = -1, \\quad f'''(0) = \\sin(0) = 0, \\quad f^{(4)}(0) = \\cos(0) = 1",
          "explanation": "Notice all odd-order derivatives vanish because \\sin(0) = 0!"
        },
        {
          "step": "3. Plug into Taylor formula \\frac{f^{(n)}(0)}{n!} x^n:",
          "math": "\\cos x = \\frac{1}{0!} x^0 + \\frac{0}{1!} x^1 + \\frac{-1}{2!} x^2 + \\frac{0}{3!} x^3 + \\frac{1}{4!} x^4 + \\dots",
          "explanation": "Remember 0! = 1 and 2! = 2, 4! = 24."
        },
        {
          "step": "4. Simplify terms:",
          "math": "\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\frac{x^6}{720} + \\dots",
          "explanation": "An alternating sum of only even powers, mirroring cosine's even symmetry!"
        }
      ]
    },
    "practice": {
      "question": "Write down the first three non-zero terms of the Maclaurin series for f(x) = \\sin x.",
      "hint": "Remember that \\sin x is an odd function, so it only contains odd powers: x, x^3, x^5.",
      "solutionSteps": [
        "Derivatives at 0: f(0)=0, f'(0)=1, f''(0)=0, f'''(0)=-1, f^{(5)}(0)=1.",
        "Plug into formula: \\frac{1}{1!} x^1 - \\frac{1}{3!} x^3 + \\frac{1}{5!} x^5.",
        "Result: \\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\dots"
      ]
    },
    "commonMistake": {
      "title": "Forgetting the factorial n! in the denominators!",
      "note": "Each term of degree n MUST be divided by n! (n factorial = n * (n-1) * ... * 1). Forgetting the factorial causes terms to blow up instead of converging tightly to the curve!"
    }
  },
  {
    "id": 24,
    "partId": 5,
    "number": "24",
    "title": "Multivariable Intro: Partial Derivatives",
    "tag": "Advanced",
    "subtitle": "Stepping into 3D: hills, valleys, and holding variables constant",
    "intuition": "In single-variable calculus, you walked along a 1D line where you could only move forward or backward. But in the real world, you walk on a 2D surface like a rolling hillside where height depends on TWO coordinates: z = f(x, y) (your longitude and latitude). If you stand on the slope of a mountain and face due East, the trail might slope steeply upward. But if you turn 90 degrees and face due North, the terrain might be completely flat! A Partial Derivative measures the rate of change in ONE specific compass direction while artificially freezing all other variables as if they were harmless constants. It is the gateway to 3D engineering, machine learning gradients, and thermodynamics.",
    "formulaTitle": "Partial Derivative Notation",
    "formulaLatex": "\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x + h, y) - f(x, y)}{h}, \\qquad \\frac{\\partial f}{\\partial y} = \\lim_{h \\to 0} \\frac{f(x, y + h) - f(x, y)}{h}",
    "formulaNote": "The curly symbol \\partial ('del' or 'partial d') warns you that there are other variables lurking in the background that are temporarily treated as constants.",
    "diagramType": "multivariable_hill_3d",
    "diagramCaption": "Sketch: A 3D dome/mountain showing cross-sections along the x-axis and y-axis representing partial derivatives.",
    "example": {
      "problem": "Given the 3D surface f(x, y) = 3x^2 y + 5y^3 - 4x + 7, find both partial derivatives df/dx and df/dy.",
      "steps": [
        {
          "step": "1. Compute df/dx (treat y as a constant number like 5):",
          "math": "\\frac{\\partial}{\\partial x}[3x^2 y] = 3y \\frac{d}{dx}[x^2] = 3y(2x) = 6xy",
          "explanation": "Since y is treated as a constant multiplier, it tags along."
        },
        {
          "step": "2. Differentiate remaining terms with respect to x:",
          "math": "\\frac{\\partial}{\\partial x}[5y^3] = 0, \\quad \\frac{\\partial}{\\partial x}[-4x] = -4, \\quad \\frac{\\partial}{\\partial x}[7] = 0",
          "explanation": "Because 5y^3 contains no x, it is treated as a pure constant whose derivative is 0!"
        },
        {
          "step": "3. Assemble df/dx:",
          "math": "\\frac{\\partial f}{\\partial x} = 6xy - 4",
          "explanation": "Slope in the x-direction."
        },
        {
          "step": "4. Now compute df/dy (treat x as a constant):",
          "math": "\\frac{\\partial}{\\partial y}[3x^2 y] = 3x^2(1) = 3x^2, \\quad \\frac{\\partial}{\\partial y}[5y^3] = 15y^2, \\quad \\frac{\\partial}{\\partial y}[-4x] = 0",
          "explanation": "Here x is treated as a constant."
        },
        {
          "step": "5. Assemble df/dy:",
          "math": "\\frac{\\partial f}{\\partial y} = 3x^2 + 15y^2",
          "explanation": "Slope in the y-direction."
        }
      ]
    },
    "practice": {
      "question": "For f(x, y) = x^3 y^2 + 2x - 4y, find df/dx.",
      "hint": "Treat y^2 as a constant multiplier when differentiating with respect to x.",
      "solutionSteps": [
        "df/dx[x^3 y^2] = (3x^2) * y^2 = 3x^2 y^2.",
        "df/dx[2x] = 2.",
        "df/dx[-4y] = 0 (contains no x).",
        "Result: \\frac{\\partial f}{\\partial x} = 3x^2 y^2 + 2."
      ]
    },
    "commonMistake": {
      "title": "Applying product rule between x and y during partial differentiation!",
      "note": "You do NOT use the product rule on x^2 y when differentiating with respect to x! y is NOT a function of x here; it is treated as a fixed constant number like 7. The derivative of 7x^2 is 14x, so the partial derivative of y x^2 is simply 2xy."
    }
  },
  {
    "id": 25,
    "partId": 5,
    "number": "25",
    "title": "Differential Equations: Where Calculus Leads",
    "tag": "Advanced",
    "subtitle": "The language of nature: modeling populations, heat, and orbits",
    "intuition": "You have reached the grand summit of introductory calculus! All the tools you have mastered \u2014 limits, derivatives, integrals \u2014 exist for one ultimate purpose: solving Differential Equations. A normal algebra equation asks you to solve for a missing NUMBER (x = 5). A differential equation relates an unknown FUNCTION to its own rates of change, and asks you to solve for the FUNCTION itself! For example: 'A colony of bacteria reproduces at a rate proportional to its current population' translates directly to dP/dt = k P. Solving this equation reveals why bacteria, viruses, and compound interest grow exponentially as P(t) = P_0 e^{kt}. From Newton's laws of gravity to quantum wave mechanics, every law of physics is written as a differential equation.",
    "formulaTitle": "Separable Differential Equation & Newton's Law",
    "formulaLatex": "\\frac{dy}{dt} = k y \\implies \\int \\frac{1}{y} \\, dy = \\int k \\, dt \\implies \\ln|y| = k t + C \\implies y(t) = y_0 e^{k t}",
    "formulaNote": "Separation of variables: move all y's and dy's to the left, all t's and dt's to the right, and integrate both sides!",
    "diagramType": "diff_eq_slope_field",
    "diagramCaption": "Sketch: A slope field with tiny tangent line tick marks showing family of exponential curves flowing through.",
    "example": {
      "problem": "Solve the differential equation \\frac{dy}{dx} = 2x y with initial condition y(0) = 5.",
      "steps": [
        {
          "step": "1. Separate variables (gather y on left, x on right):",
          "math": "\\frac{1}{y} \\, dy = 2x \\, dx",
          "explanation": "Divide both sides by y and multiply by dx."
        },
        {
          "step": "2. Integrate both sides:",
          "math": "\\int \\frac{1}{y} \\, dy = \\int 2x \\, dx \\implies \\ln|y| = x^2 + C_1",
          "explanation": "The antiderivative of 1/y is \\ln|y|, and of 2x is x^2."
        },
        {
          "step": "3. Exponentiate both sides to solve for y:",
          "math": "e^{\\ln|y|} = e^{x^2 + C_1} = e^{C_1} \\cdot e^{x^2} \\implies y = A e^{x^2}",
          "explanation": "Let A = \\pm e^{C_1} represent the arbitrary constant."
        },
        {
          "step": "4. Apply initial condition y(0) = 5 to find A:",
          "math": "5 = A e^{0^2} = A(1) \\implies A = 5",
          "explanation": "Substitute x = 0 and y = 5."
        },
        {
          "step": "5. Write the unique particular solution:",
          "math": "y(x) = 5 e^{x^2}",
          "explanation": "You have solved your first differential equation!"
        }
      ]
    },
    "practice": {
      "question": "Solve \\frac{dy}{dt} = -3y with y(0) = 100. (Models radioactive decay).",
      "hint": "Separate variables to get \\frac{1}{y} dy = -3 dt and integrate.",
      "solutionSteps": [
        "\\int \\frac{1}{y} dy = \\int -3 dt ==> \\ln|y| = -3t + C.",
        "Exponentiate: y(t) = A e^{-3t}.",
        "Use y(0) = 100 ==> A = 100.",
        "Solution: y(t) = 100 e^{-3t}."
      ]
    },
    "commonMistake": {
      "title": "Adding the + C at the very end instead of when integrating!",
      "note": "If you write \\ln(y) = x^2, exponentiate to get y = e^{x^2}, and then slap on + C to get y = e^{x^2} + C, that is completely WRONG! The constant appears during integration: \\ln y = x^2 + C, which exponentiates into a MULTIPLIER: y = e^C e^{x^2} = A e^{x^2}."
    }
  }
];
