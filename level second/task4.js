// script.js

// Check if the user is already logged in
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn')) {
        showSecuredPage();
    }
});

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Check if the username and password match
    if (localStorage.getItem(username) === password) {
        localStorage.setItem('loggedIn', username);
        showSecuredPage();
    } else {
        document.getElementById('login-error').innerText = 'Invalid username or password.';
    }
}

function register() {
    let newUsername = document.getElementById('new-username').value;
    let newPassword = document.getElementById('new-password').value;

    // Check if the username already exists
    if (localStorage.getItem(newUsername)) {
        document.getElementById('register-error').innerText = 'Username already exists.';
    } else {
        localStorage.setItem(newUsername, newPassword);
        document.getElementById('register-success').innerText = 'Registration successful. You can now login.';
    }
}

function showSecuredPage() {
    window.location.href = 'secured.html';
}
