const learningPath = [
  {
    phase: "Phase 1: Fundamentals (Days 1-10)",
    days: [
      {
        day: 1,
        title: "Variables & Data Types",
        topics: [
          "Variables (let, const, var)",
          "Data types",
          "Type conversion",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
      {
        day: 2,
        title: "Variables Deep Dive",
        topics: [
          "Variable scope basics",
          "Type coercion",
          "Working with different data types",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
      {
        day: 3,
        title: "Operators & Conditionals",
        topics: [
          "Arithmetic & logical operators",
          "Comparison operators",
          "if statements",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
      {
        day: 4,
        title: "Advanced Conditionals",
        topics: [
          "switch statements",
          "Ternary operators",
          "Complex conditional logic",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
      {
        day: 5,
        title: "Loops - Part 1",
        topics: ["for loops", "while loops", "do-while loops"],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
      {
        day: 6,
        title: "Loops - Part 2",
        topics: [
          "for...of loops",
          "for...in loops",
          "Loop control (break, continue)",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
      {
        day: 7,
        title: "Functions - Part 1",
        topics: [
          "Function declarations",
          "Function expressions",
          "Parameters & arguments",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
      {
        day: 8,
        title: "Functions - Part 2",
        topics: ["Arrow functions", "Return values", "Function best practices"],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
      {
        day: 9,
        title: "Scope & Hoisting",
        topics: [
          "Global vs local scope",
          "Hoisting behavior",
          "this keyword basics",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
      {
        day: 10,
        title: "Debugging & Mini Project",
        topics: [
          "console.log techniques",
          "debugger statement",
          "Basic debugging",
        ],
        practice: [
          "Reverse a string",
          "Find factorial",
          "Check prime number",
          "Simple calculator",
        ],
        project: "Guess the Number Game",
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
          video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        },
      },
    ],
  },
  {
    phase: "Phase 2: Arrays & Objects (Days 11-20)",
    days: [
      {
        day: 11,
        title: "Arrays Basics",
        topics: [
          "Array creation & access",
          "push, pop, shift, unshift",
          "Array length",
        ],
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
      {
        day: 12,
        title: "Array Methods - Part 1",
        topics: ["map method", "filter method", "forEach method"],
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
      {
        day: 13,
        title: "Array Methods - Part 2",
        topics: ["reduce method", "find & findIndex", "some & every"],
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
      {
        day: 14,
        title: "Objects Basics",
        topics: [
          "Object creation",
          "Accessing properties",
          "Adding/deleting properties",
        ],
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
      {
        day: 15,
        title: "Object Methods",
        topics: ["Object.keys()", "Object.values()", "Object.entries()"],
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
      {
        day: 16,
        title: "Destructuring & Spread/Rest",
        topics: [
          "Array destructuring",
          "Object destructuring",
          "Spread operator",
          "Rest parameters",
        ],
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
      {
        day: 17,
        title: "Copying Arrays",
        topics: ["Shallow copy", "Deep copy", "Spread vs slice"],
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
      {
        day: 18,
        title: "Copying Objects",
        topics: [
          "Object.assign()",
          "Spread for objects",
          "Deep vs shallow copy",
        ],
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
      {
        day: 19,
        title: "JSON Basics",
        topics: ["JSON.stringify()", "JSON.parse()", "Working with JSON data"],
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
      {
        day: 20,
        title: "Data Parsing & Mini Project",
        topics: ["Parsing complex JSON", "Data transformation"],
        practice: [
          "Sum even numbers",
          "Flatten nested arrays",
          "Count occurrences",
        ],
        project: "Student Score Manager",
        resources: {
          learn: "https://javascript.info/array-methods",
          video: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
        },
      },
    ],
  },
  {
    phase: "Phase 3: Functions & Closures (Days 21-27)",
    days: [
      {
        day: 21,
        title: "Higher-Order Functions",
        topics: [
          "Functions as arguments",
          "Functions returning functions",
          "Callback functions",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          video: "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
        },
      },
      {
        day: 22,
        title: "Callbacks - Part 1",
        topics: [
          "Understanding callbacks",
          "Callback patterns",
          "Synchronous callbacks",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          video: "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
        },
      },
      {
        day: 23,
        title: "Callbacks - Part 2",
        topics: [
          "Asynchronous callbacks",
          "Callback hell",
          "Avoiding callback hell",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          video: "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
        },
      },
      {
        day: 24,
        title: "Closures",
        topics: [
          "Understanding closures",
          "Closure use cases",
          "Data privacy with closures",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          video: "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
        },
      },
      {
        day: 25,
        title: "IIFE",
        topics: [
          "Immediately Invoked Functions",
          "Module pattern",
          "IIFE use cases",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          video: "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
        },
      },
      {
        day: 26,
        title: "this Keyword Deep Dive",
        topics: [
          "this in different contexts",
          "bind, call, apply",
          "Arrow functions and this",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          video: "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
        },
      },
      {
        day: 27,
        title: "Function Currying & Mini Project",
        topics: [
          "Currying basics",
          "Partial application",
          "Practical currying",
        ],
        practice: ["Function returning function", "Closure-based counter"],
        project: "To-Do List (logic only)",
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
          video: "https://www.youtube.com/watch?v=3a0I8ICR1Vg",
        },
      },
    ],
  },
  {
    phase: "Phase 4: Asynchronous JavaScript (Days 28-37)",
    days: [
      {
        day: 28,
        title: "setTimeout",
        topics: [
          "setTimeout basics",
          "Clearing timeouts",
          "setTimeout use cases",
        ],
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
      {
        day: 29,
        title: "setInterval",
        topics: [
          "setInterval basics",
          "Clearing intervals",
          "setTimeout vs setInterval",
        ],
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
      {
        day: 30,
        title: "Promises - Part 1",
        topics: ["Promise basics", "Creating promises", "resolve & reject"],
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
      {
        day: 31,
        title: "Promises - Part 2",
        topics: [
          "then & catch",
          "Promise chaining",
          "Error handling in promises",
        ],
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
      {
        day: 32,
        title: "Promise Methods",
        topics: [
          "Promise.all()",
          "Promise.race()",
          "Promise.allSettled()",
          "Promise.any()",
        ],
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
      {
        day: 33,
        title: "async/await - Part 1",
        topics: [
          "async functions",
          "await keyword",
          "Converting promises to async/await",
        ],
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
      {
        day: 34,
        title: "async/await - Part 2",
        topics: [
          "Sequential vs parallel execution",
          "async/await best practices",
        ],
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
      {
        day: 35,
        title: "Error Handling",
        topics: [
          "try...catch blocks",
          "Error handling in async code",
          "Custom errors",
        ],
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
      {
        day: 36,
        title: "Event Loop",
        topics: [
          "Understanding event loop",
          "Call stack",
          "Microtasks vs macrotasks",
        ],
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
      {
        day: 37,
        title: "Event Loop Deep Dive & Mini Project",
        topics: ["Task queue", "Execution order", "Performance implications"],
        practice: ["Promisify setTimeout", "API call simulation"],
        project: "Fake Weather App",
        resources: {
          learn: "https://javascript.info/async",
          video: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        },
      },
    ],
  },
  {
    phase: "Phase 5: DOM Manipulation & Browser APIs (Days 38-48)",
    days: [
      {
        day: 38,
        title: "DOM Selection - Part 1",
        topics: [
          "getElementById",
          "getElementsByClassName",
          "getElementsByTagName",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 39,
        title: "DOM Selection - Part 2",
        topics: ["querySelector", "querySelectorAll", "CSS selectors in JS"],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 40,
        title: "DOM Manipulation - Part 1",
        topics: ["Creating elements", "appendChild", "insertBefore"],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 41,
        title: "DOM Manipulation - Part 2",
        topics: [
          "Removing elements",
          "Updating elements",
          "innerHTML vs textContent",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 42,
        title: "Event Listeners",
        topics: [
          "addEventListener",
          "Event types",
          "Event object",
          "removeEventListener",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 43,
        title: "Form Handling",
        topics: ["Form events", "Getting form values", "preventDefault"],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 44,
        title: "Form Validation",
        topics: [
          "Client-side validation",
          "Custom validation",
          "Validation patterns",
        ],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 45,
        title: "LocalStorage & SessionStorage",
        topics: ["localStorage API", "sessionStorage API", "Storage events"],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 46,
        title: "Fetch API - Part 1",
        topics: ["GET requests", "Response handling", "Status codes"],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 47,
        title: "Fetch API - Part 2",
        topics: ["POST requests", "PUT & DELETE requests", "Request headers"],
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
      {
        day: 48,
        title: "JSON & APIs + Mini Project",
        topics: ["Working with API responses", "Error handling", "CORS basics"],
        project: "Todo App with LocalStorage",
        resources: {
          learn:
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          video: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        },
      },
    ],
  },
  {
    phase: "Phase 6: Advanced JS (Days 49-57)",
    days: [
      {
        day: 49,
        title: "ES Modules",
        topics: [
          "import & export",
          "Named exports",
          "Default exports",
          "Module patterns",
        ],
        resources: {
          learn: "https://javascript.info/classes",
          video: "https://www.youtube.com/watch?v=bl98dm7vJt0",
        },
      },
      {
        day: 50,
        title: "Error Handling & Debugging",
        topics: [
          "try/catch/finally",
          "Throwing errors",
          "Debugging techniques",
        ],
        resources: {
          learn: "https://javascript.info/classes",
          video: "https://www.youtube.com/watch?v=bl98dm7vJt0",
        },
      },
      {
        day: 51,
        title: "Debounce & Throttle",
        topics: ["Debounce function", "Throttle function", "Use cases"],
        resources: {
          learn: "https://javascript.info/classes",
          video: "https://www.youtube.com/watch?v=bl98dm7vJt0",
        },
      },
      {
        day: 52,
        title: "Generators & Iterators",
        topics: [
          "Generator functions",
          "yield keyword",
          "Iterators",
          "Iterable protocol",
        ],
        resources: {
          learn: "https://javascript.info/classes",
          video: "https://www.youtube.com/watch?v=bl98dm7vJt0",
        },
      },
      {
        day: 53,
        title: "Event Delegation",
        topics: ["Event bubbling", "Event capturing", "Delegation pattern"],
        resources: {
          learn: "https://javascript.info/classes",
          video: "https://www.youtube.com/watch?v=bl98dm7vJt0",
        },
      },
      {
        day: 54,
        title: "Prototypes & Inheritance",
        topics: [
          "Prototype chain",
          "Object.create()",
          "Prototypal inheritance",
        ],
        resources: {
          learn: "https://javascript.info/classes",
          video: "https://www.youtube.com/watch?v=bl98dm7vJt0",
        },
      },
      {
        day: 55,
        title: "Classes & super",
        topics: [
          "Class syntax",
          "Constructor",
          "super keyword",
          "Class inheritance",
        ],
        resources: {
          learn: "https://javascript.info/classes",
          video: "https://www.youtube.com/watch?v=bl98dm7vJt0",
        },
      },
      {
        day: 56,
        title: "Design Patterns - Part 1",
        topics: ["Module pattern", "Observer pattern"],
        resources: {
          learn: "https://javascript.info/classes",
          video: "https://www.youtube.com/watch?v=bl98dm7vJt0",
        },
      },
      {
        day: 57,
        title: "Design Patterns - Part 2 + Mini Project",
        topics: ["Singleton pattern", "Factory pattern"],
        project: "Debounced Search Bar",
        resources: {
          learn: "https://javascript.info/classes",
          video: "https://www.youtube.com/watch?v=bl98dm7vJt0",
        },
      },
    ],
  },
  {
    phase: "Phase 7: Final Projects & Revision (Days 58-60)",
    days: [
      {
        day: 58,
        title: "Revision - Part 1",
        topics: ["Review Promises", "Review async/await", "Review closures"],
        resources: {
          learn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          video: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        },
      },
      {
        day: 59,
        title: "Revision - Part 2",
        topics: [
          "Review Prototypes",
          "Debug previous projects",
          "Add comments & documentation",
        ],
        resources: {
          learn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          video: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        },
      },
      {
        day: 60,
        title: "Final Projects",
        topics: [
          "Apply everything learned",
          "Choose 1-2 final projects",
          "Code review & optimization",
        ],
        project: "GitHub User Finder / Quiz App / Weather Dashboard",
        resources: {
          learn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          video: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        },
      },
    ],
  },
];

function createAccordion() {
  const container = document.getElementById("accordionContainer");

  learningPath.forEach((phase) => {
    const phaseSection = document.createElement("div");
    phaseSection.className = "phase-section";

    const phaseTitle = document.createElement("div");
    phaseTitle.className = "phase-title";
    phaseTitle.textContent = phase.phase;
    phaseSection.appendChild(phaseTitle);

    phase.days.forEach((day) => {
      const accordionItem = document.createElement("div");
      accordionItem.className = "accordion-item";

      const accordionHeader = document.createElement("div");
      accordionHeader.className = "accordion-header";
      accordionHeader.innerHTML = `
                        <span class="day-title">Day ${day.day}: ${day.title}</span>
                        <span class="accordion-icon">▼</span>
                    `;

      const accordionContent = document.createElement("div");
      accordionContent.className = "accordion-content";

      let contentHTML = '<div class="content-inner">';

      if (day.topics && day.topics.length > 0) {
        contentHTML += "<h4>📖 Topics</h4><ul>";
        day.topics.forEach((topic) => {
          contentHTML += `<li>${topic}</li>`;
        });
        contentHTML += "</ul>";
      }

      if (day.practice && day.practice.length > 0) {
        contentHTML += "<h4>🧠 Practice</h4><ul>";
        day.practice.forEach((practice) => {
          contentHTML += `<li>${practice}</li>`;
        });
        contentHTML += "</ul>";
      }

      if (day.project) {
        contentHTML += `<h4>💻 Mini Project</h4>`;
        contentHTML += `<span class="project-badge">🚀 ${day.project}</span>`;
      }

      if (day.resources) {
        contentHTML += "<h4>🔗 Resources</h4>";
        contentHTML += `<p>📚 Learn: <a href="${day.resources.learn}" target="_blank" class="resource-link">Documentation</a></p>`;
        contentHTML += `<p>🎥 Video: <a href="${day.resources.video}" target="_blank" class="resource-link">Tutorial</a></p>`;
      }

      contentHTML += "</div>";
      accordionContent.innerHTML = contentHTML;

      accordionHeader.addEventListener("click", () => {
        const isActive = accordionHeader.classList.contains("active");

        document.querySelectorAll(".accordion-header").forEach((header) => {
          header.classList.remove("active");
        });
        document.querySelectorAll(".accordion-content").forEach((content) => {
          content.classList.remove("active");
        });

        if (!isActive) {
          accordionHeader.classList.add("active");
          accordionContent.classList.add("active");
        }
      });

      accordionItem.appendChild(accordionHeader);
      accordionItem.appendChild(accordionContent);
      phaseSection.appendChild(accordionItem);
    });

    container.appendChild(phaseSection);
  });
}

createAccordion();
