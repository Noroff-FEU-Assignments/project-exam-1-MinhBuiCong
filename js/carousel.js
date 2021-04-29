import { getUrl } from "./get-post-url";
import { createCarousel } from "./get-post-url";

const carouselContainer = document.querySelector(".carousel");
const prevButton = document.querySelector("#carousel-button-prev");
const nextButton = document.querySelector("#carousel-button-next");
let slidePosition = 0;
let posts;

getUrl();
createCarousel();

function createCarousel(posts) {
  const slides = document.querySelector(".carousel-slide");
  for (var i = 0; i < posts.length; i++) {
    var imgUrl = posts[i].image;
    var itemDiv = `
        <a href="${posts.link}">
        <div class="carousel-item" id="${posts[i].id}" >
        <img src="${imgUrl}" alt="${posts[i].slug}" />
        <p>${posts[i].title["rendered"]}</p>
        </div>
        </a>
        `;
    slides.innerHTML += itemDiv;
  }
  var slideItems = document.querySelectorAll(".carousel-item");
  var totalItem = slideItems.length;

  slideItems[0].classList.add("carousel-visible");

  document
    .getElementById("carousel-button-next")
    .addEventListener("click", function () {
      moveToNextSlide(totalItem, slideItems);
    });

  document
    .getElementById("carousel-button-prev")
    .addEventListener("click", function () {
      moveToPrevSlide(totalItem, slideItems);
    });
}

function moveToNextSlide(totalItem, slideItems) {
  if (slidePosition === totalItem - 1) {
    slidePosition = totalItem - 1;
  } else {
    slidePosition++;
    console.log("slidePosition teller :>> ", slidePosition);
    prevButton.style.opacity = 1;
    updateSlidePosition(slideItems);
  }
}

function moveToPrevSlide(totalItem, slideItems) {
  if (slidePosition === 0) {
    return;
  } else {
    slidePosition--;
    updateButton();
  }
  updateSlidePosition(slideItems);
}

function updateNextButton() {}

function updateButton() {
  prevButton.style.opacity = 0.2;
  nextButton.style.opacity = 0.2;
}

function updateSlidePosition(slideItems) {
  for (let slideItem of slideItems) {
    slideItem.classList.remove("carousel-visible");
    slideItem.classList.add("carousel-hidden");
  }
  slideItems[slidePosition].classList.add("carousel-visible");
}
