const postUrl =
  " https://royals-shop.com/techblog/wp-json/wp/v2/posts?per_page=14";
const blogContainer = document.querySelector(".blog-container");
const posts = document.querySelector(".posts");
const viewMore = document.querySelector(".view-more");
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
        link: data.link,
        title: data.title,
        image: data.featured_media_src_url,
        slug: data.slug,
        description: data.excerpt,
        date: convertDate(data),
      };
    });
    // createPosts(data);
  } catch (error) {
    blogContainer.innerHTML = `<h1> Something is not right</h1>`;
    console.log("error :>> ", error);
  }
}

getUrl();

function createPosts(data) {
  for (let i = 0; i < data.length; i++) {
    if (i === 10) {
      posts.innerHTML = `
      
      <h1>hellooooooo</h1>`;
    }
    viewMore.addEventListener("click", function () {
      buttonViewMore(data);
    });
  }
}

function convertDate(data) {
  return data.date.split("T")[0];
}

function buttonViewMore(data) {
  for (let i = 10; i < data.length; i++) {
    posts.innerHTML = `<h1>hellooooooo</h1>
    <h1>hellooooooo</h1>`;
  }
}
