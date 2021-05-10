const urlContent =
  " https://royals-shop.com/techblog/wp-json/wp/v2/posts?per_page=14";
const contentContainer = document.querySelector(".content-container");
const bigContainer = document.querySelector(".big-subject-container");
const smallContainer = document.querySelector(".small-subject-container");
const card = document.querySelector(".card");
let data;

async function getUrl() {
  try {
    const responsePosts = await fetch(urlContent, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postData = await responsePosts.json();
    console.log("postData :>> ", postData);
    data = postData.map(function (data, index) {
      return {
        id: index,
        link: data.id,
        title: data.title,
        image: data.featured_media_src_url,
        slug: data.slug,
        description: data.excerpt,
        date: data.date.split("T")[0],
      };
    });
    createContent(data);
  } catch (error) {
    contentContainer.innerHTML = `<h1> Something is not right</h1>`;
  }
}

getUrl();

function createContent(data) {
  for (var i = 0; i < 4; i++) {
    var imgUrl = data[i].image;
    var text = data[i].description["rendered"];
    var cardDiv = `<div class="card">
                    <div class="image-content">
                    <img class="background-image"src="${imgUrl}" alt="${data[i].slug}" ></img>
                    <div class="publication-details">
                    <a href="../blog-detail.html?id=${data[i].link}" class="author">Author: Minh Cong Bui</a>
                    <span class="date">Published: ${data[i].date}</span>
                    </div>
                    </div>
                    <div class="post-content">
                    <h3 class="card-title">${data[i].title["rendered"]}</h3>
                    <h4 class="card-subtitle">sub-title</h4>
                    <p class="card-description">${text}</p>
                    <div class="card-action">
                    <a href="../blog-detail.html?id=${data[i].link}">Read more &rarr;</a>
                    </div>
                    </div>
                    </div>
                    `;
    if (i === 0) {
      bigContainer.style.backgroundImage = `url("${imgUrl}")`;
      bigContainer.innerHTML = `<div class="layer">
          <h1 class="big-title">Welcome to Techblog</h1>
          <p class="text">
            We are a blogpage that loves to write about anything with technology
          </p>
          </div>
        `;
    }
    if (i > 0) {
      smallContainer.innerHTML += cardDiv;
    }
  }
}
