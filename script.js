let slideshowInterval;
let current = 0;

function openCard() {
  document.getElementById('cardFront').classList.remove('active');
  document.getElementById('cardInside').classList.add('active');

  const music = document.getElementById('birthdayMusic');
  const slides = document.querySelectorAll('#slideshow img');

  music.play();

  if (!slideshowInterval) {
    slideshowInterval = setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 3000);
  }
}

function closeCard() {
  document.getElementById('cardInside').classList.remove('active');
  document.getElementById('cardFront').classList.add('active');

  const music = document.getElementById('birthdayMusic');
  music.pause();
  music.currentTime = 0;

  clearInterval(slideshowInterval);
  slideshowInterval = null;

  const slides = document.querySelectorAll('#slideshow img');
  slides.forEach(slide => slide.classList.remove('active'));
  slides[0].classList.add('active');
  current = 0;
}
