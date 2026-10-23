function shuffle(arr) {
 const a = [...arr];
 for (let i = a.length - 1; i > 0; i--) {
 const j = Math.floor(Math.random() * (i + 1));
 [a[i], a[j]] = [a[j], a[i]];
 }
 return a;
}
function startTimer() {
 clearInterval(timerId);
 timeLeft = TIME_PER_QUESTION;
 timerId = setInterval(() => { Page 4
 timeLeft--;
 if (timeLeft <= 0) {
 clearInterval(timerId);
 if (currentIndex < questions.length - 1) goNext();
 else submitQuiz();
 }
 }, 1000);
}
The best score is saved only when the new score is higher than the stored one:
function saveBestScore(category, score) {
 const best = getBestScores();
 const isNew = best[category] === undefined || score > best[category];
 if (isNew) {
 best[category] = score;
 localStorage.setItem(STORAGE_KEY, JSON.stringify(best));
 }
 return isNew;
}
