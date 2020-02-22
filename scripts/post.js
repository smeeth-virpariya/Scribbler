var likeCount = 0;

var isSave = false;

//This call loads the required content from the session storage.
load();

/**
 * This method is called when like button is clicked.
 */
function likeClicked() {
    likeCount++;
    var like_button_text = document.getElementById('like-button-text');
    var like_button = document.getElementById('like-button');
    if (likeCount === 1) {
        //Change the text below like button.
        like_button_text.innerHTML = likeCount + ' person likes this !';
        //change the button name to liked.
        like_button.innerHTML = '<i class="fa fa-thumbs-up fa-lg"aria-hidden="true"></i> Liked';
    } else if (likeCount >= 2) {
        //Change the text below like button.
        like_button_text.innerHTML = likeCount + ' people like this !';
    }

}

/**
 * This method is called when the comment button is clicked.
 */
function commentClicked(comment) {
    var all_comments = document.getElementById('comments');
    var comment = document.getElementById('comment').value;
    var para = document.createElement("p");
    para.classList.add('each-comment');
    para.innerHTML = comment;
    //Add to the start of the list. (Like a stack)
    all_comments.prepend(para);
    //clear the value in the comment box.
    document.getElementById('comment').value = "";
}

/**
 * This method is called when edit button is clicked.
 */
function editClicked() {
    toggleEditButton();
    toggleContentEditable();
    toggleBorder();
}

/**
 * This method toggles Edit and save button names respectively.
 */
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

/**
 * This method toggles content editable for post title and content 
 */
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

/**
 * This method toggles border for post title and content 
 */
function toggleBorder() {
    var post_desc = document.getElementById('post-desc');
    var title = document.getElementById('post-title-id');
    console.log(post_desc.style.border);
    if (post_desc.style.border === "") {
        post_desc.style.border = "solid";
    } else {
        post_desc.style.border = "";
    }

    if (title.style.border === "") {
        title.style.border = "solid";
    } else {
        title.style.border = "";
    }
}

/**
 * This method loads the required post content from session.
 */
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