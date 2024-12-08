document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const message = document.getElementById('message');
    const rangeInput = document.getElementById('page-rating');
    const rangeValue = document.getElementById('range-value');

    // Password validation
    form.addEventListener('submit', (e) => {
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            message.textContent = 'Passwords do not match. Please try again.';
            message.classList.add('error');
            password.value = '';
            confirmPassword.value = '';
            password.focus();
        }
    });

    // Clear error message when user starts typing again
    password.addEventListener('input', () => {
        message.textContent = '';
        message.classList.remove('error');
    });

    // Range input value display
    rangeInput.addEventListener('input', (e) => {
        rangeValue.textContent = e.target.value;
    });

    // Initialize range value display
    rangeValue.textContent = rangeInput.value;
});
