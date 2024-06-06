document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator__buttons input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.value;
            display.value += value;
        });
    });
});
