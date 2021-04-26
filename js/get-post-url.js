const url = " https://royals-shop.com/techblog/wp-json/wp/v2/posts?per_page=14";
const carouselContainer = document.querySelector(".carousel");
const slides = document.getElementsByClassName("carousel-slide");
let slidePosition = 0;
const totalSlides = slides.length;
const prevButton = document.querySelector("#carousel-button-prev");
const nextButton = document.querySelector("#carousel-button-next");

async function getUrl() {
  try {
    const responsePosts = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const getItems = await responsePosts.json();
    // carouselContainer.innerHTML = `
    //   <h2>latest posts</h2>
    //   <div class="carousel-slide side-1 carousel-visible"></div>
    //   <div class="carousel-actions">
    //   <button id="carousel-button-prev" aria-label="previous slide"><</button>
    //   <button id="carousel-button-next" aria-label="next slide">></button>
    //   </div>`;
    console.log("getItems :>> ", getItems);
    createCarousel(getItems);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

getUrl();

function createCarousel(posts) {
  carouselContainer.innerHTML = `  
    <h2>latest posts</h2> 
    <div class="carousel-slide side-1 carousel-visible"></div>   
    <div class="carousel-slide"></div>   
    <div class="carousel-slide"></div>   
    <div class="carousel-slide"></div>   
    <div class="carousel-actions">
    <button id="carousel-button-prev" aria-label="previous slide"><</button>
    <button id="carousel-button-next" aria-label="next slide">></button>
    </div>`;
  const slides = document.querySelector(".carousel-slide");
  const itemPerSide = 4;
  for (let i = 0; i < itemPerSide; i++) {
    slides.innerHTML += `
      <div class="carousel-item">
      <a href="#">
      <img
      src="${posts[i].featured_media_src_url}"
      alt="${posts[i].slug}"
      />
      <p>${posts[i].title["rendered"]}</p>
      </a>
      </div>
      `;

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
  }
}

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
