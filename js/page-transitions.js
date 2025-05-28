// js/page-transitions.js
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // On page load, remove 'page-loading' to trigger fade-in
    body.classList.remove('page-loading');
    body.classList.add('page-loaded');

    // Handle navigation clicks
    const navLinks = document.querySelectorAll('nav a, a.btn, .navbar-brand'); // Target navbar links, common buttons, and brand

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:') || this.getAttribute('target') === '_blank');
            const isSamePageAnchor = href && href.startsWith('#') && href.length > 1;
            
            // Check if the link is to the current page (including index.html variations)
            let linkTargetFile = href ? href.split('/').pop() : '';
            if (linkTargetFile === '' || linkTargetFile === '#') linkTargetFile = 'index.html';
            
            let currentPageFile = window.location.pathname.split('/').pop();
            if (currentPageFile === '') currentPageFile = 'index.html';

            const isCurrentPage = linkTargetFile === currentPageFile;


            if (!isExternal && !isSamePageAnchor && href && href !== '#' && !isCurrentPage) {
                e.preventDefault(); // Prevent default navigation
                body.classList.remove('page-loaded'); // Prepare for leaving animation
                body.classList.add('is-leaving'); 

                setTimeout(() => {
                    window.location.href = href; // Navigate after a short delay
                }, 300); // Match this delay with CSS transition duration for exit
            } else if (isSamePageAnchor) {
                // If you have smooth scrolling for anchors on the same page, it would be handled by script.js
                // For now, let default behavior handle it or ensure script.js manages it.
            }
        });
    });

    // Handle back/forward browser navigation (bfcache)
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) { // Page is from bfcache
            body.classList.remove('is-leaving');
            body.classList.remove('page-loading');
            body.classList.add('page-loaded');
        }
    });
});
