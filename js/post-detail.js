const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const urlDetail = " https://royals-shop.com/techblog/wp-json/wp/v2/posts/" + id;
const urlCategories =
  " https://royals-shop.com/techblog/wp-json/wp/v2/categories?per_page=100";
const postContainer = document.querySelector(".post-container");
const modalContainer = document.querySelector(".modal-container");
const imgModal = document.querySelector(".img-modal");
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

async function getPostId() {
  try {
    const responsePost = await fetch(urlDetail);
    const postData = await responsePost.json();
    const responseCategories = await fetch(urlCategories);
    const postCategories = await responseCategories.json();

    const mappedCategories = createCategoryMap(postCategories);
    var categoryNames = getCategoryNames(mappedCategories, postData.categories);
    console.log(mappedCategories);

    postContainer.innerHTML = `
                        <img id="openModal"src="${
                          postData.featured_media_src_url
                        }" alt="${postData.slug}"></img>
                        <div class="text-content">
                        <h1 class="post-title">${
                          postData.title["rendered"]
                        }</h1>
                        <h2 class="post-subtitle">sub-title</h2>
                        <span class="author">Author: Minh Cong Bui</span>
                        <span class="published">Published: ${
                          postData.date.split("T")[0]
                        }</span>
                        <p class="post-description">${
                          postData.content["rendered"]
                        }</p>
                        <code class="categories">Categories: #${categoryNames.join(
                          ", #"
                        )}</code>
                        </div
                        `;
    imgModal.innerHTML = `<img id="openModal"src="${postData.featured_media_src_url}" alt="${postData.slug}"></img>`;

    console.log("postData :>> ", postData);

    document.getElementById("openModal").addEventListener("click", function () {
      modalContainer.style.display = "block";
    });
    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modalContainer.style.display = "none";
      }
    };
  } catch (error) {
    console.log("error :>> ", error);
  }
}

getPostId();

function getCategoryNames(mappedCategories, categoryIds) {
  var names = [];
  for (var i = 0; i < categoryIds.length; i++) {
    names.push(mappedCategories[categoryIds[i]].name);
  }
  return names;
}

function createCategoryMap(postCategories) {
  var categoriesMap = {};
  postCategories.map((c) => (categoriesMap[c.id] = c));
  return categoriesMap;
}
