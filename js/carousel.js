let slidePosition = 0;
const slides = document.getElementsByClassName("carousel-slide");
const totalSlides = slides.length;

const prevButton = document.querySelector("#carousel-button-prev");
const nextButton = document.querySelector("#carousel-button-next");

document.getElementById("carousel-button-prev").style.opacity = 0.2;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });

document
  .getElementById("carousel-button-prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel-visible");
    slide.classList.add("carousel-hidden");
  }

  slides[slidePosition].classList.add("carousel-visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = totalSlides - 1;
  } else if ((slidePosition = totalSlides - 1)) {
    nextButton.style.opacity = 0.2;
    prevButton.style.opacity = 1;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides * 0;
  } else {
    slidePosition--;
    updateButton();
  }
  updateSlidePosition();
}

function updateButton() {
  prevButton.style.opacity = 0.2;
  nextButton.style.opacity = 1;
}
