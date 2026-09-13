const cards = document.querySelectorAll(".work-card");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxPlay = document.getElementById("lightboxPlay");

let currentIndex = 0;
let autoSlide = null;
let isPlaying = false;

// Open Lightbox

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    currentIndex = index;

    showImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

    stopAutoSlide();
  });
});

// Show Image

function showImage() {
  const image = cards[currentIndex].querySelector("img");

  lightboxImg.src = image.src;

  lightboxImg.alt = image.alt;
}

// Play / Pause

lightboxPlay.addEventListener("click", (e) => {
  e.stopPropagation();

  if (isPlaying) {
    stopAutoSlide();
  } else {
    startAutoSlide();
  }
});

// Start Auto Slide

function startAutoSlide() {
  clearInterval(autoSlide);

  isPlaying = true;

  lightboxPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';

  autoSlide = setInterval(() => {
    showNext();
  }, 4000);
}

// Stop Auto Slide

function stopAutoSlide() {
  clearInterval(autoSlide);

  autoSlide = null;

  isPlaying = false;

  lightboxPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
}

// Next

lightboxNext.addEventListener("click", (e) => {
  e.stopPropagation();

  showNext();

  if (isPlaying) {
    startAutoSlide();
  }
});

// Previous

lightboxPrev.addEventListener("click", (e) => {
  e.stopPropagation();

  showPrevious();

  if (isPlaying) {
    startAutoSlide();
  }
});

// Next Function

function showNext() {
  currentIndex++;

  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  showImage();
}

// Previous Function

function showPrevious() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }

  showImage();
}

// Close Button

lightboxClose.addEventListener("click", closeLightbox);

// Click Outside

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) {
    return;
  }

  if (e.key === "Escape") {
    closeLightbox();
  }

  if (e.key === "ArrowRight") {
    showNext();

    if (isPlaying) {
      startAutoSlide();
    }
  }

  if (e.key === "ArrowLeft") {
    showPrevious();

    if (isPlaying) {
      startAutoSlide();
    }
  }
});

// Close Function

function closeLightbox() {
  lightbox.classList.remove("active");

  document.body.style.overflow = "";

  stopAutoSlide();
}
