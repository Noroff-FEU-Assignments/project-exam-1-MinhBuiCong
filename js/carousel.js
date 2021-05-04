const url = " https://royals-shop.com/techblog/wp-json/wp/v2/posts?per_page=14";
const carouselContainer = document.querySelector(".carousel");
const prevButton = document.querySelector("#carousel-button-prev");
const nextButton = document.querySelector("#carousel-button-next");
let slidePosition = 0;
const pageItem = 4;

let posts;

document.getElementById("carousel-button-prev").style.opacity = 0.2;

async function getUrl() {
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
        link: post.id,
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
    var dot = document.querySelector(".dot");
    var imgUrl = posts[i].image;
    var itemDiv = `
      
      <div class="carousel-item" id="${posts[i].id}" >
      <a class="post-link" href="../blog-detail.html?id=${posts[i].link}">
      <img class="carousel-image"src="${imgUrl}" alt="${posts[i].slug}" />
      </a>
      <p>${posts[i].title["rendered"]}</p>
      </div>
      `;
    slides.innerHTML += itemDiv;
  }
  var slideItems = document.querySelectorAll(".carousel-item");
  var totalItem = slideItems.length;

  for (var i = 0; i < pageItem; i++) {
    slideItems[i].classList.add("carousel-visible");
  }

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
  slidePosition += pageItem;
  if (slidePosition + pageItem >= totalItem - 1) {
    document.getElementById("carousel-button-next").disabled = true;
    nextButton.style.opacity = 0.1;
  }
  prevButton.style.opacity = 1;
  updateSlidePosition(slideItems, totalItem);
}

function moveToPrevSlide(totalItem, slideItems) {
  if (slidePosition === 0) {
    prevButton.style.opacity = 0.1;
    return;
  } else {
    slidePosition -= pageItem;
    document.getElementById("carousel-button-next").disabled = false;
    nextButton.style.opacity = 1;
    updateButton();
  }
  updateSlidePosition(slideItems, totalItem);
}

function updateButton() {
  if (slidePosition === 0) {
    prevButton.style.opacity = 0.1;
  }
}

function updateSlidePosition(slideItems, totalItem) {
  for (let slideItem of slideItems) {
    slideItem.classList.remove("carousel-visible");
    slideItem.classList.add("carousel-hidden");
  }
  for (
    var i = slidePosition;
    i < slidePosition + pageItem && i < totalItem;
    i++
  ) {
    slideItems[i].classList.add("carousel-visible");
  }
}
