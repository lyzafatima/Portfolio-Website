document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu');
    const topnav = document.getElementById('topnav');

    menuIcon.addEventListener('click', function() {
        topnav.classList.toggle('responsive');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.con form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();


        if (!/^[a-zA-Z\s]+$/.test(name)) {
            displayAlert('Name should contain only letters.', 'error');
            return; 
        }

        if (!email.includes('@')) {
            displayAlert('Invalid email format.', 'error');
            return; 
        }

    
        if (name === '' || email === '' || message === '') {
            displayAlert('Please fill in all fields.', 'error');
            return; 
        }

        form.reset();
        displayAlert('Form submitted successfully!', 'success');
    });

    function displayAlert(message, type) {
        const alert = document.createElement('div');
        alert.classList.add('alert', `alert-${type}`);
        alert.textContent = message;

        const container = document.querySelector('.con');
        container.insertBefore(alert, form);

        setTimeout(function() {
            alert.remove();
        }, 3000);
    }
});
