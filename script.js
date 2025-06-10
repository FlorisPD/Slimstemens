const vragen = [
  "Vertel alles wat je weet over: Vincent van Gogh",
  "Vertel alles wat je weet over: De Tweede Wereldoorlog",
  "Vertel alles wat je weet over: The Beatles",
  "Vertel alles wat je weet over: De Olympische Spelen"
];

let currentTime = 60;
let timerInterval;

function nextQuestion() {
  const vraag = vragen[Math.floor(Math.random() * vragen.length)];
  document.getElementById("question-text").innerText = vraag;
}

function startTimer() {
  clearInterval(timerInterval);
  currentTime = 60;
  document.getElementById("time").innerText = currentTime;
  timerInterval = setInterval(() => {
    currentTime--;
    document.getElementById("time").innerText = currentTime;
    if (currentTime <= 0) {
      clearInterval(timerInterval);
      alert("Tijd is om!");
    }
  }, 1000);
}

function addPoint(player) {
  const el = document.getElementById("score" + player);
  let score = parseInt(el.innerText);
  el.innerText = score + 1;
}