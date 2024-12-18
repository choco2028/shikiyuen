document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const slider = document.querySelector('.slider');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const slideIndex = button.getAttribute('data-slide');
            const offset = -300 * slideIndex;  // スライド幅 * インデックス番号
            slider.style.transform = `translateX(${offset}px)`;
        });
    });
});
