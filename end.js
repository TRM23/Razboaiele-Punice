const scorRecent = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

finalScore.innerText = scorRecent;