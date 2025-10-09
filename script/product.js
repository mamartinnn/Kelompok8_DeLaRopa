document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.produk-card');

    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
    });

    function showFooterOnScroll() {
        const footer = document.querySelector('.footer');
        if (footer) {
            const rect = footer.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                footer.classList.add('show');
            }
        }
    }

    function checkFade() {
        const fadeSections = document.querySelectorAll('.fade-section');
        fadeSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', () => {
        showFooterOnScroll();
        checkFade();
    });
    
    window.addEventListener('load', () => {
        showFooterOnScroll();
        checkFade();
    });

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
});