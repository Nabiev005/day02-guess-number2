const startBtn = document.getElementById('startBtn');
const dateInput = document.getElementById('dateInput');
const countdown = document.getElementById('countdown');
const timerDiv = document.getElementById('timer');
let interval;

startBtn.addEventListener('click', () => {
  const targetDate = new Date(dateInput.value);
  if (!dateInput.value) {
    alert("Сураныч, дата тандаңыз!");
    return;
  }

  timerDiv.classList.remove('hidden');
 
  clearInterval(interval); // мурунку таймерди токтот
  interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdown.textContent = "🟢 Убакыт бүттү!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.textContent = `${days} күн, ${hours} с, ${minutes} м, ${seconds} с`;
  }, 1000);
});
