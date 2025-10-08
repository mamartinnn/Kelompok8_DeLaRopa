  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.product-card');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const featuredSection = document.querySelector('.featured-products');

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function updateFeaturedBackground() {
    const activeCard = cards[currentIndex];
    const img = activeCard.querySelector('img');
    const bgSrc = img.getAttribute('data-bg');
    if (bgSrc) {
      featuredSection.style.backgroundImage = `url('${bgSrc}')`;
    }
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
    updateFeaturedBackground();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
    updateFeaturedBackground();
  });

  window.addEventListener('resize', updateCarousel);
  window.addEventListener('load', () => {
    updateCarousel();
    updateFeaturedBackground();
  });


  document.querySelector('.hero-button').addEventListener('animationend', () => {
    document.body.classList.remove('no-scroll');
  });