SSbreadcrumb.innerHTML += `<li><a href="posts.html">All News Updates</a></li>`;
pageTitle.innerHTML += `All News Updates`;

const url = "https://flowpow.pro/glitch/wp-json/wp/v2/posts?_embed";

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    const posts = json;

    posts.forEach(function (post) {
      const titlePost = post.title.rendered;
      const imagePost =
        post._embedded["wp:featuredmedia"][0].media_details.sizes.medium
          .source_url;
      content.innerHTML += `
      <div class="postItem">
      <div class="postImage"> 
 <img src="${imagePost}" alt="${imagePost.alt_text}" <h3>${titlePost}"
         </h3>     </img>  </div>
        <h3>${titlePost}"
         </h3>   
      </div>`;
    });
    console.log("Success");
    const loader = document.querySelector(".loader");
    loader.classList.remove("loader");
  } catch (error) {
    // catch
    console.log(error);
    content.innerHTML = "An error occured";
  }

  // Add more buttom
  content.innerHTML += ` <div class="postItem itemButton">
                        <button class="button viewMore">View All Posts</button>

                </div>`;
}

fetchPosts();
