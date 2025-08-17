// JS/login.js

// Clock — updates every second
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const clock = document.getElementById('clock');
  if (clock) clock.textContent = `${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);

// Safe element references (script is loaded at end of body so elements exist)
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const enterBtn = document.getElementById('enterBtn');

function loginUser() {
  const username = usernameInput ? usernameInput.value.trim() : '';
  const password = passwordInput ? passwordInput.value.trim() : '';

  if (!username || !password) {
    alert('Please enter both username and password');
    return;
  }

  // optional: store current user
  try { localStorage.setItem('currentUser', username); } catch (e) {}

  // nice UX: disable button briefly so user sees something happened
  enterBtn.disabled = true;
  enterBtn.textContent = 'Entering...';

  // redirect to Home.html after a short delay (fake processing)
  setTimeout(() => {
    // NOTE: make sure the file name and path exactly match (case-sensitive on some servers)
    window.location.href = 'HTML/Home.html';
  }, 700);
}

// click handler
if (enterBtn) enterBtn.addEventListener('click', loginUser);

// allow Enter key on username or password fields
function handleKey(e) {
  if (e.key === 'Enter') loginUser();
}
if (usernameInput) usernameInput.addEventListener('keydown', handleKey);
if (passwordInput) passwordInput.addEventListener('keydown', handleKey);
