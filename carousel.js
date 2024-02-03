const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

// Optional: Auto-slide functionality
let autoSlideInterval = setInterval(() => changeSlide(1), 3000);

// Reset the interval when user interacts
function resetInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => changeSlide(1), 4000);
}

prevButton.addEventListener('click', resetInterval);
nextButton.addEventListener('click', resetInterval);
