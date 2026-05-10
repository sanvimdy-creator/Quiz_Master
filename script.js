const quizData = {
  Science: [
    { q: "What is the chemical symbol for water?", opts: ["H2O","CO2","NaCl","O2"], ans: 0 },
    { q: "Which planet is known as the Red Planet?", opts: ["Venus","Jupiter","Mars","Saturn"], ans: 2 },
    { q: "What is the speed of light (approx.) in km/s?", opts: ["150,000","300,000","450,000","600,000"], ans: 1 },
    { q: "DNA stands for?", opts: ["Deoxyribonucleic Acid","Dinitrogen Acid","Deoxyribose Amine","None"], ans: 0 },
    { q: "Which gas do plants absorb during photosynthesis?", opts: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"], ans: 2 },
    { q: "The powerhouse of the cell is?", opts: ["Nucleus","Ribosome","Mitochondria","Golgi body"], ans: 2 },
    { q: "Newton's first law is also called the law of?", opts: ["Gravity","Inertia","Motion","Friction"], ans: 1 },
    { q: "What is the atomic number of Carbon?", opts: ["6","8","12","14"], ans: 0 },
    { q: "Sound cannot travel through?", opts: ["Water","Air","Vacuum","Steel"], ans: 2 },
    { q: "Which vitamin is produced by sunlight?", opts: ["Vitamin A","Vitamin B","Vitamin C","Vitamin D"], ans: 3 },
    { q: "What is the boiling point of water at sea level (°C)?", opts: ["90","95","100","105"], ans: 2 },
    { q: "Which organ produces insulin?", opts: ["Liver","Pancreas","Kidney","Heart"], ans: 1 },
    { q: "The unit of electric current is?", opts: ["Volt","Ohm","Ampere","Watt"], ans: 2 },
    { q: "Which element has symbol Fe?", opts: ["Fluorine","Iron","Francium","Fermium"], ans: 1 },
    { q: "Photons are particles of?", opts: ["Sound","Matter","Light","Heat"], ans: 2 },
    { q: "What type of bond holds water molecules together?", opts: ["Covalent","Ionic","Hydrogen","Metallic"], ans: 2 },
    { q: "Which planet has the most moons?", opts: ["Jupiter","Saturn","Uranus","Neptune"], ans: 1 },
    { q: "The SI unit of force is?", opts: ["Joule","Newton","Pascal","Watt"], ans: 1 },
    { q: "Which gas makes up most of Earth's atmosphere?", opts: ["Oxygen","Argon","Carbon Dioxide","Nitrogen"], ans: 3 },
    { q: "The study of heredity is called?", opts: ["Ecology","Genetics","Anatomy","Zoology"], ans: 1 }
  ],
  History: [
    { q: "In which year did World War II end?", opts: ["1943","1944","1945","1946"], ans: 2 },
    { q: "Who was the first President of the United States?", opts: ["Abraham Lincoln","George Washington","Thomas Jefferson","John Adams"], ans: 1 },
    { q: "The Great Wall of China was built primarily to defend against?", opts: ["Mongols","Romans","Persians","British"], ans: 0 },
    { q: "Which empire was ruled by Julius Caesar?", opts: ["Greek","Ottoman","Roman","Persian"], ans: 2 },
    { q: "The French Revolution began in?", opts: ["1769","1779","1789","1799"], ans: 2 },
    { q: "Mahatma Gandhi led India's independence movement against?", opts: ["France","Portugal","Britain","Russia"], ans: 2 },
    { q: "The Renaissance began in which country?", opts: ["France","Spain","England","Italy"], ans: 3 },
    { q: "Who discovered America in 1492?", opts: ["Vasco da Gama","Ferdinand Magellan","Christopher Columbus","Amerigo Vespucci"], ans: 2 },
    { q: "The Berlin Wall fell in?", opts: ["1985","1987","1989","1991"], ans: 2 },
    { q: "Ancient Egypt was ruled by?", opts: ["Emperors","Pharaohs","Kings","Sultans"], ans: 1 },
    { q: "Which war was fought between the North and South of the USA?", opts: ["World War I","Revolutionary War","Civil War","Spanish-American War"], ans: 2 },
    { q: "Who was the first man on the Moon?", opts: ["Buzz Aldrin","Yuri Gagarin","Neil Armstrong","John Glenn"], ans: 2 },
    { q: "The Magna Carta was signed in?", opts: ["1215","1315","1415","1115"], ans: 0 },
    { q: "Napoleon Bonaparte was exiled to which island?", opts: ["Corsica","Cuba","Elba","St. Helena"], ans: 3 },
    { q: "Which country was first to give women the right to vote?", opts: ["USA","UK","New Zealand","France"], ans: 2 },
    { q: "The Titanic sank in which year?", opts: ["1910","1912","1914","1916"], ans: 1 },
    { q: "Who painted the Sistine Chapel ceiling?", opts: ["Leonardo da Vinci","Raphael","Michelangelo","Botticelli"], ans: 2 },
    { q: "The Cold War was between the USA and?", opts: ["China","Germany","Soviet Union","Japan"], ans: 2 },
    { q: "The oldest civilization is generally considered to be?", opts: ["Egypt","Greece","Mesopotamia","China"], ans: 2 },
    { q: "The Treaty of Versailles ended which war?", opts: ["World War II","Korean War","World War I","Vietnam War"], ans: 2 }
  ],
  Technology: [
    { q: "What does CPU stand for?", opts: ["Central Processing Unit","Computer Processing Unit","Central Program Utility","Core Processing Unit"], ans: 0 },
    { q: "Which company created the iPhone?", opts: ["Samsung","Google","Apple","Microsoft"], ans: 2 },
    { q: "HTML stands for?", opts: ["Hyper Text Markup Language","High Transfer Markup Language","Hyper Transfer Mode Language","None of these"], ans: 0 },
    { q: "Who founded Microsoft?", opts: ["Steve Jobs","Bill Gates","Elon Musk","Mark Zuckerberg"], ans: 1 },
    { q: "What does 'WWW' stand for?", opts: ["World Wide Web","Wide World Web","World Web Wide","Web World Wide"], ans: 0 },
    { q: "Which programming language is known as the mother of all languages?", opts: ["Python","C","Java","COBOL"], ans: 1 },
    { q: "What is the full form of AI?", opts: ["Automated Intelligence","Artificial Intelligence","Analog Interface","Auto Integrated"], ans: 1 },
    { q: "Which company developed the Android OS?", opts: ["Apple","Microsoft","Google","Nokia"], ans: 2 },
    { q: "RAM stands for?", opts: ["Random Access Memory","Read Access Memory","Run Application Mode","Rapid Array Memory"], ans: 0 },
    { q: "What is the binary equivalent of the decimal number 10?", opts: ["1010","1001","1100","0110"], ans: 0 },
    { q: "Which protocol is used to send emails?", opts: ["FTP","HTTP","SMTP","TCP"], ans: 2 },
    { q: "What does 'URL' stand for?", opts: ["Uniform Resource Locator","Universal Resource Link","Unique Reference Location","None"], ans: 0 },
    { q: "Which data structure uses LIFO order?", opts: ["Queue","Tree","Stack","Graph"], ans: 2 },
    { q: "What is the most used operating system worldwide?", opts: ["macOS","Linux","Windows","Android"], ans: 3 },
    { q: "Which layer of the OSI model handles routing?", opts: ["Transport","Network","Data Link","Physical"], ans: 1 },
    { q: "What does 'GPU' stand for?", opts: ["Graphics Processing Unit","General Processing Utility","Graphical Program Unit","None"], ans: 0 },
    { q: "Python was created by?", opts: ["James Gosling","Linus Torvalds","Guido van Rossum","Dennis Ritchie"], ans: 2 },
    { q: "What is the main function of a firewall?", opts: ["Speed up internet","Store data","Block unauthorized access","Compress files"], ans: 2 },
    { q: "Which search engine has the highest market share?", opts: ["Bing","Yahoo","DuckDuckGo","Google"], ans: 3 },
    { q: "IoT stands for?", opts: ["Internet of Technology","Internet of Things","Interconnected Online Tools","Integrated Online Tech"], ans: 1 }
  ],
  Mathematics: [
    { q: "What is the value of π (pi) approximately?", opts: ["3.14","2.71","1.41","1.73"], ans: 0 },
    { q: "What is the square root of 144?", opts: ["11","12","13","14"], ans: 1 },
    { q: "What is 15% of 200?", opts: ["20","25","30","35"], ans: 2 },
    { q: "Which number is both even and prime?", opts: ["1","2","4","6"], ans: 1 },
    { q: "How many degrees are in a right angle?", opts: ["45","60","90","180"], ans: 2 },
    { q: "What is the area of a circle with radius 7? (use π=22/7)", opts: ["144","154","164","174"], ans: 1 },
    { q: "log10(1000) = ?", opts: ["2","3","4","10"], ans: 1 },
    { q: "What is the next prime number after 11?", opts: ["12","13","14","15"], ans: 1 },
    { q: "Solve: 2x + 5 = 15", opts: ["x=3","x=4","x=5","x=6"], ans: 2 },
    { q: "What is the sum of angles in a triangle?", opts: ["90°","180°","270°","360°"], ans: 1 },
    { q: "The factorial of 5 (5!) is?", opts: ["60","100","120","150"], ans: 2 },
    { q: "What is 2^10?", opts: ["512","1024","2048","256"], ans: 1 },
    { q: "A quadrilateral has how many sides?", opts: ["3","4","5","6"], ans: 1 },
    { q: "What is the HCF of 12 and 18?", opts: ["3","4","6","9"], ans: 2 },
    { q: "The slope of a horizontal line is?", opts: ["1","-1","0","Undefined"], ans: 2 },
    { q: "What is 0.5 as a fraction?", opts: ["1/3","1/4","1/2","2/3"], ans: 2 },
    { q: "How many sides does a hexagon have?", opts: ["5","6","7","8"], ans: 1 },
    { q: "If a = 3, b = 4, what is √(a²+b²)?", opts: ["5","6","7","8"], ans: 0 },
    { q: "The perimeter of a square with side 6 is?", opts: ["12","18","24","36"], ans: 2 },
    { q: "What is the LCM of 4 and 6?", opts: ["8","10","12","24"], ans: 2 }
  ],
  Geography: [
    { q: "What is the capital of Australia?", opts: ["Sydney","Melbourne","Canberra","Perth"], ans: 2 },
    { q: "Which is the largest country by area?", opts: ["China","USA","Canada","Russia"], ans: 3 },
    { q: "The Amazon River is located in?", opts: ["Africa","Asia","South America","North America"], ans: 2 },
    { q: "Which is the longest mountain range in the world?", opts: ["Himalayas","Rockies","Alps","Andes"], ans: 3 },
    { q: "Which ocean is the largest?", opts: ["Atlantic","Indian","Arctic","Pacific"], ans: 3 },
    { q: "Mount Everest is in which country?", opts: ["India","China","Nepal","Tibet"], ans: 2 },
    { q: "What is the capital of Japan?", opts: ["Osaka","Hiroshima","Kyoto","Tokyo"], ans: 3 },
    { q: "The Sahara Desert is in which continent?", opts: ["Asia","Australia","Africa","South America"], ans: 2 },
    { q: "Which is the smallest country in the world?", opts: ["Monaco","Liechtenstein","Vatican City","San Marino"], ans: 2 },
    { q: "Which country has the most natural lakes?", opts: ["USA","Russia","Brazil","Canada"], ans: 3 },
    { q: "The Nile River flows into which sea?", opts: ["Red Sea","Arabian Sea","Mediterranean Sea","Black Sea"], ans: 2 },
    { q: "The capital of Brazil is?", opts: ["São Paulo","Rio de Janeiro","Brasília","Salvador"], ans: 2 },
    { q: "Which continent has the most countries?", opts: ["Asia","Europe","South America","Africa"], ans: 3 },
    { q: "The Tropic of Cancer passes through?", opts: ["Only Africa","Only Asia","Multiple continents","Only America"], ans: 2 },
    { q: "Which is the deepest lake in the world?", opts: ["Caspian Sea","Lake Victoria","Lake Baikal","Lake Superior"], ans: 2 },
    { q: "What country is the Grand Canyon located in?", opts: ["Mexico","Canada","USA","Brazil"], ans: 2 },
    { q: "Which strait connects the Atlantic and Pacific oceans?", opts: ["Strait of Gibraltar","Strait of Malacca","Drake Passage","Bering Strait"], ans: 2 },
    { q: "The capital of Canada is?", opts: ["Toronto","Vancouver","Montreal","Ottawa"], ans: 3 },
    { q: "Which country has the most coastline?", opts: ["USA","Australia","Norway","Canada"], ans: 3 },
    { q: "The world's most populous city is?", opts: ["Mumbai","Shanghai","Tokyo","Beijing"], ans: 2 }
  ]
};

let userName = "", userDomain = "", selectedTopic = "", selectedTopicEl = null;
let currentQ = 0, score = 0, answered = false;
let shuffledQuestions = [];

function selectTopic(el) {
  if (selectedTopicEl) selectedTopicEl.classList.remove("selected");
  el.classList.add("selected");
  selectedTopicEl = el;
  selectedTopic = el.getAttribute("data-topic");
}

function startQuiz() {
  userName = document.getElementById("userName").value.trim();
  userDomain = document.getElementById("userDomain").value.trim();
  if (!userName)      { alert("Please enter your name."); return; }
  if (!userDomain)    { alert("Please enter your domain of interest."); return; }
  if (!selectedTopic) { alert("Please select a quiz topic."); return; }

  shuffledQuestions = [...quizData[selectedTopic]];
  currentQ = 0;
  score = 0;
  answered = false;

  document.getElementById("quizTopic").textContent = selectedTopic + " Quiz";
  document.getElementById("quizUser").textContent = userName;

  showPage("page2");
  loadQuestion();
}

function loadQuestion() {
  const q = shuffledQuestions[currentQ];
  const total = shuffledQuestions.length;

  document.getElementById("qCounter").textContent = `Question ${currentQ + 1} of ${total}`;
  document.getElementById("progressFill").style.width = `${((currentQ + 1) / total) * 100}%`;
  document.getElementById("liveScore").textContent = `Score: ${score}/${total}`;
  document.getElementById("questionText").textContent = `Q${currentQ + 1}. ${q.q}`;

  const labels = ["A", "B", "C", "D"];
  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  q.opts.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = `<span class="option-label">${labels[i]}</span> ${opt}`;
    div.onclick = () => selectAnswer(div, i);
    container.appendChild(div);
  });

  const nb = document.getElementById("nextBtn");
  nb.classList.remove("visible");
  nb.textContent = currentQ === shuffledQuestions.length - 1 ? "See Results →" : "Next →";
  answered = false;
}

