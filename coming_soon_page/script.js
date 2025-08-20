// Use ISO date format (YYYY-MM-DDTHH:MM:SS)
const launchDate = new Date("2025-09-31T23:59:59").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = launchDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "<h2>🎉 We are Live!</h2>";
    return;
  }

  // Time calculations
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update HTML
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);
