breadcrumb.innerHTML = ``;
pageTitle.innerHTML += `Story Of The Day:`;
const loader = document.querySelector(".loader");

const url =
  "https://flowpow.pro/glitch/wp-json/wp/v2/posts?_embed&per_page=100";

async function fetchHomePosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    const Hposts = json;

    content.innerHTML = "";

    // Content containers
    content.innerHTML += `
      <div class="daily"></div>
      div class="caruselContainer newest"></div>`;

    const daily = document.querySelector(".daily");
    const dailyId = 5;
    const contentCarusel = document.querySelector(".contentCarusel");

    console.log(dailyId);

    daily.innerHTML = `  <a href="post.html?id=${dailyId}" class="dailyLink">
                    <img class="dailyImage" src="${Hposts[7]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt=" post image">
                    <h2>${Hposts[7].title.rendered}</h2>
                </a>`;

    Hposts.forEach(function (Hpost) {
      const homeTitle = Hpost.title.rendered;
      const homeImage =
        Hpost._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url;
    });
    console.log("Success");
    loader.classList.add("hide");
  } catch (error) {
    // catch
    console.log(error);
    content.innerHTML = "An error occured";
  }
}
fetchHomePosts();
