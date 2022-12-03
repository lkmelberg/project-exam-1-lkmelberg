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
      <div class="caruselContainer newest"></div>`;

    const daily = document.querySelector(".daily");
    const dailyId = 5;
    const caruselContainer = document.querySelector(".caruselContainer");

    console.log(dailyId);

    // story of the day

    daily.innerHTML = `  <a href="post.html?id=${dailyId}" class="dailyLink">
                    <img class="dailyImage" src="${Hposts[7]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}" alt=" post image">
                    <h2>${Hposts[7].title.rendered}</h2>
                </a>`;

    //   carusel
    //   make slide divs
    caruselContainer.innerHTML += `
         <div class="slide1"></div>
                <div class="slide2"></div>
                <div class="slide3"></div>
                <div class="slide4"></div>
                <div class="slide5"></div>`;

    //   content for slide 1
    const slide1G = Hposts.slice(0, 3);
    const slide1 = document.querySelector(".slide1");
    console.log(slide1G);

    slide1G.forEach(function (post) {
      const title = post.title.rendered;
      const image =
        post._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url;
      slide1.innerHTML += `
           <div class="carouselItem">
         <a href="post.html?id=${post.id}" class="carouselLink">
               <img class="carouselImage" src="${image}" alt=" post image">
              <h3>${title}"</h3>
         </a>
        </div>
          `;
    });

    //   content for slide 2
    const slide2G = Hposts.slice(3, 6);
    const slide2 = document.querySelector(".slide2");
    console.log(slide2G);

    slide2G.forEach(function (post) {
      const title = post.title.rendered;
      const image =
        post._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url;
      slide2.innerHTML += `
           <div class="carouselItem">
         <a href="post.html?id=${post.id}" class="carouselLink">
               <img class="carouselImage" src="${image}" alt=" post image">
              <h3>${title}"</h3>
         </a>
        </div>
          `;
    });

    //   content for slide 3
    const slide3 = document.querySelector(".slide3");
    const slide3G = Hposts.slice(6, 9);
    console.log(slide3G);

    slide3G.forEach(function (post) {
      const title = post.title.rendered;
      const image =
        post._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url;
      slide3.innerHTML += `
           <div class="carouselItem">
         <a href="post.html?id=${post.id}" class="carouselLink">
               <img class="carouselImage" src="${image}" alt=" post image">
              <h3>${title}"</h3>
         </a>
        </div>
          `;
    });

    //   content for slide 4
    const slide4G = Hposts.slice(9, 12);
    const slide4 = document.querySelector(".slide4");
    console.log(slide4G);

    slide4G.forEach(function (post) {
      const title = post.title.rendered;
      const image =
        post._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url;
      slide4.innerHTML += `
           <div class="carouselItem">
         <a href="post.html?id=${post.id}" class="carouselLink">
               <img class="carouselImage" src="${image}" alt=" post image">
              <h3>${title}"</h3>
         </a>
        </div>
          `;
    });

    //   content for slide 5
    const slide5G = Hposts.slice(12, 15);
    const slide5 = document.querySelector(".slide5");
    console.log(slide5G);

    slide5G.forEach(function (post) {
      const title = post.title.rendered;
      const image =
        post._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url;
      slide5.innerHTML += `
           <div class="carouselItem">
         <a href="post.html?id=${post.id}" class="carouselLink">
               <img class="carouselImage" src="${image}" alt=" post image">
              <h3>${title}"</h3>
         </a>
        </div>
          `;
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
