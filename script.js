// ========================================
// EMBU UNIVERSITY STUDHUB
// Main JavaScript
// ========================================


// Navigation menu

function toggleMenu() {

    const navigation = document.getElementById("navigation");

    navigation.classList.toggle("show");

}


// Welcome message

function showWelcome() {

    alert(
        "Welcome to Embu University StudHub 🎓"
    );

}


// Courses

function openCourses() {

    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });

}


// Marketplace

function openMarketplace() {

    document.getElementById("marketplace").scrollIntoView({
        behavior: "smooth"
    });

}


// Community

function openCommunity() {

    document.getElementById("community").scrollIntoView({
        behavior: "smooth"
    });

}


// Notifications

function showNotifications() {

    alert(
        "No new notifications 🔔"
    );

}
window.showNotifications = showNotifications;


// =====================================================
// MESSAGES
// =====================================================

function openMessages() {

    alert(
        "💬 Messages\n\n" +
        "Your messages section will appear here."
    );
}


window.openMessages = openMessages;


// =====================================================
// STORIES
// =====================================================

function createStory() {

    alert("📸 Create Story\n\nStory upload will be added soon.");
}


window.createStory = createStory;


function openStory(name) {

    alert("📖 Opening " + name + "'s story.");
}


window.openStory = openStory;


function viewAllStories() {

    alert("📚 All stories will appear here.");
}


window.viewAllStories = viewAllStories;


// =====================================================
// CREATE POST
// =====================================================

function createPost() {

    const postText =
        prompt("What would you like to post on StudHub?");

    if (!postText || !postText.trim()) {
        return;
    }

    const postsContainer = get("postsContainer");

    if (!postsContainer) {

        alert("Post created successfully! 🎉");

        return;
    }

    const user = auth.currentUser;

    const name =
        user?.displayName ||
        user?.email?.split("@")[0] ||
        "Guest";

    const post = document.createElement("article");

    post.className = "post";

    post.innerHTML = `
        <div class="post-header">
            <strong>${escapeHTML(name)}</strong>
        </div>

        <div class="post-content">
            ${escapeHTML(postText)}
        </div>

        <div class="post-actions">
            <button onclick="likePost(this)">
                ❤️ <span>0</span>
            </button>

            <button onclick="commentPost()">
                💬 Comment
            </button>

            <button onclick="sharePost()">
                ↗ Share
            </button>

            <button onclick="savePost(this)">
                🔖 Save
            </button>
        </div>
    `;

    postsContainer.prepend(post);

    alert("Your post has been published! 🎉");
}


window.createPost = createPost;


// =====================================================
// LIKE POST
// =====================================================

function likePost(button) {

    if (!button) {
        return;
    }

    const counter =
        button.querySelector("span");

    if (!counter) {
        return;
    }

    let likes =
        parseInt(counter.textContent) || 0;

    likes++;

    counter.textContent = likes;
}


window.likePost = likePost;


// =====================================================
// COMMENT
// =====================================================

function commentPost() {

    const comment =
        prompt("Write your comment:");

    if (!comment || !comment.trim()) {
        return;
    }

    alert("Comment added! 💬");
}


window.commentPost = commentPost;


// =====================================================
// SHARE
// =====================================================

function sharePost() {

    if (navigator.share) {

        navigator.share({
            title: "Embu University StudHub",
            text: "Check out this post on StudHub!"
        }).catch(() => {});

    } else {

        alert("Post link copied/shared! 🔗");
    }
}


window.sharePost = sharePost;


// =====================================================
// SAVE POST
// =====================================================

function savePost(button) {

    if (!button) {
        return;
    }

    button.classList.toggle("saved");

    if (button.classList.contains("saved")) {

        alert("Post saved! 🔖");

    } else {

        alert("Post removed from saved posts.");
    }
}


window.savePost = savePost;


// =====================================================
// AUTH STATE
// =====================================================

onAuthStateChanged(auth, (user) => {

    console.log(
        "StudHub authentication state:",
        user ? user.email : "Not logged in"
    );

    if (user) {

        showApp();

    } else {

        const appScreen = get("appScreen");

        if (appScreen) {
            appScreen.style.display = "none";
        }

        const loginScreen = get("loginScreen");

        if (loginScreen) {
            loginScreen.style.display = "";
        }
    }
});


// =====================================================
// PAGE START
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Embu University StudHub JavaScript loaded successfully.");

});

// =====================================================
// PAGE START
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Embu University StudHub JavaScript loaded successfully.");

});
