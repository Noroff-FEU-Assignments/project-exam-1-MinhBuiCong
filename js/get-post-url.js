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
      if (count === pageItem) {
        moveToNextSlide(count, posts);
      } else if (count > pageItem) {
        moveToNextSlide(count, posts);
      }
    });
  document
    .getElementById("carousel-button-prev")
    .addEventListener("click", function () {
      if (count === pageItem) {
        return;
      } else {
        moveToPrevSlide(count, posts);
      }
    });
}

//Next slide function

function moveToNextSlide(count, posts) {
  //   console.log("count :>> ", count);
  if (count === 12) {
    nextButton.style.opacity = 0.2;
  } else {
    prevButton.style.opacity = 1;
    nextButton.style.opacity = 1;
  }
  removeCarouselItems(count, posts, pageItem);
}

//Remove content, when clicking on Next Slide

function removeCarouselItems(itemIndex, posts, itemPerSlide) {
  const slides = document.querySelector(".carousel-slide");
  slides.innerHTML = "";
  getCarouselItems(itemIndex, posts, itemPerSlide);
}

//Load up content on init, refresh content when next slide click

function getCarouselItems(itemIndex, posts, itemPerSlide) {
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

//Prev function

function moveToPrevSlide(count, posts) {
  var newCount = count - pageItem;
  removePrevCarouselItems(newCount, posts, pageItem);
}

//Remove content, when clicking on prev slide

function removePrevCarouselItems(newCount, posts, pageItem) {
  const slides = document.querySelector(".carousel-slide");
  slides.innerHTML = "";
  getPrevCarouselItems(newCount, posts, pageItem);
}

//Refresh content when click on prev slide

function getPrevCarouselItems(newCount, posts, pageItem) {
  const slides = document.querySelector(".carousel-slide");
  for (var i = newCount; i < posts.length; i--) {
    if (i > 0) {
      console.log("i :>> ", i);
      console.log("count :>> ", newCount);
      var imgUrl = posts[i].image;
      var itemDiv = `
                                  <a href="${posts.link}">
          <div class="carousel-item" id="${posts[i].id}" >
                                  <img src="${imgUrl}" alt="${posts[i].slug}" />
                                  <p>${posts[i].title["rendered"]}</p>
                                  </div>
                                  </a>
                                  `;
      if (i === newCount + pageItem) {
        count += pageItem;
        slides.innerHTML += itemDiv;
      } else {
      }
    }
  }
}
