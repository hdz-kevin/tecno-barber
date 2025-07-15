document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector(".header");
    const menuToggle = document.querySelector('.menu-toggle button');
    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelectorAll('.menu-nav-links a');
    const overlay = document.querySelector('.menu-overlay');
    const body = document.body;

    menuToggle.addEventListener('click', openMenu);

    closeMenu.addEventListener('click', hideMenu);

    overlay.addEventListener('click', hideMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', hideMenu);
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 130) {
            header.classList.add("header-body");
        } else {
            header.classList.remove("header-body");
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            hideMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        overlay.classList.add('active');
        // Prevenir scroll del body
        body.style.overflow = 'hidden';
    }

    function hideMenu() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        // Restaurar scroll del body
        body.style.overflow = '';
    }
});
