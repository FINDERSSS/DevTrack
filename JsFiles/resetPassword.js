const form = document.querySelector('form');
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if (!token) {
    alert('Invalid reset link');
    window.location.href = 'Login.html';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newPassword = document.querySelector('input[placeholder="New Password"]').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;
    
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.resetToken === token);
    
    if (!user) {
        alert('Invalid or expired reset link');
        window.location.href = 'Login.html';
        return;
    }

    user.password = newPassword;
    user.resetToken = null; // Remove the reset token after use
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Password successfully reset!');
    window.location.href = 'Login.html';
});