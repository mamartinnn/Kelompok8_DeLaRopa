  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.product-card');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  
  document.querySelector('.hero-button').addEventListener('animationend', () => {
  document.body.classList.remove('no-scroll');

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  window.addEventListener('load', updateCarousel);
  
});


