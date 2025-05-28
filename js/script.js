// js/script.js
document.addEventListener('DOMContentLoaded', function() {

    // --- Dark Mode Toggle ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const body = document.body;
    const twitterTimelineAnchor = document.querySelector('a.twitter-timeline'); // For contact page

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
            if (twitterTimelineAnchor) twitterTimelineAnchor.setAttribute('data-theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
            if (twitterTimelineAnchor) twitterTimelineAnchor.setAttribute('data-theme', 'light');
        }
    }

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    darkModeToggle.addEventListener('click', () => {
        let newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });


    // --- Typed.js Animation (ONLY FOR HOME PAGE - index.html) ---
    const typedStringsElement = document.getElementById('typed-strings-container');
    const typedOutputElement = document.getElementById('typed-output');
    const isHomePage = window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html') || window.location.pathname.split('/').pop() === '';


    if (isHomePage && typedStringsElement && typedOutputElement) {
        const initialStrings = Array.from(typedStringsElement.children).map(el => el.innerHTML);
        if (window.typedInstanceGlobal) window.typedInstanceGlobal.destroy();
        window.typedInstanceGlobal = new Typed('#typed-output', {
            strings: initialStrings,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 1200,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|',
        });
    }
    // NGL Viewer initialization is now in the inline script of index.html for the homepage


    // --- AOS (Animate On Scroll) Initialization (on all pages) ---
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-quad',
        once: true,
        mirror: false,
        offset: 100,
    });


    // --- Footer Current Year ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Active Nav Link for Multi-Page Site ---
    let currentPageFile = window.location.pathname.split("/").pop();
    if (currentPageFile === "" || currentPageFile === undefined) {
        currentPageFile = "index.html"; // Default to index.html if path is just "/"
    }

    const navLinksAll = document.querySelectorAll('.navbar-nav a.nav-link');
    navLinksAll.forEach(link => {
        let linkFile = link.getAttribute('href').split("/").pop();
        // Handle cases where href might be just "/" or empty for index.html
        if (linkFile === "" || linkFile === undefined || linkFile === "#") { 
             linkFile = "index.html";
        }

        link.classList.remove('active'); // Remove from all first
        if (linkFile === currentPageFile) {
            link.classList.add('active');
        }
    });


    // Navbar scroll effect (on all pages)
    const navbar = document.querySelector('.navbar.fixed-top');
    if (navbar) {
        const handleNavbarScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        };
        window.addEventListener('scroll', handleNavbarScroll);
        handleNavbarScroll(); // Initial check
    }
});
