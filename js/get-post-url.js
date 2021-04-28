const url = " https://royals-shop.com/techblog/wp-json/wp/v2/posts?per_page=14";
const carouselContainer = document.querySelector(".carousel");
const prevButton = document.querySelector("#carousel-button-prev");
const nextButton = document.querySelector("#carousel-button-next");
const pageItem = 4;
let count = 0;
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
    console.log("postData :>> ", postData);
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
  }
}

getUrl();

function createCarousel(posts) {
  const slides = document.querySelector(".carousel-slide");
  getCarouselItems(count, posts, pageItem);
  document
    .getElementById("carousel-button-next")
    .addEventListener("click", function () {
      moveToNextSlide(posts);
    });
  document
    .getElementById("carousel-button-prev")
    .addEventListener("click", function () {
      moveToPrevSlide(posts);
    });
}

function getCarouselItems(itemIndex, posts, itemPerSlide) {
  const totalPage = posts.length;
  const slides = document.querySelector(".carousel-slide");
  for (var i = itemIndex; i < posts.length; i++) {
    var imgUrl = posts[i].image;
    var itemDiv = `
                            <a href="${posts.link}">
    <div class="carousel-item" id="${posts[i].id}" >
                            <img src="${imgUrl}" alt="${posts[i].slug}" />
                            <p>${posts[i].title["rendered"]}</p>
                            </div>
                            </a>
                            `;
    if (i === itemIndex + itemPerSlide) {
      count += itemPerSlide;
      return;
    } else {
      slides.innerHTML += itemDiv;
    }
  }
}

function removeCarouselItems(itemIndex, posts, itemPerSlide) {
  const slides = document.querySelector(".carousel-slide");
  slides.innerHTML = "";
  getCarouselItems(itemIndex, posts, itemPerSlide);
}

function moveToNextSlide(posts) {
  removeCarouselItems(count, posts, 4);
  updateCount(count);
}
function moveToPrevSlide(posts) {
  removeCarouselItems(count, posts, 4);
  updateCount(count);
}

function updateCount(count) {}
