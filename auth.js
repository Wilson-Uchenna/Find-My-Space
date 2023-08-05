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
            localStorage.setItem('signedUp', 'true')
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
            localStorage.setItem('loggedIn', 'true');
            window.location.href = "./index.html";
            }
        });
}
document.getElementById('upload-image').addEventListener('change', function() {
    const uploadContainer = document.getElementById('upload-container');
    const fileInput = this;
    const element = document.querySelector('.col-lg-3.col-md-12.col-sm-12.rounded-5.shadow.mb-3.bg-body.rounded.d-flex.flex-column.py-5.align-items-center');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const uploadedImage = document.createElement('img');
            uploadedImage.src = e.target.result;
            uploadedImage.classList.add('img-fluid', 'mt-4'); // Add Bootstrap class for responsive images
            uploadContainer.innerHTML = ''; // Clear previous content
            uploadContainer.appendChild(uploadedImage);
            const element = document.querySelector('.col-lg-3.col-md-12.col-sm-12.rounded-5.shadow.mb-3.bg-body.rounded.d-flex.flex-column.py-5.align-items-center');
        }

        reader.readAsDataURL(fileInput.files[0]);
    }
});
document.getElementById('upload-image-2').addEventListener('change', function() {
    const element = document.querySelector('.col-lg-3.col-md-12.col-sm-12.rounded-5.shadow.mb-3.bg-body.rounded.d-flex.flex-column.py-5.align-items-center');
    const uploadContainer = document.getElementById('upload-container-2');
    const fileInput = this;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const uploadedImage = document.createElement('img');
            uploadedImage.src = e.target.result;
            
            uploadedImage.classList.add('img-fluid'); // Add Bootstrap class for responsive images
            uploadContainer.innerHTML = ''; // Clear previous content
            uploadContainer.appendChild(uploadedImage);
            element.classList.remove('py-5');
        }

        reader.readAsDataURL(fileInput.files[0]);
    }
});




  

