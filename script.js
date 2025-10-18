document.addEventListener('DOMContentLoaded', function() {
    
    // BAGIAN 1: KODE UNTUK HAMBURGER MENU & NAVIGASI
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const body = document.body;
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.appendChild(overlay);
    }
    function toggleMenu() {
        mobileNav.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        const icon = hamburgerMenu.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    hamburgerMenu.addEventListener('click', toggleMenu);
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    overlay.addEventListener('click', toggleMenu);
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });

    // BAGIAN 2: KODE UNTUK SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // BAGIAN 3: KODE UNTUK ANIMASI TEKS SCRAMBLE (VERSI SEMPURNA)
    const scrambleText1 = document.getElementById('scramble-text-1');
    const scrambleText2 = document.getElementById('scramble-text-2');
    if (scrambleText1 && scrambleText2) {
        const shuffle1 = new ShuffleText(scrambleText1);
        shuffle1.duration = 2000;
        const text1 = "Temukan Rumah Impian Anda";
        scrambleText1.textContent = text1;
        const shuffle2 = new ShuffleText(scrambleText2);
        shuffle2.duration = 1500;
        const text2 = "Bersama kami";
        scrambleText2.textContent = text2;
        setTimeout(() => {
            shuffle1.start();
        }, 500);
        setTimeout(() => {
            shuffle2.start();
        }, 1800);
    }
});