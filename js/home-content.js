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
        link: data.link,
        title: data.title,
        image: data.featured_media_src_url,
        slug: data.slug,
        description: data.content,
        data: data.date,
      };
    });
    createContent(data);
  } catch (error) {
    contentContainer.innerHTML = `<h1> Something is not right</h1>`;
    console.log("error :>> ", error);
  }
}

getUrl();

function createContent(data) {
  console.log("data :>> ", data);
  for (var i = 0; i < 3; i++) {
    var imgUrl = data[i].image;
    bigContainer.innerHTML = `
    <img src="${imgUrl}" alt="${data[i].slug}">
        <h2>${data[i].title["rendered"]}</h2>
        <a href="${data[i].link}">read more &rarr;</a>
        </img>
      `;
    var cardDiv = `<div class="card"><div class="image-content">
        <img class="background-image"src="${imgUrl}" alt="${data[i].slug}" ></img>
        <div class="publication-details">
          <a href="${data[i].link}" class="author">Minh Cong Bui</a>
          <span class="date">${data[i].date}</span>
        </div>
      </div>
      <div class="post-content">
        <h2 class="card-title">${data[i].title["rendered"]}</h2>
        <h3 class="card-subtitle">What you need to know</h3>
        <p class="card-description">
        ${data[i].description["rendered"]}
        </p>
        <div class="card-action">
          <a href="${data[i].link}">Read more &rarr;</a>
        </div>
      </div>
      </div>`;
    smallContainer.innerHTML += cardDiv;
  }
}
