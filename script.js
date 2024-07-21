document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        if (username.length < 3){
            messages.push("username is less than 3 characters");
            console.log(username);
        }

        if (!email.includes('@') || !email.includes('.')){
            isValid = false;
            messages.push("Enter a alid email address!");
        }

        if(password.length < 8){
            isValid = false;
            messages.push("Wrong password. 2 attempts left");
            console.log(password)
        }

        feedbackDiv.style.display = 'block'
        if(isValid){
            feedbackDiv.textContent = "Registration successful"
            feedbackDiv.style.color = '#28a745'
        } else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});