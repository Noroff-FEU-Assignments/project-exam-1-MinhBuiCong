const postUrl =
  " https://royals-shop.com/techblog/wp-json/wp/v2/posts?per_page=14";
const blogContainer = document.querySelector(".blog-container");
const posts = document.querySelector(".posts");
const bigCard = document.querySelector(".big-card");
const smallCardContainer = document.querySelector(".small-card-section");
const viewMore = document.querySelector(".view-more");
const itemContent = 10;
let data;

async function getUrl() {
  try {
    const responsePosts = await fetch(postUrl, {
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
        date: convertDate(data),
      };
    });
    createPosts(data);
  } catch (error) {
    blogContainer.innerHTML = `<h1> Something is not right</h1>`;
    console.log("error :>> ", error);
  }
}

getUrl();

function createPosts(data) {
  for (let i = 0; i < data.length; i++) {
    var bigDiv = `
                <img src="${data[i].image}" alt="${data[i].slug}"/>
                <div class="text-content">
                <h2>${data[i].title["rendered"]}</h2>
                <p>${data[i].description["rendered"]}</p>
                <a href="../blog-detail.html?id=${data[i].link}">read more &rarr;</a>
                </div>
                `;
    var smallDiv = ` 
                <div class="small-card">           
                <img src="${data[i].image}" alt="${data[i].slug}"/>
                <div class="text-content">
                <h3>${data[i].title["rendered"]}</h3>
                <p>${data[i].description["rendered"]}</p>
                <a href="../blog-detail.html?id=${data[i].link}">read more &rarr;</a>
                </div>
                </div>
                `;

    if (i === 0) {
      bigCard.innerHTML = bigDiv;
    }
    if (i > 0) {
      smallCardContainer.innerHTML += smallDiv;
      let smallCard = document.querySelectorAll(".small-card");
      let totalCard = smallCard.length;
      addHiddenClass(smallCard, totalCard);

      viewMore.addEventListener("click", function () {
        buttonViewMore(smallCard, totalCard);
      });
    }
  }
}

function convertDate(data) {
  return data.date.split("T")[0];
}

function addHiddenClass(smallCard, totalCard) {
  console.log("itemContent :>> ", itemContent);
  for (var i = itemContent - 1; i < totalCard; i++) {
    smallCard[i].classList.add("hidden");
  }
}

function buttonViewMore(smallCard, totalCard) {
  for (var i = itemContent - 1; i < totalCard; i++) {
    smallCard[i].classList.remove("hidden");
    viewMore.style.display = "none";
  }
}
