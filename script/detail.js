document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const gallery = document.querySelector('.product-gallery');
    const info = document.querySelector('.product-info');

    if (header) header.style.opacity = 0;
    if (gallery) {
        gallery.style.opacity = 0;
        gallery.style.transform = 'translateX(-20px)';
    }
    if (info) {
        info.style.opacity = 0;
        info.style.transform = 'translateX(20px)';
    }

    setTimeout(() => {
        if (header) {
            header.style.transition = 'opacity 0.5s ease';
            header.style.opacity = 1;
        }
        if (gallery) {
            gallery.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            gallery.style.opacity = 1;
            gallery.style.transform = 'translateX(0)';
        }
        if (info) {
            info.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
            info.style.opacity = 1;
            info.style.transform = 'translateX(0)';
        }
    }, 100);

    function showFooterOnScroll() {
        const footer = document.querySelector('.footer');
        if (footer) {
            const rect = footer.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                footer.classList.add('show');
            }
        }
    }

    window.addEventListener('scroll', showFooterOnScroll);
    window.addEventListener('load', showFooterOnScroll);

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
});