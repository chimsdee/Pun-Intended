window.addEventListener("load", () => document.body.classList.add("loaded"));

document.getElementById('togglepassword')
    .addEventListener('change', function () {
        var passwordinput = document.getElementById('password');
        if (this.checked) {
            passwordinput.type = "text";
        } else {
            passwordinput.type = "password";
        }
    })


document.addEventListener('DOMContentLoaded', function () {
    initializeFormToggle();
    initializePasswordToggle();
    initializeNavLinks();
    initializeFormSubmission();
});


function initializeFormToggle() {
    const loginBtn = document.getElementById('login-toggle');
    const signupBtn = document.getElementById('signup-toggle');
    const navLogin = document.getElementById('nav-login');
    const navSignup = document.getElementById('nav-signup');

    if (loginBtn && signupBtn) {
        loginBtn.addEventListener('click', showLoginForm);
        signupBtn.addEventListener('click', showSignupForm);
    }

    if (navLogin && navSignup) {
        navLogin.addEventListener('click', function (e) {
            e.preventDefault();
            showLoginForm();
        });

        navSignup.addEventListener('click', function (e) {
            e.preventDefault();
            showSignupForm();
        });
    }
}

function showLoginForm() {

    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');


    document.querySelector('.login-form h1 b').textContent = 'Login';


    document.querySelector('#submit-btn b').textContent = 'Login';


    const confirmPasswordGroup = document.querySelector('.confirm-password-group');
    confirmPasswordGroup.style.display = 'none';


    document.getElementById('remember-me').style.display = 'flex';


    document.getElementById('auth-form').action = 'login_process.php';


    document.getElementById('confirm-password').value = '';

    console.log('Switched to Login form');
}

function showSignupForm() {

    document.getElementById('signup-toggle').classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');


    document.querySelector('.login-form h1 b').textContent = 'Sign Up';

    document.querySelector('#submit-btn b').textContent = 'Sign Up';

    const confirmPasswordGroup = document.querySelector('.confirm-password-group');
    confirmPasswordGroup.style.display = 'block';


    document.getElementById('remember-me').style.display = 'none';


    document.getElementById('auth-form').action = 'signup_process.php';

    console.log('Switched to Sign Up form');
}

function initializePasswordToggle() {
    const toggleCheckbox = document.getElementById('togglepassword');

    if (toggleCheckbox) {
        toggleCheckbox.addEventListener('change', function () {
            const passwordField = document.getElementById('password');
            const confirmPasswordField = document.getElementById('confirm-password');

            if (this.checked) {
                passwordField.type = 'text';
                if (confirmPasswordField) {
                    confirmPasswordField.type = 'text';
                }
            } else {
                passwordField.type = 'password';
                if (confirmPasswordField) {
                    confirmPasswordField.type = 'password';
                }
            }
        });
    }
}


function initializeNavLinks() {

}


function initializeFormSubmission() {
    const submitBtn = document.getElementById('submit-btn');
    const form = document.getElementById('auth-form');

    if (submitBtn && form) {
        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();

            const isLoginForm = document.getElementById('login-toggle').classList.contains('active');
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;


            if (!username || !password) {
                alert('Please fill in all required fields');
                return;
            }


            if (!isLoginForm) {
                const confirmPassword = document.getElementById('confirm-password').value;
                if (password !== confirmPassword) {
                    alert('Passwords do not match!');
                    return;
                }

                if (password.length < 6) {
                    alert('Password should be at least 6 characters long');
                    return;
                }
            }

            window.location.href = 'main_page.html';
        });
    }
}


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


document.addEventListener('DOMContentLoaded', function () {

    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 2000);
        });
    }


    const inputs = document.querySelectorAll('.user-input input');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});