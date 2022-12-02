// remeber to fix this
SSbreadcrumb.innerHTML += `<li><a href="posts.html">All News Updates</a></li>
                            <li>-></li>
                           `;
const postSpesificTitle = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const emb = "?_embed";

if (id === null) {
  location.href = "/";
}

console.log(id);

const url = "https://flowpow.pro/glitch/wp-json/wp/v2/posts/" + id + emb;

console.log(url);

async function getPost() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    SSbreadcrumb.innerHTML += ` <li><a href="post.html?id=${id}">${data.title.rendered}</a></li>`;
    postSpesificTitle.innerHTML = `${data.title.rendered}`;
    pageTitle.innerHTML += `${data.title.rendered}`;

    content.innerHTML += `
      <div class="postContent">${data.content.rendered}</div>`;

    const author = document.querySelector(".wp-block-post-author__name");
    author.innerHTML = `<h3>Author: ${data._embedded["author"][0].name}</h3>`;
    // content.innerHTML += `<div class="post">
    //                                   <div class="postInfo">
    //                                   <p class"author"> Name: ${data.name}</p>
    //                                   <p class"date"> Name: ${data.name}</p>
    //                                   </div>
    //                                   <div class="details-image"
    //                                 style="background-image: url('${data.image}')"></div>
    //                                  <p class="details status">Status: ${data.status}</p>
    //                                   <p class="details species">Species: ${data.species}</p>
    //                                   <p class="details origin">Origin: ${data.origin.name}</p>
    //                                </div>`;
    console.log("Success");
    const loader = document.querySelector(".loader");
    loader.classList.add("hide");
  } catch (error) {
    console.log(error, "An error occurred");
    content.innerHTML = "An error occurred when calling the API";
  } finally {
    console.log("Done!");
  }
}
getPost();
