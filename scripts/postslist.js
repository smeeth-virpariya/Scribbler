var card_to_delete = null;
var delete_post_modal = document.getElementById("delete-post-modal");
var yes_modal_button = document.getElementById("yes-modal-button");
var no_modal_button = document.getElementById("no-modal-button");

function deletePost(card) {

    toggleDeleteModal();

    card_to_delete = document.getElementById(card);
}

yes_modal_button.onclick = function() {
    toggleDeleteModal();
    console.log(card_to_delete != null);
    if (card_to_delete != null) {
        card_to_delete.parentNode.removeChild(card_to_delete);
    }
}

no_modal_button.onclick = function() {
    toggleDeleteModal();
}

function toggleDeleteModal() {
    delete_post_modal.classList.toggle("show-modal");
}