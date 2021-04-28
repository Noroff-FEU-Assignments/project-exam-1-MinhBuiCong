const url = " https://royals-shop.com/techblog/wp-json/wp/v2/posts?per_page=14";
let count = 0;
let posts;

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
        title: post.title,
        image: post.featured_media_src_url,
        slug: post.slug,
      };
    });
    createCarousel(posts);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

getUrl();

function createCarousel(posts) {
  const slides = document.querySelector(".carousel-slide");
  console.log("slides :>> ", slides);
  getCarouselItems(count, posts, 4);
  document
    .getElementById("carousel-button-next")
    .addEventListener("click", function () {
      moveToNextSlide(posts);
      updateSlidePosition();
    });
  document
    .getElementById("carousel-button-prev")
    .addEventListener("click", function () {
      moveToPrevSlide();
      updateSlidePosition();
    });
}

function getCarouselItems(itemIndex, posts, itemPerSlide) {
  console.log("itemIndex :>> ", itemIndex);
  const slides = document.querySelector(".carousel-slide");
  for (var i = itemIndex; i < posts.length; i++) {
    var imgUrl = posts[i].image;
    var itemDiv = `
                            <div class="carousel-item" id="${posts[i].id}" >
                            <img src="${imgUrl}" alt="${posts[i].slug}" />
                            <p>${posts[i].title["rendered"]}</p>
                            </div>
                            `;
    if (i === itemIndex + itemPerSlide) {
      count += itemPerSlide;
      //   console.log("count :>> ", count);
      return;
    } else {
      slides.innerHTML += itemDiv;
    }
  }
}
// brukes til å fjerne 4 elementene før eller etter
function removeCarouselItems(itemIndex, posts, itemPerSlide) {
  //TODO: må defineres videre
  //   var removeItem = document.querySelector(`#${posts.id}`);
  //   removeItem.parentNode.removeChild(removeItem);
}

function moveToNextSlide(posts) {
  console.log("next button clicked");
  getCarouselItems(count, posts, 4);
  removeCarouselItems(count, posts, 4);
}
function moveToPrevSlide() {
  console.log("prev button clicked");
}

function updateSlidePosition() {}
