const QUIZZES = {
  HTML: [
  { q: "What does HTML stand for?", choices: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "HyperText Markup Language", "Hyper Tool Multi Language"], answer: 2 },
  { q: "Which tag is used to define the largest heading in HTML?", choices: ["<h1>", "<heading>", "<head>", "<h6>"], answer: 0 },
  { q: "What is the correct HTML tag for inserting a line break?", choices: ["<break>", "<br>", "<lb>", "<newline>"], answer: 1 },
  { q: "Which HTML element is used to define a paragraph?", choices: ["<para>", "<pg>", "<p>", "<paragraph>"], answer: 2 },
  { q: "Choose the correct HTML element for the largest heading:", choices: ["<h6>", "<heading>", "<h1>", "<head>"], answer: 2 },
  { q: "What is the correct HTML element for inserting an image?", choices: ["<picture>", "<image>", "<img>", "<photo>"], answer: 2 },
  { q: "What attribute is used to specify the path of an image?", choices: ["alt", "src", "link", "href"], answer: 1 },
  { q: "Which tag is used to create a hyperlink?", choices: ["<a>", "<link>", "<href>", "<url>"], answer: 0 },
  { q: "What does the <title> tag do?", choices: ["Adds a title inside the document body", "Defines the page title shown in the browser tab", "Changes the text color", "Displays a heading"], answer: 1 },
  { q: "Which HTML tag is used to display a table?", choices: ["<tbl>", "<table>", "<t>", "<tab>"], answer: 1 },
  { q: "Which tag is used to define a table row?", choices: ["<row>", "<td>", "<tr>", "<table-row>"], answer: 2 },
  { q: "Which tag defines a table cell?", choices: ["<th>", "<td>", "<tr>", "<cell>"], answer: 1 },
  { q: "What is the correct HTML for making text bold?", choices: ["<b>", "<strong>", "Both A and B", "<bold>"], answer: 2 },
  { q: "Which tag is used to make text italic?", choices: ["<italic>", "<em>", "<i>", "Both B and C"], answer: 3 },
  { q: "Which HTML element is used to define a list item?", choices: ["<li>", "<item>", "<list>", "<ul>"], answer: 0 },
  { q: "What tag is used to create an ordered list?", choices: ["<ol>", "<ul>", "<dl>", "<list>"], answer: 0 },
  { q: "Which HTML tag is used to define an unordered (bulleted) list?", choices: ["<ul>", "<ol>", "<list>", "<li>"], answer: 0 },
  { q: "Which HTML element is used to play video files?", choices: ["<media>", "<movie>", "<video>", "<play>"], answer: 2 },
  { q: "Which HTML tag is used to define the navigation links?", choices: ["<navigate>", "<nav>", "<menu>", "<links>"], answer: 1 },
  { q: "Which HTML tag is used for the main content of a document?", choices: ["<main>", "<body>", "<content>", "<section>"], answer: 0 },
  { q: "Which tag is used to define metadata about a document?", choices: ["<meta>", "<head>", "<header>", "<info>"], answer: 0 },
  { q: "Which tag is used to define an inline style?", choices: ["<css>", "<style>", "<script>", "<design>"], answer: 1 },
  { q: "Which HTML element is used to display a checkbox?", choices: ["<input type='checkbox'>", "<checkbox>", "<input checkbox>", "<box>"], answer: 0 },
  { q: "What tag is used to define a form in HTML?", choices: ["<forms>", "<input>", "<form>", "<fieldset>"], answer: 2 },
  { q: "Which input type is used for passwords?", choices: ["<input type='password'>", "<input type='text'>", "<input type='hidden'>", "<password>"], answer: 0 },
  { q: "What is the correct HTML tag for inserting a background color?", choices: ["<background>", "<body style='background-color:blue;'>", "<bg>", "<color>"], answer: 1 },
  { q: "What does the <hr> tag do?", choices: ["Creates a horizontal line", "Inserts a heading rule", "Breaks text into two parts", "Adds a page break"], answer: 0 },
  { q: "Which attribute provides alternative text for an image?", choices: ["alt", "title", "src", "name"], answer: 0 },
  { q: "Which HTML element is used to define a footer for a document or section?", choices: ["<bottom>", "<footer>", "<section>", "<end>"], answer: 1 },
  { q: "Which HTML5 element is used to group related content together?", choices: ["<group>", "<section>", "<div>", "<span>"], answer: 1 }
],
 CSS: [
  { q: "What does CSS stand for?", choices: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], answer: 1 },
  { q: "Which HTML tag is used to define an internal style sheet?", choices: ["<script>", "<css>", "<style>", "<link>"], answer: 2 },
  { q: "Which HTML attribute is used to define inline styles?", choices: ["font", "style", "class", "styles"], answer: 1 },
  { q: "Which property is used to change the background color?", choices: ["bgcolor", "background-color", "color-background", "bg-color"], answer: 1 },
  { q: "Which property is used to change the text color?", choices: ["color", "font-color", "text-color", "foreground"], answer: 0 },
  { q: "How do you select an element with id 'header'?", choices: [".header", "header", "#header", "*header"], answer: 2 },
  { q: "How do you select elements with class name 'menu'?", choices: ["menu", "#menu", ".menu", "*menu"], answer: 2 },
  { q: "Which CSS property controls the text size?", choices: ["font-style", "text-size", "font-size", "text-style"], answer: 2 },
  { q: "What is the correct syntax for linking an external CSS file?", choices: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css link='style.css'>", "<link src='style.css'>"], answer: 0 },
  { q: "Which property is used to make text bold?", choices: ["font-weight", "text-bold", "font-style", "weight"], answer: 0 },
  { q: "Which property is used to align text?", choices: ["align", "text-align", "alignment", "font-align"], answer: 1 },
  { q: "How do you make each word in a text start with a capital letter?", choices: ["text-transform: capitalize;", "text-style: capital;", "transform: uppercase;", "font-variant: capital;"], answer: 0 },
  { q: "Which property is used to change the font of text?", choices: ["font-family", "font-style", "font-type", "text-font"], answer: 0 },
  { q: "How do you add a background image in CSS?", choices: ["background-image: url('image.jpg');", "bg-image: 'image.jpg';", "background: 'image.jpg';", "image: url('image.jpg');"], answer: 0 },
  { q: "Which property adds space inside the border of an element?", choices: ["margin", "padding", "spacing", "border-spacing"], answer: 1 },
  { q: "Which property adds space outside the border of an element?", choices: ["padding", "margin", "spacing", "border"], answer: 1 },
  { q: "How do you make text italic?", choices: ["font-style: italic;", "text-italic: true;", "font: italic;", "style: italic;"], answer: 0 },
  { q: "Which property changes the order of layers?", choices: ["stack", "layer", "z-index", "position"], answer: 2 },
  { q: "Which position value places an element relative to its first positioned ancestor?", choices: ["static", "relative", "absolute", "fixed"], answer: 2 },
  { q: "What is the default value of the position property?", choices: ["static", "relative", "absolute", "fixed"], answer: 0 },
  { q: "Which property controls the visibility of an element?", choices: ["display", "visible", "show", "visibility"], answer: 3 },
  { q: "Which display value hides an element but keeps its space?", choices: ["display: none;", "visibility: hidden;", "opacity: 0;", "hide: true;"], answer: 1 },
  { q: "Which display value removes an element completely?", choices: ["display: none;", "visibility: hidden;", "opacity: 0;", "remove: true;"], answer: 0 },
  { q: "How can you create a comment in CSS?", choices: ["// comment", "<!-- comment -->", "/* comment */", "# comment"], answer: 2 },
  { q: "Which property controls the line spacing?", choices: ["text-spacing", "line-height", "spacing", "text-line"], answer: 1 },
  { q: "Which unit is NOT relative in CSS?", choices: ["em", "rem", "px", "%"], answer: 2 },
  { q: "Which CSS property makes text underline?", choices: ["text-decoration", "text-line", "underline", "decoration"], answer: 0 },
  { q: "Which property is used to round the corners of an element?", choices: ["corner-radius", "border-round", "border-radius", "border-corner"], answer: 2 },
  { q: "Which property controls the transparency of an element?", choices: ["opacity", "transparency", "visibility", "filter"], answer: 0 },
  { q: "Which property is used to change the cursor type when hovering?", choices: ["cursor-style", "pointer", "cursor", "hover"], answer: 2 }
],

 JavaScript: [
  { q: "What is JavaScript primarily used for?", choices: ["Database management", "Web page styling", "Web page interactivity", "Operating system design"], answer: 2 },
  { q: "Which company developed JavaScript?", choices: ["Microsoft", "Netscape", "Google", "IBM"], answer: 1 },
  { q: "Which of the following is the correct extension for JavaScript files?", choices: [".java", ".js", ".javascript", ".jvs"], answer: 1 },
  { q: "Which HTML tag is used to include JavaScript code?", choices: ["<js>", "<javascript>", "<script>", "<code>"], answer: 2 },
  { q: "How do you write 'Hello World' in an alert box?", choices: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"], answer: 2 },
  { q: "Which symbol is used for comments in JavaScript?", choices: ["#", "//", "<!--", "**"], answer: 1 },
  { q: "Which of the following is NOT a JavaScript data type?", choices: ["String", "Boolean", "Float", "Undefined"], answer: 2 },
  { q: "How can you create a function in JavaScript?", choices: ["function: myFunction()", "function myFunction()", "def myFunction()", "create function myFunction()"], answer: 1 },
  { q: "How do you call a function named demo?", choices: ["call demo();", "demo();", "function demo();", "call function demo();"], answer: 1 },
  { q: "Which operator is used to assign a value to a variable?", choices: ["*", "-", "=", "=="], answer: 2 },
  { q: "Which method converts JSON text to a JavaScript object?", choices: ["JSON.from()", "JSON.parse()", "JSON.convert()", "JSON.stringify()"], answer: 1 },
  { q: "Which method adds an element to the end of an array?", choices: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },
  { q: "What will typeof null return?", choices: ["null", "object", "undefined", "string"], answer: 1 },
  { q: "Which event occurs when a user clicks on an HTML element?", choices: ["onmouseclick", "onchange", "onclick", "onmouseover"], answer: 2 },
  { q: "How do you declare a JavaScript variable?", choices: ["variable carName;", "var carName;", "v carName;", "dim carName;"], answer: 1 },
  { q: "Which keyword is used to define a constant in JavaScript?", choices: ["var", "const", "let", "fixed"], answer: 1 },
  { q: "What is the result of 2 + '2' in JavaScript?", choices: ["4", "22", "Error", "NaN"], answer: 1 },
  { q: "Which function is used to print to the browser console?", choices: ["print()", "log.console()", "console.log()", "show.log()"], answer: 2 },
  { q: "Which loop executes at least once even if the condition is false?", choices: ["for", "while", "do...while", "repeat"], answer: 2 },
  { q: "Which of the following is used to handle errors in JavaScript?", choices: ["try...catch", "do...while", "if...else", "switch"], answer: 0 },
  { q: "What is the output of typeof NaN?", choices: ["number", "NaN", "undefined", "object"], answer: 0 },
  { q: "Which method removes the last element from an array?", choices: ["push()", "pop()", "shift()", "splice()"], answer: 1 },
  { q: "How can you detect the client’s browser name in JavaScript?", choices: ["navigator.appName", "browser.name", "window.browser", "client.browser"], answer: 0 },
  { q: "What will Boolean(0) return?", choices: ["true", "false", "undefined", "null"], answer: 1 },
  { q: "What is the default value of an uninitialized variable in JavaScript?", choices: ["null", "0", "undefined", "NaN"], answer: 2 },
  { q: "Which operator is used for strict equality comparison?", choices: ["==", "===", "=", "equals()"], answer: 1 },
  { q: "Which function converts a string to an integer in JavaScript?", choices: ["toInteger()", "parseInt()", "int()", "convertInt()"], answer: 1 },
  { q: "What is the output of '5' + 3 + 2?", choices: ["10", "532", "55", "7"], answer: 1 },
  { q: "Which object is the top of the hierarchy in the browser environment?", choices: ["document", "window", "console", "body"], answer: 1 },
  { q: "Which keyword is used to exit from a loop in JavaScript?", choices: ["exit", "break", "stop", "return"], answer: 1 }
],

 Python: [
  { q: "Who developed Python Programming Language?", choices: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"], answer: 2 },
  { q: "In which year was Python first released?", choices: ["1989", "1991", "1995", "2000"], answer: 1 },
  { q: "What is the correct file extension for Python files?", choices: [".pyth", ".pt", ".p", ".py"], answer: 3 },
  { q: "Which of the following is used to display output in Python?", choices: ["print()", "echo()", "display()", "write()"], answer: 0 },
  { q: "What is the output of print(type(5))?", choices: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'bool'>"], answer: 1 },
  { q: "Which of the following is a valid variable name in Python?", choices: ["1name", "name_1", "name-1", "@name"], answer: 1 },
  { q: "What keyword is used to define a function in Python?", choices: ["func", "define", "def", "function"], answer: 2 },
  { q: "Which of these is not a core data type in Python?", choices: ["Lists", "Dictionary", "Tuples", "Class"], answer: 3 },
  { q: "Which of the following statements creates a list?", choices: ["list1 = (1, 2, 3)", "list1 = [1, 2, 3]", "list1 = {1, 2, 3}", "list1 = <1, 2, 3>"], answer: 1 },
  { q: "What is the output of len('Python')?", choices: ["5", "6", "7", "8"], answer: 1 },
  { q: "How do you insert comments in Python code?", choices: ["// comment", "/* comment */", "# comment", "-- comment"], answer: 2 },
  { q: "Which function is used to get user input in Python 3?", choices: ["input()", "raw_input()", "scan()", "get()"], answer: 0 },
  { q: "What is the output of 3 * 'hi'?", choices: ["hi", "3hi", "hi3", "hihihi"], answer: 3 },
  { q: "How do you start a for loop in Python?", choices: ["for i to range(5):", "for i in range(5):", "for (i=0; i<5; i++):", "loop i in range(5)"], answer: 1 },
  { q: "Which of the following is used to define a block of code in Python?", choices: ["Curly braces {}", "Parentheses ()", "Indentation", "Quotation marks"], answer: 2 },
  { q: "What is the output of bool(0)?", choices: ["True", "False", "0", "None"], answer: 1 },
  { q: "What is the correct syntax to import a module in Python?", choices: ["include module", "import module", "using module", "attach module"], answer: 1 },
  { q: "Which keyword is used to handle exceptions?", choices: ["catch", "try", "error", "except"], answer: 1 },
  { q: "What is the output of 2 ** 3?", choices: ["5", "6", "8", "9"], answer: 2 },
  { q: "Which function returns the number of items in a list?", choices: ["count()", "length()", "len()", "size()"], answer: 2 },
  { q: "What is the correct way to create a dictionary in Python?", choices: ["dict = {1,2,3}", "dict = {'name':'Kiran', 'age':20}", "dict = (1:'Kiran', 2:'Fatima')", "dict = ['Kiran', 'Fatima']"], answer: 1 },
  { q: "What does break do in a loop?", choices: ["Skips one iteration", "Ends the loop entirely", "Restarts the loop", "Pauses the loop"], answer: 1 },
  { q: "Which of the following is immutable?", choices: ["List", "Set", "Tuple", "Dictionary"], answer: 2 },
  { q: "What is the output of round(3.7)?", choices: ["3", "4", "3.5", "7"], answer: 1 },
  { q: "How do you create a set in Python?", choices: ["s = []", "s = {}", "s = set([1, 2, 3])", "s = (1, 2, 3)"], answer: 2 },
  { q: "What is the output of type([])?", choices: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"], answer: 0 },
  { q: "What is the output of min([2, 4, 1, 5])?", choices: ["5", "4", "2", "1"], answer: 3 },
  { q: "What keyword is used to exit from a function?", choices: ["stop", "break", "return", "exit"], answer: 2 },
  { q: "What is the output of 'Python'.lower()?", choices: ["python", "PYTHON", "Python", "pYTHON"], answer: 0 },
  { q: "Which operator is used for floor division in Python?", choices: ["/", "//", "%", "**"], answer: 1 }
]
};

const state = {
  name: "",
  topic: "",
  current: 0,
  total: 0,
  questions: [],
  answersGiven: []
};

const nameScreen = document.getElementById("nameScreen");
const menuEl = document.getElementById("menu");
const quizCard = document.getElementById("quizCard");
const leaderboardEl = document.getElementById("leaderboard");

function submitName() {
  const name = document.getElementById("studentName").value.trim();
  if(!name) return alert("Please enter your name!");
  state.name = name;
  nameScreen.style.display = "none";
  menuEl.style.display = "block";
  document.getElementById("displayName").innerText = name;
}

function startQuiz(topic){
  state.topic = topic;
  state.questions = QUIZZES[topic];
  state.current = 0;
  state.total = state.questions.length;
  state.answersGiven = new Array(state.total).fill(null);
  menuEl.style.display = "none";
  quizCard.style.display = "block";
  recreateQuizCard();
  renderQ();
}

function recreateQuizCard(){
  quizCard.innerHTML = `
    <div class="q-top">
      <h2 id="topicLabel">${state.topic} Quiz</h2>
      <div class="progress"><i id="progressBar"></i></div>
      <div class="small">Question <span id="qIndex"></span> of <span id="qTotal"></span></div>
    </div>
    <div class="question" id="question"></div>
    <div class="answers" id="answers"></div>
    <div class="controls">
      <button class="btn ghost" onclick="backToMenu()">🏠 Menu</button>
      <div>
        <button class="btn ghost" onclick="prevQ()">⬅ Prev</button>
        <button class="btn primary" onclick="nextQ()">Next ➡</button>
      </div>
    </div>`;
}

function renderQ(){
  const q = state.questions[state.current];
  document.getElementById("qIndex").innerText = state.current + 1;
  document.getElementById("qTotal").innerText = state.total;
  document.getElementById("question").innerText = q.q;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.choices.forEach((choice, i)=>{
    const btn = document.createElement("div");
    btn.className = "answer";
    btn.innerText = choice;
    if(state.answersGiven[state.current] === i) btn.classList.add("selected");
    btn.onclick = () => selectAnswer(i);
    answersDiv.appendChild(btn);
  });
  document.getElementById("progressBar").style.width = ((state.current+1)/state.total*100)+"%";
}

function selectAnswer(index){
  state.answersGiven[state.current] = index;
  document.querySelectorAll(".answer").forEach((el,i)=>{
    el.classList.toggle("selected", i===index);
  });
}

function nextQ(){
  if(state.current < state.total - 1){
    state.current++;
    renderQ();
  } else finishQuiz();
}

function prevQ(){
  if(state.current > 0){
    state.current--;
    renderQ();
  }
}

function finishQuiz() {
  const correctCount = state.questions.reduce((acc, q, i) =>
    acc + (state.answersGiven[i] === q.answer ? 1 : 0), 0);
  const scorePercent = Math.round((correctCount / state.total) * 100);

  // ✅ Automatically save score for every participant
  saveToLeaderboard(scorePercent);

  quizCard.innerHTML = `
    <div class="result">
      <h2>Quiz Completed 🎉</h2>
      <p class="score">${scorePercent}%</p>
      <p>You got <b>${correctCount}</b> out of <b>${state.total}</b> correct.</p>
      <div style="margin-top:20px;">
        <button class="btn ghost" onclick="showLeaderboard()">View Leaderboard 🏆</button>
        <button class="btn primary" onclick="backToMenu()">Back to Menu</button>
      </div>
    </div>
  `;

  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
}

function saveToLeaderboard(score) {
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
  // ✅ Save everyone’s participation
  leaderboard.push({
    name: state.name,
    topic: state.topic,
    score,
    date: new Date().toLocaleDateString()
  });
  // Sort descending by score
  leaderboard.sort((a, b) => b.score - a.score);
  // Keep all users (remove slice)
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function saveToLeaderboard(score){
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
  leaderboard.push({ name: state.name, topic: state.topic, score, date: new Date().toLocaleDateString() });
  leaderboard.sort((a,b)=>b.score - a.score);
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard.slice(0,10)));
  showLeaderboard();
}

function showLeaderboard(){
  menuEl.style.display = 'none';
  quizCard.style.display = 'none';
  leaderboardEl.style.display = 'block';
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
  const table = document.getElementById('leaderboardTable');
  if(leaderboard.length===0){
    table.innerHTML = "<tr><td>No scores yet. Be the first!</td></tr>";
    return;
  }
  let html = `<tr><th>Rank</th><th>Name</th><th>Topic</th><th>Score</th><th>Date</th></tr>`;
  leaderboard.forEach((entry,i)=>{
    html += `<tr><td>${i+1}</td><td>${entry.name}</td><td>${entry.topic}</td><td>${entry.score}%</td><td>${entry.date}</td></tr>`;
  });
  table.innerHTML = html;
}

function backToMenu(){
  quizCard.style.display = 'none';
  menuEl.style.display = 'block';
}

function backToMenuFromLeaderboard(){
  leaderboardEl.style.display = 'none';
  menuEl.style.display = 'block';
}
