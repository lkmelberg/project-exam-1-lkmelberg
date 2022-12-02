SSbreadcrumb.innerHTML += `<li><a href="posts.html">All News Updates</a></li>`;
pageTitle.innerHTML += `All News Updates`;

const url = "https://flowpow.pro/glitch/wp-json/wp/v2/posts";

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    // temp.innerHTML = "";

    const posts = json;

    // posts.forEach(function (post) {
    //   console.log(post.title);
    // });

    // for (let i = 0; i < post.length; i++) {
    //   // we only want to display 10
    //   if (i === 10) {
    //     break;
    //   }
    //   console.log(post[i].title.rendered);
    //   const postTitle = post[i].title.rendered;
    //   //   const postImage = post[i]._links.wp.featuredmedia.href;

    //   content.innerHTML = +`
    //                   <p>${post[i].title.rendered}</p>
    //   `;
    // }

    //   // style="background-image: src="${post.images[i].src};"
    //   //   <a href="posts.html?id=${post.id}"
    //   // </a>
    //   //   <div class="postItem">
    //   //     class="posts_container">
    //   //     <div class="overlay">
    //   //       <p>${post[i].title}</p>
    //   //     </div>
    //   //   </div>;

    //   content.innerHTML = +`
    //                       <p>${post[i].title}</p>
    //       `;
    // }
    posts.forEach(function (post) {
      content.innerHTML += `<p>${post.title.rendered}</p>`;
    });
    console.log("Success");
    // const loader = document.querySelector(".loader");
    // loader.classList.remove("loader");
  } catch (error) {
    console.log(error);
    // content.innerHTML = "An error occured";
  }
  //   content.innerHTML = ` <div class="postItem itemButton">
  //                       <button class="button viewMore">View All Posts</button>

  //               </div>`;
}

fetchPosts();

// posts.forEach(function (post) {
//   content.innerHTML += ` <div class="posts">
//                             <a href="posts.html?id=${jacket.id}" class="posts_container">
//                             <div class="posts_image">
//                             <img src="${jacket.images[0].src}" alt="Jacket name">
//                         </div>
//                         <li class="posts_name">
//                             <h2>${jacket.name}</h2>
//                         </li>
//                       <li class="posts_price">Price: $${jacket.prices.regular_price}</li>

//                     </a>
//                 </div>`;