function selectAnswer(el, idx) {
  if (answered) return;
  answered = true;

  const correct = shuffledQuestions[currentQ].ans;
  const opts = document.querySelectorAll(".option");
  opts.forEach(o => o.classList.add("disabled"));

  if (idx === correct) {
    el.classList.add("correct");
    score++;
  } else {
    el.classList.add("wrong");
    opts[correct].classList.add("correct");
  }

  document.getElementById("liveScore").textContent = `Score: ${score}/${shuffledQuestions.length}`;
  document.getElementById("nextBtn").classList.add("visible");
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= shuffledQuestions.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

function showResults() {
  const total = shuffledQuestions.length;
  const pct = Math.round((score / total) * 100);

  let grade, gradeClass;
  if (pct >= 90)      { grade = "Grade A — Excellent!";          gradeClass = "grade-A"; }
  else if (pct >= 70) { grade = "Grade B — Good Job!";           gradeClass = "grade-B"; }
  else if (pct >= 50) { grade = "Grade C — Average";             gradeClass = "grade-C"; }
  else                { grade = "Grade D — Needs Improvement";   gradeClass = "grade-D"; }

  document.getElementById("gradeBadge").textContent = grade;
  document.getElementById("gradeBadge").className = "grade-badge " + gradeClass;
  document.getElementById("resultPercent").textContent = pct + "%";

  document.getElementById("resultInfo").innerHTML = `
    <div class="result-info-row"><span class="key">Name</span><span class="val">${userName}</span></div>
    <div class="result-info-row"><span class="key">Domain</span><span class="val">${userDomain}</span></div>
    <div class="result-info-row"><span class="key">Topic</span><span class="val">${selectedTopic}</span></div>
    <div class="result-info-row"><span class="key">Score</span><span class="val">${score} / ${total}</span></div>
    <div class="result-info-row"><span class="key">Percentage</span><span class="val">${pct}%</span></div>
  `;

  const wrong = total - score;
  document.getElementById("resultGrid").innerHTML = `
    <div class="result-stat"><div class="val" style="color:#86efac">${score}</div><div class="lbl">Correct</div></div>
    <div class="result-stat"><div class="val" style="color:#fca5a5">${wrong}</div><div class="lbl">Wrong</div></div>
    <div class="result-stat"><div class="val" style="color:#a99af8">${pct}%</div><div class="lbl">Score</div></div>
  `;

  showPage("page3");
}

function retryQuiz() {
  currentQ = 0;
  score = 0;
  answered = false;
  shuffledQuestions = [...quizData[selectedTopic]];
  document.getElementById("quizTopic").textContent = selectedTopic + " Quiz";
  document.getElementById("quizUser").textContent = userName;
  showPage("page2");
  loadQuestion();
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}