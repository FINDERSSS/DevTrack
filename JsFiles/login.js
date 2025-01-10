const form = document.querySelector('form');
const rememberMe = document.querySelector('input[type="checkbox"]');

window.addEventListener('load', () => {
    const remembered = JSON.parse(localStorage.getItem('rememberedUser'));
    if (remembered) {
        document.querySelector('input[placeholder="Username/Email"]').value = remembered.userInput;
        document.querySelector('input[placeholder="Password"]').value = remembered.password;
        document.querySelector('input[type="checkbox"]').checked = true;
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userInput = document.querySelector('input[placeholder="Username/Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => (u.email === userInput || u.username === userInput) && u.password === password);

    if (user) {
        if (rememberMe.checked) {
            localStorage.setItem('rememberedUser', JSON.stringify({
                userInput: userInput,
                password: password
            }));
        } else {
            localStorage.removeItem('rememberedUser');
        }

        localStorage.setItem('currentUser', JSON.stringify({
            username: user.username,
            email: user.email
        }));
        alert('Login successful!');
        window.location.href = 'Home.html';
    } else {
        alert('Invalid username/email or password');
    }
});