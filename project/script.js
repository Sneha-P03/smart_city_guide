document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple client-side validation
    if (username === 'admin' && password === 'password123') {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = 'Login successful!';
        // Redirect to another page or perform any other action
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});
