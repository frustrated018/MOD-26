document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-pass').value;

    // Dangerous [Not the proper way to validate users] but fine for now BS.

    if (email === 'takameredebo@chormail.com' && password === 'heheboiii') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Tui Keda?!');
    }
})