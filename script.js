document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // 複製を2倍に増やして無限ループをスムーズにする
    function duplicateSlides() {
        for (let i = 0; i < totalSlides; i++) {
            const slideClone = slides[i].cloneNode(true); // スライドを複製
            slider.appendChild(slideClone);  // 複製したスライドを末尾に追加
            const slideClone2 = slides[i].cloneNode(true); // スライドを複製
            slider.insertBefore(slideClone2, slides[0]);  // 複製したスライドを先頭に追加
        }
    }

    // スライドを移動する関数
    function moveToSlide(index) {
        if (index < 0 || index >= totalSlides * 2) return;  // 複製されたスライドまでを対象にする

        const offset = -250 * index; // 各スライドの幅 * インデックス
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(${offset}px)`;
        currentSlide = index;
    }

    // スライダーのループ
    function loopSlider() {
        slider.addEventListener('transitionend', () => {
            if (currentSlide === totalSlides * 2) {
                slider.style.transition = 'none';  // ループ中は遷移を無効化
                slider.style.transform = 'translateX(0)';  // 最初に戻す
                currentSlide = 0;
                setTimeout(() => {
                    slider.style.transition = 'transform 0.5s ease-in-out';  // 再度遷移を有効化
                }, 50);
            }
        });
    }

    // ナビゲーションボタンのクリックでスライド移動
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const slideIndex = parseInt(button.getAttribute('data-slide'));
            moveToSlide(slideIndex);
        });
    });

    // ・・・ボタンで無限ループ開始
    const dotButton = document.querySelector('.dot-btn');
    dotButton.addEventListener('click', () => {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % (totalSlides * 2); // 複製されたスライド分の範囲
            moveToSlide(currentSlide);
        }, 3000); // 3秒ごとに次のスライドへ移動
    });

    // スライダーを複製し、ループを開始
    duplicateSlides();
    loopSlider();
    moveToSlide(currentSlide);  // 最初のスライドに移動
});