var likeCount = 0;
var isSave = false;
load();

function likeClicked() {
    likeCount++;
    var like_button_text = document.getElementById('like-button-text');
    if (likeCount === 1) {
        like_button_text.innerHTML = likeCount + ' person likes this !';
    } else if (likeCount >= 2) {
        like_button_text.innerHTML = likeCount + ' people like this !';
    }
}

function commentClicked(comment) {
    var all_comments = document.getElementById('comments');
    var comment = document.getElementById('comment').value;
    var para = document.createElement("p");
    para.classList.add('each-comment');
    para.innerHTML = comment;
    all_comments.appendChild(para);
    document.getElementById('comment').value = "";
}

function editClicked() {
    toggleEditButton();
    toggleContentEditable();
}

function toggleEditButton() {
    var edit_button = document.getElementById('edit-save-button');
    if (isSave === false) {
        edit_button.innerHTML = 'Save <i class="fa fa-save fa-lg" aria-hidden="true">';
        isSave = true;
    } else {
        edit_button.innerHTML = 'Edit <i class="fa fa-edit fa-lg" aria-hidden="true">';
        isSave = false;
    }
}

function toggleContentEditable() {
    var post_desc = document.getElementById('post-desc');
    var content_edit = post_desc.getAttribute('contenteditable');
    var title = document.getElementById('post-title-id');
    var title_edit = title.getAttribute('contenteditable');
    if (content_edit === "true" && title_edit === "true") {
        post_desc.setAttribute('contenteditable', false);
        title.setAttribute('contenteditable', false);
    } else {
        post_desc.setAttribute('contenteditable', true);
        title.setAttribute('contenteditable', true);
    }
}

function load() {
    var authorName = sessionStorage.getItem("postAuthorName");
    var title = sessionStorage.getItem("postTitle");
    var content = sessionStorage.getItem("postContent");

    var post_author = document.getElementById('author');
    post_author.innerHTML = authorName;

    var post_title = document.getElementById('post-title-id');
    post_title.innerHTML = title;

    var post_desc = document.getElementById('post-desc');
    post_desc.innerHTML = content;
}