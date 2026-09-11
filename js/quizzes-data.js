/**
 * Quizzes Dataset for Calculus Notebook
 */
window.CALCULUS_QUIZZES = [
  {
    "partId": 1,
    "title": "Part 1 Checkpoint: Foundations Quiz",
    "description": "Verify your intuition for functions, rates of change, and slope before diving into limits!",
    "questions": [
      {
        "id": "q1_1",
        "question": "What is the key difference between average speed and instantaneous speed?",
        "options": [
          "Average speed is measured over a time interval, while instantaneous speed is the speed at a single exact moment.",
          "Average speed is always higher than instantaneous speed.",
          "Instantaneous speed only applies to straight lines, while average speed applies to curves.",
          "There is no difference; they are calculated with the exact same algebraic formula without limits."
        ],
        "correctIndex": 0,
        "explanation": "Average speed divides a finite distance by a finite time window (\\Delta d / \\Delta t), whereas instantaneous speed is the limit as that time window shrinks to zero."
      },
      {
        "id": "q1_2",
        "question": "If a line passes through the points (1, 2) and (4, 11), what is its slope?",
        "options": [
          "m = 2",
          "m = 3",
          "m = 9",
          "m = 1/3"
        ],
        "correctIndex": 1,
        "explanation": "m = (11 - 2) / (4 - 1) = 9 / 3 = 3."
      },
      {
        "id": "q1_3",
        "question": "Why does standard algebra fail when trying to calculate the slope of a curve at a single point?",
        "options": [
          "Curves don't have steepness.",
          "Both the change in y and change in x become zero, producing the indeterminate form 0/0.",
          "Algebra only works for positive numbers.",
          "Because calculators cannot divide by fractions."
        ],
        "correctIndex": 1,
        "explanation": "At a single point, x_2 = x_1 and y_2 = y_1, leading to (y_1 - y_1)/(x_1 - x_1) = 0/0, which is undefined in elementary algebra."
      },
      {
        "id": "q1_4",
        "question": "If f(x) = x^2, what is f(a + b)?",
        "options": [
          "f(a) + f(b) = a^2 + b^2",
          "(a + b)^2 = a^2 + 2ab + b^2",
          "a^2 b^2",
          "f(a) * f(b)"
        ],
        "correctIndex": 1,
        "explanation": "A function is not a multiplier! You square the ENTIRE input: (a + b)^2 = a^2 + 2ab + b^2."
      }
    ]
  },
  {
    "partId": 2,
    "title": "Part 2 Checkpoint: The Limits Quiz",
    "description": "Test your mastery of limits, one-sided limits, squeeze theorem, and continuity!",
    "questions": [
      {
        "id": "q2_1",
        "question": "What does \\lim_{x \\to 3} f(x) = 7 actually mean?",
        "options": [
          "f(3) must equal 7.",
          "As x gets arbitrarily close to 3 (from both sides, with x != 3), f(x) gets arbitrarily close to 7.",
          "f(x) equals 7 for all values of x.",
          "The graph has a vertical asymptote at x = 3."
        ],
        "correctIndex": 1,
        "explanation": "A limit is about the target value approached by the function as x nears 3, regardless of whether f(3) is 7, defined, or a hole."
      },
      {
        "id": "q2_2",
        "question": "If \\lim_{x \\to 2^-} g(x) = 4 and \\lim_{x \\to 2^+} g(x) = 9, what is \\lim_{x \\to 2} g(x)?",
        "options": [
          "6.5 (the average)",
          "13 (the sum)",
          "Does Not Exist (DNE)",
          "4"
        ],
        "correctIndex": 2,
        "explanation": "For a two-sided limit to exist, the left-hand limit and right-hand limit must be identical. Since 4 != 9, the limit DNE."
      },
      {
        "id": "q2_3",
        "question": "Evaluate \\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}.",
        "options": [
          "0/0",
          "0",
          "5",
          "10"
        ],
        "correctIndex": 3,
        "explanation": "Factor the top: (x - 5)(x + 5) / (x - 5) = x + 5 (for x != 5). As x -> 5, 5 + 5 = 10."
      },
      {
        "id": "q2_4",
        "question": "Which condition is NOT required for f(x) to be continuous at x = c?",
        "options": [
          "f(c) is defined.",
          "\\lim_{x \\to c} f(x) exists.",
          "\\lim_{x \\to c} f(x) = f(c).",
          "f'(c) exists and is non-zero."
        ],
        "correctIndex": 3,
        "explanation": "A function can be continuous without having a derivative (like f(x) = |x| at x = 0, which has a sharp corner)."
      }
    ]
  },
  {
    "partId": 3,
    "title": "Part 3 Checkpoint: Derivatives Mastery Quiz",
    "description": "Prove your skill with the power rule, product/chain rules, tangent slopes, and related rates!",
    "questions": [
      {
        "id": "q3_1",
        "question": "What is the derivative of f(x) = 3x^4 - 5x^2 + 7?",
        "options": [
          "12x^3 - 10x",
          "12x^3 - 10x + 7",
          "7x^3 - 3x",
          "12x^4 - 10x^2"
        ],
        "correctIndex": 0,
        "explanation": "Power rule: 3(4x^3) - 5(2x) + 0 = 12x^3 - 10x. The constant 7 differentiates to 0."
      },
      {
        "id": "q3_2",
        "question": "According to the Product Rule, what is the derivative of u(x) * v(x)?",
        "options": [
          "u'(x) * v'(x)",
          "u'(x)v(x) + u(x)v'(x)",
          "u'(x)v(x) - u(x)v'(x)",
          "[u(x)v(x)]'"
        ],
        "correctIndex": 1,
        "explanation": "(uv)' = u'v + uv' (the rate of area growth of a rectangle of sides u and v)."
      },
      {
        "id": "q3_3",
        "question": "What is the derivative of y = e^{5x}?",
        "options": [
          "e^{5x}",
          "5x e^{5x - 1}",
          "5 e^{5x}",
          "\\frac{1}{5} e^{5x}"
        ],
        "correctIndex": 2,
        "explanation": "By the chain rule: d/dx[e^{g(x)}] = e^{g(x)} * g'(x) = e^{5x} * 5 = 5e^{5x}."
      },
      {
        "id": "q3_4",
        "question": "If f'(c) = 0 and f''(c) = -6, what kind of point is x = c?",
        "options": [
          "Local minimum",
          "Local maximum",
          "Inflection point",
          "Vertical asymptote"
        ],
        "correctIndex": 1,
        "explanation": "Second derivative test: f''(c) < 0 means the curve is concave down (frowning), so a horizontal tangent point is a local maximum."
      }
    ]
  },
  {
    "partId": 4,
    "title": "Part 4 Checkpoint: Integrals & FTC Quiz",
    "description": "Showcase your understanding of Riemann sums, the Fundamental Theorem, and integration techniques!",
    "questions": [
      {
        "id": "q4_1",
        "question": "What does \\int_a^b f(x) dx compute geometrically?",
        "options": [
          "The perimeter of the region under f(x).",
          "The net signed area between the curve and the x-axis from a to b.",
          "The slope of the tangent line at the midpoint.",
          "The maximum height attained by f(x)."
        ],
        "correctIndex": 1,
        "explanation": "Definite integrals compute net signed area: areas above the x-axis are positive, areas below are negative."
      },
      {
        "id": "q4_2",
        "question": "Why is the Fundamental Theorem of Calculus considered so revolutionary?",
        "options": [
          "It showed that differentiation and integration are exact inverse processes.",
          "It eliminated the need for numbers.",
          "It proved that curves cannot have area.",
          "It showed that all functions are linear."
        ],
        "correctIndex": 0,
        "explanation": "FTC linked two previously isolated branches \u2014 the tangent slope problem and the area summation problem \u2014 as inverses."
      },
      {
        "id": "q4_3",
        "question": "Evaluate \\int_0^3 2x \\, dx.",
        "options": [
          "6",
          "9",
          "18",
          "3"
        ],
        "correctIndex": 1,
        "explanation": "Antiderivative of 2x is x^2. Evaluating [x^2]_0^3 = 3^2 - 0^2 = 9."
      },
      {
        "id": "q4_4",
        "question": "When evaluating \\int 2x e^{x^2} dx with u-substitution, what is the best choice for u?",
        "options": [
          "u = e",
          "u = 2x",
          "u = x^2",
          "u = e^{x^2}"
        ],
        "correctIndex": 2,
        "explanation": "With u = x^2, du = 2x dx, which converts the integral directly into \\int e^u du = e^u + C = e^{x^2} + C."
      }
    ]
  },
  {
    "partId": 5,
    "title": "Part 5 Checkpoint: Advanced Horizons Quiz",
    "description": "The final graduation challenge: series, Taylor approximations, multivariable, and differential equations!",
    "questions": [
      {
        "id": "q5_1",
        "question": "Under what condition does the geometric series \\sum_{n=0}^\\infty a r^n converge to \\frac{a}{1 - r}?",
        "options": [
          "r > 1",
          "|r| < 1",
          "r = 1",
          "For any real number r"
        ],
        "correctIndex": 1,
        "explanation": "Only when the common ratio has absolute value strictly less than 1 (|r| < 1) do successive terms shrink fast enough to converge."
      },
      {
        "id": "q5_2",
        "question": "What is the Maclaurin series expansion for e^x?",
        "options": [
          "1 + x + x^2 + x^3 + ...",
          "1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots",
          "x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots",
          "1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots"
        ],
        "correctIndex": 1,
        "explanation": "Because all derivatives of e^x at 0 equal 1, the Taylor coefficients f^{(n)}(0)/n! are all 1/n!."
      },
      {
        "id": "q5_3",
        "question": "If f(x, y) = 4x^3 y^2 - 7x + 2y, what is the partial derivative \\frac{\\partial f}{\\partial x}?",
        "options": [
          "12x^2 y^2 - 7",
          "8x^3 y + 2",
          "12x^2 - 7",
          "24xy - 7"
        ],
        "correctIndex": 0,
        "explanation": "Treat y as a constant: d/dx[4x^3 y^2] = 4y^2 * 3x^2 = 12x^2 y^2. d/dx[-7x] = -7, and d/dx[2y] = 0."
      },
      {
        "id": "q5_4",
        "question": "What is the general solution to the differential equation \\frac{dy}{dt} = k y?",
        "options": [
          "y(t) = k t + C",
          "y(t) = \\frac{1}{2} k t^2 + C",
          "y(t) = C e^{k t}",
          "y(t) = \\ln(k t)"
        ],
        "correctIndex": 2,
        "explanation": "Separating variables: dy/y = k dt ==> ln|y| = kt + C1 ==> y(t) = C e^{kt}. This is the signature equation of natural exponential growth."
      }
    ]
  }
];
