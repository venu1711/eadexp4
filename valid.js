document.getElementById('login-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    const password = document.getElementById('password').value;
    if (validatePassword(password)) {
        showToast("Password is valid ✔️");
    } else {
        showToast("Password should be at least 8 characters and contain at least one capital letter ❌");
    }
});

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}

function showToast(message, duration = 3000) {
    const toastContainer = document.getElementById('toast-container');

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    // Add the toast to the container
    toastContainer.appendChild(toast);

    // Show the toast
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Hide the toast after the specified duration
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, duration);
}
