const url = " https://royals-shop.com/techblog/wp-json/wp/v2/posts?per_page=14";
const carouselContainer = document.querySelector(".carousel");
const prevButton = document.querySelector("#carousel-button-prev");
const nextButton = document.querySelector("#carousel-button-next");
let slidePosition = 0;
let posts;

document.getElementById("carousel-button-prev").style.opacity = 0.2;

export async function getUrl() {
  try {
    const responsePosts = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postData = await responsePosts.json();
    posts = postData.map(function (post, index) {
      return {
        id: index,
        link: post.link,
        title: post.title,
        image: post.featured_media_src_url,
        slug: post.slug,
      };
    });
    createCarousel(posts);
  } catch (error) {
    carouselContainer.innerHTML = `<h2> Something is not right</h2>`;
    console.log("error :>> ", error);
  }
}

getUrl();

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
