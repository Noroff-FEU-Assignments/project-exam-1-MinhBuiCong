const url = " https://royals-shop.com/techblog/wp-json/wp/v2/posts?per_page=14";

async function getUrl() {
  try {
    const responsePosts = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const getItems = await responsePosts.json();
    createCarousel(getItems);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

getUrl();

function createCarousel(posts) {
  const slides = document.querySelector(".carousel-slide");
  let slidePosition = 0;
  const totalSlides = posts.length;
  for (var i = 0; i < posts.length; i++) {
    const itemPerSlide = 4;
    var imgUrl = posts[i].featured_media_src_url;
    var itemDiv = `
                    <div class="carousel-item">
                    <img src="${imgUrl}" alt="${posts[i].slug}" />
                    <p>${posts[i].title["rendered"]}</p>
                    </div>
                    `;
    if (i === itemPerSlide) {
      return;
    } else {
      slides.innerHTML += itemDiv;
    }
  }
}

document
  .getElementById("carousel-button-next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });

function moveToNextSlide() {
  console.log("data :>> ");
}
