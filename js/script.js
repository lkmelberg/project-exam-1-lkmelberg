//   <header class="header"></header>
//     <div class="tagline"></div>
//     <div class="breadcrumb"></div>
//     <main>
//         <div class="headTitle"></div>
//         <div class="line"></div>
//         <div class="content"></div>
//     </main>
//     <footer class="footer"></footer>

const header = document.querySelector(".header");
const tagline = document.querySelector(".tagline");
const breadcrumb = document.querySelector(".breadcrumb");

const headTitle = document.querySelector(".headTitle");
const line = document.querySelector(".line");

const content = document.querySelector(".content");

const footer = document.querySelector(".footer");

// Header
// break into smaller pieces?
header.innerHTML += `
        <a href="index.html"><img src="img/glitchIntel_logo.png" alt="Glitch Intel logo" class="header_logo "></a>
        <div class="dt_menu_items ">
            <a href="dummy.html">LOG IN</a>
            <a href="dummy.html">REGISTER</a>
        </div>
        <div class="menu ">
            <label for="hamburger-menu"><i class="fa-solid fa-bars"></i></label>
            <input type="checkbox" id="hamburger-menu" />
            <nav class="menu_items">
                <ul>
                    <li class="home"><a href="index.html">HOME</a></li>
                    <li class="posts"><a href="posts.html">ALL POSTS</a></li>
                    <li class="about"><a href="about.html">ABOUT US</a></li>
                    <li class="contact"><a href="contact.html">CONTACT US</a></li>
                    <li class="mb_menu_items"><a href="dummy.html">LOG IN</a></li>
                    <li class="mb_menu_items"><a href="dummy.html">REGISTER</a></li>
                </ul>
            </nav>
        </div>`;

// tagline
tagline.innerHTML += `
<a href="index.html">The Latest And Greatest In E-Sports News</a>`;

// breadcrumb
breadcrumb.innerHTML += `
  <ul>
    <li><a href="index.html">Home</a></li>
    <li>-></li>
    <div class="SSbreadcrumb"></div>
  </ul>`;

const SSbreadcrumb = document.querySelector(".SSbreadcrumb");

// head title
headTitle.innerHTML += `<h1 class="pageTitle"></h1>`;

const pageTitle = document.querySelector(".pageTitle");

// footer
footer.innerHTML += `
        <div class="footerLinks"> </div>
        <div class="footerLogo"> </div>
        <div class=" footerSocials"></div>
        <div class=" footerCopyr"></div>`;

const footerLinks = document.querySelector(".footerLinks");
const footerLogo = document.querySelector(".footerLogo");
const footerSocials = document.querySelector(".footerSocials");
const footerCopyr = document.querySelector(".footerCopyr");

// footer links
footerLinks.innerHTML = `
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="dummy.html">Cookies And Privacy</a></li>
                <li><a href="dummy.html">Terms And Conditions</a></li>
              </ul>`;

// footer logo
footerLogo.innerHTML = `
            <a href="index.html"><img src="img/glitchIntel_logo.png" alt="Glitch Intel logo" class="footer_logo "></a>
`;

// footer socials
footerSocials.innerHTML = `
              <ul>
                <li><a href="dummy.html">Twitter</a></li>
                <li><a href="dummy.html">Youtube</a></li>
                <li><a href="dummy.html">TikTok</a></li>
                <li><a href="dummy.html">Facebook</a></li>
                <li><a href="dummy.html">instagram</a></li>
              </ul>`;

// footer copyright
footerCopyr.innerHTML = `<p>© Copyright 2022 Glitch Intel LTD</p>`;
