// step 1 add click even handler in submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //    step 2 get the email address inside the email input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value

    // step 3 get the password inside the password input field
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value

    // DANGER:do not use it
    // step 4 verify email and password
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Tui password vul korsos!!! shotik password da')
    }
})