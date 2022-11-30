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

// break into smaller pieces? why is formatting fucked?
header.innerHTML +=
  '<a href="index.html"><img src="../img/glitchIntel_logo.png" alt = "Glitch Intel logo" class="header_logo "></a>                        <div class="dt_menu_items ">                         <a href="login.html">LOG IN</a>                     <a href="register.html">REGISTER</a>                </div>                                              <div class="menu ">                            <label for="hamburger-menu"><i class="fa-solid fa-bars"></i></label><input type="checkbox" id="hamburger-menu" /> <nav class="menu_items"> <ul>                                               <li><a href="index.html">HOME</a></li>          <li><a href="posts.html">ALL POSTS</a></li> <li><a href="about.html">ABOUT US</a></li>     <li><a href="contact.html">CONTACT US</a></li>  <li class="mb_menu_items"><a href="login.html">LOG IN</a></li>  <li class="mb_menu_items"><a href="register.html">REGISTER</a></li></ul>    </nav> </div>';
