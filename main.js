window.onload = function () {
    const inputEmail = document.getElementById('inputEmail');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const key = 'email';
        const value = inputEmail.value;

        if (value) {
            localStorage.setItem(key, value);
            alert(`Thank you for signing up!`);
            location.reload();
        }
    });
};
