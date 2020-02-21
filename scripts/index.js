var signup_modal = document.getElementById("sign-up-modal");

var signup_modal_close_button = document.getElementById("signup-modal-close-button");

var signup_button = document.getElementById("header-button-sign-up");

signup_button.onclick = function() {
    toggleSignupModal();
}

signup_modal_close_button.onclick = function() {
    toggleSignupModal();
}

function toggleSignupModal() {
    signup_modal.classList.toggle("show-modal");
}