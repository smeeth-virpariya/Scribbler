//Contains js functionalities which is only specific to postslist.html.
var card_to_delete = null;
var delete_post_modal = document.getElementById("delete-post-modal");
var yes_modal_button = document.getElementById("yes-modal-button");
var no_modal_button = document.getElementById("no-modal-button");

/**
 * This method is called when you click on delete (thrash) icon.
 */
function deletePost(card) {

    toggleDeleteModal();

    card_to_delete = document.getElementById(card);
}

/**
 * This is triggered when you click yes on the modal that appears when you delete a post.
 */
yes_modal_button.onclick = function() {
    toggleDeleteModal();
    console.log(card_to_delete != null);
    if (card_to_delete != null) {
        card_to_delete.parentNode.removeChild(card_to_delete);
    }
}

/**
 * This is triggered when you click NO on the modal that appears when you delete a post.
 */
no_modal_button.onclick = function() {
    toggleDeleteModal();
}

/**
 * adds or removes show-modal to class list of delete modal so that it appears and disappears
 */
function toggleDeleteModal() {
    delete_post_modal.classList.toggle("show-modal");
}

/**
 * This method is called when you click on ... icon.
 * Saves the content of the selected post in session and opens post.html.
 */
function openPost(author, title, content) {
    console.log('Author ' + author);
    sessionStorage.setItem('postAuthorName', author.innerHTML);
    sessionStorage.setItem('postTitle', title.innerHTML);
    sessionStorage.setItem('postContent', content.innerHTML);
    var url = "../html/post.html?heading";
    window.location.href = url;
}