// Countdown Timer
const countdown = document.getElementById('countdown');
const saleEnd = new Date().getTime() + (2 * 60 * 60 * 1000); // 2 hours from now
const updateTimer = () => {
  const now = new Date().getTime();
  const distance = saleEnd - now;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerText = `Flash Sale ends in: ${hours}:${minutes}:${seconds}`;
};
setInterval(updateTimer, 1000);