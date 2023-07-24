const loginForm = document.getElementById("login-form")
const signupForm = document.getElementById("signup-form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const address = document.getElementById("address")
const password = document.getElementById("password")

const firstButton = document.getElementsByClassName('text-primary')
// show error function 
function showError(input, message) {
    const inputBox = input.parentElement;
    inputBox.className = 'input-box error'
    const small = inputBox.querySelector('small')
    small.innerText = message;
}

//show succes function
function showSuccess(input) {
   const inputBox = input.parentElement;
    inputBox.className = "input-box success";
}

function isValidEmail(email) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

//show event listener
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let count = 0;

        if(username.value === '') {
            showError(username, 'The username or password you entered is incorrect, please try again');
        }else {
            count++;
            showSuccess(username)
        }

        if(email.value === '') {
            showError(email, 'The email you entered is incorrect, please try again');
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Email is not valid');
        }else {
            count++;
            showSuccess(email)
        }

        if(address.value === '') {
            showError(address, 'Name is required');
        }else {
            count++;
            showSuccess(address)
        }

        if(password.value === '') {
            showError(password, 'The username or password you entered is incorrect, please try again');
        }else {
            count++;
            showSuccess(password)
        }

        if (count == 4) {
            window.location.href = "./index.html";
        }
    });
}

//show event listener
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let count = 0;

        if(email.value === '') {
            showError(email, 'The email you entered is incorrect, please try again');
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Email is not valid');
        }else {
            count++;
            showSuccess(email)
        }

        if(password.value === '') {
            showError(password, 'The username or password you entered is incorrect, please try again');
        }else {
            count++;
            showSuccess(password)
        }

        if (count == 2) {
            window.location.href = "./index.html";
            }
    });
}
