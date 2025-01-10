const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.querySelector('input[placeholder="Email"]').value;
    const username = document.querySelector('input[placeholder="Username"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.email === email || user.username === username);

    if (userExists) {
        alert('User already exists!');
        return;
    }

    users.push({
        email: email,
        username: username,
        password: password
    });

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify({username: username, email: email}));
    
    alert('Registration successful!');
    window.location.href = 'Home.html';
});