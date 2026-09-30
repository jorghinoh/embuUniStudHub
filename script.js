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
