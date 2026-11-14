// 1. Header aur Footer ko fetch karke inject karein
function loadComponents() {
    // Header load karein
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Footer load karein
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// 2. Global Event Delegation (Dynamic elements ke liye sabse best)
document.addEventListener('click', function (event) {
    // Check karein kya click #nav-toggle par ya uske andar hua hai
    const navToggle = event.target.closest('#nav-toggle');
    
    if (navToggle) {
        event.preventDefault();
        
        // Toggle active class on button
        navToggle.classList.toggle('active');
        
        // Toggle navigation elements
        const navFullscreen = document.getElementById('nav-fullscreen');
        const navOverlay = document.getElementById('nav-overlay');
        
        if (navFullscreen) navFullscreen.classList.toggle('active');
        if (navOverlay) navOverlay.classList.toggle('active');
    }
});

// Page load hote hi components load kar do
document.addEventListener("DOMContentLoaded", loadComponents);


// Global Event Delegation for Mobile Menu
document.addEventListener('click', function (event) {
    const navToggle = event.target.closest('#nav-toggle');
    
    if (navToggle) {
        event.preventDefault();
        console.log("Nav toggle clicked successfully!"); // F12 console mein check karne ke liye
        
        // Dono common classes toggle karein (.active aur .open)
        navToggle.classList.toggle('active');
        navToggle.classList.toggle('open');
        
        const navFullscreen = document.getElementById('nav-fullscreen');
        const navOverlay = document.getElementById('nav-overlay');
        
        if (navFullscreen) {
            navFullscreen.classList.toggle('active');
            navFullscreen.classList.toggle('open');
        }
        if (navOverlay) {
            navOverlay.classList.toggle('active');
            navOverlay.classList.toggle('open');
        }
    }
});