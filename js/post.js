// remeber to fix this
SSbreadcrumb.innerHTML += `<li><a href="posts.html">All News Updates</a></li>
                            <li>-></li>
                           `;
const postSpesificTitle = document.querySelector("title");
const modal = document.querySelector(".modal");
const clickable = document.querySelector(".wp-image-27");

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
    const imagePost =
      data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

    content.innerHTML += `
      <div onclick="myFunction()" class="postContent">${data.content.rendered}</div>`;

    const author = document.querySelector(".wp-block-post-author__name");
    author.innerHTML = `<h3>Author: ${data._embedded["author"][0].name}</h3>`;

    modal.innerHTML = `<div onclick="close()" class="esc">&times;</div><img onclick="close()" class="postImage" src="${imagePost}" alt=" post image"> `;

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

function myFunction() {
  console.log("yo");
  document.querySelector(".modal").classList.add("show");
}
function close() {
  console.log("yo2");
  document.querySelector(".modal").classList.remove("show");
}
