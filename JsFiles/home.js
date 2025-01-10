const usernameDisplay = document.getElementById('username-display');
const logoutBtn = document.getElementById('logout-btn');

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (!currentUser) {
    window.location.href = 'Login.html';
} else {
    usernameDisplay.textContent = currentUser.username;
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'Login.html';
});