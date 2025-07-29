let secretNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    result.textContent = "1ден 100гө чейинки сан жазыңыз!";
    return;
  }

  if (guess === secretNumber) {
    result.textContent = `🎉 Туура таптың! Сан: ${secretNumber}`;
    checkBtn.disabled = true;
    resetBtn.style.display = 'inline-block';
  } else if (guess < secretNumber) {
    result.textContent = "🔼 Көп! (Сан чоңураак)";
  } else {
    result.textContent = "🔽 Аз! (Сан кичирээк)";
  }
});

resetBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  result.textContent = "";
  guessInput.value = "";
  checkBtn.disabled = false;
  resetBtn.style.display = 'none';
});
