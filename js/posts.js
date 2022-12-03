SSbreadcrumb.innerHTML += `<li><a href="posts.html">All News Updates</a></li>`;
pageTitle.innerHTML += `All News Updates`;

const current = document.querySelector(".posts");

current.classList.add("current");

const viewMore = document.querySelector(".viewMore");
const loader = document.querySelector(".loader");

// 10 posts
const url = "https://flowpow.pro/glitch/wp-json/wp/v2/posts?_embed";

// more posts
const url2 =
  "https://flowpow.pro/glitch/wp-json/wp/v2/posts?_embed&per_page=100";

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    const posts = json;

    content.innerHTML = "";

    posts.forEach(function (post) {
      const titlePost = post.title.rendered;
      const imagePost =
        post._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url;

      content.innerHTML += `
      <div class="postItem">
      <a href="post.html?id=${post.id}" class="postLink">

 <img class="postImage" src="${imagePost}" alt=" post image"> 
        <h3>${titlePost}"
         </h3>  
         </a> 
      </div>`;
    });
    console.log("Success");
    loader.classList.add("hide");
  } catch (error) {
    // catch
    console.log(error);
    content.innerHTML = "An error occured";
  }
}
fetchPosts();

// fetch more than 10 posts
async function fetchPosts2() {
  try {
    const response = await fetch(url2);
    const json = await response.json();

    console.log(json);
    const posts = json;

    content.innerHTML = "";

    posts.forEach(function (post) {
      const titlePost = post.title.rendered;
      const imagePost =
        post._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url;
      content.innerHTML += `
      <div class="postItem">
      <a href="post.html?id=${post.id}" class="postLink">

 <img class="postImage" src="${imagePost}" alt=" post image"> 
        <h3>${titlePost}"
         </h3>  
         </a> 
      </div>`;
    });
    console.log("Success");
    viewMore.classList.add("hide");
  } catch (error) {
    // catch
    console.log(error);
    content.innerHTML = "An error occured";
  }
}

viewMore.addEventListener("click", fetchPosts2);
