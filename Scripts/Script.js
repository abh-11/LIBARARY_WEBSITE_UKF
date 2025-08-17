
function updateClock() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hh}:${mm}:${ss}`;
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById("menuToggle").addEventListener("click", function() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("active"); // Toggles visibility
});

document.addEventListener('DOMContentLoaded', function() {
  const audio = new Audio('assets/Firefly in a Fairytale by Gareth Coker (Veritasium Theme).mp3');
  audio.loop = true;
  
  // Try to play (will fail in most browsers without interaction)
  audio.play().catch(e => {
    console.log("Autoplay blocked - will play after interaction");
    document.body.addEventListener('click', function() {
      audio.play();
    }, { once: true });
  });
});