const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');

    if (!email || !password) {
      errorMsg.style.display = 'block';
      return;
    }
    errorMsg.style.display = 'none';
    window.location.href = 'dashboard.html';
  });
}
