document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.buy-tickets');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Tickets are not yet available.');
        });
    });
});
