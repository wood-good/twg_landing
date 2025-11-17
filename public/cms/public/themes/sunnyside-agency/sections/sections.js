Vvveb.Sections.add("sunnyside-agency/about", {
    name: "About",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/sunnyside-agency/about-thumb.webp",
    html: `<section class="about" id="about">
  <div class="container">
    <div class="about-img-box grid-pos-lg">

      <picture>
        <!-- <source media="(max-width: 768px)" srcset="images/mobile/image-transform.jpg">
          </source> -->
        <!-- <source media="(min-width: 769px)" srcset="images/desktop/image-transform.jpg">
          </source> -->

        <img src="images/mobile/image-transform.jpg" alt="about image" class="about-img" loading="lazy">

      </picture>

    </div>

    <div class="about-content">
      <h2 class="about-h2">Transform your brand</h2>

      <p class="about-p">
        We are a full-service creative agency specializing in helping brands grow fast.
        Engage your clients through compelling visuals that do most of the marketing for you.
      </p>

      <a href="#" class="about-link yellow">Learn more</a>
    </div>

    <div class="about-img-box">

      <picture>
        <!-- <source media="(max-width: 768px)" srcset="images/mobile/image-stand-out.jpg">
          </source> -->
        <!-- <source media="(min-width: 769px)" srcset="images/desktop/image-stand-out.jpg">
          </source> -->

        <img src="images/mobile/image-stand-out.jpg" alt="about image" class="about-img" loading="lazy">

      </picture>

    </div>

    <div class="about-content">
      <h2 class="about-h2">Stand out to the right audience</h2>

      <p class="about-p">
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
        we’ll build and
        extend your brand in digital places.
      </p>

      <a href="#" class="about-link pink">Learn more</a>
    </div>

  </div>

</section>`
});Vvveb.Sections.add("sunnyside-agency/hero", {
    name: "Hero",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/sunnyside-agency/hero-thumb.webp",
    html: `<section class="hero" id="hero">

  <div class="container">
    <!--
      <picture>

        <source media="(max-width: 768px)" srcset="images/mobile/image-header.jpg">
        </source>
        <source media="(min-width: 769px)" srcset="images/desktop/image-header.jpg">
        </source>

        <img src="images/mobile/image-header.jpg" alt="hero banner image" class="hero-banner" loading="lazy">
        </img>

      </picture>
-->
    <div class="hero-absolute-content">
      <h1 class="main-heading">We are creatives</h1>

      <a href="#about">
        <img src="images/icon-arrow-down.svg" alt="icon arrow-down" class="arrow-down" loading="lazy">

      </a>
    </div>


  </div>

  <div class="background-container">
    <img src="images/desktop/image-header.jpg" alt="hero banner image" class="hero-banner" loading="lazy">
  </div>
</section>`
});Vvveb.Sections.add("sunnyside-agency/projects", {
    name: "Projects",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/sunnyside-agency/projects-thumb.webp",
    html: `<section class="projects" id="projects">
  <div class="container">
    <div class="project-img-box">
      <a href="#">
        <picture>
          <!-- <source media="(max-width: 768px)" srcset="images/mobile/image-gallery-milkbottles.jpg">
            </source> -->
          <!-- <source media="(min-width: 769px)" srcset="images/desktop/image-gallery-milkbottles.jpg">
            </source> -->

          <img src="images/mobile/image-gallery-milkbottles.jpg" alt="milk bottles" class="project-img">

        </picture>
      </a>
    </div>

    <div class="project-img-box">
      <a href="#">
        <picture>
          <!-- <source media="(max-width: 768px)" srcset="images/mobile/image-gallery-orange.jpg">
            </source> -->
          <!-- <source media="(min-width: 769px)" srcset="images/desktop/image-gallery-orange.jpg">
            </source> -->

          <img src="images/mobile/image-gallery-orange.jpg" alt="orange fruit" class="project-img">

        </picture>
      </a>
    </div>

    <div class="project-img-box">
      <a href="#">
        <picture>
          <!-- <source media="(max-width: 768px)" srcset="images/mobile/image-gallery-cone.jpg">
            </source> -->
          <!-- <source media="(min-width: 769px)" srcset="images/desktop/image-gallery-cone.jpg">
            </source> -->

          <img src="images/mobile/image-gallery-cone.jpg" alt="cone ice-cream" class="project-img">

        </picture>
      </a>
    </div>

    <div class="project-img-box">
      <a href="#">
        <picture>
          <!-- <source media="(max-width: 768px)" srcset="images/mobile/image-gallery-sugar-cubes.jpg">
            </source> -->
          <!-- <source media="(min-width: 769px)" srcset="images/desktop/image-gallery-sugar-cubes.jpg">
            </source> -->

          <img src="images/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes" class="project-img">

        </picture>
      </a>
    </div>

  </div>
</section>`
});Vvveb.Sections.add("sunnyside-agency/services", {
    name: "Services",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/sunnyside-agency/services-thumb.webp",
    html: `<section class="services" id="services">
  <div class="container">
    <div class="service-box">
      <div class="img-box">
        <picture>
          <!-- <source media="(max-width: 768px)" srcset="images/mobile/image-graphic-design.jpg">
            </source> -->
          <!-- <source media="(min-width: 769px)" srcset="images/desktop/image-graphic-design.jpg">
            </source> -->

          <img src="images/mobile/image-graphic-design.jpg" alt="graphic design image" class="service-img" loading="lazy">

        </picture>
      </div>

      <div class="service-absolute-content">
        <h3 class="service-h3 cyan">Graphic design</h3>

        <p class="service-p cyan">
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures
          potential clients’
          attention.
        </p>
      </div>
    </div>

    <div class="service-box">
      <div class="img-box">
        <picture>
          <!-- <source media="(max-width: 768px)" srcset="images/mobile/image-photography.jpg">
            </source> -->
          <!-- <source media="(min-width: 769px)" srcset="images/desktop/image-photography.jpg">
            </source> -->

          <img src="images/mobile/image-photography.jpg" alt="photography image" class="service-img" loading="lazy">

        </picture>
      </div>

      <div class="service-absolute-content">
        <h3 class="service-h3 blue">Photography</h3>

        <p class="service-p blue">
          Increase your credibility by getting the most stunning, high-quality photos that improve your business
          image.
        </p>
      </div>
    </div>

  </div>
</section>`
});Vvveb.Sections.add("sunnyside-agency/testimonials-section", {
    name: "Testimonials section",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/sunnyside-agency/testimonials-section-thumb.webp",
    html: `<section class="testimonials">
  <div class="container">
    <h2 class="testimonials-h2">Client testimonials</h2>

    <div class="testimonials-grid">

      <div class="testimonials-client">

        <div class="client-img-box">
          <img src="images/image-emily.jpg" alt="client emily image" class="client-img" loading="lazy">

        </div>

        <p class="client-text">
          We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
          hit.
        </p>

        <h4 class="client-name">Emily R.</h4>

        <p class="client-title">Marketing Director</p>

      </div>

      <div class="testimonials-client">

        <div class="client-img-box">
          <img src="images/image-thomas.jpg" alt="client thomas image" class="client-img" loading="lazy">

        </div>

        <p class="client-text">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and
          enjoyable experience.
        </p>

        <h4 class="client-name">Thomas S.</h4>

        <p class="client-title">Chief Operating Officer</p>

      </div>

      <div class="testimonials-client">

        <div class="client-img-box">
          <img src="images/image-jennie.jpg" alt="client jennie image" class="client-img" loading="lazy">

        </div>

        <p class="client-text">
          Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
        </p>

        <h4 class="client-name">Jennie F.</h4>

        <p class="client-title">Business Owner</p>

      </div>

    </div>

  </div>
</section>`
});Vvveb.Sections.add("sunnyside-agency/testimonials", {
    name: "Testimonials",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/sunnyside-agency/testimonials-thumb.webp",
    html: `<section class="testimonials">

  <h2 class="testimonials-h2">Client testimonials</h2>

  <div class="testimonials-grid">

    <div class="testimonials-client">

      <div class="client-img-box">
        <img src="./images/image-emily.jpg" alt="client emily image" class="client-img" loading="lazy">
        </img>
      </div>

      <p class="client-text">
        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
        hit.
      </p>

      <h4 class="client-name">Emily R.</h4>

      <p class="client-title">Marketing Director</p>

    </div>

    <div class="testimonials-client">

      <div class="client-img-box">
        <img src="./images/image-thomas.jpg" alt="client thomas image" class="client-img" loading="lazy">
        </img>
      </div>

      <p class="client-text">
        Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and
        enjoyable experience.
      </p>

      <h4 class="client-name">Thomas S.</h4>

      <p class="client-title">Chief Operating Officer</p>

    </div>

    <div class="testimonials-client">

      <div class="client-img-box">
        <img src="./images/image-jennie.jpg" alt="client jennie image" class="client-img" loading="lazy">
        </img>
      </div>

      <p class="client-text">
        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
      </p>

      <h4 class="client-name">Jennie F.</h4>

      <p class="client-title">Business Owner</p>

    </div>

  </div>

</section>`
});
	Vvveb.SectionsGroup["Sunnyside agency"] = ["sunnyside-agency/about","sunnyside-agency/hero","sunnyside-agency/projects","sunnyside-agency/services","sunnyside-agency/testimonials-section","sunnyside-agency/testimonials"];
Vvveb.Sections.add("hero/hero-1", {
    name: "Hero 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/hero/hero-1-thumb.webp",
    html: `<header class="hero-1" aria-label="hero-1">

  <div class="container">
    <div class="heading">
      <h1 class="display-3">Open Source CMS Reinvented</h1>

      <h2 class="fs-4">Powerful and easy to use drag and drop builder for blogs, websites or ecommerce stores.</h2>

      <div class="btns">
        <a class="btn btn-primary btn-shadow" href="/download.php" role="button">
          <span>&#9889;</span>
          <span>Free Download</span>
        </a>

        <div class="nav-item dropdown">
          <a class="btn btn-outline-primary nav-link dropdown-toggle" href="//demo.vvveb.com/admin/?module=/editor/editor&template=index.html&url=/" role="button">Live demo <b>›</b>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" target="_blank" href="//demo.vvveb.com/admin/?module=/editor/editor&template=index.html&url=/">Page builder</a>
            <a class="dropdown-item" target="_blank" href="//demo.vvveb.com/admin">Admin dashboard</a>
            <a class="dropdown-item" target="_blank" href="//demo.vvveb.com">Frontend</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" target="_blank" href="https://vercel-vvveb-commerce.vercel.app/">Next.js Frontend GraphQL</a>
          </div>
        </div>
      </div>

    </div>

    <div class="frame mx-auto">
      <video loading="lazy" src="video/intro.mp4" width="1280" muted="true" playsinline="true" loop="true" controls="true" poster="https://www.vvveb.com/img/dark-theme.webp"></video>
    </div>
  </div>

  <div class="overlay">
  </div>

  <div class="background-container">
    <!-- <img src="demo/img//background.svg" alt="Hero background" loading="lazy"> -->
  </div>

</header>`
});Vvveb.Sections.add("hero/hero-2", {
    name: "Hero 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/hero/hero-2-thumb.webp",
    html: `<header class="hero-2" aria-label="hero-2">

  <div class="container">
    <div class="row align-items-center justify-content-between">
      <div class="col-lg-6 mb-5 ms-5" data-aos="fade-up" data-aos-delay="0">
        <h1 class="heading">The next generation website builder</h1>
        <p class="subheading mb-5">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
        <p>
          <a href="https://www.vvveb.com" class="btn btn-white">
            <span>&#9889;</span>
            <span>Free Download</span>
            <b>›</b>
          </a>

          <a href="https://demo.vvveb.com" class="btn text-white">Live Demo</a>
        </p>
      </div>
      <div class="col-lg-5" data-aos="fade-up" data-aos-delay="100">
        <a href="https://www.youtube.com/watch?v=3xsP3u-CVO4" class="video-wrap glightbox">
          <span class="play-button">
            <i class="la la-play"></i>
          </span>
          <img src="demo/img/video-1.webp" loading="lazy" alt="Video image" class="img-fluid">
        </a>
      </div>
    </div>
  </div>

  <div class="separator bottom">
    <svg height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" fill="var(--bs-body-bg)" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px" width="100%" height="250">
      <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
		c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
      <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
		c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
      <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
		H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
      <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
		c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
    </svg>
  </div>

  <div class="overlay">
  </div>

</header>`
});Vvveb.Sections.add("hero/hero-3-full", {
    name: "Hero 3 full",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/hero/hero-3-full-thumb.webp",
    html: `<header class="hero-3" aria-label="hero-3">

  <div class="container vh-100">
    <div>
      <div class="row align-items-center justify-content-center text-center">
        <div class="col-lg-12">
          <h1 class="heading mb-4 display-3" data-aos="fade-up" data-aos-delay="100">Next generation website builder</h1>
          <div class="col-lg-8 mx-auto">
            <h2 class="h4 lh-base fw-normal" data-aos="fade-up" data-aos-delay="100">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</h2>
          </div>

          <div class="buttons" data-aos="fade-up" data-aos-delay="300">
            <a href="https://www.vvveb.com" class="btn btn-primary">
              <span>&#9889;</span>
              <span>Free Download</span>
            </a>
            <a href="https://demo.vvveb.com" class="btn btn-light">Live Demo</a>
          </div>


        </div>
      </div>
    </div>
  </div>
  <!--  
    <div class="separator bottom">
		
		<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 41" width="100%" height="100" fill="var(--bs-body-bg)" preserveAspectRatio="none"><defs></defs><title>rough-edges-bottom</title><path d="M0,185l125-26,33,17,58-12s54,19,55,19,50-11,50-11l56,6,60-8,63,15v15H0Z" transform="translate(0 -159)"/></svg>
		
    </div>   
-->
  <!--
   <div class="separator top">
		
		<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 41" width="100%" height="200" preserveAspectRatio="none"><defs><style>.cls-1{fill:var(--bs-body-bg);}</style></defs><title>rough-edges-bottom</title><path class="cls-1" d="M0,185l125-26,33,17,58-12s54,19,55,19,50-11,50-11l56,6,60-8,63,15v15H0Z" transform="translate(0 -159)"/></svg>
		
    </div>
-->
  <div class="overlay">
  </div>

  <div class="background-container">

    <img src="demo/img/hero-3.webp" alt="Hero background">

  </div>

</header>`
});Vvveb.Sections.add("hero/hero-3", {
    name: "Hero 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/hero/hero-3-thumb.webp",
    html: `<header class="hero-3" aria-label="hero-3">

  <div class="container">
    <div>
      <div class="row align-items-center justify-content-center text-center">
        <div class="col-lg-12">
          <h1 class="heading mb-4 display-3" data-aos="fade-up" data-aos-delay="100">Next generation website builder</h1>
          <div class="col-lg-8 mx-auto">
            <h2 class="h4 lh-base fw-normal" data-aos="fade-up" data-aos-delay="100">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</h2>
          </div>

          <div class="buttons" data-aos="fade-up" data-aos-delay="300">
            <a href="https://www.vvveb.com" class="btn btn-primary">
              <span>Free Download</span>
              <span>&#9889;</span>
            </a>
            <a href="https://demo.vvveb.com" class="btn btn-light">Live Demo</a>
          </div>


        </div>
      </div>
    </div>
  </div>

  <div class="separator bottom">

    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 41" width="100%" height="100" fill="var(--bs-body-bg)" preserveAspectRatio="none">
      <defs></defs>
      <title>rough-edges-bottom</title>
      <path d="M0,185l125-26,33,17,58-12s54,19,55,19,50-11,50-11l56,6,60-8,63,15v15H0Z" transform="translate(0 -159)" />
    </svg>

  </div>
  <!--
   <div class="separator top">
		
		<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 41" width="100%" height="200" preserveAspectRatio="none"><defs><style>.cls-1{fill:var(--bs-body-bg);}</style></defs><title>rough-edges-bottom</title><path class="cls-1" d="M0,185l125-26,33,17,58-12s54,19,55,19,50-11,50-11l56,6,60-8,63,15v15H0Z" transform="translate(0 -159)"/></svg>
		
    </div>
-->
  <div class="overlay">
  </div>

  <div class="background-container">

    <img src="demo/img/hero-3.webp" alt="Hero background">

  </div>

</header>`
});Vvveb.Sections.add("hero/hero-4", {
    name: "Hero 4",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/hero/hero-4-thumb.webp",
    html: `<header class="hero-4" aria-label="hero-4">

  <div class="container">
    <div class="row align-items-center justify-content-center text-center">
      <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
        <h1 class="heading mb-3 display-4">The next generation website builder</h1>
        <h4 class="subheading mb-5">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</h4>

        <img width="350" src="demo/img/video-1.webp" class="shadow img-thumbnail">

        <div class="buttons">

          <a href="https://www.vvveb.com" class="btn btn-success btn-lg">
            <span>⚡</span>
            <span>Free Download</span>
            <b>›</b>
          </a>
          <a href="https://demo.vvveb.com" class="btn btn-white btn-lg">Live Demo</a>

        </div>
      </div>
    </div>
  </div>

  <div class="separator bottom">

    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 41" width="100%" preserveAspectRatio="none">
      <defs>
        <style>
          .cls-1 {
            fill: var(--bs-body-bg);
          }
        </style>
      </defs>
      <title>rough-edges-bottom</title>
      <path class="cls-1" d="M0,185l125-26,33,17,58-12s54,19,55,19,50-11,50-11l56,6,60-8,63,15v15H0Z" transform="translate(0 -159)" />
    </svg>

  </div>

  <div class="overlay">
  </div>

  <div class="background-container">
    <img src="demo/img/hero-3.webp" alt="Hero background">
  </div>
</header>`
});Vvveb.Sections.add("hero/hero-5", {
    name: "Hero 5",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/hero/hero-5-thumb.webp",
    html: `<header class="hero-5" aria-label="hero-5">

  <div class="container" style="z-index:2">
    <div class="row align-items-center d-flex justify-content-between">
      <div class="col-12 col-md-6 pb-5 order-2 order-sm-2 ">
        <h1 class="fw-bold mb-3 mt-5 display-3">The next generation website builder.</h1>
        <p class="lead">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
        <div class=" d-flex mt-3 mb-1">
          <a class="btn btn-primary btn-lg  mt-md-3 " href="https://www.vvveb.com" role="button">Download Now</a>
        </div>
      </div>
      <div class="col-12 col-md-6 order-sm-1 order-md-2  ">
        <div class="icon-wrap text-primary d-flex justify-content-md-center my-3">
          <button class="icon d-flex border-0 align-items-center justify-content-center bg-white text-dark shadow-lg rounded-circle " style="width:70px; height:70px">
            <i class="la la-play la-lg ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div>


  <div class="separator bottom">

    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 41" width="100%" preserveAspectRatio="none">
      <defs>
        <style>
          .cls-1 {
            fill: var(--bs-body-bg);
          }
        </style>
      </defs>
      <title>rough-edges-bottom</title>
      <path class="cls-1" d="M0,185l125-26,33,17,58-12s54,19,55,19,50-11,50-11l56,6,60-8,63,15v15H0Z" transform="translate(0 -159)" />
    </svg>

  </div>

  <div class="overlay">
  </div>

  <div class="background-container">
    <img src="demo/img/hero-3.webp" alt="Hero background">
  </div>

</header>`
});Vvveb.Sections.add("hero/hero-6", {
    name: "Hero 6",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/hero/hero-6-thumb.webp",
    html: `<header class="hero-6" aria-label="hero-6">

  <div class="container">
    <div>
      <div class="row align-items-center justify-content-center text-start">
        <div class="col-lg-7">
          <h1 class="heading mb-3 display-3 fw-bold" data-aos="fade-up" data-aos-delay="100">The next generation website builder</h1>
          <h2 class="h3 col-lg-8" data-aos="fade-up" data-aos-delay="100">Powerful and easy to use drag and drop builder for blogs, websites or ecommerce stores.</h2>


          <div class="buttons mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="https://www.vvveb.com" class="btn btn-success btn-lg">
              <span>⚡</span>
              <span>Free Download</span>
              <b>›</b>
            </a>
            <a href="https://demo.vvveb.com" class="btn btn-white btn-lg">Live Demo</a>
          </div>


        </div>
        <div class="col-lg-5">
          <img src="demo/img/video-1.webp" class="shadow img-thumbnail" loading="lazy">
        </div>
      </div>
    </div>
  </div>

  <div class="separator bottom">

    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 41" width="100%" preserveAspectRatio="none">
      <defs>
        <style>
          .cls-1 {
            fill: var(--bs-body-bg);
          }
        </style>
      </defs>
      <title>rough-edges-bottom</title>
      <path class="cls-1" d="M0,185l125-26,33,17,58-12s54,19,55,19,50-11,50-11l56,6,60-8,63,15v15H0Z" transform="translate(0 -159)" />
    </svg>

  </div>

  <div class="overlay">
  </div>

  <div class="background-container">
    <img src="demo/img/hero-3.webp" alt="Hero background" loading="lazy">
  </div>
</header>`
});Vvveb.Sections.add("hero/hero-7", {
    name: "Hero 7",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/hero/hero-7-thumb.webp",
    html: `<header class="hero-7" aria-label="hero-7">

  <div class="container">
    <div>
      <div class="row align-items-center justify-content-center text-start g-5">
        <div class="col-lg-5">
          <img src="demo/img/video-1.webp" class="shadow img-thumbnail">
        </div>

        <div class="col-lg-7">
          <h1 class="heading mb-3 display-3 fw-bold" data-aos="fade-up" data-aos-delay="100">Open source CMS reinvented</h1>
          <h2 class="h3 col-lg-8" data-aos="fade-up" data-aos-delay="100">Powerful and easy to use drag and drop builder for blogs, websites or ecommerce stores.</h2>


          <div class="buttons mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="https://www.vvveb.com" class="btn btn-success btn-lg">
              <span>⚡</span>
              <span>Free Download</span>
              <b>›</b>
            </a>
            <a href="https://demo.vvveb.com" class="btn btn-white btn-lg">Live Demo</a>
          </div>


        </div>
      </div>
    </div>
  </div>

  <div class="separator bottom">

    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 41" width="100%" preserveAspectRatio="none">
      <defs>
        <style>
          .cls-1 {
            fill: var(--bs-body-bg);
          }
        </style>
      </defs>
      <title>rough-edges-bottom</title>
      <path class="cls-1" d="M0,185l125-26,33,17,58-12s54,19,55,19,50-11,50-11l56,6,60-8,63,15v15H0Z" transform="translate(0 -159)" />
    </svg>

  </div>

  <div class="overlay">
  </div>

  <div class="background-container">
    <img src="demo/img/hero-3.webp" alt="Hero background">
  </div>
</header>`
});Vvveb.Sections.add("hero/hero-slider", {
    name: "Hero slider",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/hero/hero-slider-thumb.webp",
    html: `<header class="hero-slider" aria-label="hero-slider">


  <div class="swiper" data-slides-per-view="1" data-draggable="true">
    <div class="swiper-wrapper">


      <div class="swiper-slide">
        <img src="demo/img/hero-3.webp" loading="lazy">
        <div class="content">
          <div class="container">
            <div>
              <div class="row align-items-center justify-content-center text-start">
                <div class="col-lg-7">
                  <h1 class="heading mb-3 display-3 fw-bold" data-aos="fade-up" data-aos-delay="100">The next generation website builder</h1>
                  <h2 class="h3 col-lg-8" data-aos="fade-up" data-aos-delay="100">Powerful and easy to use drag and drop builder for blogs, websites or ecommerce stores.</h2>


                  <div class="buttons mt-4" data-aos="fade-up" data-aos-delay="300">
                    <a href="https://www.vvveb.com" class="btn btn-primary text-white btn-lg">
                      <span>⚡</span>
                      <span>Free Download</span>
                      <b>›</b>
                    </a>
                    <a href="https://demo.vvveb.com" class="btn btn-white text-white btn-lg">Live Demo</a>
                  </div>


                </div>
                <div class="col-lg-5">
                  <img src="demo/img/video-1.webp" class="shadow img-thumbnail" loading="lazy">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </div>


      <div class="swiper-slide">
        <img src="demo/img/hero-3.webp" loading="lazy">
        <div class="content">
          <div class="container">
            <div>
              <div class="row align-items-center justify-content-center text-center">
                <div class="col-lg-12">
                  <h1 class="heading text-white mb-3 display-4 fw-bold" data-aos="fade-up" data-aos-delay="100">The fastest and leanest CMS</h1>
                  <h2 class="text-white h3" data-aos="fade-up" data-aos-delay="100">Powerful and easy to use drag and drop website builder for blogs,
                    <br> presentation or ecommerce stores.
                  </h2>

                  <div class="buttons mt-4" data-aos="fade-up" data-aos-delay="300">
                    <a href="https://www.vvveb.com" class="btn btn-primary text-white  btn-lg">
                      <span>⚡</span>
                      <span>Free Download</span>
                      <b>›</b>
                    </a>
                    <a href="https://demo.vvveb.com" class="btn btn-white text-white  btn-lg">Live Demo</a>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </div>

      <div class="swiper-slide">
        <img src="demo/img/hero-3.webp" loading="lazy">
        <div class="content">
          <div class="container">
            <div>
              <div class="row align-items-center justify-content-center text-start g-5">
                <div class="col-lg-5">
                  <img src="demo/img/video-1.webp" class="shadow img-thumbnail" loading="lazy">
                </div>

                <div class="col-lg-7">
                  <h1 class="heading text-white mb-3 display-3 fw-bold" data-aos="fade-up" data-aos-delay="100">Open source CMS reinvented</h1>
                  <h2 class="text-white h3" data-aos="fade-up" data-aos-delay="100">Powerful and easy to use drag and drop builder for blogs,
                    <br> websites or ecommerce stores.
                  </h2>


                  <div class="buttons mt-4" data-aos="fade-up" data-aos-delay="300">
                    <a href="https://www.vvveb.com" class="btn btn-primary text-white btn-lg">
                      <span>⚡</span>
                      <span>Free Download</span>
                      <b>›</b>
                    </a>
                    <a href="https://demo.vvveb.com" class="btn btn-white text-white  btn-lg">Live Demo</a>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </div>

    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

    <div class="swiper-pagination"></div>
  </div>



  <div class="separator bottom">

    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 41" width="100%" preserveAspectRatio="none">
      <defs>
        <style>
          .cls-1 {
            fill: var(--bs-body-bg);
          }
        </style>
      </defs>
      <title>rough-edges-bottom</title>
      <path class="cls-1" d="M0,185l125-26,33,17,58-12s54,19,55,19,50-11,50-11l56,6,60-8,63,15v15H0Z" transform="translate(0 -159)" />
    </svg>

  </div>


  <div class="background-container">
    <img src="demo/img/hero-3.webp" alt="Hero background" loading="lazy">
  </div>


  <script id="swiper-js" src="/js/libs/swiper/swiper-bundle.min.js"></script>
  <link id="swiper-css" href="/js/libs/swiper/swiper-bundle.min.css" rel="stylesheet">
  <script>
var swiper = [];
function initSwiper(onlyNew = false) {
	var list = document.querySelectorAll('.swiper' + (onlyNew ? ":not(.swiper-initialized)" : "") );
	list.forEach(el => {
		//el.dataset
		let params = {      
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},      
			pagination: {
				el: ".swiper-pagination",
		  },
		};
		for (i in el.dataset) {
			let param = el.dataset[i];
			if (param[0] = '{') {
				param = JSON.parse(param);
			}
			params[i] = param;
		}
		swiper.push(new Swiper(el, params))
		//swiper.push(new Swiper(el, { ...{autoplay:{delay: 500}}, ...el.dataset}))		
	});
}	

initSwiper();
</script>

</header>`
});
	Vvveb.SectionsGroup["Hero"] = ["hero/hero-1","hero/hero-2","hero/hero-3-full","hero/hero-3","hero/hero-4","hero/hero-5","hero/hero-6","hero/hero-7","hero/hero-slider"];
Vvveb.Sections.add("features/features-1", {
    name: "Features 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-1-thumb.webp",
    html: `<section class="features-1 bg-alternate" aria-label="features-1">
  <div class="container">
    <div class="row g-5 wrap">
      <div class="col-md-6 align-self-center">
        <div class="max-box" data-aos="fade-right">
          <!--
                    <span class="badge  bg-success rounded-pill px-3">new</span>
                    -->
          <h2 class="display-6 fw-semibold">Real time code editor</h2>
          <div class="mt-4">
            <p class="lead">Code editor with syntax highglighting that updates in real time.</p>
            <p class="lead">Use any of the hundreds fonts from google fonts for your design.</p>
            <p class="lead">Powerful and easy to use drag and drop builder for blogs, websites or ecommerce stores.</p>
          </div>
          <a tile="Code editor features" href="/page/about" role="button">
            <span>Learn More</span>
            <i class="la la-long-arrow-alt-right ms-1"></i>
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <img src="demo/img/illustrations.co/118-macbook.svg" alt="Macbook" loading="lazy" class="img-fluid" data-aos="fade-left" />
      </div>
    </div>
    <div class="row g-5 wrap">
      <div class="col-md-6">
        <img src="demo/img/illustrations.co/day95-app-development.svg" alt="App development" loading="lazy" class="img-fluid" data-aos="fade-right" />
      </div>
      <div class="col-md-6 align-self-center">
        <div class="max-box ms-auto" data-aos="fade-left">
          <!-- <span class="badge  bg-success rounded-pill px-3">on sale</span> -->
          <h2 class="display-6 fw-semibold">Drag and drop page builder</h2>
          <div class="mt-4">
            <p class="lead">Intuitive building with simple drag and drop for sections, components and blocks.</p>
            <p class="lead">The html for sections blocks and components and this template are built using Bootstrap.</p>
          </div>
          <a title="Drag and drop" href="/page/about" role="button">
            <span>Learn More</span>
            <i class="la la-long-arrow-alt-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-2", {
    name: "Features 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-2-thumb.webp",
    html: `<section class="features-2 py-5 bg-alternate" aria-label="features-2">

  <div class="row no-gutters">
    <div class="col-lg-6">
      <img alt="image" src="demo/img/illustrations.co/day68-happy-cat.svg" alt="happy cat" loading="lazy" class="img-fluid">
    </div>

    <div class="col-lg-6 bg-primary bg-gradient text-white d-flex">

      <div class="text-box align-self-center">
        <h3 class="text-white mb-3">Code editor with syntax highlighting that updates in real time</h3>
        <p>The html for sections blocks and components and this template are built using Bootstrap 5</p>
        <ul class="list-block">
          <li class="my-2">
            <span>Intuitive building with simple drag and drop for sections, components and blocks/snippets.</span>
            </span>
          </li>
          <li class="my-2">
            <span>Code editor with syntax highglighting that updates in real time.</span>
          </li>
          <li class="my-2">
            <span>Search and insert CCO images directly into the page. </span>
          </li>
          <li class="my-2">
            <span>The html for sections blocks and components and this template are built using bootstrap 5.</span>
          </li>
        </ul>
        <a class="btn btn-outline-light  mt-3">
          <span>Learn More</span>
        </a>
      </div>

    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-3", {
    name: "Features 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-3-thumb.webp",
    html: `<section class="features-3 py-5 bg-alternate" aria-label="features-3">
  <div class="container">

    <div class="row">

      <div class="col-lg-6 d-flex align-items-center">
        <div class="row">
          <div class="col-md-12 mb-4">
            <div class="d-flex align-items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="72" height="72" color="#1064ea" fill="#fff">
                  <polyline points="336 176 225.2 304 176 255.8" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></polyline>
                  <path d="M463.1,112.37C373.68,64.33,336.71,84.45,256,48,175.29,84.45,138.32,64.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path>
                </svg>

              </div>
              <div class="p-4">
                <h6 class="text-muted">
                  <a class="linking">Live code edit</a>
                </h6>
                <p class="mt-3">Code editor with syntax highglighting for html css and javascript that updates in real time.</p>
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-4">
            <div class="d-flex align-items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="icons" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="72" height="72" color="#1064ea" fill="#fff">
                  <path d="M419.1,337.45a3.94,3.94,0,0,0-6.1,0c-10.5,12.4-45,46.55-45,77.66,0,27,21.5,48.89,48,48.89h0c26.5,0,48-22,48-48.89C464,384,429.7,349.85,419.1,337.45Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"></path>
                  <path d="M387,287.9,155.61,58.36a36,36,0,0,0-51,0l-5.15,5.15a36,36,0,0,0,0,51l52.89,52.89,57-57L56.33,263.2a28,28,0,0,0,.3,40l131.2,126a28.05,28.05,0,0,0,38.9-.1c37.8-36.6,118.3-114.5,126.7-122.9,5.8-5.8,18.2-7.1,28.7-7.1h.3A6.53,6.53,0,0,0,387,287.9Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"></path>
                </svg>

              </div>
              <div class="p-4">
                <h6 class="text-muted">
                  <a class="linking">Drag and drop</a>
                </h6>
                <p class="mt-3">The html for sections blocks and components and this template are built using Bootstrap 5.</p>
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-4">
            <div class="d-flex align-items-center">
              <div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="icons" width="72" height="72" color="#1064ea" fill="#fff" stroke-width="28">
                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill-rule="evenodd" d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z"></path>
                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill-rule="evenodd" d="M160,176V144a64,64,0,0,1,64-64h0a64,64,0,0,1,64,64v32"></path>
                </svg>

              </div>
              <div class="p-4">
                <h6 class="text-muted">
                  <a class="linking">Bootstrap 5</a>
                </h6>
                <p class="mt-3">The html for sections blocks and components and this template are built using Bootstrap 5.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <img src="demo/img/illustrations.co/day67-dog.svg" alt="dog" loading="lazy" class="img-fluid" />
      </div>

      <div class="col-md-12 mt-3 text-center">
        <a class="btn btn-primary ">View Details</a>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-4", {
    name: "Features 4",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-4-thumb.webp",
    html: `<section class="features-4 py-5 bg-primary bg-gradient text-white" aria-label="features-4">

  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h2>Our product features</h2>
      </div>
    </div>


    <div class="row text-center justify-content-sm-center no-gutters">
      <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto">
        <div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="96" height="96" color="#fff" fill="#fff">
            <polyline points="336 176 225.2 304 176 255.8" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></polyline>
            <path d="M463.1,112.37C373.68,96.33,336.71,84.45,256,48,175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path>
          </svg>

          <h3 class="mt-3">Drag and drop</h3>

          <p class="mt-2">Intuitive building with simple drag and drop for sections, components and blocks/snippets.</p>
          <p class="mt-4">
            <a>Learn More <i class="la la-angle-right"></i>
            </a>
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
        <div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="icons" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="96" height="96" color="#fff" fill="#fff">
            <path d="M419.1,337.45a3.94,3.94,0,0,0-6.1,0c-10.5,12.4-45,46.55-45,77.66,0,27,21.5,48.89,48,48.89h0c26.5,0,48-22,48-48.89C464,384,429.7,349.85,419.1,337.45Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"></path>
            <path d="M387,287.9,155.61,58.36a36,36,0,0,0-51,0l-5.15,5.15a36,36,0,0,0,0,51l52.89,52.89,57-57L56.33,263.2a28,28,0,0,0,.3,40l131.2,126a28.05,28.05,0,0,0,38.9-.1c37.8-36.6,118.3-114.5,126.7-122.9,5.8-5.8,18.2-7.1,28.7-7.1h.3A6.53,6.53,0,0,0,387,287.9Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"></path>
          </svg>

          <h3 class="mt-3">Live code edit</h3>

          <p class="mt-2">Code editor with syntax highglighting that updates in real time.</p>
          <p class="mt-4">
            <a>Learn More <i class="la la-angle-right"></i>
            </a>
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
        <div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="icons" width="96" height="96" color="#fff" fill="#fff" stroke-width="28">
            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill-rule="evenodd" d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z"></path>
            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill-rule="evenodd" d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32"></path>
          </svg>

          <h3 class="mt-3">Bootstrap 5</h3>

          <p class="mt-2">The html for sections blocks and components and this template are built using Bootstrap 5.</p>
          <p class="mt-4">
            <a>Learn More <i class="la la-angle-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

</section>`
});Vvveb.Sections.add("features/features-5", {
    name: "Features 5",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-5-thumb.webp",
    html: `<section class="features-5 py-5 bg-alternate" aria-label="features-5">

  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-8 col-lg-6 m-md-auto ms-lg-0 me-lg-auto">
        <img src="demo/img/illustrations.co/day67-dog.svg" alt="dog" loading="lazy" class="img-fluid" />
      </div>
      <div class="col-12 col-lg-6 col-xl-5 ms-sm-auto pt-5 pt-lg-0">
        <h2>Open Source CMS Reinvented</h2>

        <div class="row pt-4 pt-xl-5">
          <div class="col-12 col-sm-6 col-xl-5">
            <h4>
              <strong>Drag and drop</strong>
            </h4>
            <p>Intuitive building with simple drag and drop for sections, components and blocks/snippets</p>
          </div>
          <div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">
            <h4>
              <strong>Live code edit</strong>
            </h4>
            <p>Code editor with syntax highglighting that updates in real time.</p>
          </div>
        </div>

        <div class="row pt-3">
          <div class="col-12 col-sm-6 col-xl-5">
            <h4>
              <strong>Bootstrap 5</strong>
            </h4>
            <p>The html for sections blocks and components and this template are built using bootstrap 5</p>
          </div>
          <div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">
            <h4>
              <strong>Google fonts</strong>
            </h4>
            <p>Use any of the hundreds fonts from google fonts for your design</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>`
});Vvveb.Sections.add("features/features-6", {
    name: "Features 6",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-6-thumb.webp",
    html: `<section class="features-6 py-5 bg-alternate" aria-label="features-6">
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
        <h2>Our product features</h2>
      </div>
    </div>
    <div class="row text-center justify-content-center">
      <div class="col-12 col-sm-4 col-xl-3 m-md-auto">
        <div>
          <img loading="lazy" src="demo/img/illustrations.co/109-map-location.svg" alt="map location">
          <h3>Drag and drop</h3>
          <p class="lead text-muted mt-4">Intuitive building with simple drag and drop for sections, components and blocks/snippets</p>

          <a>Learn More</a>
        </div>
      </div>

      <div class="col-12 col-sm-4 col-xl-3 m-md-auto">
        <div>
          <img loading="lazy" src="demo/img/illustrations.co/107-healthy.svg" alt="dumbbell">
          <h3>Live code editor</h3>
          <p class="lead text-muted mt-4">Code editor with syntax highglighting that updates in real time</p>

          <a>Learn More</a>
        </div>
      </div>

      <div class="col-12 col-sm-4 col-xl-3 m-md-auto">
        <div>
          <img loading="lazy" src="demo/img/illustrations.co/104-dumbbell.svg" alt="dumbbell">
          <h3>Bootstrap 5</h3>
          <p class="lead text-muted mt-4">The html for sections blocks and components and this template are built using bootrap 5</p>

          <a>Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-7", {
    name: "Features 7",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-7-thumb.webp",
    html: `<section class="features-7 py-5 bg-alternate" aria-label="features-7">
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
        <h2>Our product features</h2>
      </div>
    </div>
    <div class="row text-center justify-content-center">
      <div class="col-12 col-md-6 col-lg-3">
        <div>
          <img alt="map location" loading="lazy" src="demo/img/illustrations.co/109-map-location.svg">
          <h3>Drag and drop</h3>
          <p class="lead text-muted mt-4">Intuitive building with simple drag and drop for sections, components and blocks/snippets</p>

          <a>Learn More</a>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div>
          <img alt="healthy" loading="lazy" src="demo/img/illustrations.co/107-healthy.svg">
          <h3>Live code editor</h3>
          <p class="lead text-muted mt-4">Code editor with syntax highglighting that updates in real time</p>

          <a>Learn More</a>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div>
          <img alt="dumbbell" loading="lazy" src="demo/img/illustrations.co/104-dumbbell.svg">
          <h3>Bootstrap 5</h3>
          <p class="lead text-muted mt-4">The html for sections blocks and components and this template are built using Bootstrap 5</p>

          <a>Learn More</a>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div>
          <img alt="namaste" loading="lazy" src="demo/img/illustrations.co/126-namaste-no-hand-shake.svg">
          <h3>Google fonts</h3>
          <p class="lead text-muted mt-4">Use any of the hundreds fonts from google fonts for your design</p>

          <a>Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-8", {
    name: "Features 8",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-8-thumb.webp",
    html: `<section class="features-8 py-5 bg-alternate" aria-label="features-8">
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
        <h2>Our product features</h2>
      </div>
    </div>
    <div class="row text-start mt-5">
      <div class="col-12 col-md-4">
        <div class="row">
          <div class="col-3">
            <img alt="map location" loading="lazy" src="demo/img/illustrations.co/109-map-location.svg">
          </div>
          <div class="col-9">
            <h4>Drag and drop</h4>
            <p class="lead text-muted mt-4">Intuitive building with simple drag and drop for sections, components and blocks/snippets</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 pt-3 pt-sm-4">
        <div class="row">
          <div class="col-3">
            <img alt="healthy" loading="lazy" src="demo/img/illustrations.co/107-healthy.svg">
          </div>
          <div class="col-9">
            <h4>Live code editor</h4>
            <p class="lead text-muted mt-4">Code editor with syntax highglighting that updates in real time</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 pt-3 pt-sm-4">
        <div class="row">
          <div class="col-3">
            <img alt="dumbbell" loading="lazy" src="demo/img/illustrations.co/104-dumbbell.svg">
          </div>
          <div class="col-9">
            <h4>Bootstrap 5</h4>
            <p class="lead text-muted mt-4">The html for sections blocks and components and this template are built using bootrap 5</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row text-start pt-3 pt-sm-4 pt-md-5">
      <div class="col-12 col-md-4">
        <div class="row">
          <div class="col-3">
            <img alt="namaste" loading="lazy" src="demo/img/illustrations.co/126-namaste-no-hand-shake.svg">
          </div>
          <div class="col-9">
            <h4>Google fonts</h4>
            <p class="lead text-muted mt-4">Use any of the hundreds fonts from google fonts for your design</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 pt-3 pt-sm-4">
        <div class="row">
          <div class="col-3">
            <img alt="map location" loading="lazy" src="demo/img/illustrations.co/109-map-location.svg">
          </div>
          <div class="col-9">
            <h4>Drag and drop</h4>
            <p class="lead text-muted mt-4">Intuitive building with simple drag and drop for sections, components and blocks/snippets</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 pt-3 pt-sm-4">
        <div class="row">
          <div class="col-3">
            <img alt="healthy" loading="lazy" src="demo/img/illustrations.co/107-healthy.svg">
          </div>
          <div class="col-9">
            <h4>Bootstrap 5</h4>
            <p class="lead text-muted mt-4">The html for sections blocks and components and this template are built using bootrap 5</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-9", {
    name: "Features 9",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-9-thumb.webp",
    html: `<section class="features-9 py-5 bg-alternate" aria-label="features-9">
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
        <h2>Our product features</h2>
      </div>
    </div>
    <div class="row text-start mt-5">
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="row">
          <div class="col-3">
            <img alt="map location" loading="lazy" src="demo/img/illustrations.co/109-map-location.svg">
          </div>
          <div class="col-9">
            <h4>Drag and drop</h4>
            <p class="lead text-muted mt-4">Intuitive building with simple drag and drop for sections, components and blocks/snippets</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
        <div class="row">
          <div class="col-3">
            <img alt="healthy" loading="lazy" src="demo/img/illustrations.co/107-healthy.svg">
          </div>
          <div class="col-9">
            <h4>Live code editor</h4>
            <p class="lead text-muted mt-4">Code editor with syntax highglighting that updates in real time</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
        <div class="row">
          <div class="col-3">
            <img alt="dumbbell" loading="lazy" src="demo/img/illustrations.co/104-dumbbell.svg">
          </div>
          <div class="col-9">
            <h4>Bootstrap 5</h4>
            <p class="lead text-muted mt-4">The html for sections blocks and components and this template are built using bootrap 5</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
        <div class="row">
          <div class="col-3">
            <img alt="namaste" loading="lazy" src="demo/img/illustrations.co/126-namaste-no-hand-shake.svg">
          </div>
          <div class="col-9">
            <h4>Google fonts</h4>
            <p class="lead text-muted mt-4">Use any of the hundreds fonts from google fonts for your design</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row text-start pt-3 pt-lg-5">
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="row">
          <div class="col-3">
            <img alt="map location" loading="lazy" src="demo/img/illustrations.co/109-map-location.svg">
          </div>
          <div class="col-9">
            <h4>Drag and drop</h4>
            <p class="lead text-muted mt-4">Intuitive building with simple drag and drop for sections, components and blocks/snippets</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
        <div class="row">
          <div class="col-3">
            <img alt="healthy" loading="lazy" src="demo/img/illustrations.co/107-healthy.svg">
          </div>
          <div class="col-9">
            <h4>Bootstrap 5</h4>
            <p class="lead text-muted mt-4">The html for sections blocks and components and this template are built using bootrap 5</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
        <div class="row">
          <div class="col-3">
            <img alt="map location" loading="lazy" src="demo/img/illustrations.co/109-map-location.svg">

          </div>
          <div class="col-9">
            <h4>Drag and drop</h4>
            <p class="lead text-muted mt-4">Intuitive building with simple drag and drop for sections, components and blocks/snippets</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
        <div class="row">
          <div class="col-3">
            <img alt="healthy" loading="lazy" src="demo/img/illustrations.co/107-healthy.svg">
          </div>
          <div class="col-9">
            <h4>Live code editor</h4>
            <p class="lead text-muted mt-4">Code editor with syntax highglighting that updates in real time</p>
            <a>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-10", {
    name: "Features 10",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-10-thumb.webp",
    html: `<section class="features-10 py-5 bg-alternate" aria-label="features-10">
  <div class="container">
    <div class="row text-end align-items-center">
      <div class="col-12 col-md-6 m-auto">
        <img src="demo/img/illustrations.co/day67-dog.svg" alt="dog" loading="lazy" class="img-fluid">
      </div>

      <div class="col-12 col-md-7 col-lg-5 m-auto text-start pt-5">
        <div class="row pb-lg-5">
          <div class="col-3">
            <img src="demo/img/illustrations.co/107-healthy.svg" alt="healthy" loading="lazy" class="img-fluid">
          </div>
          <div class="col-9">
            <h3>
              <strong>Drag and drop</strong>
            </h3>
            <p>Even the all-powerful Pointing has no control about the blind texts.</p>
          </div>
        </div>

        <div class="row pt-4 pt-md-5 pb-lg-5">
          <div class="col-3">
            <img alt="image" src="demo/img/illustrations.co/104-dumbbell.svg" alt="dumbbell" loading="lazy" class="img-fluid">
          </div>
          <div class="col-9">
            <h3>
              <strong>Live code editor</strong>
            </h3>
            <p>Duden flows by their place far far away, behind the word mountains.</p>
          </div>
        </div>


        <div class="row pt-4 pt-md-5">
          <div class="col-3">
            <img alt="image" src="demo/img/illustrations.co/109-map-location.svg" alt="map location" loading="lazy" class="img-fluid">
          </div>
          <div class="col-9">
            <h3>
              <strong>Bootstrap 5 Components</strong>
            </h3>
            <p>A small river named Duden flows by their place and supplies it.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-11", {
    name: "Features 11",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-11-thumb.webp",
    html: `<section class="features-11 py-5 bg-alternate" aria-label="features-11">
  <div class="container">
    <div class="row text-center">
      <div class="col-12 col-md-8 col-lg-4">
        <div>
          <img alt="image" src="demo/img/illustrations.co/109-map-location.svg" alt="map location" loading="lazy" class="img-fluid">
          <h3>Drag and drop</h3>
          <p class="lead text-muted mt-4">Intuitive building with simple drag and drop for sections, components and blocks/snippets.</p>

          <a>Learn More</a>
        </div>
      </div>

      <div class="col-12 col-md-8 col-lg-4">
        <div>
          <img alt="image" src="demo/img/illustrations.co/107-healthy.svg" alt="healthy" loading="lazy" class="img-fluid">
          <h3>Live code editor</h3>
          <p class="lead text-muted mt-4">Code editor with syntax highglighting that updates in real time.</p>

          <a>Learn More</a>
        </div>
      </div>

      <div class="col-12 col-md-8 col-lg-4">
        <div>
          <img alt="image" src="demo/img/illustrations.co/104-dumbbell.svg" alt="dumbbell" loading="lazy" class="img-fluid">
          <h3>Bootstrap 5 Components</h3>
          <p class="lead text-muted mt-4">The html for sections blocks and components and this template are built using bootstrap 5.</p>

          <a>Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-12", {
    name: "Features 12",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-12-thumb.webp",
    html: `<section class="features-1 bg-alternate" aria-label="features-12">
  <div class="container-fluid g-0">
    <div class="row g-0 wrap">
      <div class="col-md-6 align-self-center">
        <div class="max-box" data-aos="fade-right">
          <!--
                    <span class="badge  bg-success rounded-pill px-3">new</span>
                    -->
          <h2 class="display-6 fw-semibold">Real time code editor</h2>
          <div class="mt-4">
            <p class="lead">Code editor with syntax highglighting that updates in real time.</p>
            <p class="lead">Use any of the hundreds fonts from google fonts for your design.</p>
            <p class="lead">Powerful and easy to use drag and drop builder for blogs, websites or ecommerce stores.</p>
          </div>
          <a tile="Code editor features" href="/page/about" role="button">
            <span>Learn More</span>
            <i class="la la-long-arrow-alt-right ms-1"></i>
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <img src="demo/img/video-1.webp" alt="Macbook" loading="lazy" class="img-fluid w-100" data-aos="fade-right" />
      </div>
    </div>
    <div class="row g-0 wrap">
      <div class="col-md-6">
        <img src="demo/img/video-1.webp" alt="App development" loading="lazy" class="img-fluid w-100" data-aos="fade-right" />
      </div>
      <div class="col-md-6 align-self-center">
        <div class="max-box ms-auto" data-aos="fade-left">
          <!-- <span class="badge  bg-success rounded-pill px-3">on sale</span> -->
          <h2 class="display-6 fw-semibold">Drag and drop page builder</h2>
          <div class="mt-4">
            <p class="lead">Intuitive building with simple drag and drop for sections, components and blocks.</p>
            <p class="lead">The html for sections blocks and components and this template are built using Bootstrap.</p>
          </div>
          <a title="Drag and drop" href="/page/about" role="button">
            <span>Learn More</span>
            <i class="la la-long-arrow-alt-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-13", {
    name: "Features 13",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-13-thumb.webp",
    html: `<section class="features-1 bg-alternate" aria-label="features-13">
  <div class="container">
    <div class="row wrap">
      <div class="col-md-6 align-self-center">
        <div class="max-box" data-aos="fade-right">
          <!--
                    <span class="badge  bg-success rounded-pill px-3">new</span>
                    -->
          <h2 class="display-6 fw-semibold">Real time code editor</h2>
          <div class="mt-4">
            <p class="lead">Code editor with syntax highglighting that updates in real time.</p>
            <p class="lead">Use any of the hundreds fonts from google fonts for your design.</p>
            <p class="lead">Powerful and easy to use drag and drop builder for blogs, websites or ecommerce stores.</p>
          </div>
          <a tile="Code editor features" href="/page/about" role="button">
            <span>Learn More</span>
            <i class="la la-long-arrow-alt-right ms-1"></i>
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <img src="demo/img/video-1.webp" alt="Macbook" loading="lazy" class="img-fluid w-100" data-aos="fade-right" />
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("features/features-14", {
    name: "Features 14",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/features/features-14-thumb.webp",
    html: `<section class="features-1 bg-alternate" aria-label="features-14">
  <div class="container">
    <div class="row g-0 wrap">
      <div class="col-md-6">
        <img src="demo/img/video-1.webp" alt="App development" loading="lazy" class="img-fluid w-100" data-aos="fade-right" />
      </div>
      <div class="col-md-6 align-self-center">
        <div class="max-box ms-auto" data-aos="fade-left">
          <!-- <span class="badge  bg-success rounded-pill px-3">on sale</span> -->
          <h2 class="display-6 fw-semibold">Drag and drop page builder</h2>
          <div class="mt-4">
            <p class="lead">Intuitive building with simple drag and drop for sections, components and blocks.</p>
            <p class="lead">The html for sections blocks and components and this template are built using Bootstrap.</p>
          </div>
          <a title="Drag and drop" href="/page/about" role="button">
            <span>Learn More</span>
            <i class="la la-long-arrow-alt-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Features"] = ["features/features-1","features/features-2","features/features-3","features/features-4","features/features-5","features/features-6","features/features-7","features/features-8","features/features-9","features/features-10","features/features-11","features/features-12","features/features-13","features/features-14"];
Vvveb.Sections.add("base/1-column", {
    name: "1 column",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/base/1-column-thumb.webp",
    html: `<section title="one column" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("base/2-columns", {
    name: "2 columns",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/base/2-columns-thumb.webp",
    html: `<section title="two columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("base/3-columns", {
    name: "3 columns",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/base/3-columns-thumb.webp",
    html: `<section title="three columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("base/4-columns", {
    name: "4 columns",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/base/4-columns-thumb.webp",
    html: `<section title="four columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("base/6-columns", {
    name: "6 columns",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/base/6-columns-thumb.webp",
    html: `<section title="six columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("base/8-columns", {
    name: "8 columns",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/base/8-columns-thumb.webp",
    html: `<section title="eight columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("base/12-columns", {
    name: "12 columns",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/base/12-columns-thumb.webp",
    html: `<section title="twelve columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("base/blank", {
    name: "Blank",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/base/blank-thumb.webp",
    html: `<section title="blank" class="py-4">
  <div class="container">
    <h1>Blank container</h1>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Base"] = ["base/1-column","base/2-columns","base/3-columns","base/4-columns","base/6-columns","base/8-columns","base/12-columns","base/blank"];
Vvveb.Sections.add("contact-form/contact-form-1", {
    name: "Contact form 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-1-thumb.webp",
    html: `<section class="contact-form-9" aria-label="contact-form-9">
  <div class="container py-5 my-5">
    <div class="row py-5">
      <div class="col py-5">
        <div>
          <div class="row text-center justify-content-center">
            <div class="col-12 col-md-9 col-lg-7">
              <h1>Contact Us</h1>
              <p class="lead">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
            </div>
          </div>

          <div class="row justify-content-center pt-4">
            <div class="col-12 col-md-8">
              <form>
                <div class="row">
                  <div class="col-12 col-md">
                    <input type="text" class="form-control" placeholder="Name">
                  </div>
                  <div class="col-12 col-md mt-4 mt-md-0">
                    <input type="text" class="form-control" placeholder="Email">
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col">
                    <input type="email" class="form-control" placeholder="Subject">
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col">
                    <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col text-center">
                    <button type="submit" class="btn btn-primary">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("contact-form/contact-form-2", {
    name: "Contact form 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-2-thumb.webp",
    html: `<section class="contact-form-11 pt-0" aria-label="contact-form-11">
  <div class="container-fluid p-0 pb-5">
    <iframe loading="lazy" class="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" style="border:0" allowfullscreen="" width="100%" height="300" frameborder="0"></iframe>
  </div>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12">
        <form>
          <div class="row">
            <div class="col-12 col-md">
              <label>First Name</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-12 col-md mt-4 mt-md-0">
              <label>Last Name</label>
              <input type="text" class="form-control">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <label>Your Email</label>
              <input type="email" class="form-control">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <label>Subject (optional but helpful)</label>
              <input type="email" class="form-control">
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <label>How can we help?</label>
              <textarea class="form-control" name="message" rows="3"></textarea>
            </div>
          </div>
          <div class="row mt-4 text-center">
            <div class="col">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("contact-form/contact-form-3", {
    name: "Contact form 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-3-thumb.webp",
    html: `<section class="contact-form-12 py-0" aria-label="contact-form-12">
  <div class="container py-5">
    <div class="row text-center justify-content-center">
      <div class="col-12 col-md-8 col-lg-7">
        <h1>Contact Us</h1>
        <p class="lead">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
      </div>
    </div>
    <div class="row-50">
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-7">
        <form>
          <div class="row">
            <div class="col">
              <label>Your Email Address</label>
              <input type="text" class="form-control">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <label>Subject</label>
              <input type="email" class="form-control">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <label>How can we help?</label>
              <textarea class="form-control" name="message" rows="3"></textarea>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col text-end">
              <button type="submit" class="btn btn-dark">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row-100"></div>
  </div>

  <div class="container-fluid p-0">
    <iframe loading="lazy" class="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" style="border:0" allowfullscreen="" width="100%" height="300" frameborder="0"></iframe>
  </div>
</section>`
});Vvveb.Sections.add("contact-form/contact-form-4", {
    name: "Contact form 4",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-4-thumb.webp",
    html: `<section class="contact-form-13" aria-label="contact-form-13">
  <div class="container">
    <div class="row text-center justify-content-center">
      <div class="col-12 col-md-8 col-lg-7">
        <h1>Contact Us</h1>
        <p class="lead">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
      </div>
    </div>
    <div class="row-70"></div>
    <div class="row">
      <div class="col-12 col-md-8 col-lg m-auto">
        <form>
          <div class="row">
            <div class="col">
              <input type="email" class="form-control" placeholder="Email">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <input type="email" class="form-control" placeholder="Subject">
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-12 col-md-8 col-lg pt-5 m-auto pt-lg-0">
        <iframe loading="lazy" class="mb-4" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" style="border:0" allowfullscreen="" width="100%" height="200" frameborder="0"></iframe>

        <p>
          <strong>Showroom</strong>
        </p>
        <p>
          71 Pilgrim Avenue
          <br>Chevy Chase, MD 20815
        </p>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("contact-form/contact-form-5", {
    name: "Contact form 5",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-5-thumb.webp",
    html: `<section class="contact-form-2 container-fluid px-5 my-5" aria-label="contact-form-2">
  <div class="row justify-content-center">
    <div class="col-xl-10">
      <div class="card border-0 rounded-3 shadow-lg ">
        <div class="card-body p-0">
          <div class="row g-0">
            <div class="col-sm-6 d-none d-sm-block bg-image">

              <img alt="image" src="demo/img/illustrations.co/day68-happy-cat.svg" alt="happy cat" loading="lazy" class="img-fluid">

            </div>
            <div class="col-sm-6 p-4">
              <div class="text-center">
                <div class="h3 fw-light">Contact Form</div>
                <p class="mb-4 text-muted">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
              </div>


              <form id="contactForm">


                <div class=" mb-3">
                  <input class="form-control" id="name" type="text" placeholder="Name" required />
                  <label for="name">Name</label>
                </div>


                <div class=" mb-3">
                  <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" required />
                  <label for="emailAddress">Email Address</label>
                </div>


                <div class=" mb-3">
                  <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;" required></textarea>
                  <label for="message">Message</label>
                </div>




                <div class="d-grid">
                  <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
                </div>
              </form>


            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("contact-form/contact-form-6", {
    name: "Contact form 6",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-6-thumb.webp",
    html: `<section title="contact-form-6" class="contact-form-6">
  <div class="container-fluid g-0">

    <div style="height:300px" data-component-maps>
      <iframe loading="lazy" frameborder="0" title="map" src="https://maps.google.com/maps?q=Bucharest&z=15&t=q&key=&output=embed" width="100%" height="100%" style="width:100%;height:100%;left:0px">
      </iframe>
    </div>

  </div>
  <div class="container">
    <div class="row my-5">
      <div class="col-12 col-md-6 col-lg-5">
        <h2 class="display-6 mb-1 fw-bold mb-4">Contact Us</h2>
        <p class="lead">
          Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.
        </p>

        <p class="lead">
          The html for sections blocks and components and this template are built using Bootstrap 5.
        </p>

        <div data-v-component-site>
          <p class="mt-5">
            <b>
              <i class="la la-lg la-envelope opacity-50"></i> Email:
            </b>
            <span data-v-if="site.contact-email">
              <a href="mailto:contact@mysite.com" data-v-site-contact-email>
                <span data-v-site-contact-email>contact@mysite.com</span>
              </a>
            </span>
          </p>
          <p class="">
            <b>
              <i class="la la-lg la-phone opacity-50"></i> Phone:
            </b>
            <a href="tel:5511112377" data-v-site-description-phone-number>
              <span data-v-site-description-phone-number>+55 (111) 123 777</span>
            </a>
          </p>
        </div>
      </div>

      <div class="col-12 col-md-6 ms-auto" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-home">

        <div class="notifications" data-v-notifications>

          <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
            </div>

            <div class="flex-grow-1 align-self-center text-small">
              <div>
                <div data-v-notification-text>
                  This is a placeholder for a notification message.
                </div>
              </div>
            </div>


            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-check-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
              This is a placeholder for a success message.
            </div>

            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1  la-info-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center" data-v-notification-text>
              This is a placeholder for a info message.
            </div>

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

        </div>
        <div class="border rounded-3 p-4 border-opacity-25 border-light-subtle">
          <form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-contact-form-form]" data-v-vvveb-on="submit">
            <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
            <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="First name" name="first_name" required>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name" name="last_name" required>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col">
                <input type="email" class="form-control" placeholder="Email" name="email" required>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col">
                <input type="text" class="form-control" placeholder="Subject" name="subject" required>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <textarea class="form-control" name="message" rows="3" placeholder="How can we help?" required></textarea>
              </div>
            </div>


            <!-- if these hidden inputs are filled then ignore, robots -->

            <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

            <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

            <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


            <div class="row mt-4">
              <div class="col">
                <button type="submit" class="btn btn-primary">
                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                    </span>
                    <span>Submitting</span> ...
                  </span>

                  <span class="button-text">
                    <span>Submit</span>
                    <i class="la la-lg la-envelope opacity-50 ms-2"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("contact-form/contact-form-7", {
    name: "Contact form 7",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-7-thumb.webp",
    html: `<section class="contact-form-8" aria-label="contact-form-8">
  <div class="container">
    <div class="row text-center justify-content-center">
      <div class="col-12 col-md-8 col-lg-7">
        <h1>Contact Us</h1>
        <p class="lead">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
      </div>
    </div>

    <div class="row pt-4">
      <div class="col-12 col-md-6">
        <iframe loading="lazy" class="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" style="border:0" allowfullscreen="" width="100%" height="300" frameborder="0"></iframe>
      </div>

      <div class="col-12 col-md-6 pt-5">
        <form>
          <div class="row">
            <div class="col">
              <input type="email" class="form-control" placeholder="Email">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <input type="email" class="form-control" placeholder="Subject">
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("contact-form/contact-form-8", {
    name: "Contact form 8",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-8-thumb.webp",
    html: `<section class="contact-form-8 pt-0" aria-label="contact-form-8">
  <div class="container-fluid p-0 pb-3">
    <iframe loading="lazy" class="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656" style="border:0" allowfullscreen="" width="100%" height="300" frameborder="0"></iframe>
  </div>
  <div class="container">
    <div class="row text-center justify-content-center pt-5">
      <div class="col-12 col-md-7">
        <h1>Contact Us</h1>
      </div>
    </div>

    <div class="row justify-content-center pt-4">
      <div class="col-12 col-md-7">
        <form>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Email">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <input type="email" class="form-control" placeholder="Subject">
            </div>
          </div>

          <div class="row mt-4">
            <div class="col">
              <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col text-center">
              <button type="submit" class="btn btn-primary">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row-100"></div>
  </div>
  <div class="">
    <div class="container">
      <div class="row-50"></div>
      <div class="row justify-content-center text-center">
        <div class="col-12 col-md me-auto ms-auto">
          <p class="lead">+55 (111) 123 777</p>
        </div>

        <div class="col-12 col-md pt-4 me-auto ms-auto">
          <p class="lead">7th St.
            <br>New York, NY 12345
          </p>
        </div>

        <div class="col-12 col-md pt-4 me-auto ms-auto">
          <p class="lead">support@vvveb.com</p>
        </div>
      </div>
      <div class="row-50"></div>
    </div>
  </div>

  <div class="container">
    <div class="row-70"></div>
    <div class="row text-center">
      <div class="col">
        <p class="h2">
          <a class="mx-2">
            <i class="la la-facebook"></i>
          </a>
          <a class="mx-2">
            <i class="la la-twitter"></i>
          </a>
          <a class="mx-2">
            <i class="la la-instagram"></i>
          </a>
          <a class="mx-2">
            <i class="la la-google"></i>
          </a>
          <a class="mx-2">
            <i class="la la-pinterest"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("contact-form/contact-form-9", {
    name: "Contact form 9",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-9-thumb.webp",
    html: `<section class="contact-form-3 py-5" aria-label="contact-form-3">
  <div class="row no-gutters">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-shadow">
            <img alt="image" src="demo/img/illustrations.co/day68-happy-cat.svg" alt="happy cat" loading="lazy" class="img-fluid">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-box ms-3">
            <h1 class=" mt-2">Quick Contact</h1>
            <form class="mt-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="name">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="email" placeholder="email address">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="phone">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea class="form-control" rows="3" placeholder="message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" class="btn btn-success mt-3 text-white border-0 px-3 py-2">
                    <span> Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card mt-4 border-0 mb-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail pl-0">
                  <div class="me-3 align-self-center">
                    <i class="la la-map la-lg"></i>
                  </div>
                  <div>
                    <h6>Address</h6>
                    <p>708 Picadilly Ave.
                      <br> New York
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="me-3 align-self-center">
                    <i class="la la-phone la-lg"></i>
                  </div>
                  <div>
                    <h6>Phone</h6>
                    <p>555 111 333</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="me-3 align-self-center">
                    <i class="la la-email la-lg"></i>
                  </div>
                  <div>
                    <h6>Email</h6>
                    <p>
                      hello@vvveb.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("contact-form/contact-form-10", {
    name: "Contact form 10",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/contact-form/contact-form-10-thumb.webp",
    html: `<section title="contact-form-10" class="contact-form-10 border-top">
  <div class="container">
    <div class="row my-5">
      <div class="col-12 col-md-6 col-lg-5">
        <h2 class="display-6 mb-1 fw-bold mb-4">Contact Us</h2>
        <p class="lead">
          Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.
        </p>

        <p class="lead">
          The html for sections blocks and components and this template are built using Bootstrap 5.
        </p>

        <div data-v-component-site>
          <p class="mt-5">
            <b>
              <i class="la la-lg la-envelope opacity-50"></i> Email:
            </b>
            <span data-v-if="site.contact-email">
              <a href="mailto:contact@mysite.com" data-v-site-contact-email>
                <span data-v-site-contact-email>contact@mysite.com</span>
              </a>
            </span>
          </p>
          <p class="">
            <b>
              <i class="la la-lg la-phone opacity-50"></i> Phone:
            </b>
            <a href="tel:5511112377" data-v-site-description-phone-number>
              <span data-v-site-description-phone-number>+55 (111) 123 777</span>
            </a>
          </p>
        </div>
      </div>

      <div class="col-12 col-md-6 ms-auto" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-home">

        <div class="notifications" data-v-notifications>

          <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
            </div>

            <div class="flex-grow-1 align-self-center text-small">
              <div>
                <div data-v-notification-text>
                  This is a placeholder for a notification message.
                </div>
              </div>
            </div>


            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-check-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
              This is a placeholder for a success message.
            </div>

            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1  la-info-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center" data-v-notification-text>
              This is a placeholder for a info message.
            </div>

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

        </div>
        <div class="border rounded-3 p-4 border-opacity-25 border-light-subtle">
          <form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-contact-form-form]" data-v-vvveb-on="submit">
            <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
            <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="First name" name="first_name" required>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name" name="last_name" required>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col">
                <input type="email" class="form-control" placeholder="Email" name="email" required>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col">
                <input type="text" class="form-control" placeholder="Subject" name="subject" required>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <textarea class="form-control" name="message" rows="3" placeholder="How can we help?" required></textarea>
              </div>
            </div>


            <!-- if these hidden inputs are filled then ignore, robots -->

            <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

            <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

            <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


            <div class="row mt-4">
              <div class="col">
                <button type="submit" class="btn btn-primary">
                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                    </span>
                    <span>Submitting</span> ...
                  </span>

                  <span class="button-text">
                    <span>Submit</span>
                    <i class="la la-lg la-envelope opacity-50 ms-2"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Contact form"] = ["contact-form/contact-form-1","contact-form/contact-form-2","contact-form/contact-form-3","contact-form/contact-form-4","contact-form/contact-form-5","contact-form/contact-form-6","contact-form/contact-form-7","contact-form/contact-form-8","contact-form/contact-form-9","contact-form/contact-form-10"];
Vvveb.Sections.add("cta/cta-1", {
    name: "Cta 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/cta/cta-1-thumb.webp",
    html: `<section class="cta-1" aria-label="cta-1" data-bs-theme="dark">

  <div class="container">

    <div class="row justify-content-center">
      <div class="col text-center">
        <h2 class="display-5  fw-bold text-body mb-3">Ready to take the next step?</h2>
        <p class="text-body h4 fw-normal">Our specialists are ready to work on your next awesome project</p>
        <p class="text-body h4 fw-normal">Contact us today to get started!</p>
        <a href="https://www.vvveb.com" class="btn btn-lg btn-primary mt-5">
          <span>Contact us</span>
        </a>
      </div>
    </div>
  </div>


  <div class="overlay">
  </div>

  <div class="background-container parallax">

    <img src="demo/img/hero-3.webp" alt="Hero background">

  </div>

</section>`
});
	Vvveb.SectionsGroup["Cta"] = ["cta/cta-1"];
Vvveb.Sections.add("faq/faq-1", {
    name: "Faq 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/faq/faq-1-thumb.webp",
    html: `<section class="py-5" aria-label="faq-1">
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-lg-8 col-xl-7">
        <span class="text-muted">F.A.Q</span>
        <h2 class="display-5 fw-bold">Frequently Asked Questions</h2>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur quidem eius cum voluptatum quasi delectus.</p>
      </div>
    </div>
    <div class="row mt-4 justify-content-center">
      <div class="col-md-8">
        <div class="accordion accordion-flush" id="faqAccordion1">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button aria-controls="collapseOne" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseOne" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="collapseOne">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button aria-controls="collapseTwo" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseTwo" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="collapseTwo">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button aria-controls="collapseThree" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseThree" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="collapseThree">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("faq/faq-2", {
    name: "Faq 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/faq/faq-2-thumb.webp",
    html: `<section class="py-5" aria-label="faq-2">
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-lg-8 col-xl-7">
        <span class="text-muted">F.A.Q</span>
        <h2 class="display-5 fw-bold">Frequently Asked Questions</h2>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta harum ipsum venenatis metus sem veniam eveniet aperiam suscipit.</p>
      </div>
    </div>
    <div class="row mt-4 justify-content-center">
      <div class="col-md-6">
        <div class="accordion accordion-flush" id="faqAccordion1">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button aria-controls="collapseOne" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseOne" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="collapseOne">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button aria-controls="collapseTwo" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseTwo" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="collapseTwo">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button aria-controls="collapseThree" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseThree" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion1" id="collapseThree">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="col-md-6">
        <div class="accordion accordion-flush" id="faqAccordion2">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button aria-controls="collapseOne2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseOne2" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="collapseOne2">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button aria-controls="collapseTwo2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseTwo2" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="collapseTwo2">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button aria-controls="collapseThree2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseThree2" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="collapseThree2">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  </div>
</section>`
});Vvveb.Sections.add("faq/faq-3", {
    name: "Faq 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/faq/faq-3-thumb.webp",
    html: `<section class="py-5" aria-label="faq-3">
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-lg-8 col-xl-7">
        <span class="text-muted">F.A.Q</span>
        <h2 class="display-5 fw-bold">Frequently Asked Questions</h2>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur quidem eius cum voluptatum quasi delectus.</p>
      </div>
    </div>
    <div class="row mt-4 justify-content-center">
      <div class="col-md-5">
        <span class="text-muted">Lorem ipsum dolor</span>
        <h2 class="fw-bold">Have Any Questions?</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quidem eius cum voluptatum quasi delectus assumenda culpa.</p>
        <a class="btn btn-primary mt-1" href="/page/contact">Contact us</a>
      </div>
      <div class="col-md-7">
        <div class="accordion accordion-flush" id="faqAccordion2">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button aria-controls="collapseOne2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseOne2" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="collapseOne2">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button aria-controls="collapseTwo2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseTwo2" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="collapseTwo2">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button aria-controls="collapseThree2" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#collapseThree2" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="headingThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion2" id="collapseThree2">
              <div class="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  </div>
</section>`
});Vvveb.Sections.add("faq/faq-4", {
    name: "Faq 4",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/faq/faq-4-thumb.webp",
    html: `<section class="py-5" aria-label="faq-4">
  <div class="container">
    <div class="row justify-content-center text-center mb-5">
      <div class="col-lg-8 col-xl-7">
        <span class="text-muted">F.A.Q</span>
        <h2 class="display-5 fw-bold">Frequently Asked Questions</h2>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur quidem eius cum voluptatum quasi delectus.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="row g-3 g-md-4">
          <div class="col-lg-6">
            <h6 class="mb-3 mt-3 mt-md-0">Technical</h6>
            <div class="accordion accordion-flush" id="faq1-accordion accordion-flush">
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq1-headingOne">
                  <button aria-controls="faq1-collapseOne" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq1-collapseOne" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq1-headingOne" class="accordion accordion-collapse collapse" data-bs-parent="#faq1-accordion accordion-flush" id="faq1-collapseOne">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq1-headingTwo">
                  <button aria-controls="faq1-collapseTwo" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq1-collapseTwo" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq1-headingTwo" class="accordion accordion-collapse collapse" data-bs-parent="#faq1-accordion accordion-flush" id="faq1-collapseTwo">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq1-headingThree">
                  <button aria-controls="faq1-collapseThree" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq1-collapseThree" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq1-headingThree" class="accordion accordion-collapse collapse" data-bs-parent="#faq1-accordion accordion-flush" id="faq1-collapseThree">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq1-headingFour">
                  <button aria-controls="faq1-collapseFour" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq1-collapseFour" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq1-headingFour" class="accordion accordion-collapse collapse" data-bs-parent="#faq1-accordion accordion-flush" id="faq1-collapseFour">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h6 class="mb-3 mt-3 mt-md-0">Licensing</h6>
            <div class="accordion accordion-flush" id="faq2-accordion accordion-flush">
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq1-headingOne">
                  <button aria-controls="faq2-collapseOne" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq2-collapseOne" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq2-headingOne" class="accordion accordion-collapse collapse" data-bs-parent="#faq2-accordion accordion-flush" id="faq2-collapseOne">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq2-headingTwo">
                  <button aria-controls="faq2-collapseTwo" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq2-collapseTwo" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq2-headingTwo" class="accordion accordion-collapse collapse" data-bs-parent="#faq2-accordion accordion-flush" id="faq2-collapseTwo">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq2-headingThree">
                  <button aria-controls="faq2-collapseThree" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq2-collapseThree" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq2-headingThree" class="accordion accordion-collapse collapse" data-bs-parent="#faq2-accordion accordion-flush" id="faq2-collapseThree">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq2-headingFour">
                  <button aria-controls="faq2-collapseFour" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq2-collapseFour" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq2-headingFour" class="accordion accordion-collapse collapse" data-bs-parent="#faq2-accordion accordion-flush" id="faq2-collapseFour">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h6 class="mb-3 mt-3 mt-md-0">Support</h6>
            <div class="accordion accordion-flush" id="faq3-accordion accordion-flush">
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq3-headingOne">
                  <button aria-controls="faq3-collapseOne" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq3-collapseOne" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq3-headingOne" class="accordion accordion-collapse collapse" data-bs-parent="#faq3-accordion accordion-flush" id="faq3-collapseOne">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq3-headingTwo">
                  <button aria-controls="faq3-collapseTwo" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq3-collapseTwo" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq3-headingTwo" class="accordion accordion-collapse collapse" data-bs-parent="#faq3-accordion accordion-flush" id="faq3-collapseTwo">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq3-headingThree">
                  <button aria-controls="faq3-collapseThree" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq3-collapseThree" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq3-headingThree" class="accordion accordion-collapse collapse" data-bs-parent="#faq3-accordion accordion-flush" id="faq3-collapseThree">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq3-headingFour">
                  <button aria-controls="faq3-collapseFour" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq3-collapseFour" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq3-headingFour" class="accordion accordion-collapse collapse" data-bs-parent="#faq3-accordion accordion-flush" id="faq3-collapseFour">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h6 class="mb-3 mt-3 mt-md-0">Payments</h6>
            <div class="accordion accordion-flush" id="faq4-accordion accordion-flush">
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq4-headingOne">
                  <button aria-controls="faq4-collapseOne" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq4-collapseOne" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq4-headingOne" class="accordion accordion-collapse collapse" data-bs-parent="#faq4-accordion accordion-flush" id="faq4-collapseOne">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq4-headingTwo">
                  <button aria-controls="faq4-collapseTwo" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq4-collapseTwo" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq4-headingTwo" class="accordion accordion-collapse collapse" data-bs-parent="#faq4-accordion accordion-flush" id="faq4-collapseTwo">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq4-headingThree">
                  <button aria-controls="faq4-collapseThree" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq4-collapseThree" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq4-headingThree" class="accordion accordion-collapse collapse" data-bs-parent="#faq4-accordion accordion-flush" id="faq4-collapseThree">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
              <div class="accordion accordion-item">
                <h2 class="accordion accordion-header" id="faq4-headingFour">
                  <button aria-controls="faq4-collapseFour" aria-expanded="false" class="accordion accordion-button collapsed bg-light" data-bs-target="#faq4-collapseFour" data-bs-toggle="collapse" type="button">
                    <div class="text-muted me-3">
                    </div>Lorem ipsum dolor sit amet adipisicing ?
                  </button>
                </h2>
                <div aria-labelledby="faq4-headingFour" class="accordion accordion-collapse collapse" data-bs-parent="#faq4-accordion accordion-flush" id="faq4-collapseFour">
                  <div class="accordion accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro quidem qui recusandae animi eaque id atque, dolorum expedita magnam modi dolores corrupti. Laudantium cumque suscipit voluptas asperiores, et recusandae.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("faq/faq-5", {
    name: "Faq 5",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/faq/faq-5-thumb.webp",
    html: `<section class="py-5" aria-label="subscribe-5">
  <div class="container">
    <div class="row justify-content-center text-center mb-5">
      <div class="col-lg-8 col-xl-7">
        <span class="text-muted">F.A.Q</span>
        <h2 class="display-5 fw-bold">Frequently Asked Questions</h2>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur quidem eius cum voluptatum quasi delectus.</p>
      </div>
    </div>
    <div class="row justify-content-center pt-lg-3">
      <div class="col-md-3">
        <h2 class="mt-3 fw-bold">Payment</h2>
      </div>
      <div class="col-md-9">
        <div class="accordion accordion-flush" id="payment-accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="payment-headingOne">
              <button aria-controls="payment-collapseOne" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#payment-collapseOne" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="payment-headingOne" class="accordion-collapse collapse" data-bs-parent="#payment-accordion" id="payment-collapseOne">
              <div class="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="payment-headingTwo">
              <button aria-controls="payment-collapseTwo" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#payment-collapseTwo" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="payment-headingTwo" class="accordion-collapse collapse" data-bs-parent="#payment-accordion" id="payment-collapseTwo">
              <div class="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="payment-headingThree">
              <button aria-controls="payment-collapseThree" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#payment-collapseThree" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="payment-headingThree" class="accordion-collapse collapse" data-bs-parent="#payment-accordion" id="payment-collapseThree">
              <div class="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="payment-headingFour">
              <button aria-controls="payment-collapseFour" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#payment-collapseFour" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="payment-headingFour" class="accordion-collapse collapse" data-bs-parent="#payment-accordion" id="payment-collapseFour">
              <div class="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-md-3">
        <h2 class="mt-3 fw-bold">Shipping</h2>
      </div>
      <div class="col-md-9">
        <div class="accordion accordion-flush" id="Shipping-accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="Shipping-headingOne">
              <button aria-controls="Shipping-collapseOne" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#Shipping-collapseOne" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="Shipping-headingOne" class="accordion-collapse collapse" data-bs-parent="#Shipping-accordion" id="Shipping-collapseOne">
              <div class="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="Shipping-headingTwo">
              <button aria-controls="Shipping-collapseTwo" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#Shipping-collapseTwo" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="Shipping-headingTwo" class="accordion-collapse collapse" data-bs-parent="#Shipping-accordion" id="Shipping-collapseTwo">
              <div class="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="Shipping-headingThree">
              <button aria-controls="Shipping-collapseThree" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#Shipping-collapseThree" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="Shipping-headingThree" class="accordion-collapse collapse" data-bs-parent="#Shipping-accordion" id="Shipping-collapseThree">
              <div class="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="Shipping-headingFour">
              <button aria-controls="Shipping-collapseFour" aria-expanded="false" class="accordion-button collapsed" data-bs-target="#Shipping-collapseFour" data-bs-toggle="collapse" type="button">
                <div class="text-muted me-3">

                </div>Lorem ipsum dolor sit amet adipisicing ?
              </button>
            </h2>
            <div aria-labelledby="Shipping-headingFour" class="accordion-collapse collapse" data-bs-parent="#Shipping-accordion" id="Shipping-collapseFour">
              <div class="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos voluptatum at, quibusdam blanditiis saepe soluta laborum, repellendus nemo id porro dolor eveniet perspiciatis veritatis doloremque aliquam nam! Libero, nostrum!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .accordion a[aria-expanded="true"]:before {
    content: "\F374";
  }

  .accordion .card .card-header a[aria-expanded="false"]:before {
    content: "\F415";
  }
</style>`
});
	Vvveb.SectionsGroup["Faq"] = ["faq/faq-1","faq/faq-2","faq/faq-3","faq/faq-4","faq/faq-5"];
Vvveb.Sections.add("footer/footer-1", {
    name: "Footer 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/footer/footer-1-thumb.webp",
    html: `<footer class="footer-1" title="footer-1" data-v-save-global="index.html,.footer-1">
  <div class="container" data-v-component-menu="footer" data-v-slug="main-footer">

    <div class="row" data-v-menu-items>

      <div class="col-md">

        <div data-v-component-site>
          <img src="demo/img/logo-white.png" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
          <img src="demo/img/logo.png" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
        </div>

      </div>


      <div class="col-md" data-v-menu-item data-v-if="category.children > 0">
        <div class="h6" data-v-menu-item-name>Vvveb</div>
        <nav data-v-menu-item-recursive>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="https://themes.vvveb.com/" data-v-menu-item-url>
              <span data-v-menu-item-name>Themes</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="https://plugins.vvveb.com/" data-v-menu-item-url>
              <span data-v-menu-item-name>Plugins</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="content/index.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Blog</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="product/index.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Shop</span>
            </a>
          </div>
        </nav>
      </div>

      <div class="col-md" data-v-menu-item data-v-if="category.children > 0">
        <div class="h6" data-v-menu-item-name>Resources</div>
        <nav data-v-menu-item-recursive>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
              <span data-v-menu-item-name>User documentation</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
              <span data-v-menu-item-name>Developer documentation</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="pricing.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Pricing</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="services.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Services</span>
            </a>
          </div>
        </nav>
      </div>

      <div class="col-md" data-v-menu-item data-v-if="category.children > 0">
        <div class="h6" data-v-menu-item-name>Contact</div>
        <nav data-v-menu-item-recursive>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="" href="contact.html">Contact us</a>
            <a href="" href="portfolio.html">Portfolio</a>
            <a href="" href="about.html">About us</a>
            <a href="" href="user/return-form.html">Return form</a>
          </div>
        </nav>
      </div>

      <div class="col-md" data-v-menu-item data-v-if="category.children > 0">
        <div class="h6" data-v-menu-item-name>My account</div>
        <nav data-v-menu-item-recursive>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="" href="user/order-tracking.html">Order tracking</a>
            <a href="" href="user/wishlist.html">Wishlist</a>
            <a href="" href="user/orders.html">Orders</a>
            <a href="" href="cart/compare.html">Compare</a>
          </div>
        </nav>
      </div>



    </div>
    <!--
		<div class="row justify-content-end">
			<div class="col-md-3 text-muted text-small mt-5">
				&copy; <span data-v-year>2025</span> <span data-v-sitename>Vvveb</span>. Powered by <a href="https://vvveb.com" target="_blank">Vvveb</a>	
			</div>
		</div>
		-->

  </div>

  <div class="footer-copyright">
    <div class="container">
      <div class="d-flex flex-column flex-md-row">
        <div class="text-muted flex-grow-1">
          <a class="btn-link text-muted" href="/page/terms-conditions">Terms and conditions</a> |
          <a class="btn-link text-muted" href="/page/privacy-policy">Privacy Policy</a>
        </div>
        <div class="text-muted">
          &copy; <span data-v-year>2025</span>
          <span data-v-global-site.description.title>Vvveb</span>. <span>Powered by</span>
          <a href="https://vvveb.com" class="btn-link text-muted" target="_blank">Vvveb</a>
        </div>
      </div>
    </div>
  </div>

</footer>`
});Vvveb.Sections.add("footer/footer-2", {
    name: "Footer 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/footer/footer-2-thumb.webp",
    html: `<footer class="bg-white" title="footer-2" data-v-save-global="index.html,.footer-2">

  <div class="container py-5">
    <div class="row py-4">
      <div class="col-md">
        <img src="demo/img/logo.png" alt="Site logo" loading="lazy" alt="" width="180" class="mb-3">
        <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        <ul class="list-inline mt-4">
          <li class="list-inline-item">
            <a target="_blank" title="twitter">
              <i class="la la-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a target="_blank" title="facebook">
              <i class="la la-facebook"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a target="_blank" title="instagram">
              <i class="la la-instagram"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a target="_blank" title="pinterest">
              <i class="la la-pinterest"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a target="_blank" title="vimeo">
              <i class="la la-vimeo"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md">
        <h6 class="text-uppercase font-weight-bold mb-4">Shop</h6>
        <ul class="list-unstyled mb-0">
          <li class="mb-2">
            <a class="text-muted">For Women</a>
          </li>
          <li class="mb-2">
            <a class="text-muted">For Men</a>
          </li>
          <li class="mb-2">
            <a class="text-muted">Stores</a>
          </li>
          <li class="mb-2">
            <a class="text-muted">Our Blog</a>
          </li>
        </ul>
      </div>
      <div class="col-md">
        <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
        <ul class="list-unstyled mb-0">
          <li class="mb-2">
            <a class="text-muted">Login</a>
          </li>
          <li class="mb-2">
            <a class="text-muted">Register</a>
          </li>
          <li class="mb-2">
            <a class="text-muted">Wishlist</a>
          </li>
          <li class="mb-2">
            <a class="text-muted">Our Products</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-6 mb-lg-0">
        <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
        <p class="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
        <div class="p-1 rounded border">
          <div class="input-group">
            <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0">
            <div class="input-group-append">
              <button id="button-addon1" type="submit" class="btn btn-link">
                <i class="la la-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</footer>`
});Vvveb.Sections.add("footer/footer-3", {
    name: "Footer 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/footer/footer-3-thumb.webp",
    html: `<footer class="footer-3 bg-dark text-white" title="footer-3" data-v-save-global="index.html,.footer-3" data-bs-theme="dark">
  <div class="container" data-v-component-menu="footer" data-v-slug="main-footer">

    <div class="row" data-v-menu-items>


      <div class="col-md">

        <div data-v-component-site>
          <img src="demo/img/logo-white.png" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
          <img src="demo/img/logo.png" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
        </div>

      </div>


      <div class="col-md" data-v-menu-item data-v-if="category.children > 0">
        <div class="h6" data-v-menu-item-name>Vvveb</div>
        <nav data-v-menu-item-recursive>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="https://themes.vvveb.com/" data-v-menu-item-url>
              <span data-v-menu-item-name>Themes</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="https://plugins.vvveb.com/" data-v-menu-item-url>
              <span data-v-menu-item-name>Plugins</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="content/index.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Blog</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="product/index.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Shop</span>
            </a>
          </div>
        </nav>
      </div>

      <div class="col-md" data-v-menu-item data-v-if="category.children > 0">
        <div class="h6" data-v-menu-item-name>Resources</div>
        <nav data-v-menu-item-recursive>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
              <span data-v-menu-item-name>User documentation</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
              <span data-v-menu-item-name>Developer documentation</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="pricing.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Pricing</span>
            </a>
          </div>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="services.html" data-v-menu-item-url>
              <span data-v-menu-item-name>Services</span>
            </a>
          </div>
        </nav>
      </div>

      <div class="col-md" data-v-menu-item data-v-if="category.children > 0">
        <div class="h6" data-v-menu-item-name>Contact</div>
        <nav data-v-menu-item-recursive>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="" href="contact.html">Contact us</a>
            <a href="" href="portfolio.html">Portfolio</a>
            <a href="" href="about.html">About us</a>
            <a href="" href="user/return-form.html">Return form</a>
          </div>
        </nav>
      </div>

      <div class="col-md" data-v-menu-item data-v-if="category.children > 0">
        <div class="h6" data-v-menu-item-name>My account</div>
        <nav data-v-menu-item-recursive>
          <div data-v-menu-item data-v-if="category.children == 0">
            <a href="" href="user/order-tracking.html">Order tracking</a>
            <a href="" href="user/wishlist.html">Wishlist</a>
            <a href="" href="user/orders.html">Orders</a>
            <a href="" href="cart/compare.html">Compare</a>
          </div>
        </nav>
      </div>



    </div>
    <!--
		<div class="row justify-content-end">
			<div class="col-md-3 text-muted text-small mt-5">
				&copy; <span data-v-year>2025</span> <span data-v-sitename>Vvveb</span>. Powered by <a href="https://vvveb.com" target="_blank">Vvveb</a>	
			</div>
		</div>
		-->

  </div>

  <div class="footer-copyright">
    <div class="container">
      <div class="d-flex flex-column flex-md-row">
        <div class="text-muted flex-grow-1">
          <a class="btn-link text-muted" href="/page/terms-conditions">Terms and conditions</a> |
          <a class="btn-link text-muted" href="/page/privacy-policy">Privacy Policy</a>
        </div>
        <div class="text-muted">
          &copy; <span data-v-year>2025</span>
          <span data-v-global-site.description.title>Vvveb</span>. <span>Powered by</span>
          <a href="https://vvveb.com" class="btn-link text-muted" target="_blank">Vvveb</a>
        </div>
      </div>
    </div>
  </div>

</footer>`
});
	Vvveb.SectionsGroup["Footer"] = ["footer/footer-1","footer/footer-2","footer/footer-3"];
Vvveb.Sections.add("how-it-works/how-it-works-1", {
    name: "How it works 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/how-it-works/how-it-works-1-thumb.webp",
    html: `<section class="py-5" aria-label="how-it-works-1">
  <div class="container">
    <div class="row justify-content-center text-center mb-4">
      <div class="col-lg-8 col-xxl-7">
        <span class="text-muted">Steps</span>
        <h2 class="display-5 fw-bold">How it Works</h2>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur quidem eius cum voluptatum quasi delectus.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="text-center position-relative">
          <div class="mx-auto bg-primary border rounded-circle d-flex align-items-center justify-content-center" style="width:120px;height:120px;">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="48" color="#fff" fill="#999" viewBox="0 0 512 512">
              <circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256" />
              <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
            </svg>
          </div>
          <h4 class="mt-3 fs-5">Step 1</h4>
          <p class="lead text-muted mt-4 fs-5 px-lg-3 mb-5 mb-lg-0">Lorem ipsum dolor sit ame consectetur.</p>
          <div class="position-absolute d-none d-lg-block" style="top:50px; right:-25px">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="32" stroke="#000" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100" />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center position-relative">
          <div class="mx-auto bg-primary border rounded-circle d-flex align-items-center justify-content-center" style="width: 120px;height: 120px;">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="48" color="#fff" fill="#999" viewBox="0 0 512 512">
              <path d="M320 96H88a40 40 0 00-40 40v240a40 40 0 0040 40h334.73a40 40 0 0040-40V239" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 87-65.67" />
              <circle cx="431.95" cy="128.05" r="47.95" />
              <path d="M432 192a63.95 63.95 0 1163.95-63.95A64 64 0 01432 192zm0-95.9a32 32 0 1031.95 32 32 32 0 00-31.95-32z" />
            </svg>
          </div>
          <h4 class="mt-3 fs-5">Step 2</h4>
          <p class="lead text-muted mt-4 fs-5 px-lg-3 mb-5 mb-lg-0">Lorem ipsum dolor sit ame consectetur.</p>
          <div class="d-none d-lg-block position-absolute" style="top:50px; right:-25px">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="32" stroke="#000" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100" />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center position-relative">
          <div class="mx-auto bg-primary border rounded-circle d-flex align-items-center justify-content-center" style="width: 120px;height: 120px;">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="48" color="#fff" fill="#999" viewBox="0 0 512 512">
              <rect x="336" y="336" width="80" height="80" rx="8" ry="8" />
              <rect x="272" y="272" width="48" height="64" rx="8" ry="8" />
              <rect x="416" y="416" width="48" height="64" rx="8" ry="8" />
              <rect x="432" y="272" width="48" height="48" rx="8" ry="8" />
              <rect x="272" y="432" width="48" height="48" rx="8" ry="8" />
              <rect x="336" y="96" width="80" height="80" rx="8" ry="8" />
              <rect x="288" y="48" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <rect x="96" y="96" width="80" height="80" rx="8" ry="8" />
              <rect x="48" y="48" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <rect x="96" y="336" width="80" height="80" rx="8" ry="8" />
              <rect x="48" y="288" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
            </svg>
          </div>
          <h4 class="mt-3 fs-5">Step 3</h4>
          <p class="lead text-muted mt-4 fs-5 px-lg-3 mb-5 mb-lg-0">Lorem ipsum dolor sit ame consectetur.</p>
          <div class="d-none d-lg-block position-absolute" style="top:50px; right:-25px">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="32" stroke="#000" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100" />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center position-relative">
          <div class="mx-auto bg-primary border rounded-circle d-flex align-items-center justify-content-center" style="width: 120px;height: 120px;">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="48" color="#fff" fill="#999" viewBox="0 0 512 512">
              <rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M48 192h416M128 300h48v20h-48z" />
            </svg>
          </div>
          <h4 class="mt-3 fs-5">Step 4</h4>
          <p class="lead text-muted mt-4 fs-5 px-lg-3 mb-5 mb-lg-0">Lorem ipsum dolor sit ame consectetur.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("how-it-works/how-it-works-2", {
    name: "How it works 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/how-it-works/how-it-works-2-thumb.webp",
    html: `<section class="py-5" aria-label="how-it-works-2">
  <div class="container">
    <div class="row justify-content-center text-center mb-4">
      <div class="col-lg-8 col-xxl-7">
        <span class="text-muted">Steps</span>
        <h2 class="display-5 fw-bold">How it Works</h2>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur quidem eius cum voluptatum quasi delectus.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="text-center position-relative">
          <div class="mx-auto border border-2 border rounded-circle d-flex align-items-center justify-content-center" style="width:120px;height:120px;">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="48" color="#333" fill="#999" viewBox="0 0 512 512">
              <circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256" />
              <path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
            </svg>
          </div>
          <h4 class="mt-3 fs-5">Step 1</h4>
          <p class="lead text-muted mt-4 fs-5 px-lg-3 mb-5 mb-lg-0">Lorem ipsum dolor sit ame consectetur.</p>
          <div class="position-absolute d-none d-lg-block" style="top:50px; right:-25px">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="32" stroke="#000" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100" />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center position-relative">
          <div class="mx-auto border border-2 border rounded-circle d-flex align-items-center justify-content-center" style="width: 120px;height: 120px;">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="48" color="#333" fill="#999" viewBox="0 0 512 512">
              <path d="M320 96H88a40 40 0 00-40 40v240a40 40 0 0040 40h334.73a40 40 0 0040-40V239" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 87-65.67" />
              <circle cx="431.95" cy="128.05" r="47.95" />
              <path d="M432 192a63.95 63.95 0 1163.95-63.95A64 64 0 01432 192zm0-95.9a32 32 0 1031.95 32 32 32 0 00-31.95-32z" />
            </svg>
          </div>
          <h4 class="mt-3 fs-5">Step 2</h4>
          <p class="lead text-muted mt-4 fs-5 px-lg-3 mb-5 mb-lg-0">Lorem ipsum dolor sit ame consectetur.</p>
          <div class="d-none d-lg-block position-absolute" style="top:50px; right:-25px">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="32" stroke="#000" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100" />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center position-relative">
          <div class="mx-auto border border-2 border rounded-circle d-flex align-items-center justify-content-center" style="width: 120px;height: 120px;">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="48" color="#333" fill="#999" viewBox="0 0 512 512">
              <rect x="336" y="336" width="80" height="80" rx="8" ry="8" />
              <rect x="272" y="272" width="48" height="64" rx="8" ry="8" />
              <rect x="416" y="416" width="48" height="64" rx="8" ry="8" />
              <rect x="432" y="272" width="48" height="48" rx="8" ry="8" />
              <rect x="272" y="432" width="48" height="48" rx="8" ry="8" />
              <rect x="336" y="96" width="80" height="80" rx="8" ry="8" />
              <rect x="288" y="48" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <rect x="96" y="96" width="80" height="80" rx="8" ry="8" />
              <rect x="48" y="48" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <rect x="96" y="336" width="80" height="80" rx="8" ry="8" />
              <rect x="48" y="288" width="176" height="176" rx="16" ry="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
            </svg>
          </div>
          <h4 class="mt-3 fs-5">Step 3</h4>
          <p class="lead text-muted mt-4 fs-5 px-lg-3 mb-5 mb-lg-0">Lorem ipsum dolor sit ame consectetur.</p>
          <div class="d-none d-lg-block position-absolute" style="top:50px; right:-25px">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="32" stroke="#000" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100" />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="text-center position-relative">
          <div class="mx-auto border border-2 border rounded-circle d-flex align-items-center justify-content-center" style="width: 120px;height: 120px;">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="48" color="#333" fill="#999" viewBox="0 0 512 512">
              <rect x="48" y="96" width="416" height="320" rx="56" ry="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
              <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="60" d="M48 192h416M128 300h48v20h-48z" />
            </svg>
          </div>
          <h4 class="mt-3 fs-5">Step 4</h4>
          <p class="lead text-muted mt-4 fs-5 px-lg-3 mb-5 mb-lg-0">Lorem ipsum dolor sit ame consectetur.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("how-it-works/how-it-works-3", {
    name: "How it works 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/how-it-works/how-it-works-3-thumb.webp",
    html: `<section class="py-5" aria-label="how-it-works-3">
  <div class="container">
    <div class="row text-center mb-4">
      <div class="col-12 col-lg-10 col-xl-8 mx-auto text-center">
        <p class="text-muted mb-0 fw-light">Steps</p>
        <h2>How It Works</h2>
        <p class="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta harum ipsum venenatis metus sem veniam eveniet aperiam suscipit.</p>
      </div>
    </div>
    <div class="row justify-content-center pt-5">
      <div class="col-lg-9">
        <div class="row">
          <div class="col-lg-4">
            <div class="card rounded-0 text-center p-3 px-5 mb-5 mb-lg-0">
              <div class="d-flex rounded-circle mx-auto align-items-center justify-content-center text-white fs-3 fw-bold bg-primary border border-white border-4" style="width: 4rem; height:4rem; margin-top:-3.5rem;">
                1
              </div>
              <h5 class="mt-3 mb-4">Step 1</h5>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card rounded-0 text-center p-3 px-5 mb-5 mb-lg-0">
              <div class="d-flex rounded-circle mx-auto align-items-center justify-content-center text-white fs-3 fw-bold bg-primary border border-white border-4" style="width: 4rem; height:4rem; margin-top: -3.5rem;">
                2
              </div>
              <h5 class="mt-3 mb-4">Step 2</h5>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card rounded-0 text-center p-3 px-5 mb-5 mb-lg-0">
              <div class="d-flex rounded-circle mx-auto align-items-center justify-content-center text-white fs-3 fw-bold bg-primary border border-white border-4" style="width: 4rem; height:4rem; margin-top: -3.5rem;">
                3
              </div>
              <h5 class="mt-3 mb-4">Step 3</h5>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("how-it-works/how-it-works-4", {
    name: "How it works 4",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/how-it-works/how-it-works-4-thumb.webp",
    html: `<section class="py-5" aria-label="how-it-works-4">
  <div class="container">
    <div class="row text-center mb-4">
      <div class="col-12 col-lg-10 col-xl-8 mx-auto text-center">
        <p class="text-muted mb-0 fw-light">Steps</p>
        <h2>How It Works</h2>
        <p class="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta harum ipsum venenatis metus sem veniam eveniet aperiam suscipit.</p>
      </div>
    </div>
    <div class="row justify-content-center pt-5">
      <div class="col-lg-9">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card rounded-0 text-center p-3 px-5 mb-5">
              <div class="d-flex rounded-circle mx-auto align-items-center justify-content-center text-white fs-3 fw-bold bg-primary border border-white border-4" style="width: 4rem; height:4rem; margin-top:-3.5rem;">
                1
              </div>
              <h5 class="mt-3 mb-4">Step 1</h5>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div class="card rounded-0 text-center p-3 px-5 mb-5">
              <div class="d-flex rounded-circle mx-auto align-items-center justify-content-center text-white fs-3 fw-bold bg-primary border border-white border-4" style="width: 4rem; height:4rem; margin-top: -3.5rem;">
                2
              </div>
              <h5 class="mt-3 mb-4">Step 2</h5>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div class="card rounded-0 text-center p-3 px-5 mb-5">
              <div class="d-flex rounded-circle mx-auto align-items-center justify-content-center text-white fs-3 fw-bold bg-primary border border-white border-4" style="width: 4rem; height:4rem; margin-top: -3.5rem;">
                3
              </div>
              <h5 class="mt-3 mb-4">Step 3</h5>
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("how-it-works/how-it-works-5", {
    name: "How it works 5",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/how-it-works/how-it-works-5-thumb.webp",
    html: `<section class="py-5" aria-label="how-it-works-5">
  <div class="container">
    <div class="row justify-content-center text-center mb-4">
      <div class="col-lg-8 col-xxl-7">
        <span class="text-muted">Steps</span>
        <h2 class="display-5 fw-bold">How it Works</h2>
        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur quidem eius cum voluptatum quasi delectus.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="row">
          <div class="col-auto text-center">
            <div class="d-flex rounded-circle align-items-center justify-content-center bg-primary text-white fs-3 fw-bold border border-white border-4 me-1" style="width: 4rem; height:4rem;">
              1
            </div>
            <div class="text-muted fw-light mt-1">
              Step
            </div>
          </div>
          <div class="col">
            <div class="card rounded-0 py-4 px-5 mb-5">
              <h5>Headline</h5>
              <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-auto text-center">
            <div class="d-flex rounded-circle align-items-center justify-content-center bg-primary text-white fs-3 fw-bold border border-white border-4 me-1" style="width: 4rem; height:4rem;">
              2
            </div>
            <div class="text-muted fw-light mt-1">
              Step
            </div>
          </div>
          <div class="col">
            <div class="card rounded-0 py-4 px-5 mb-5">
              <h5>Headline</h5>
              <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-auto text-center">
            <div class="d-flex rounded-circle align-items-center justify-content-center bg-primary text-white fs-3 fw-bold border border-white border-4 me-1" style="width: 4rem; height:4rem;">
              3
            </div>
            <div class="text-muted fw-light mt-1">
              Step
            </div>
          </div>
          <div class="col">
            <div class="card rounded-0 py-4 px-5 mb-5">
              <h5>Headline</h5>
              <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["How it works"] = ["how-it-works/how-it-works-1","how-it-works/how-it-works-2","how-it-works/how-it-works-3","how-it-works/how-it-works-4","how-it-works/how-it-works-5"];
Vvveb.Sections.add("navigation/navigation-1", {
    name: "Navigation 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/navigation/navigation-1-thumb.webp",
    html: `<nav class="navigation-1 clearfix" data-v-save-global="blank.html,.navigation-1">

  <div id="top" class="top-nav clearfix">
    <div class="container">
      <div class="d-flex justify-content-between  flex-md-row d-flex flex-column flex-md-row">
        <div class="nav">
          <ul class="list-inline" data-v-component-site>
            <li class="list-inline-item" data-v-if="site.description.phone-number">
              <a href="tel:5511112377" class="p-2 p-md-0" title="Phone" data-v-site-description-phone-number>
                <i class="la la-phone"></i>
                <span class=" text-muted" data-v-site-description-phone-number>+55 (111) 123 777</span>
              </a>
            </li>
            <li class="list-inline-item" data-v-if="site.contact-email">
              <a href="mailto:contact@mysite.com" class="p-2 p-md-0" title="Email" data-v-site-contact-email>
                <i class="la la-envelope"></i>
                <span class=" text-muted" data-v-site-contact-email>contact@mysite.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="nav">
          <ul class="list-inline">
            <!--
					<li class="list-inline-item"><a id="wishlist-total" title="Wish List (0)"><i class="la la-heart"></i> <span class="">Favorites</span></a></li>
					<li class="list-inline-item"><a title="Checkout"><i class="la la-share"></i> <span class="">Checkout</span></a></li>
					<li class="list-inline-item">
						<div class="dropdown">
							<a href="" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"><i class="la la-user"></i> <span class="">My Account</span></i></a>
							<ul class="dropdown-menu dropdown-menu-right">
								<li><a class="dropdown-item">Register</a></li>
								<li><a class="dropdown-item">Login</a></li>
							</ul>
						</div>
					</li>
					-->
            <li class="list-inline-item">
              <div data-v-component-currency>
                <form method="post" enctype="multipart/form-data" id="form-currency">

                  <a class="dropdown-toggle p-2 p-md-0" data-bs-toggle="dropdown" role="button" title="Currency " aria-expanded="false">
                    <!-- <i class="la la-dollar-sign me-1"></i> -->
                    <span class="" data-v-currency-info-name>USD</span>
                  </a>


                  <div class="dropdown-menu dropdown-menu-end">

                    <div data-v-currency>
                      <button class="dropdown-item" type="submit" value="EUR" name="currency" data-v-currency-code>
                        <span data-v-currency-sign_start>€</span>
                        <span data-v-currency-sign_end>€</span>
                        <span class="ms-1" data-v-currency-name>Euro</span>
                      </button>
                    </div>

                    <div data-v-currency>
                      <button class="dropdown-item" type="submit" value="GBP" name="currency" data-v-currency-code>
                        <span data-v-currency-sign_start>£</span>
                        <span data-v-currency-sign_end>£</span>
                        <span class="ms-1" data-v-currency-name>Pound Sterling</span>
                      </button>
                    </div>

                    <div data-v-currency>
                      <button class="dropdown-item" type="submit" value="USD" name="currency" data-v-currency-code>
                        <span data-v-currency-sign_start>$</span>
                        <span data-v-currency-sign_end>$</span>
                        <span class="ms-1" data-v-currency-name>US Dollar</span>
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </li>
            <li class="list-inline-item">
              <div data-v-component-language>
                <form method="post" enctype="multipart/form-data" id="form-language">

                  <a class="dropdown-toggle p-2 p-md-0" data-bs-toggle="dropdown" role="button" title="Language" aria-expanded="false">
                    <!-- <i class="la la-flag me-1"></i> -->
                    <!-- 
									<img src="" data-v-language-info-img>
									-->
                    <span class="" data-v-language-info-name>English</span>
                  </a>


                  <div class="dropdown-menu dropdown-menu-end">

                    <div data-v-language>
                      <button class="dropdown-item" type="submit" value="eng" name="language" data-v-language-code>
                        <!-- <i class="la la-flag la-lg me-2"></i> -->
                        <img src="" loading="lazy" class="me-1" data-v-language-img>

                        <!-- <a href="" data-v-language-url> -->
                        <span data-v-language-name>English</span>
                        <!-- </a> -->
                      </button>
                    </div>

                    <div data-v-language>
                      <button class="dropdown-item" type="submit" value="ro" name="language" data-v-language-code>
                        <!-- <i class="la la-flag la-lg me-2"></i> -->
                        <img src="" loading="lazy" class="me-1" data-v-language-img>
                        <!-- <a href="" data-v-language-url>  -->
                        <span data-v-language-name>Romanian</span>
                        <!-- </a>  -->
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </li>
            <li class="list-inline-item">

              <a id="color-theme-switch" class="p-2 p-md-0" role="button" title="Switch sidebar color theme">
                <i class="la la-sun la-lg"></i>
              </a>

            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="navbar navbar-expand-md">

    <div class="container">
      <div data-v-component-site>
        <!-- <a class="navbar-brand" href="/" data-url data-v-url-params='{"host":"www.*.*"}'><span class="visually-hidden">Logo</span> -->
        <a class="navbar-brand" href="/" data-v-site-url'>
          <span class="visually-hidden">Logo</span>
          <img src="demo/img/logo.png" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
          <img src="demo/img/logo.png" alt="Site logo sticky" loading="lazy" class="logo-sticky" data-v-site-logo-sticky>
          <img src="demo/img/logo-white.png" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
          <img src="demo/img/logo-white.png" alt="Site logo dark sticky" loading="lazy" class="logo-default-dark-sticky" data-v-site-logo-dark-sticky>
        </a>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <nav class="navbar" data-navbar data-v-component-menu="header" data-v-slug="main-menu">

        <div class="navbar-brand logo" data-v-component-site>
          <!-- <a class="navbar-brand" href="/" data-url data-v-url-params='{"host":"www.*.*"}'><span class="visually-hidden">Logo</span> -->
          <a class="navbar-brand h4 mb-0 text-decoration-none" href="/" data-v-site-url>
            <span class="visually-hidden">Logo</span>
            <img src="img/logo.png" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
            <img src="img/logo.png" alt="Site logo sticky" loading="lazy" class="logo-sticky" data-v-site-logo-sticky>
            <img src="img/logo-white.png" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
            <img src="img/logo-white.png" alt="Site logo dark sticky" loading="lazy" class="logo-default-dark-sticky" data-v-site-logo-dark-sticky>
          </a>
        </div>

        <ul class="navbar-list m-0" data-v-menu-items>
          <li class="nav-item dropdown position-static" data-v-menu-item data-v-class-if-has-dropdown="category.children &gt; 0" data-v-class-if-position-static="category.has-text">

            <a class="navbar-link dropdown-toggle" data-v-class-if-dropdown-toggle="category.children &gt; 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url>
              <span data-v-menu-item-name data-v-if-not="category.type = 'text' &amp;&amp; category.name"></span>
              <span data-v-if="category.content" data-v-menu-item-content>
                <p>
                  <img src="/media/vvveb.svg" height="24" alt="" class="me-2">Mega menu
                </p>
              </span>
            </a>

            <div class="dropdown-menu" data-v-menu-item-recursive>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" data-v-class-if-active="category.active &amp;&amp; category.type != 'text'" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'"></span>
                  <span data-v-if="category.content" data-v-menu-item-content>
                    <div class="row">
                      <div class="col-6 align-self-center">
                        <img src="img/demo/video-1.webp" alt="Post" width="250" loading="lazy" class="rounded img-fluid">
                      </div>
                      <div class="col-6">
                        <h4>Features</h4>
                        <p class="text-muted">Just a few mentions, but there is more</p>
                        <ul class="list-unstyled">
                          <li class="text-primary">Page builder</li>
                          <li class="text-primary">Mega menu</li>
                          <li class="text-primary">Multi language</li>
                          <li class="text-primary">Advanced SEO</li>
                          <li class="text-primary">Ecommerce</li>
                        </ul>
                      </div>
                    </div>
                  </span>
                </a>
              </div>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-class-if-active="category.active" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
                  <span data-v-menu-item-content></span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown" data-v-menu-item>
            <a class="navbar-link dropdown-toggle" href="https://blog.vvveb.com" data-v-menu-item-url>
              <span data-v-menu-item-name>Blog</span>
            </a>

            <div class="dropdown-menu" data-v-menu-item-recursive>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'">User Documentation</span>
                  <span data-v-menu-item-content></span>
                </a>
              </div>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
                  <span data-v-menu-item-content></span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="navbar-link" href="https://www.vvveb.com/page/contact" data-v-menu-item-url>
              <span data-v-menu-item-name>Contact</span>
            </a>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="navbar-link" href="https://www.vvveb.com" data-v-menu-item-url>
              <span data-v-menu-item-name>About us</span>
            </a>
          </li>
        </ul>

        <a href="/page/contact" class="btn btn-primary">Contact</a>

        <button class="nav-toggle-btn">
          <span class="line one"></span>
          <span class="line two"></span>
          <span class="line three"></span>
        </button>

      </nav>

    </div>
  </div>
</nav>`
});Vvveb.Sections.add("navigation/navigation-2", {
    name: "Navigation 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/navigation/navigation-2-thumb.webp",
    html: `<nav class="navigation-2 clearfix fixed-top transparent" title="navigation-2" data-v-save-global="index.html,.navigation-2">

  <div class="container">

    <div class="navbar navbar-expand-md navbar-dark">
      <div data-v-component-site>
        <!-- <a class="navbar-brand" href="/" data-url data-v-url-params='{"host":"www.*.*"}'><span class="visually-hidden">Logo</span> -->
        <a class="navbar-brand" href="/" data-v-site-url'>
          <span class="visually-hidden">Logo</span>
          <img src="demo/img/logo.png" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
          <img src="demo/img/logo.png" alt="Site logo sticky" loading="lazy" class="logo-sticky" data-v-site-logo-sticky>
          <img src="demo/img/logo-white.png" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
          <img src="demo/img/logo-white.png" alt="Site logo dark sticky" loading="lazy" class="logo-default-dark-sticky" data-v-site-logo-dark-sticky>
        </a>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <nav class="navbar" data-navbar data-v-component-menu="header" data-v-slug="main-menu">

        <div class="navbar-brand logo" data-v-component-site>
          <!-- <a class="navbar-brand" href="/" data-url data-v-url-params='{"host":"www.*.*"}'><span class="visually-hidden">Logo</span> -->
          <a class="navbar-brand h4 mb-0 text-decoration-none" href="/" data-v-site-url>
            <span class="visually-hidden">Logo</span>
            <img src="img/logo.png" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
            <img src="img/logo.png" alt="Site logo sticky" loading="lazy" class="logo-sticky" data-v-site-logo-sticky>
            <img src="img/logo-white.png" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
            <img src="img/logo-white.png" alt="Site logo dark sticky" loading="lazy" class="logo-default-dark-sticky" data-v-site-logo-dark-sticky>
          </a>
        </div>

        <ul class="navbar-list m-0" data-v-menu-items>
          <li class="nav-item dropdown position-static" data-v-menu-item data-v-class-if-has-dropdown="category.children &gt; 0" data-v-class-if-position-static="category.has-text">

            <a class="navbar-link dropdown-toggle" data-v-class-if-dropdown-toggle="category.children &gt; 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url>
              <span data-v-menu-item-name data-v-if-not="category.type = 'text' &amp;&amp; category.name"></span>
              <span data-v-if="category.content" data-v-menu-item-content>
                <p>
                  <img src="/media/vvveb.svg" height="24" alt="" class="me-2">Mega menu
                </p>
              </span>
            </a>

            <div class="dropdown-menu" data-v-menu-item-recursive>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" data-v-class-if-active="category.active &amp;&amp; category.type != 'text'" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'"></span>
                  <span data-v-if="category.content" data-v-menu-item-content>
                    <div class="row">
                      <div class="col-6 align-self-center">
                        <img src="img/demo/video-1.webp" alt="Post" width="250" loading="lazy" class="rounded img-fluid">
                      </div>
                      <div class="col-6">
                        <h4>Features</h4>
                        <p class="text-muted">Just a few mentions, but there is more</p>
                        <ul class="list-unstyled">
                          <li class="text-primary">Page builder</li>
                          <li class="text-primary">Mega menu</li>
                          <li class="text-primary">Multi language</li>
                          <li class="text-primary">Advanced SEO</li>
                          <li class="text-primary">Ecommerce</li>
                        </ul>
                      </div>
                    </div>
                  </span>
                </a>
              </div>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-class-if-active="category.active" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
                  <span data-v-menu-item-content></span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown" data-v-menu-item>
            <a class="navbar-link dropdown-toggle" href="https://blog.vvveb.com" data-v-menu-item-url>
              <span data-v-menu-item-name>Blog</span>
            </a>

            <div class="dropdown-menu" data-v-menu-item-recursive>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'">User Documentation</span>
                  <span data-v-menu-item-content></span>
                </a>
              </div>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
                  <span data-v-menu-item-content></span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="navbar-link" href="https://www.vvveb.com/page/contact" data-v-menu-item-url>
              <span data-v-menu-item-name>Contact</span>
            </a>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="navbar-link" href="https://www.vvveb.com" data-v-menu-item-url>
              <span data-v-menu-item-name>About us</span>
            </a>
          </li>
        </ul>

        <a href="/page/contact" class="btn btn-primary">Contact</a>

        <button class="nav-toggle-btn">
          <span class="line one"></span>
          <span class="line two"></span>
          <span class="line three"></span>
        </button>

      </nav>
    </div>


  </div>

</nav>`
});Vvveb.Sections.add("navigation/navigation-3", {
    name: "Navigation 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/navigation/navigation-3-thumb.webp",
    html: `<nav class="navigation-3 clearfix fixed-top transparent" title="navigation-3" data-v-save-global="index.html,.navigation-3">

  <div id="top" class="top-nav clearfix" data-bs-theme="dark">
    <div class="container">
      <div class="d-flex justify-content-between  flex-md-row d-flex flex-column flex-md-row">
        <div class="nav">
          <ul class="list-inline" data-v-component-site>
            <li class="list-inline-item" data-v-if="site.description.phone-number">
              <a href="tel:5511112377" class="p-2 p-md-0" title="Phone" data-v-site-description-phone-number>
                <i class="la la-phone"></i>
                <span class=" text-muted" data-v-site-description-phone-number>+55 (111) 123 777</span>
              </a>
            </li>
            <li class="list-inline-item" class="p-2 p-md-0" data-v-if="site.contact-email">
              <a href="mailto:contact@mysite.com" title="Email" data-v-site-contact-email>
                <i class="la la-envelope"></i>
                <span class=" text-muted" data-v-site-contact-email>contact@mysite.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="nav">
          <ul class="list-inline">
            <!--
					<li class="list-inline-item"><a id="wishlist-total" title="Wish List (0)"><i class="la la-heart"></i> <span class="">Favorites</span></a></li>
					<li class="list-inline-item"><a title="Checkout"><i class="la la-share"></i> <span class="">Checkout</span></a></li>
					<li class="list-inline-item">
						<div class="dropdown">
							<a href="" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"><i class="la la-user"></i> <span class="">My Account</span></i></a>
							<ul class="dropdown-menu dropdown-menu-right">
								<li><a class="dropdown-item">Register</a></li>
								<li><a class="dropdown-item">Login</a></li>
							</ul>
						</div>
					</li>
					-->
            <li class="list-inline-item">
              <div data-v-component-currency>
                <form method="post" enctype="multipart/form-data" id="form-currency">

                  <a class="dropdown-toggle p-2 p-md-0" data-bs-toggle="dropdown" role="button" title="Currency" aria-expanded="false">
                    <!-- <i class="la la-dollar-sign me-1"></i> -->
                    <span class="" data-v-currency-info-name>USD</span>
                  </a>


                  <div class="dropdown-menu dropdown-menu-end">

                    <div data-v-currency>
                      <button class="dropdown-item" type="submit" value="EUR" name="currency" data-v-currency-code>
                        <span data-v-currency-sign_start>€</span>
                        <span data-v-currency-sign_end>€</span>
                        <span class="ms-1" data-v-currency-name>Euro</span>
                      </button>
                    </div>

                    <div data-v-currency>
                      <button class="dropdown-item" type="submit" value="GBP" name="currency" data-v-currency-code>
                        <span data-v-currency-sign_start>£</span>
                        <span data-v-currency-sign_end>£</span>
                        <span class="ms-1" data-v-currency-name>Pound Sterling</span>
                      </button>
                    </div>

                    <div data-v-currency>
                      <button class="dropdown-item" type="submit" value="USD" name="currency" data-v-currency-code>
                        <span data-v-currency-sign_start>$</span>
                        <span data-v-currency-sign_end>$</span>
                        <span class="ms-1" data-v-currency-name>US Dollar</span>
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </li>
            <li class="list-inline-item">
              <div data-v-component-language>
                <form method="post" enctype="multipart/form-data" id="form-language">

                  <a class="dropdown-toggle p-2 p-md-0" data-bs-toggle="dropdown" role="button" title="Language" aria-expanded="false">
                    <!-- <i class="la la-flag me-1"></i> -->
                    <!-- 
									<img src="" data-v-language-info-img>
									-->
                    <span class="" data-v-language-info-name>English</span>
                  </a>


                  <div class="dropdown-menu dropdown-menu-end">

                    <div data-v-language>
                      <button class="dropdown-item" type="submit" value="eng" name="language" data-v-language-code>
                        <!-- <i class="la la-flag la-lg me-2"></i> -->
                        <img src="" loading="lazy" class="me-1" data-v-language-img>

                        <!-- <a href="" data-v-language-url> -->
                        <span data-v-language-name>English</span>
                        <!-- </a> -->
                      </button>
                    </div>

                    <div data-v-language>
                      <button class="dropdown-item" type="submit" value="ro" name="language" data-v-language-code>
                        <!-- <i class="la la-flag la-lg me-2"></i> -->
                        <img src="" loading="lazy" class="me-1" data-v-language-img>
                        <!-- <a href="" data-v-language-url>  -->
                        <span data-v-language-name>Romanian</span>
                        <!-- </a>  -->
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </li>
            <li class="list-inline-item">

              <a id="color-theme-switch" class="p-2 p-md-0" role="button" title="Switch sidebar color theme">
                <i class="la la-sun la-lg"></i>
              </a>

            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="navbar navbar-expand-md navbar-dark">

    <div class="container">

      <div data-v-component-site>
        <!-- <a class="navbar-brand" href="/" data-url data-v-url-params='{"host":"www.*.*"}'><span class="visually-hidden">Logo</span> -->
        <a class="navbar-brand" href="/" data-v-site-url'>
          <span class="visually-hidden">Logo</span>
          <img src="demo/img/logo.png" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
          <img src="demo/img/logo.png" alt="Site logo sticky" loading="lazy" class="logo-sticky" data-v-site-logo-sticky>
          <img src="demo/img/logo-white.png" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
          <img src="demo/img/logo-white.png" alt="Site logo dark sticky" loading="lazy" class="logo-default-dark-sticky" data-v-site-logo-dark-sticky>
        </a>
      </div>


      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <nav class="navbar" data-navbar data-v-component-menu="header" data-v-slug="main-menu">

        <div class="navbar-brand logo" data-v-component-site>
          <!-- <a class="navbar-brand" href="/" data-url data-v-url-params='{"host":"www.*.*"}'><span class="visually-hidden">Logo</span> -->
          <a class="navbar-brand h4 mb-0 text-decoration-none" href="/" data-v-site-url>
            <span class="visually-hidden">Logo</span>
            <img src="img/logo.png" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
            <img src="img/logo.png" alt="Site logo sticky" loading="lazy" class="logo-sticky" data-v-site-logo-sticky>
            <img src="img/logo-white.png" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
            <img src="img/logo-white.png" alt="Site logo dark sticky" loading="lazy" class="logo-default-dark-sticky" data-v-site-logo-dark-sticky>
          </a>
        </div>

        <ul class="navbar-list m-0" data-v-menu-items>
          <li class="nav-item dropdown position-static" data-v-menu-item data-v-class-if-has-dropdown="category.children &gt; 0" data-v-class-if-position-static="category.has-text">

            <a class="navbar-link dropdown-toggle" data-v-class-if-dropdown-toggle="category.children &gt; 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url>
              <span data-v-menu-item-name data-v-if-not="category.type = 'text' &amp;&amp; category.name"></span>
              <span data-v-if="category.content" data-v-menu-item-content>
                <p>
                  <img src="/media/vvveb.svg" height="24" alt="" class="me-2">Mega menu
                </p>
              </span>
            </a>

            <div class="dropdown-menu" data-v-menu-item-recursive>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" data-v-class-if-active="category.active &amp;&amp; category.type != 'text'" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'"></span>
                  <span data-v-if="category.content" data-v-menu-item-content>
                    <div class="row">
                      <div class="col-6 align-self-center">
                        <img src="img/demo/video-1.webp" alt="Post" width="250" loading="lazy" class="rounded img-fluid">
                      </div>
                      <div class="col-6">
                        <h4>Features</h4>
                        <p class="text-muted">Just a few mentions, but there is more</p>
                        <ul class="list-unstyled">
                          <li class="text-primary">Page builder</li>
                          <li class="text-primary">Mega menu</li>
                          <li class="text-primary">Multi language</li>
                          <li class="text-primary">Advanced SEO</li>
                          <li class="text-primary">Ecommerce</li>
                        </ul>
                      </div>
                    </div>
                  </span>
                </a>
              </div>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-class-if-active="category.active" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
                  <span data-v-menu-item-content></span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown" data-v-menu-item>
            <a class="navbar-link dropdown-toggle" href="https://blog.vvveb.com" data-v-menu-item-url>
              <span data-v-menu-item-name>Blog</span>
            </a>

            <div class="dropdown-menu" data-v-menu-item-recursive>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'">User Documentation</span>
                  <span data-v-menu-item-content></span>
                </a>
              </div>
              <div data-v-menu-item class="nav-item" data-v-class-if-dropdown="category.children &gt; 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name data-v-if-not="category.type = 'text'">Developer Documentation</span>
                  <span data-v-menu-item-content></span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="navbar-link" href="https://www.vvveb.com/page/contact" data-v-menu-item-url>
              <span data-v-menu-item-name>Contact</span>
            </a>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="navbar-link" href="https://www.vvveb.com" data-v-menu-item-url>
              <span data-v-menu-item-name>About us</span>
            </a>
          </li>
        </ul>

        <a href="/page/contact" class="btn btn-primary">Contact</a>

        <button class="nav-toggle-btn">
          <span class="line one"></span>
          <span class="line two"></span>
          <span class="line three"></span>
        </button>

      </nav>

      <!--
			  <div class="collapse navbar-collapse" id="navbar">
				<ul class="navbar-nav ms-auto">
				  <li class="nav-item">
					<a class="nav-link" href="#features">Features <span class="sr-only">(current)</span></a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="https://themes.vvveb.com">Themes</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="https://plugins.vvveb.com">Plugins</a>
				  </li>
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
					<div class="dropdown-menu" aria-labelledby="dropdown01">
					  <a class="dropdown-item" target="_blank"  href="https://github.com/givanz/VvvebJs/wiki">User Documentation</a>
					  <a class="dropdown-item" target="_blank"  href="https://github.com/givanz/VvvebJs/wiki">Developer Documentation</a>
					</div>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" target="_blank" href="https://github.com/givanz/VvvebJs">Github</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="contact.html">Contact</a>
				  </li>
				  <li class="nav-item active">
					<a class="nav-link" href="https://vvveb.com/download.php">Download for free</a>
				  </li>			  
				</ul>
			  </div>
			  -->
    </div>

  </div>

</nav>`
});Vvveb.Sections.add("navigation/navigation-4", {
    name: "Navigation 4",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/navigation/navigation-4-thumb.webp",
    html: `<nav class="navigation-4 clearfix" data-v-save-global="index.html,.navigation-4">

  <div class="navbar navbar-expand-md">

    <div class="container">

      <div data-v-component-site>
        <!-- <a class="navbar-brand" href="/" data-url data-v-url-params='{"host":"www.*.*"}'><span class="visually-hidden">Logo</span> -->
        <a class="navbar-brand" href="/" data-v-site-url'>
          <span class="visually-hidden">Logo</span>
          <img src="demo/img/logo.png" alt="Site logo" loading="lazy" class="logo-default" data-v-site-logo>
          <img src="demo/img/logo.png" alt="Site logo sticky" loading="lazy" class="logo-sticky" data-v-site-logo-sticky>
          <img src="demo/img/logo-white.png" alt="Site logo dark" loading="lazy" class="logo-default-dark" data-v-site-logo-dark>
          <img src="demo/img/logo-white.png" alt="Site logo dark sticky" loading="lazy" class="logo-default-dark-sticky" data-v-site-logo-dark-sticky>
        </a>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar" data-v-component-menu="header" data-v-slug="main-menu">
        <ul class="navbar-nav ms-auto" data-v-menu-items>
          <li class="nav-item dropdown" data-v-menu-item data-v-class-if-has-dropdown="category.children > 0">

            <a class="nav-link" data-v-class-if-dropdown-toggle="category.children > 0" aria-expanded="false" data-v-menu-item-url>
              <span data-v-menu-item-name>Resources</span>
            </a>

            <div class="dropdown-menu" data-v-menu-item-recursive>
              <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name>User Documentation</span>
                </a>
              </div>
              <div data-v-menu-item class="nav-item" data-v-menu-item data-v-class-if-dropdown="category.children > 0">
                <a class="dropdown-item" href="https://github.com/givanz/VvvebJs/wiki" data-v-menu-item-url>
                  <span data-v-menu-item-name>Developer Documentation</span>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="nav-link" href="https://blog.vvveb.com" data-v-menu-item-url>
              <span data-v-menu-item-name>Blog</span>
            </a>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="nav-link" href="https://www.vvveb.com/page/contact" data-v-menu-item-url>
              <span data-v-menu-item-name>Contact</span>
            </a>
          </li>
          <li class="nav-item" data-v-menu-item>
            <a class="nav-link" href="https://www.vvveb.com" data-v-menu-item-url>
              <span data-v-menu-item-name>About us</span>
            </a>
          </li>
          <li class="nav-item">
            <a id="color-theme-switch" class="nav-link" role="button" title="Switch sidebar color theme">
              <i class="la la-sun"></i>
            </a>
          </li>

        </ul>
        <!--				
				<div class="search-area toggle-hover">
					<form action="/search" method="get" data-v-action="/search">
						<input type="hidden" name="route" value="search">
						<div class="input-group">
							<input type="search" name="search" class="form-control" id="headerSearch" placeholder="Type for search" data-v-vvveb-action="search" data-v-vvveb-on="keyup">
							<button class="btn border-0" type="submit" title="Search">
								<div class="la-flip-horizontal">
									<i class="la la-search la-lg" aria-hidden="true"></i>
								</div>
							</button>
						</div>			  
					</form>
				</div>
-->
      </div>
      <!--
		  <div class="collapse navbar-collapse" id="navbar">
			<ul class="navbar-nav ms-auto">
			  <li class="nav-item">
				<a class="nav-link" href="#features">Features <span class="sr-only">(current)</span></a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="https://themes.vvveb.com">Themes</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="https://plugins.vvveb.com">Plugins</a>
			  </li>
			  <li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
				<div class="dropdown-menu" aria-labelledby="dropdown01">
				  <a class="dropdown-item" target="_blank"  href="https://github.com/givanz/VvvebJs/wiki">User Documentation</a>
				  <a class="dropdown-item" target="_blank"  href="https://github.com/givanz/VvvebJs/wiki">Developer Documentation</a>
				</div>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" target="_blank" href="https://github.com/givanz/VvvebJs">Github</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="contact.html">Contact</a>
			  </li>
			  <li class="nav-item active">
				<a class="nav-link" href="https://vvveb.com/download.php">Download for free</a>
			  </li>			  
			</ul>
		  </div>
		  -->
    </div>

  </div>

</nav>`
});
	Vvveb.SectionsGroup["Navigation"] = ["navigation/navigation-1","navigation/navigation-2","navigation/navigation-3","navigation/navigation-4"];
Vvveb.Sections.add("portfolio/portfolio-1", {
    name: "Portfolio 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/portfolio/portfolio-1-thumb.webp",
    html: `<section class="portfolio-1 my-5" aria-label="portfolio-1">
  <div class="row justify-content-center pb-2">
    <div class="col-md-7 heading-section text-center">
      <h2 class="text-center display-6 mb-1 fw-bold">Portfolio</h2>
      <p class="lead text-center text-muted mb-4">Some of our work</p>
    </div>
  </div>
  <div class="gallery masonry" data-component-gallery="portfolio-1">
    <div class="item" data-aos="fade-up">
      <a href="/demo/video-1.webp">
        <img class="img-fluid" src="demo/img/video-1.webp">
      </a>
    </div>
    <div class="item" data-aos="fade-up" data-aos-delay="100">
      <a href="/demo/video-1.webp">
        <img class="img-fluid" src="demo/img/video-1.webp">
      </a>
    </div>
    <div class="item" data-aos="fade-up" data-aos-delay="200">
      <a href="/demo/video-1.webp">
        <img class="img-fluid" src="demo/img/video-1.webp">
      </a>
    </div>
    <div class="item" data-aos="fade-up" data-aos-delay="300">
      <a href="/demo/video-1.webp">
        <img class="img-fluid" src="demo/img/video-1.webp">
      </a>
    </div>
    <div class="item" data-aos="fade-up" data-aos-delay="400">
      <a href="/demo/video-1.webp">
        <img class="img-fluid" src="demo/img/video-1.webp">
      </a>
    </div>
    <div class="item" data-aos="fade-up" data-aos-delay="500">
      <a href="/demo/video-1.webp">
        <img class="img-fluid" src="demo/img/video-1.webp">
      </a>
    </div>
    <div class="item" data-aos="fade-up" data-aos-delay="600">
      <a href="/demo/video-1.webp">
        <img class="img-fluid" src="demo/img/video-1.webp">
      </a>
    </div>
    <div class="item" data-aos="fade-up" data-aos-delay="700">
      <a href="/demo/video-1.webp">
        <img class="img-fluid" src="demo/img/video-1.webp">
      </a>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("portfolio/portfolio-2", {
    name: "Portfolio 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/portfolio/portfolio-2-thumb.webp",
    html: `<section class="portfolio-2 my-5" aria-label="portfolio-2">
  <div class="container">
    <div class="row justify-content-center pb-2">
      <div class="col-md-7 text-center">
        <h2 class="text-center display-6 mb-1 fw-bold">Portfolio</h2>
        <p class="lead text-center text-muted mb-4">Some of our work</p>
      </div>
    </div>
    <div class="gallery masonry has-shadow" data-component-gallery="portfolio-1">
      <div class="item" data-aos="fade-up">
        <a href="/demo/video-1.webp">
          <img class="img-fluid" src="demo/img/video-1.webp">
        </a>
      </div>
      <div class="item" data-aos="fade-up" data-aos-delay="100">
        <a href="/demo/video-1.webp">
          <img class="img-fluid" src="demo/img/video-1.webp">
        </a>
      </div>
      <div class="item" data-aos="fade-up" data-aos-delay="200">
        <a href="/demo/video-1.webp">
          <img class="img-fluid" src="demo/img/video-1.webp">
        </a>
      </div>
      <div class="item" data-aos="fade-up" data-aos-delay="300">
        <a href="/demo/video-1.webp">
          <img class="img-fluid" src="demo/img/video-1.webp">
        </a>
      </div>
      <div class="item" data-aos="fade-up" data-aos-delay="400">
        <a href="/demo/video-1.webp">
          <img class="img-fluid" src="demo/img/video-1.webp">
        </a>
      </div>
      <div class="item" data-aos="fade-up" data-aos-delay="500">
        <a href="/demo/video-1.webp">
          <img class="img-fluid" src="demo/img/video-1.webp">
        </a>
      </div>
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Portfolio"] = ["portfolio/portfolio-1","portfolio/portfolio-2"];
Vvveb.Sections.add("posts/posts-1", {
    name: "Posts 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/posts/posts-1-thumb.webp",
    html: `<section class="posts-1" aria-label="latest-post-1">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-heading text-center">
          <h2 class="text-center display-6 mb-1 fw-bold">Latest Posts</h2>
          <p class="lead text-center text-muted mb-4">Fresh updates from the industry.</p>
        </div>
      </div>
    </div>
  </div>



  <div class="container" data-v-component-posts="posts-1" data-v-limit="3" data-v-image_size="medium">
    <div class="row">



      <div class="col-12 col-lg-4 mb-2" data-aos="fade-up" data-aos-delay="000" data-v-post>

        <article class="card h-100 shadow-sm">
          <div class="card-img-top" data-v-if="post.image">
            <img src="demo/img/video-1.webp" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
          </div>
          <!-- Post Title -->
          <a data-v-post-url>
            <div class="card-body p-4">
              <div class="post-title card-title">
                <h3 class="h4 mb-3" data-v-post-name>
                  Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
                </h3>
              </div>
              <!-- Hover Content -->
              <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
              <button title="{$post.name}" role="button" class="btn btn-link px-0">
                <span>Read more</span>
                <i class="la la-angle-right"></i>
              </button>
            </div>
          </a>
        </article>


      </div>



      <div class="col-12 col-lg-4 mb-2" data-aos="fade-up" data-aos-delay="100" data-v-post>

        <article class="card h-100 shadow-sm">
          <div class="card-img-top" data-v-if="post.image">
            <img src="demo/img/video-1.webp" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
          </div>
          <!-- Post Title -->
          <a data-v-post-url>
            <div class="card-body p-4">
              <div class="post-title card-title">
                <h3 class="h4 mb-3" data-v-post-name>
                  Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
                </h3>
              </div>
              <!-- Hover Content -->
              <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
              <button title="{$post.name}" role="button" class="btn btn-link px-0">
                <span>Read more</span>
                <i class="la la-angle-right"></i>
              </button>
            </div>
          </a>
        </article>


      </div>



      <div class="col-12 col-lg-4 mb-2" data-aos="fade-up" data-aos-delay="200" data-v-post>

        <article class="card h-100 shadow-sm">
          <div class="card-img-top" data-v-if="post.image">
            <img src="demo/img/video-1.webp" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
          </div>
          <!-- Post Title -->
          <a data-v-post-url>
            <div class="card-body p-4">
              <div class="post-title card-title">
                <h3 class="h4 mb-3" data-v-post-name>
                  Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
                </h3>
              </div>
              <!-- Hover Content -->
              <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
              <button title="{$post.name}" role="button" class="btn btn-link px-0">
                <span>Read more</span>
                <i class="la la-angle-right"></i>
              </button>
            </div>
          </a>
        </article>


      </div>



    </div>
  </div>
</section>`
});Vvveb.Sections.add("posts/posts-2", {
    name: "Posts 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/posts/posts-2-thumb.webp",
    html: `<section class="pt-5 pb-5" aria-label="posts-2">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h3 class="mb-3">News sections</h3>
      </div>
      <div class="col-6 text-end">
        <a class="btn btn-primary mb-3 me-1" href="#carouselPosts2" role="button" data-bs-slide="prev">
          <i class="la la-arrow-left"></i>
        </a>
        <a class="btn btn-primary mb-3 " href="#carouselPosts2" role="button" data-bs-slide="next">
          <i class="la la-arrow-right"></i>
        </a>
      </div>
      <div class="col-12">
        <div id="carouselPosts2" class="carousel slide" data-bs-ride="carousel">

          <div class="carousel-inner">
            <div class="carousel-item active" data-v-component-posts="slide1" data-v-limit="3" data-v-page="1" data-v-image_size="medium">
              <div class="row">

                <div class="col-md-4 mb-3" data-v-post>
                  <div class="card">
                    <img class="img-fluid" loading="lazy" alt="day67-dog" src="demo/img/illustrations.co/day67-dog.svg" data-v-post-image>
                    <div class="card-body">
                      <a href="content/post.html" data-v-post-url>
                        <h4 class="card-title" data-v-post-name>Interdum et malesuada</h4>
                      </a>
                      <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>

                    </div>

                  </div>
                </div>
                <div class="col-md-4 mb-3" data-v-post>
                  <div class="card">
                    <img class="img-fluid" loading="lazy" alt="day22-owl" src="demo/img/illustrations.co/day22-owl.svg" data-v-post-image>
                    <div class="card-body">
                      <a href="content/post.html" data-v-post-url>
                        <h4 class="card-title" data-v-post-name>Interdum et malesuada</h4>
                      </a>
                      <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3" data-v-post>
                  <div class="card">
                    <img class="img-fluid" loading="lazy" alt="day68-happy-cat" src="demo/img/illustrations.co/day68-happy-cat.svg" data-v-post-image>
                    <div class="card-body">
                      <a href="content/post.html" data-v-post-url>
                        <h4 class="card-title" data-v-post-name>Interdum et malesuada</h4>
                      </a>
                      <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="carousel-item" data-v-component-posts="slide2" data-v-limit="3" data-v-page="2">
              <div class="row">

                <div class="col-md-4 mb-3" data-v-post>
                  <div class="card">
                    <img class="img-fluid" loading="lazy" alt="day79-coffee" src="demo/img/illustrations.co/day79-coffee.svg" data-v-post-image>
                    <div class="card-body">
                      <a href="content/post.html" data-v-post-url>
                        <h4 class="card-title" data-v-post-name>Interdum et malesuada</h4>
                      </a>
                      <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>

                    </div>

                  </div>
                </div>
                <div class="col-md-4 mb-3" data-v-post>
                  <div class="card">
                    <img class="img-fluid" loading="lazy" alt="109-map-location" src="demo/img/illustrations.co/109-map-location.svg" data-v-post-image>
                    <div class="card-body">
                      <a href="content/post.html" data-v-post-url>
                        <h4 class="card-title" data-v-post-name>Interdum et malesuada</h4>
                      </a>
                      <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3" data-v-post>
                  <div class="card">
                    <img class="img-fluid" loading="lazy" alt="107-healthy" src="demo/img/illustrations.co/107-healthy.svg" data-v-post-image>
                    <div class="card-body">
                      <a href="content/post.html" data-v-post-url>
                        <h4 class="card-title" data-v-post-name>Interdum et malesuada</h4>
                      </a>
                      <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="carousel-item" data-v-component-posts="slide3" data-v-limit="3" data-v-page="3">
              <div class="row">

                <div class="col-md-4 mb-3" data-v-post>
                  <div class="card">
                    <img class="img-fluid" loading="lazy" alt="126-namaste-no-hand-shake" src="demo/img/illustrations.co/126-namaste-no-hand-shake.svg" data-v-post-image>
                    <div class="card-body">
                      <a href="content/post.html" data-v-post-url>
                        <h4 class="card-title" data-v-post-name>Interdum et malesuada</h4>
                      </a>
                      <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>

                    </div>

                  </div>
                </div>
                <div class="col-md-4 mb-3" data-v-post>
                  <div class="card">
                    <img class="img-fluid" loading="lazy" alt="104-dumbbell" src="demo/img/illustrations.co/104-dumbbell.svg" data-v-post-image>
                    <div class="card-body">
                      <a href="content/post.html" data-v-post-url>
                        <h4 class="card-title" data-v-post-name>Interdum et malesuada</h4>
                      </a>
                      <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>

                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3" data-v-post>
                  <div class="card">
                    <img class="img-fluid" loading="lazy" alt="day50-pirahna" src="demo/img/illustrations.co/day50-pirahna.svg" data-v-post-image>
                    <div class="card-body">
                      <a href="content/post.html" data-v-post-url>
                        <h4 class="card-title" data-v-post-name>Interdum et malesuada</h4>
                      </a>
                      <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("posts/posts-3", {
    name: "Posts 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/posts/posts-3-thumb.webp",
    html: `<section class="posts-3 py-5" aria-label="posts-3">
  <div class="container">

    <div class="row justify-content-center">

      <div class="col-md-8 text-center">
        <h2 class="text-center display-6 mb-1 fw-bold">From Our Blog</h2>
        <p class="lead text-center text-muted mb-4">Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada.</p>
      </div>

    </div>

    <div class="row mt-4" data-v-component-posts="posts-3" data-v-limit="3" data-v-page="1" data-v-image_size="medium">

      <div class="col-md-4" data-v-post>
        <div class="card position-relative shadow border-0 mb-4" data-bs-theme="dark">
          <img class="card-img" src="demo/img/product.webp" loading="lazy" alt="product" data-v-post-image>
          <div class="card-img-overlay overflow-hidden">
            <div class="d-flex align-items-center">
              <span class="badge bg-primary text-white px-3 py-1 font-weight-normal">New</span>
              <div class="ms-2">
                <span class="ms-2 small">Jan 21, 2024</span>
              </div>
            </div>
            <a href="content/post.html" class="text-body" data-v-post-url>
              <h5 class="card-title my-3 font-weight-normal" data-v-post-name>Interdum et malesuada</h5>
            </a>
            <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
          </div>
        </div>
      </div>


      <div class="col-md-4" data-v-post>
        <div class="card position-relative shadow border-0 mb-4" data-bs-theme="dark">
          <img class="card-img" src="demo/img/product.webp" loading="lazy" alt="product" data-v-post-image>
          <div class="card-img-overlay overflow-hidden">
            <div class="d-flex align-items-center">
              <span class="badge bg-primary text-white px-3 py-1 font-weight-normal">New</span>
              <div class="ms-2">
                <span class="ms-2 small">Jan 21, 2024</span>
              </div>
            </div>
            <a href="content/post.html" class="text-body" data-v-post-url>
              <h5 class="card-title my-3 font-weight-normal" data-v-post-name>Interdum et malesuada</h5>
            </a>
            <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
          </div>
        </div>
      </div>


      <div class="col-md-4" data-v-post>
        <div class="card position-relative shadow border-0 mb-4" data-bs-theme="dark">
          <img class="card-img" src="demo/img/product.webp" loading="lazy" alt="product" data-v-post-image>
          <div class="card-img-overlay overflow-hidden">
            <div class="d-flex align-items-center">
              <span class="badge bg-primary text-white px-3 py-1 font-weight-normal">New</span>
              <div class="ms-2">
                <span class="ms-2 small">Jan 21, 2024</span>
              </div>
            </div>
            <a href="content/post.html" class="text-body" data-v-post-url>
              <h5 class="card-title my-3 font-weight-normal" data-v-post-name>Interdum et malesuada</h5>
            </a>
            <p class="card-text" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Posts"] = ["posts/posts-1","posts/posts-2","posts/posts-3"];
Vvveb.Sections.add("pricing-table/pricing-table-3", {
    name: "Pricing table 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/pricing-table/pricing-table-3-thumb.webp",
    html: `<section class="pricing-table-3" aria-label="pricing-table-3">
  <div class="container">
    <div class="row justify-content-center pb-2">
      <div class="col-md-7 heading-section text-center">
        <h2 class="text-center display-6 mb-1 fw-bold">Choose your plan</h2>
        <p class="lead text-center text-muted mb-4">14-day free trial no credit card required.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="price-col shadow-sm border rounded-3" data-aos="fade-up">
          <div class="img">
            <img src="demo/img/illustrations.co/104-dumbbell.svg" alt="104-dumbbell" loading="lazy" class="img-fluid" />
          </div>
          <div class="text-center p-4">
            <span class="excerpt d-block">Personal</span>
            <span class="price">
              <sup>$</sup>
              <span class="number">49</span>
              <sub>/mos</sub>
            </span>
            <ul class="pricing-text mb-5">
              <li>
                <span class="la la-check me-2"></span>5 Dog Walk
              </li>
              <li>
                <span class="la la-check me-2"></span>3 Vet Visit
              </li>
              <li>
                <span class="la la-check me-2"></span>3 Pet Spa
              </li>
              <li>
                <span class="la la-check me-2"></span>Free Support
              </li>
            </ul>
            <a href="/page/pricing" class="btn btn-primary">
              <span>Get Started</span>
              <i class="la la-long-arrow-alt-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="price-col shadow-sm border rounded-3" data-aos="fade-up" data-aos-delay="200">
          <div class="img">
            <img src="demo/img/illustrations.co/107-healthy.svg" alt="107-healthy" loading="lazy" class="img-fluid" />
          </div>
          <div class="text-center p-4">
            <span class="excerpt d-block">Business</span>
            <span class="price">
              <sup>$</sup>
              <span class="number">79</span>
              <sub>/mos</sub>
            </span>
            <ul class="pricing-text mb-5">
              <li>
                <span class="la la-check me-2"></span>5 Dog Walk
              </li>
              <li>
                <span class="la la-check me-2"></span>3 Vet Visit
              </li>
              <li>
                <span class="la la-check me-2"></span>3 Pet Spa
              </li>
              <li>
                <span class="la la-check me-2"></span>Free Support
              </li>
            </ul>
            <a href="/page/pricing" class="btn btn-primary">
              <span>Get Started</span>
              <i class="la la-long-arrow-alt-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="price-col shadow-sm border rounded-3" data-aos="fade-up" data-aos-delay="400">
          <div class="img">
            <img src="demo/img/illustrations.co/126-namaste-no-hand-shake.svg" alt="126-namaste-no-hand-shake" loading="lazy" class="img-fluid" />
          </div>
          <div class="text-center p-4">
            <span class="excerpt d-block">Ultimate</span>
            <span class="price">
              <sup>$</sup>
              <span class="number">109</span>
              <sub>/mos</sub>
            </span>
            <ul class="pricing-text mb-5">
              <li>
                <span class="la la-check me-2"></span>5 Dog Walk
              </li>
              <li>
                <span class="la la-check me-2"></span>3 Vet Visit
              </li>
              <li>
                <span class="la la-check me-2"></span>3 Pet Spa
              </li>
              <li>
                <span class="la la-check me-2"></span>Free Support
              </li>
            </ul>
            <a href="/page/pricing" class="btn btn-primary">
              <span>Get Started</span>
              <i class="la la-long-arrow-alt-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Pricing table"] = ["pricing-table/pricing-table-3"];
Vvveb.Sections.add("products/products-1", {
    name: "Products 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/products/products-1-thumb.webp",
    html: `<section class="products-1" aria-label="products-1">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-heading text-center">
          <h2 class="text-center display-6 mb-1 fw-bold">Latest Products</h2>
          <p class="lead text-center text-muted mb-4">Best quality at the lowest price.</p>
        </div>
      </div>
    </div>
  </div>


  <div class="container" data-v-component-products="latest" data-v-limit="8" data-v-variant_price="true" data-v-image_size="medium">
    <div class="row">



      <div class="col-md-3" data-aos="fade-up" data-aos-delay="000" data-v-product>

        <article class="single-product-wrapper">
          <!-- Product Image -->
          <a href="product/product.html" data-v-product-url> </a>
          <div class="product-image">
            <a href="product/product.html" data-v-product-url>

              <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-if="prod.image" data-v-product-image />
              <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

              <!-- Hover Thumb -->
              <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
            </a>


            <!-- Favourite -->
            <div class="product-favourite">
              <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
                <span></span>
              </a>
            </div>

            <!-- Compare -->
            <div class="product-compare">
              <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
                <span></span>
              </a>
            </div>

            <div class="badges">
              <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
            </div>
          </div>

          <!-- Product Description -->
          <div class="product-content">

            <a href="product/product.html" class="text-body" data-v-product-url>
              <span data-v-product-name>Product 8</span>
            </a>

            <p data-v-if="prod.min_price > 0">
              <span class="text-muted small">From</span>
              <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
            </p>

            <div data-v-if-not="prod.min_price">
              <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
              <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
            </div>

            <!-- Hover Content -->
            <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
              <!-- Add to Cart -->
              <div class="add-to-cart-btn">
                <input type="hidden" name="product_id" value="" data-v-product-product_id />

                <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                  <span class="button-text">
                    Out of stock
                  </span>
                </a>

                <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                    <span>Add to cart</span>
                  </span>

                  <span class="button-text">
                    <i class="la la-lg la-shopping-bag"></i>
                    <span>Add to cart</span>
                  </span>

                </a>
              </div>
            </div>

          </div>
        </article>


      </div>



      <div class="col-md-3" data-aos="fade-up" data-aos-delay="100" data-v-product>

        <article class="single-product-wrapper">
          <!-- Product Image -->
          <a href="product/product.html" data-v-product-url> </a>
          <div class="product-image">
            <a href="product/product.html" data-v-product-url>

              <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-if="prod.image" data-v-product-image />
              <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

              <!-- Hover Thumb -->
              <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
            </a>


            <!-- Favourite -->
            <div class="product-favourite">
              <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
                <span></span>
              </a>
            </div>

            <!-- Compare -->
            <div class="product-compare">
              <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
                <span></span>
              </a>
            </div>

            <div class="badges">
              <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
            </div>
          </div>

          <!-- Product Description -->
          <div class="product-content">

            <a href="product/product.html" class="text-body" data-v-product-url>
              <span data-v-product-name>Product 8</span>
            </a>

            <p data-v-if="prod.min_price > 0">
              <span class="text-muted small">From</span>
              <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
            </p>

            <div data-v-if-not="prod.min_price">
              <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
              <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
            </div>

            <!-- Hover Content -->
            <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
              <!-- Add to Cart -->
              <div class="add-to-cart-btn">
                <input type="hidden" name="product_id" value="" data-v-product-product_id />

                <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                  <span class="button-text">
                    Out of stock
                  </span>
                </a>

                <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                    <span>Add to cart</span>
                  </span>

                  <span class="button-text">
                    <i class="la la-lg la-shopping-bag"></i>
                    <span>Add to cart</span>
                  </span>

                </a>
              </div>
            </div>

          </div>
        </article>


      </div>



      <div class="col-md-3" data-aos="fade-up" data-aos-delay="200" data-v-product>

        <article class="single-product-wrapper">
          <!-- Product Image -->
          <a href="product/product.html" data-v-product-url> </a>
          <div class="product-image">
            <a href="product/product.html" data-v-product-url>

              <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-if="prod.image" data-v-product-image />
              <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

              <!-- Hover Thumb -->
              <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
            </a>


            <!-- Favourite -->
            <div class="product-favourite">
              <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
                <span></span>
              </a>
            </div>

            <!-- Compare -->
            <div class="product-compare">
              <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
                <span></span>
              </a>
            </div>

            <div class="badges">
              <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
            </div>
          </div>

          <!-- Product Description -->
          <div class="product-content">

            <a href="product/product.html" class="text-body" data-v-product-url>
              <span data-v-product-name>Product 8</span>
            </a>

            <p data-v-if="prod.min_price > 0">
              <span class="text-muted small">From</span>
              <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
            </p>

            <div data-v-if-not="prod.min_price">
              <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
              <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
            </div>

            <!-- Hover Content -->
            <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
              <!-- Add to Cart -->
              <div class="add-to-cart-btn">
                <input type="hidden" name="product_id" value="" data-v-product-product_id />

                <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                  <span class="button-text">
                    Out of stock
                  </span>
                </a>

                <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                    <span>Add to cart</span>
                  </span>

                  <span class="button-text">
                    <i class="la la-lg la-shopping-bag"></i>
                    <span>Add to cart</span>
                  </span>

                </a>
              </div>
            </div>

          </div>
        </article>


      </div>



      <div class="col-md-3" data-aos="fade-up" data-aos-delay="300" data-v-product>

        <article class="single-product-wrapper">
          <!-- Product Image -->
          <a href="product/product.html" data-v-product-url> </a>
          <div class="product-image">
            <a href="product/product.html" data-v-product-url>

              <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-if="prod.image" data-v-product-image />
              <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

              <!-- Hover Thumb -->
              <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
            </a>


            <!-- Favourite -->
            <div class="product-favourite">
              <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
                <span></span>
              </a>
            </div>

            <!-- Compare -->
            <div class="product-compare">
              <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
                <span></span>
              </a>
            </div>

            <div class="badges">
              <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
            </div>
          </div>

          <!-- Product Description -->
          <div class="product-content">

            <a href="product/product.html" class="text-body" data-v-product-url>
              <span data-v-product-name>Product 8</span>
            </a>

            <p data-v-if="prod.min_price > 0">
              <span class="text-muted small">From</span>
              <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
            </p>

            <div data-v-if-not="prod.min_price">
              <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
              <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
            </div>

            <!-- Hover Content -->
            <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
              <!-- Add to Cart -->
              <div class="add-to-cart-btn">
                <input type="hidden" name="product_id" value="" data-v-product-product_id />

                <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                  <span class="button-text">
                    Out of stock
                  </span>
                </a>

                <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                    <span>Add to cart</span>
                  </span>

                  <span class="button-text">
                    <i class="la la-lg la-shopping-bag"></i>
                    <span>Add to cart</span>
                  </span>

                </a>
              </div>
            </div>

          </div>
        </article>


      </div>



      <div class="col-md-3" data-aos="fade-up" data-aos-delay="400" data-v-product>

        <article class="single-product-wrapper">
          <!-- Product Image -->
          <a href="product/product.html" data-v-product-url> </a>
          <div class="product-image">
            <a href="product/product.html" data-v-product-url>

              <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-if="prod.image" data-v-product-image />
              <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

              <!-- Hover Thumb -->
              <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
            </a>


            <!-- Favourite -->
            <div class="product-favourite">
              <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
                <span></span>
              </a>
            </div>

            <!-- Compare -->
            <div class="product-compare">
              <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
                <span></span>
              </a>
            </div>

            <div class="badges">
              <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
            </div>
          </div>

          <!-- Product Description -->
          <div class="product-content">

            <a href="product/product.html" class="text-body" data-v-product-url>
              <span data-v-product-name>Product 8</span>
            </a>

            <p data-v-if="prod.min_price > 0">
              <span class="text-muted small">From</span>
              <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
            </p>

            <div data-v-if-not="prod.min_price">
              <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
              <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
            </div>

            <!-- Hover Content -->
            <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
              <!-- Add to Cart -->
              <div class="add-to-cart-btn">
                <input type="hidden" name="product_id" value="" data-v-product-product_id />

                <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                  <span class="button-text">
                    Out of stock
                  </span>
                </a>

                <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                    <span>Add to cart</span>
                  </span>

                  <span class="button-text">
                    <i class="la la-lg la-shopping-bag"></i>
                    <span>Add to cart</span>
                  </span>

                </a>
              </div>
            </div>

          </div>
        </article>


      </div>



      <div class="col-md-3" data-aos="fade-up" data-aos-delay="500" data-v-product>

        <article class="single-product-wrapper">
          <!-- Product Image -->
          <a href="product/product.html" data-v-product-url> </a>
          <div class="product-image">
            <a href="product/product.html" data-v-product-url>

              <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-if="prod.image" data-v-product-image />
              <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

              <!-- Hover Thumb -->
              <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
            </a>


            <!-- Favourite -->
            <div class="product-favourite">
              <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
                <span></span>
              </a>
            </div>

            <!-- Compare -->
            <div class="product-compare">
              <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
                <span></span>
              </a>
            </div>

            <div class="badges">
              <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
            </div>
          </div>

          <!-- Product Description -->
          <div class="product-content">

            <a href="product/product.html" class="text-body" data-v-product-url>
              <span data-v-product-name>Product 8</span>
            </a>

            <p data-v-if="prod.min_price > 0">
              <span class="text-muted small">From</span>
              <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
            </p>

            <div data-v-if-not="prod.min_price">
              <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
              <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
            </div>

            <!-- Hover Content -->
            <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
              <!-- Add to Cart -->
              <div class="add-to-cart-btn">
                <input type="hidden" name="product_id" value="" data-v-product-product_id />

                <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                  <span class="button-text">
                    Out of stock
                  </span>
                </a>

                <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                    <span>Add to cart</span>
                  </span>

                  <span class="button-text">
                    <i class="la la-lg la-shopping-bag"></i>
                    <span>Add to cart</span>
                  </span>

                </a>
              </div>
            </div>

          </div>
        </article>


      </div>



      <div class="col-md-3" data-aos="fade-up" data-aos-delay="600" data-v-product>

        <article class="single-product-wrapper">
          <!-- Product Image -->
          <a href="product/product.html" data-v-product-url> </a>
          <div class="product-image">
            <a href="product/product.html" data-v-product-url>

              <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-if="prod.image" data-v-product-image />
              <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

              <!-- Hover Thumb -->
              <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
            </a>


            <!-- Favourite -->
            <div class="product-favourite">
              <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
                <span></span>
              </a>
            </div>

            <!-- Compare -->
            <div class="product-compare">
              <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
                <span></span>
              </a>
            </div>

            <div class="badges">
              <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
            </div>
          </div>

          <!-- Product Description -->
          <div class="product-content">

            <a href="product/product.html" class="text-body" data-v-product-url>
              <span data-v-product-name>Product 8</span>
            </a>

            <p data-v-if="prod.min_price > 0">
              <span class="text-muted small">From</span>
              <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
            </p>

            <div data-v-if-not="prod.min_price">
              <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
              <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
            </div>

            <!-- Hover Content -->
            <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
              <!-- Add to Cart -->
              <div class="add-to-cart-btn">
                <input type="hidden" name="product_id" value="" data-v-product-product_id />

                <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                  <span class="button-text">
                    Out of stock
                  </span>
                </a>

                <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                    <span>Add to cart</span>
                  </span>

                  <span class="button-text">
                    <i class="la la-lg la-shopping-bag"></i>
                    <span>Add to cart</span>
                  </span>

                </a>
              </div>
            </div>

          </div>
        </article>


      </div>



      <div class="col-md-3" data-aos="fade-up" data-aos-delay="700" data-v-product>

        <article class="single-product-wrapper">
          <!-- Product Image -->
          <a href="product/product.html" data-v-product-url> </a>
          <div class="product-image">
            <a href="product/product.html" data-v-product-url>

              <img src="demo/img/product.webp" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-if="prod.image" data-v-product-image />
              <img src="/media/placeholder.svg" class="bg-body-tertiary" loading="lazy" alt="" data-v-if-not="prod.image" />

              <!-- Hover Thumb -->
              <img class="hover-img" src="demo/img/product-2.webp" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
            </a>


            <!-- Favourite -->
            <div class="product-favourite">
              <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
                <span></span>
              </a>
            </div>

            <!-- Compare -->
            <div class="product-compare">
              <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
                <span></span>
              </a>
            </div>

            <div class="badges">
              <span class="badge text-bg-secondary" data-v-if="prod.old_price > 0">Sale</span>
            </div>
          </div>

          <!-- Product Description -->
          <div class="product-content">

            <a href="product/product.html" class="text-body" data-v-product-url>
              <span data-v-product-name>Product 8</span>
            </a>

            <p data-v-if="prod.min_price > 0">
              <span class="text-muted small">From</span>
              <span class="product-price" data-v-product-min_price_tax_formatted>100.0000</span>
            </p>

            <div data-v-if-not="prod.min_price">
              <p class="product-price old-price" data-v-if="prod.old_price > 0" data-v-product-old_price_tax_formatted>100.0000</p>
              <p class="product-price" data-v-if="prod.price > 0" data-v-product-price_tax_formatted>100.0000</p>
            </div>

            <!-- Hover Content -->
            <div class="hover-content" data-v-if="prod.price > 0 && !prod.has_variants">
              <!-- Add to Cart -->
              <div class="add-to-cart-btn">
                <input type="hidden" name="product_id" value="" data-v-product-product_id />

                <a href="#" class="btn btn-secondary btn-sm w-100 disabled" data-v-if="prod.stock_quantity < 1">
                  <span class="button-text">
                    Out of stock
                  </span>
                </a>

                <a href="" class="btn btn-primary btn-sm w-100" data-v-if="prod.stock_quantity > 0" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">

                  <span class="loading d-none">
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                    <span>Add to cart</span>
                  </span>

                  <span class="button-text">
                    <i class="la la-lg la-shopping-bag"></i>
                    <span>Add to cart</span>
                  </span>

                </a>
              </div>
            </div>

          </div>
        </article>


      </div>



    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Products"] = ["products/products-1"];

	Vvveb.SectionsGroup["Reusable"] = [""];
Vvveb.Sections.add("showcase/showcase-1", {
    name: "Showcase 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-1-thumb.webp",
    html: `<section class="d-flex showcase-1" aria-label="showcase-1">
  <div class="container">
    <div class="row align-items-center w-100">
      <div class="col-md-6 col-sm-12">
        <h3>Drag and drop builder</h3>
        <p class="lead">Unlimited design powers with an easy to use interface, change anything on your website with a few clicks.</p>
        <a href="content/post.html">
          <span>Learn more</span>
          <i class="la la-long-arrow-alt-right ms-1"></i>
        </a>
      </div>
      <div class="col-md-6 col-sm-12 col-img">
        <img class="img-fluid" loading="lazy" src="demo/img/illustrations.co/126-namaste-no-hand-shake.svg" alt="namaste">
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-2", {
    name: "Showcase 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-2-thumb.webp",
    html: `<section class="d-flex showcase-2" aria-label="showcase-2">
  <div class="container">
    <div class="row align-items-center w-100">
      <div class="col-md-6 col-sm-12 col-img">
        <img class="img-fluid" src="demo/img/illustrations.co/107-healthy.svg" alt="healthy">
      </div>
      <div class="col-md-6 col-sm-12">
        <h3>Drag and drop builder</h3>
        <p class="lead">Unlimited design powers with an easy to use interface, change anything on your website with a few clicks.</p>
        <a href="content/post.html">
          <span>Learn more</span>
          <i class="la la-long-arrow-alt-right ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-3", {
    name: "Showcase 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-3-thumb.webp",
    html: `<section class="showcase-3" aria-label="showcase-3">
  <div class="container">
    <div class="row g-1 justify-content-center">
      <div class="col-12 col-sm-6 col-md-6 col-lg-3">
        <div class="feature" data-aos="fade-up" data-aos-delay="100">
          <div class="font-container text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="56" height="56" color="#1064ea" fill="#1064ea">
              <polyline points="336 176 225.2 304 176 255.8" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></polyline>
              <path d="M463.1,112.37C373.68,96.33,336.71,84.45,256,48,175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></path>
            </svg>
          </div>
          <h3>
            Better Security
          </h3>
          <p class="text-center">Vvveb is 100% safe against sql injections, a vulerability that affects most CMS.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3">
        <div class="feature" data-aos="fade-up" data-aos-delay="200">
          <div class="font-container text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="icons" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="56" height="56" color="#1064ea" fill="#1064ea">
              <path d="M419.1,337.45a3.94,3.94,0,0,0-6.1,0c-10.5,12.4-45,46.55-45,77.66,0,27,21.5,48.89,48,48.89h0c26.5,0,48-22,48-48.89C464,384,429.7,349.85,419.1,337.45Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"></path>
              <path d="M387,287.9,155.61,58.36a36,36,0,0,0-51,0l-5.15,5.15a36,36,0,0,0,0,51l52.89,52.89,57-57L56.33,263.2a28,28,0,0,0,.3,40l131.2,126a28.05,28.05,0,0,0,38.9-.1c37.8-36.6,118.3-114.5,126.7-122.9,5.8-5.8,18.2-7.1,28.7-7.1h.3A6.53,6.53,0,0,0,387,287.9Z" style="fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px"></path>
            </svg>
          </div>
          <h3>
            Unlimited customization
          </h3>
          <p class="text-center">Vvveb uses only html for templating for maximum flexibility.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3">
        <div class="feature" data-aos="fade-up" data-aos-delay="300">
          <div class="font-container text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="icons" width="56" height="56" color="#1064ea" fill="#1064ea" stroke-width="28">
              <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill-rule="evenodd" d="M80,176a16,16,0,0,0-16,16V408c0,30.24,25.76,56,56,56H392c30.24,0,56-24.51,56-54.75V192a16,16,0,0,0-16-16Z"></path>
              <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" fill-rule="evenodd" d="M160,176V144a96,96,0,0,1,96-96h0a96,96,0,0,1,96,96v32"></path>
            </svg>
          </div>
          <h3>
            Advanced Ecommerce
          </h3>
          <p class="text-center">Vvveb is a full featured ecommerce platform with advanced functionality.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3">
        <div class="feature" data-aos="fade-up" data-aos-delay="400">
          <div class="font-container text-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="56" height="56" color="#1064ea" fill="#1064ea">
              <path d="M80,464V68.14a8,8,0,0,1,4-6.9C91.81,56.66,112.92,48,160,48c64,0,145,48,192,48a199.53,199.53,0,0,0,77.23-15.77A2,2,0,0,1,432,82.08V301.44a4,4,0,0,1-2.39,3.65C421.37,308.7,392.33,320,352,320c-48,0-128-32-192-32s-80,16-80,16" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></path>
            </svg>
          </div>
          <h3>
            Full Localization
          </h3>
          <p class="text-center">Publish content in multiple languages or sell in different currencies.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-4", {
    name: "Showcase 4",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-4-thumb.webp",
    html: `<section class="showcase-4" aria-label="showcase-4">
  <div class="container">
    <div class="row g-1 justify-content-center">
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="0">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-shield-alt"></i>
          </div>
          <h3>
            <a>Security</a>
          </h3>
          <p>Vvveb is 100% safe against sql injections, a vulerability that affects most CMS.</p>
          <a class="more  d-block">
            Read more
            <i class="font-icon la la-chevron-circle-right"></i>
          </a>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-praying-hands"></i>
          </div>
          <h3>
            <a>Unlimited theme flexibility</a>
          </h3>
          <p>Vvveb uses only html for templating for maximum flexibility.</p>
          <a class="more d-block">
            Read more
            <i class="font-icon la la-chevron-circle-right"></i>
          </a>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-shopping-cart"></i>
          </div>
          <h3>
            <a>Ecommerce</a>
          </h3>
          <p>Vvveb is a full featured ecommerce platform with advanced functionality.</p>
          <a class="more d-block">
            Read more
            <i class="font-icon la la-chevron-circle-right"></i>
          </a>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-globe-europe"></i>
          </div>
          <h3>
            <a>Localization</a>
          </h3>
          <p>Publish content in multiple languages or sell in different currencies.</p>
          <a class="more d-block">
            Read more
            <i class="font-icon la la-chevron-circle-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-5", {
    name: "Showcase 5",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-5-thumb.webp",
    html: `<section class="showcase-5" aria-label="showcase-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="0">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-shield-alt"></i>
          </div>
          <h3>
            <a>Security</a>
          </h3>
          <p>Vvveb is 100% safe against sql injections, a vulerability that affects most CMS.</p>
          <!-- a class="more d-block">
			  Read more
			  <i class="font-icon la la-chevron-circle-right"></i>
          </a-->
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-praying-hands"></i>
          </div>
          <h3>
            <a>Unlimited flexibility</a>
          </h3>
          <p>Vvveb uses only html for templating for maximum flexibility.</p>
          <!-- a class="more d-block">
			  Read more
			  <i class="font-icon la la-chevron-circle-right"></i>
          </a-->
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-shopping-cart"></i>
          </div>
          <h3>
            <a>Ecommerce</a>
          </h3>
          <p>Vvveb is a full featured ecommerce platform with advanced functionality.</p>
          <!-- a class="more d-block">
			  Read more
			  <i class="font-icon la la-chevron-circle-right"></i>
          </a-->
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-globe-europe"></i>
          </div>
          <h3>
            <a>Localization</a>
          </h3>
          <p>Publish content in multiple languages or sell in different currencies.</p>
          <!-- a class="more d-block">
			  Read more
			  <i class="font-icon la la-chevron-circle-right"></i>
          </a-->
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-6", {
    name: "Showcase 6",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-6-thumb.webp",
    html: `<section class="showcase-6" aria-label="showcase-6">
  <div class="separator top">
    <svg class="pricing-divider-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" fill="currentColor" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
      <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
		c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="currentColor" opacity="0.6"></path>
      <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
		c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="currentColor" opacity="0.6"></path>
      <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
		H42.401L43.415,98.342z" fill="currentColor" opacity="0.7"></path>
      <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
		c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="currentColor"></path>
    </svg>
  </div>


  <div class="background-container"></div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
        <div class="feature">
          <div class="font-container">
            <i class="font-icon la la-shield-alt"></i>
          </div>
          <div class="text">
            <h3>
              <a>Security</a>
            </h3>
            <p>Vvveb is 100% safe against sql injections, a vulerability that affects most CMS.</p>
            <a class="more d-block">
              Read more
              <i class="font-icon la la-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
        <div class="feature">
          <div class="font-container">
            <i class="font-icon la la-praying-hands"></i>
          </div>
          <div class="text">
            <h3>
              <a>Unlimited flexibility</a>
            </h3>
            <p>Vvveb uses only html for templating for maximum flexibility.</p>
            <a class="more d-block">
              Read more
              <i class="font-icon la la-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
        <div class="feature">
          <div class="font-container">
            <i class="font-icon la la-shopping-cart"></i>
          </div>
          <div class="text">
            <h3>
              <a>Ecommerce</a>
            </h3>
            <p>Vvveb is a full featured ecommerce platform with advanced functionality.</p>
            <a class="more d-block">
              Read more
              <i class="font-icon la la-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="separator bottom">
    <svg class="pricing-divider-img" enable-background="new 0 0 300 100" height="100px" fill="currentColor" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
      <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
		c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="currentColor" opacity="0.6"></path>
      <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
		c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="currentColor" opacity="0.6"></path>
      <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
		H42.401L43.415,98.342z" fill="currentColor" opacity="0.7"></path>
      <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
		c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="currentColor"></path>
    </svg>
  </div>

</section>`
});Vvveb.Sections.add("showcase/showcase-7", {
    name: "Showcase 7",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-7-thumb.webp",
    html: `<section class="showcase-7" aria-label="showcase-7">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
        <div class="feature">
          <div class="font-container">
            <i class="font-icon la la-shield-alt"></i>
          </div>
          <div class="text">
            <h3>
              <a>Security</a>
            </h3>
            <p>Vvveb is 100% safe against sql injections, a vulerability that affects most CMS.</p>
            <a class="more d-block">
              Read more
              <i class="font-icon la la-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
        <div class="feature">
          <div class="font-container">
            <i class="font-icon la la-praying-hands"></i>
          </div>
          <div class="text">
            <h3>
              <a>Unlimited theme flexibility</a>
            </h3>
            <p>Vvveb uses only html for templating for maximum flexibility.</p>
            <a class="more d-block">
              Read more
              <i class="font-icon la la-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
        <div class="feature">
          <div class="font-container">
            <i class="font-icon la la-shopping-cart"></i>
          </div>
          <div class="text">
            <h3>
              <a>Ecommerce</a>
            </h3>
            <p>Vvveb is a full featured ecommerce platform with advanced functionality and internationalization.</p>
            <a class="more d-block">
              Read more
              <i class="font-icon la la-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-8", {
    name: "Showcase 8",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-8-thumb.webp",
    html: `<section class="showcase-8" aria-label="showcase-8">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-7 mx-auto" data-aos="fade-up" data-aos-delay="0">
        <div class="feature">
          <div class="font-container">
            <i class="font-icon la la-robot"></i>
          </div>
          <div class="text">
            <h3>
              <a>The next generation website builder</a>
            </h3>
            <p>Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
            <a class="more d-block">
              Read more
              <i class="font-icon la la-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-9", {
    name: "Showcase 9",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-9-thumb.webp",
    html: `<section class="showcase-8" aria-label="showcase-9">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-7 mx-auto" data-aos="fade-up" data-aos-delay="0">
        <div class="feature">
          <div class="font-container">
            <i class="font-icon la la-robot"></i>
          </div>
          <div class="text">
            <h3>
              <a>The next generation website builder</a>
            </h3>
            <p>Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
            <a class="more d-block">
              Read more
              <i class="font-icon la la-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-10", {
    name: "Showcase 10",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-10-thumb.webp",
    html: `<section class="showcase-10" aria-label="showcase-10">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-7 mx-auto" data-aos="fade-up" data-aos-delay="0">
        <div class="feature">
          <div class="font-container">
            <i class="font-icon la la-robot la-2x"></i>
          </div>
          <div class="text">
            <h3>
              <a>The next generation website builder</a>
            </h3>
            <p>Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
            <a class="more d-block">
              Read more
              <i class="font-icon la la-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-11", {
    name: "Showcase 11",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-11-thumb.webp",
    html: `<section class="pt-5 pb-5">
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-md-6   mt-4 mt-md-0 order-md-1 order-2">
        <img alt="image" loading="lazy" class="img-fluid" src="http://via.placeholder.com/650x450/5fa9f8/fff">
      </div>
      <div class="col-12 col-md-4 order-1 order-md-2">
        <h2>Nice Heading</h2>
        <p class="text-h3 mt-3">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
      </div>
    </div>
    <div class="row align-items-center justify-content-center pt-5 pb-5">
      <div class="col-12 col-md-4 offset-md-1">
        <h2>Nice Heading</h2>
        <p class="text-h3 mt-3">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>

      </div>
      <div class="col-12 col-md-6   mt-4 mt-md-0">
        <img alt="image" loading="lazy" class="img-fluid" src="http://via.placeholder.com/650x450/5fa9f8/fff">
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-md-6   mt-4 mt-md-0 order-md-1 order-2">
        <img alt="image" loading="lazy" class="img-fluid" src="http://via.placeholder.com/650x450/5fa9f8/fff">
      </div>
      <div class="col-12 col-md-4 order-1 order-md-2">
        <h2>Nice Heading</h2>
        <p class="text-h3 mt-3">Powerful and easy to use drag and drop website builder for blogs, presentation or ecommerce stores.</p>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("showcase/showcase-12", {
    name: "Showcase 12",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/showcase/showcase-12-thumb.webp",
    html: `<section class="showcase-12" aria-label="showcase-12">
  <div class="container">
    <div class="row g-1 justify-content-center">
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="0">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-shield-alt"></i>
          </div>
          <h3>
            <a>Security</a>
          </h3>
          <p class="text-center">Vvveb is 100% safe against sql injections, a vulerability that affects most CMS.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-praying-hands"></i>
          </div>
          <h3>
            <a>Unlimited theme flexibility</a>
          </h3>
          <p class="text-center">Vvveb uses only html for templating for maximum flexibility.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-shopping-cart"></i>
          </div>
          <h3>
            <a>Ecommerce</a>
          </h3>
          <p class="text-center">Vvveb is a full featured ecommerce platform with advanced functionality.</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
        <div class="feature">
          <div class="font-container text-center">
            <i class="font-icon la la-globe-europe"></i>
          </div>
          <h3>
            <a>Localization</a>
          </h3>
          <p class="text-center">Publish content in multiple languages or sell in different currencies.</p>
        </div>
      </div>
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Showcase"] = ["showcase/showcase-1","showcase/showcase-2","showcase/showcase-3","showcase/showcase-4","showcase/showcase-5","showcase/showcase-6","showcase/showcase-7","showcase/showcase-8","showcase/showcase-9","showcase/showcase-10","showcase/showcase-11","showcase/showcase-12"];
Vvveb.Sections.add("subscribe/subscribe-1", {
    name: "Subscribe 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/subscribe/subscribe-1-thumb.webp",
    html: `<section class="subscribe-1 text-white" aria-label="subscribe-1" data-bs-theme="dark">

  <div class="container">

    <div class="row h-100 d-flex justify-content-center align-items-center" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-home">

      <div class="col-md-12">

        <h4 class="text-center">Stay Informed with Early Updates!</h4>
        <p class="text-muted text-center">Subscribe to our newsletter and receive the latest updates and important news directly to your inbox.</p>

        <div class="notifications" data-v-notifications>

          <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
            </div>

            <div class="flex-grow-1 align-self-center text-small">
              <div>
                <div data-v-notification-text>
                  This is a placeholder for a notification message.
                </div>
              </div>
            </div>


            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-check-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
              This is a placeholder for a success message.
            </div>

            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1  la-info-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center" data-v-notification-text>
              This is a placeholder for a info message.
            </div>

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

        </div>

        <form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-contact-form-form]" data-v-vvveb-on="submit">
          <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
          <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>


          <div class="col-md-6 mx-auto mt-5">
            <div class="search position-relative">
              <input class="form-control rounded-5" name="email" placeholder="Your email address">
              <button type="submit" class="btn btn-primary position-absolute  rounded-5">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                  </span>
                  <span>Submitting</span> ...
                </span>

                <span class="button-text">
                  <span>Submit</span>
                  <i class="la la-lg la-envelope opacity-50 ms-2"></i>
                </span>

              </button>
            </div>

            <label class="small mt-2 text-muted form-check">
              <input type="checkbox" class="form-check-input" value="1" name="optin" required>
              <span class="form-check-label">I agree to receive your newsletters and accept the data privacy statement.</span>
            </label>
          </div>

          <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

          <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

          <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">

        </form>

      </div>

    </div>

  </div>

</section>`
});Vvveb.Sections.add("subscribe/subscribe-2", {
    name: "Subscribe 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/subscribe/subscribe-2-thumb.webp",
    html: `<section class="subscribe-2" aria-label="subscribe-2">

  <div class="container">

    <div class="row h-100 d-flex justify-content-center align-items-center" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-home">

      <div class="col-md-6">
        <h5 class="mb-3">Stay Informed with Early Updates!</h5>
        <p class="text-muted">Subscribe to our newsletter and receive the latest updates and important news directly to your inbox.</p>
      </div>

      <div class="col-md-6">

        <div class="notifications" data-v-notifications>

          <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
            </div>

            <div class="flex-grow-1 align-self-center text-small">
              <div>
                <div data-v-notification-text>
                  This is a placeholder for a notification message.
                </div>
              </div>
            </div>


            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-check-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
              This is a placeholder for a success message.
            </div>

            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1  la-info-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center" data-v-notification-text>
              This is a placeholder for a info message.
            </div>

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

        </div>

        <form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-contact-form-form]" data-v-vvveb-on="submit">
          <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
          <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>


          <div class="search position-relative">
            <input class="form-control" name="email" placeholder="Your email address">
            <button type="submit" class="btn btn-primary position-absolute">

              <span class="loading d-none">
                <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                </span>
                <span>Submitting</span> ...
              </span>

              <span class="button-text">
                <span>Submit</span>
                <i class="la la-lg la-envelope opacity-50 ms-2"></i>
              </span>

            </button>
          </div>

          <label class="small mt-2 text-muted form-check">
            <input type="checkbox" class="form-check-input" value="1" name="optin" required>
            <span class="form-check-label">I agree to receive your newsletters and accept the data privacy statement.</span>
          </label>


          <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

          <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

          <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">

        </form>

      </div>

    </div>

  </div>

</section>`
});Vvveb.Sections.add("subscribe/subscribe-3", {
    name: "Subscribe 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/subscribe/subscribe-3-thumb.webp",
    html: `<section class="subscribe-3 text-white" aria-label="subscribe-1" data-bs-theme="dark">

  <div class="container">

    <div class="row h-100 d-flex justify-content-center align-items-center" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-home">

      <div class="col-md-6">
        <h5 class="mb-3">Stay Informed with Early Updates!</h5>
        <p class="text-muted">Subscribe to our newsletter and receive the latest updates and important news directly to your inbox.</p>
      </div>

      <div class="col-md-6">

        <div class="notifications" data-v-notifications>

          <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
            </div>

            <div class="flex-grow-1 align-self-center text-small">
              <div>
                <div data-v-notification-text>
                  This is a placeholder for a notification message.
                </div>
              </div>
            </div>


            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-check-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
              This is a placeholder for a success message.
            </div>

            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1  la-info-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center" data-v-notification-text>
              This is a placeholder for a info message.
            </div>

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

        </div>

        <form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-contact-form-form]" data-v-vvveb-on="submit">
          <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
          <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>


          <div class="search position-relative">
            <input class="form-control" name="email" placeholder="Your email address">
            <button type="submit" class="btn btn-primary position-absolute">

              <span class="loading d-none">
                <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                </span>
                <span>Submitting</span> ...
              </span>

              <span class="button-text">
                <span>Submit</span>
                <i class="la la-lg la-envelope opacity-50 ms-2"></i>
              </span>

            </button>
          </div>

          <label class="small mt-2 text-muted form-check">
            <input type="checkbox" class="form-check-input" value="1" name="optin" required>
            <span class="form-check-label">I agree to receive your newsletters and accept the data privacy statement.</span>
          </label>


          <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

          <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

          <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">

        </form>

      </div>

    </div>

  </div>

</section>`
});Vvveb.Sections.add("subscribe/subscribe-4", {
    name: "Subscribe 4",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/subscribe/subscribe-4-thumb.webp",
    html: `<section class="subscribe-4" aria-label="subscribe-4">

  <div class="container">

    <div class="row h-100 d-flex justify-content-center align-items-center" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-home">

      <div class="col-md-12">

        <h4 class="text-center">Stay Informed with Early Updates!</h4>
        <p class="text-muted text-center">Subscribe to our newsletter and receive the latest updates and important news directly to your inbox.</p>

        <div class="notifications" data-v-notifications>

          <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
            </div>

            <div class="flex-grow-1 align-self-center text-small">
              <div>
                <div data-v-notification-text>
                  This is a placeholder for a notification message.
                </div>
              </div>
            </div>


            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-check-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
              This is a placeholder for a success message.
            </div>

            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1  la-info-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center" data-v-notification-text>
              This is a placeholder for a info message.
            </div>

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

        </div>

        <form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-contact-form-form]" data-v-vvveb-on="submit">
          <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
          <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>


          <div class="col-md-6 mx-auto mt-5">
            <div class="search position-relative">
              <input class="form-control" name="email" placeholder="Your email address">
              <button type="submit" class="btn btn-primary position-absolute">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                  </span>
                  <span>Submitting</span> ...
                </span>

                <span class="button-text">
                  <span>Submit</span>
                  <i class="la la-lg la-envelope opacity-50 ms-2"></i>
                </span>

              </button>
            </div>

            <label class="small mt-2 text-muted form-check">
              <input type="checkbox" class="form-check-input" value="1" name="optin" required>
              <span class="form-check-label">I agree to receive your newsletters and accept the data privacy statement.</span>
            </label>
          </div>

          <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

          <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

          <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">

        </form>

      </div>

    </div>

  </div>

</section>`
});Vvveb.Sections.add("subscribe/subscribe-5", {
    name: "Subscribe 5",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/subscribe/subscribe-5-thumb.webp",
    html: `<section class="subscribe-5 text-white" aria-label="subscribe-5" data-bs-theme="dark">

  <div class="container">

    <div class="row h-100 d-flex justify-content-center align-items-center" data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-us-home">


      <div class="col-md-12">

        <h4 class="text-center">Stay Informed with Early Updates!</h4>
        <p class="lead text-muted text-center">Subscribe to our newsletter and receive the latest updates and important news directly to your inbox.</p>

        <div class="notifications" data-v-notifications>

          <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
            </div>

            <div class="flex-grow-1 align-self-center text-small">
              <div>
                <div data-v-notification-text>
                  This is a placeholder for a notification message.
                </div>
              </div>
            </div>


            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1 la-check-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
              This is a placeholder for a success message.
            </div>

            <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

          <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

            <div class="icon align-middle me-2">
              <i class="align-middle la la-2x lh-1  la-info-circle"></i>
            </div>

            <div class="flex-grow-1 align-self-center" data-v-notification-text>
              This is a placeholder for a info message.
            </div>

            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">
                <!-- <i class="la la-times"></i> -->
              </span>
            </button>
          </div>

        </div>

        <form action="" method="post" data-v-vvveb-action="submit" data-selector="[data-v-component-plugin-contact-form-form]" data-v-vvveb-on="submit">
          <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
          <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>


          <div class="col-md-6 mx-auto mt-5">
            <div class="search position-relative">
              <input class="form-control" placeholder="Your email address">
              <button type="submit" class="btn btn-primary position-absolute">

                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                  </span>
                  <span>Submitting</span> ...
                </span>

                <span class="button-text">
                  <span>Submit</span>
                  <i class="la la-lg la-envelope opacity-50 ms-2"></i>
                </span>

              </button>
            </div>

            <label class="small mt-2 text-muted form-check">
              <input type="checkbox" class="form-check-input" value="1" name="optin" required>
              <span class="form-check-label">I agree to receive your newsletters and accept the data privacy statement.</span>
            </label>
          </div>

          <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

          <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

          <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">

        </form>

      </div>

    </div>

  </div>

</section>`
});
	Vvveb.SectionsGroup["Subscribe"] = ["subscribe/subscribe-1","subscribe/subscribe-2","subscribe/subscribe-3","subscribe/subscribe-4","subscribe/subscribe-5"];
Vvveb.Sections.add("team/team-1", {
    name: "Team 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/team/team-1-thumb.webp",
    html: `<section class="py-5" aria-label="team-1">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h2 class="text-center display-6 mb-1 fw-bold">Meet Our Team</h2>
        <p class="lead text-center text-muted mb-4">We are a group of professionals dedicated to their work</p>

      </div>
    </div>
    <div class="row">

      <div class="col-lg-3 mb-4">

        <div class="row">
          <div class="col-md-12">
            <img alt="image" loading="lazy" src="demo/img/sections/team/1.webp" class="img-fluid p-4 rounded-circle">
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h3 class="mt-4 mb-0">John Doe</h3>
              <h4 class="text-muted mb-3">CTO - Founder</h4>
              <p class="text-muted">We are a group of professionals dedicated to their work</p>

              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook-f"></i>
                    <span class="visually-hidden">Facebook</span>
                    <span class="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-3 mb-4">

        <div class="row">
          <div class="col-md-12">
            <img alt="image" loading="lazy" src="demo/img/sections/team/2.webp" class="img-fluid p-4 rounded-circle">
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h3 class="mt-4 mb-0">John Doe</h3>
              <h4 class="text-muted mb-3">CTO - Tech</h4>
              <p class="text-muted">We are a group of professionals dedicated to their work</p>

              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook-f"></i>
                    <span class="visually-hidden">Facebook</span>
                    <span class="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-3 mb-4">

        <div class="row">
          <div class="col-md-12">
            <img alt="image" loading="lazy" src="demo/img/sections/team/3.webp" class="img-fluid p-4 rounded-circle">
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h3 class="mt-4 mb-0">John Doe</h3>
              <h4 class="text-muted mb-3">CSO - Financial</h4>
              <p class="text-muted">We are a group of professionals dedicated to their work</p>

              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook-f"></i>
                    <span class="visually-hidden">Facebook</span>
                    <span class="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-3 mb-4">

        <div class="row">
          <div class="col-md-12">
            <img alt="image" loading="lazy" src="demo/img/sections/team/4.webp" class="img-fluid p-4 rounded-circle">
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h3 class="mt-4 mb-0">John Doe</h3>
              <h4 class="text-muted mb-3">CMO - Operations</h4>
              <p class="text-muted">You can relay on our amazing features list and also our user services will be great experience.</p>

              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook-f"></i>
                    <span class="visually-hidden">Facebook</span>
                    <span class="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("team/team-2", {
    name: "Team 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/team/team-2-thumb.webp",
    html: `<section class="py-5 team-2" aria-label="team-2">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3">Meet Our Team</h3>
        <h5 class="lead text-muted">We are a group of professionals dedicated to their work</h5>
      </div>
    </div>
    <div class="row justify-content-center py-5">
      <div class="card col-md-3">
        <div class="card-content">
          <div class="card-body p-0">
            <div class="profile">
              <img src="demo/img/sections/team/1.webp" loading="lazy" alt="team">
            </div>
            <div class="card-title mt-4">
              <h4>Jane Doe</h4>
              <small>CEO - Founder</small>
            </div>
            <div class="card-subtitle">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing </p>
            </div>
            <div class="card-footer">
              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook-f"></i>
                    <span class="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-3">
        <div class="card-content">
          <div class="card-body p-0">
            <div class="profile">
              <img src="demo/img/sections/team/2.webp" loading="lazy" alt="team">
            </div>
            <div class="card-title mt-4">
              <h4>John Doe</h4>
              <small>CTO - Co-Founder</small>
            </div>
            <div class="card-subtitle">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing </p>
            </div>
            <div class="card-footer">
              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook-f"></i>
                    <span class="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-3">
        <div class="card-content">
          <div class="card-body p-0">
            <div class="profile">
              <img src="demo/img/sections/team/3.webp" loading="lazy" alt="team">
            </div>
            <div class="card-title mt-4">
              <h4>Jane Doe</h4>
              <small>CSO - Financial</small>
            </div>
            <div class="card-subtitle">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing </p>
            </div>
            <div class="card-footer">
              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook-f"></i>
                    <span class="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>`
});Vvveb.Sections.add("team/team-3", {
    name: "Team 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/team/team-3-thumb.webp",
    html: `<section class="py-5" aria-label="team-5">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3">Meet Our Team</h3>
        <h5 class="text-muted">We are a group of professionals dedicated to their work</h5>
      </div>
    </div>
    <div class="row">

      <div class="col-lg-3 mb-4">

        <div class="row no-gutters">
          <div class="col-md-12 pro-pic">
            <img alt="image" src="demo/img/sections/team/1.webp" class="img-fluid p-4" loading="lazy">

            <ul class="mb-0 list-inline mt-3 px-4">
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-twitter"></i>
                  <span class="visually-hidden">Twitter</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-instagram"></i>
                  <span class="visually-hidden">Instagram</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-linkedin"></i>
                  <span class="visually-hidden">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-12">
            <div class="px-4">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CSO - Financial</h6>
              <p class="mt-3">We are a group of professionals dedicated to their work</p>
            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-3 mb-4">

        <div class="row no-gutters">
          <div class="col-md-12 pro-pic">
            <img alt="image" src="demo/img/sections/team/2.webp" class="img-fluid p-4" loading="lazy">

            <ul class="mb-0 list-inline mt-3 px-4">
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-twitter"></i>
                  <span class="visually-hidden">Twitter</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-instagram"></i>
                  <span class="visually-hidden">Instagram</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-linkedin"></i>
                  <span class="visually-hidden">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-12">
            <div class="px-4">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CSO - Financial</h6>
              <p class="mt-3">We are a group of professionals dedicated to their work</p>
            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-3 mb-4">

        <div class="row no-gutters">
          <div class="col-md-12 pro-pic">
            <img alt="image" src="demo/img/sections/team/3.webp" class="img-fluid p-4" loading="lazy">

            <ul class="mb-0 list-inline mt-3 px-4">
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-twitter"></i>
                  <span class="visually-hidden">Twitter</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-instagram"></i>
                  <span class="visually-hidden">Instagram</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-linkedin"></i>
                  <span class="visually-hidden">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-12">
            <div class="px-4">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CSO - Financial</h6>
              <p class="mt-3">We are a group of professionals dedicated to their work</p>
            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-3 mb-4">

        <div class="row no-gutters">
          <div class="col-md-12 pro-pic">
            <img alt="image" src="demo/img/sections/team/4.webp" class="img-fluid p-4" loading="lazy">

            <ul class="mb-0 list-inline mt-3 px-4">
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-twitter"></i>
                  <span class="visually-hidden">Twitter</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-instagram"></i>
                  <span class="visually-hidden">Instagram</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="social-link">
                  <i class="lab la-linkedin"></i>
                  <span class="visually-hidden">Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-12">
            <div class="px-4">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CSO - Financial</h6>
              <p class="mt-3">We are a group of professionals dedicated to their work</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>`
});Vvveb.Sections.add("team/team-4", {
    name: "Team 4",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/team/team-4-thumb.webp",
    html: `<section class="py-5" aria-label="team-6">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3">Meet Our Team</h3>
        <h5 class="text-muted">We are a group of professionals dedicated to their work</h5>
      </div>
    </div>
    <div class="row">

      <div class="col-lg-4 mb-4">

        <div class="row">
          <div class="col-md-12">
            <img alt="image" src="demo/img/sections/team/1.webp" class="img-fluid p-4" loading="lazy">
          </div>
          <div class="col-md-12">
            <div class="px-4">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CSO - Financial</h6>
              <p class="mt-3">We are a group of professionals dedicated to their work</p>
              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-4 mb-4">

        <div class="row">
          <div class="col-md-12 pro-pic">
            <img alt="image" src="demo/img/sections/team/2.webp" class="img-fluid p-4" loading="lazy">
          </div>
          <div class="col-md-12">
            <div class="px-4">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CSO - Financial</h6>
              <p class="mt-3">We are a group of professionals dedicated to their work</p>
              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-4 mb-4">

        <div class="row">
          <div class="col-md-12 pro-pic">
            <img alt="image" src="demo/img/sections/team/3.webp" class="img-fluid p-4" loading="lazy">
          </div>
          <div class="col-md-12">
            <div class="px-4">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CSO - Financial</h6>
              <p class="mt-3">We are a group of professionals dedicated to their work</p>
              <ul class="mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-twitter"></i>
                    <span class="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-instagram"></i>
                    <span class="visually-hidden">Instagram</span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link">
                    <i class="lab la-linkedin"></i>
                    <span class="visually-hidden">Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>`
});Vvveb.Sections.add("team/team-5", {
    name: "Team 5",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/team/team-5-thumb.webp",
    html: `<section class="py-5" aria-label="team-7">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3">Meet Our Team</h3>
        <h5 class="text-muted">We are a group of professionals dedicated to their work</h5>
      </div>
    </div>
    <div class="row">

      <div class="col-lg-6">
        <div class="card shadow-sm border-1 mb-4 p-0">

          <div class="row no-gutters">
            <div class="col-md-5">

              <img alt="image" src="demo/img/sections/team/1.webp" class="img-fluid" loading="lazy">

            </div>
            <div class="col-md-7">
              <div class="p-4">
                <h4 class="mb-3">John Doe</h4>
                <p>We are a group of professionals dedicated to their work</p>
                <ul class="mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-facebook-f"></i>
                      <span class="visually-hidden">Facebook</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-twitter"></i>
                      <span class="visually-hidden">Twitter</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-instagram"></i>
                      <span class="visually-hidden">Instagram</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-linkedin"></i>
                      <span class="visually-hidden">Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="col-lg-6">
        <div class="card shadow-sm border-1 mb-4 p-0">

          <div class="row no-gutters">
            <div class="col-md-5">

              <img alt="image" src="demo/img/sections/team/2.webp" class="img-fluid" loading="lazy">

            </div>
            <div class="col-md-7">
              <div class="p-4">
                <h4 class="mb-3">John Doe</h4>
                <p>We are a group of professionals dedicated to their work</p>
                <ul class="mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-facebook-f"></i>
                      <span class="visually-hidden">Facebook</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-twitter"></i>
                      <span class="visually-hidden">Twitter</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-instagram"></i>
                      <span class="visually-hidden">Instagram</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-linkedin"></i>
                      <span class="visually-hidden">Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <div class="row">

      <div class="col-lg-6">
        <div class="card shadow-sm border-1 mb-4 p-0">

          <div class="row no-gutters">
            <div class="col-md-5">

              <img alt="image" src="demo/img/sections/team/3.webp" class="img-fluid" loading="lazy">
            </div>
            <div class="col-md-7">
              <div class="p-4">
                <h4 class="mb-3">John Doe</h4>
                <p>We are a group of professionals dedicated to their work</p>
                <ul class="mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-facebook-f"></i>
                      <span class="visually-hidden">Facebook</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-twitter"></i>
                      <span class="visually-hidden">Twitter</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-instagram"></i>
                      <span class="visually-hidden">Instagram</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-linkedin"></i>
                      <span class="visually-hidden">Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="col-lg-6">

        <div class="card shadow-sm border-1 mb-4 p-0">
          <div class="row no-gutters">
            <div class="col-md-5">

              <img alt="image" src="demo/img/sections/team/4.webp" class="img-fluid" loading="lazy">

            </div>
            <div class="col-md-7">
              <div class="p-4">
                <h4 class="mb-3">John Doe</h4>
                <p>We are a group of professionals dedicated to their work</p>
                <ul class="mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-facebook-f"></i>
                      <span class="visually-hidden">Facebook</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-twitter"></i>
                      <span class="visually-hidden">Twitter</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-instagram"></i>
                      <span class="visually-hidden">Instagram</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="social-link">
                      <i class="lab la-linkedin"></i>
                      <span class="visually-hidden">Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>`
});Vvveb.Sections.add("team/team-6", {
    name: "Team 6",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/team/team-6-thumb.webp",
    html: `<section class="p-4" aria-label="team-11">
  <div class="container">
    <div class="row text-center">


      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4">

          <img src="demo/img/sections/team/1.webp" alt="team" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" loading="lazy">

          <h5>John Doe</h5>
          <span class="small text-uppercase text-muted">CEO - Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-facebook-f-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-twitter"></i>
                <span class="visually-hidden">Twitter</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-instagram"></i>
                <span class="visually-hidden">Instagram</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-linkedin"></i>
                <span class="visually-hidden">Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4">

          <img src="demo/img/sections/team/2.webp" alt="team" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" loading="lazy">

          <h5>Jane Doe</h5>
          <span class="small text-uppercase text-muted">CTO - Co-Founder</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-facebook-f"></i>
                <span class="visually-hidden">Facebook</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-twitter"></i>
                <span class="visually-hidden">Twitter</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-instagram"></i>
                <span class="visually-hidden">Instagram</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-linkedin"></i>
                <span class="visually-hidden">Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4">

          <img src="demo/img/sections/team/3.webp" alt="team" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" loading="lazy">

          <h5>John Doe</h5>
          <span class="small text-uppercase text-muted">CMO - Operations</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-facebook-f"></i>
                <span class="visually-hidden">Facebook</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-twitter"></i>
                <span class="visually-hidden">Twitter</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-instagram"></i>
                <span class="visually-hidden">Instagram</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-linkedin"></i>
                <span class="visually-hidden">Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4">

          <img src="demo/img/sections/team/4.webp" alt="team" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" loading="lazy">

          <h5>Jane Doe</h5>
          <span class="small text-uppercase text-muted">CCO - Financial</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-facebook-f"></i>
                <span class="visually-hidden">Facebook</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-twitter"></i>
                <span class="visually-hidden">Twitter</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-instagram"></i>
                <span class="visually-hidden">Instagram</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="social-link">
                <i class="lab la-linkedin"></i>
                <span class="visually-hidden">Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>`
});
	Vvveb.SectionsGroup["Team"] = ["team/team-1","team/team-2","team/team-3","team/team-4","team/team-5","team/team-6"];
Vvveb.Sections.add("testimonials/testimonials-1", {
    name: "Testimonials 1",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/testimonials/testimonials-1-thumb.webp",
    html: `<section class="testimonials-1 bg-alternate" aria-label="testimonials-1">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h2 class="text-center display-6 mb-1 fw-bold">Some of our users</h2>
        <p class="lead text-center text-muted mb-4">Hear what our users have to say</p>
      </div>
    </div>

    <div class="row text-center">


      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="rounded border testimonial" data-aos="fade-up">

          <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
              <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
            </g>
          </svg>

          <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.</p>

          <img src="demo/img/sections/team/1.webp" alt="team" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow border rounded-3" loading="lazy">

          <h3 class="mb-0">John Doe</h3>
          <span class="small text-uppercase text-muted">Company Inc.</span>
        </div>
      </div>


      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="rounded border testimonial" data-aos="fade-up" data-aos-delay="100">

          <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
              <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
            </g>
          </svg>


          <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.</p>
          <img src="demo/img/sections/team/2.webp" alt="team" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow border rounded-3" loading="lazy">

          <h3 class="mb-0">Jane Doe</h3>
          <span class="small text-uppercase text-muted">Company Inc.</span>
        </div>
      </div>


      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="rounded border testimonial" data-aos="fade-up" data-aos-delay="200">

          <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
              <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
            </g>
          </svg>


          <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.</p>

          <img src="demo/img/sections/team/3.webp" alt="team" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow border rounded-3" loading="lazy">

          <h3 class="mb-0">John Doe</h3>
          <span class="small text-uppercase text-muted">Company Inc.</span>
        </div>
      </div>


      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="rounded border testimonial" data-aos="fade-up" data-aos-delay="300">

          <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
              <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
            </g>
          </svg>


          <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.</p>

          <img src="demo/img/sections/team/4.webp" alt="team" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow border rounded-3" loading="lazy">

          <h3 class="mb-0">Jane Doe</h3>
          <span class="small text-uppercase text-muted">Company Inc.</span>
        </div>
      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("testimonials/testimonials-2", {
    name: "Testimonials 2",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/testimonials/testimonials-2-thumb.webp",
    html: `<section class="py-5" aria-label="testimonials-2">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h2 class="mb-1">Some of our users</h2>
        <h3 class="lead text-muted mb-3">Hear what our users have to say</h3>
      </div>
    </div>
    <div class="row text-center">

      <div class="col-lg-3 mb-4">

        <div class="row">
          <div class="col-md-12">
            <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
              </g>
            </svg>


            <div class="card-subtitle mt-3">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing</p>
            </div>

            <img alt="image" src="demo/img/sections/team/1.webp" class="img-fluid p-4 rounded-circle" loading="lazy">
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">

              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CTO - Founder</h6>

            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-3 mb-4">

        <div class="row">
          <div class="col-md-12">
            <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
              </g>
            </svg>


            <div class="card-subtitle mt-3">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing</p>
            </div>

            <img alt="image" src="demo/img/sections/team/2.webp" class="img-fluid p-4 rounded-circle" loading="lazy">
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CTO - Tech</h6>

            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-3 mb-4">

        <div class="row">
          <div class="col-md-12">
            <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
              </g>
            </svg>


            <div class="card-subtitle mt-3">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing</p>
            </div>

            <img alt="image" src="demo/img/sections/team/3.webp" class="img-fluid p-4 rounded-circle" loading="lazy">
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CSO - Financial</h6>
            </div>
          </div>
        </div>

      </div>


      <div class="col-lg-3 mb-4">

        <div class="row">
          <div class="col-md-12">
            <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
              </g>
            </svg>


            <div class="card-subtitle mt-3">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing</p>
            </div>

            <img alt="image" src="demo/img/sections/team/4.webp" class="img-fluid p-4 rounded-circle" loading="lazy">
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 mb-0">John Doe</h5>
              <h6 class="text-muted mb-3">CMO - Operations</h6>


            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>`
});Vvveb.Sections.add("testimonials/testimonials-3", {
    name: "Testimonials 3",
    image: Vvveb.themeBaseUrl + "/screenshots/sections/testimonials/testimonials-3-thumb.webp",
    html: `<section class="py-5 team-2" aria-label="testimonials-3">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h2 class="mb-1">Some of our users</h2>
        <h3 class="lead text-muted mb-3">Hear what our users have to say</h3>
      </div>
    </div>
    <div class="row justify-content-center py-5">
      <div class="card col-md-3">
        <div class="card-content">
          <div class="card-body">


            <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
              </g>
            </svg>


            <div class="card-subtitle mt-3">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing</p>
            </div>

            <div class="profile">
              <img src="demo/img/sections/team/1.webp" loading="lazy" alt="team">
            </div>
            <div class="card-title mt-4">
              <h4>Jane Doe</h4>
              <small>CEO - Founder</small>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-3">
        <div class="card-content">
          <div class="card-body">
            <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
              </g>
            </svg>


            <div class="card-subtitle mt-3">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing</p>
            </div>

            <div class="profile">
              <img src="demo/img/sections/team/2.webp" loading="lazy" alt="team">
            </div>
            <div class="card-title mt-4">
              <h4>John Doe</h4>
              <small>CTO - Co-Founder</small>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-3">
        <div class="card-content">
          <div class="card-body">
            <svg enable-background="new 0 0 33 25" version="1.1" viewBox="0 0 33 25" width="42" height="42" fill="#0d6efd" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g>
                <path d="M18.006,6.538c0-1.973,0.662-3.554,1.988-4.743c1.326-1.19,2.977-1.785,4.947-1.785   c2.517,0,4.488,0.799,5.916,2.397C32.285,4.004,33,6.13,33,8.782c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.061,4.743c-1.188,1.258-2.43,2.244-3.723,2.958c-1.291,0.714-2.413,1.239-3.365,1.581l-3.265-5.508   c1.36-0.545,2.517-1.412,3.468-2.602c0.953-1.19,1.496-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.724-1.786   C18.566,10.09,18.006,8.509,18.006,6.538z M0.359,6.538c0-1.973,0.663-3.554,1.989-4.743C3.674,0.604,5.324,0.01,7.295,0.01   c2.518,0,4.488,0.799,5.916,2.397c1.429,1.597,2.143,3.723,2.143,6.375c0,2.719-0.424,5.032-1.275,6.936   c-0.85,1.903-1.869,3.483-3.06,4.743c-1.188,1.258-2.431,2.244-3.724,2.958C6.004,24.133,4.883,24.658,3.93,25l-3.264-5.508   c1.36-0.545,2.516-1.412,3.467-2.602c0.953-1.19,1.497-2.465,1.633-3.824c-1.359,0-2.602-0.597-3.723-1.786   C0.92,10.09,0.359,8.509,0.359,6.538z"></path>
              </g>
            </svg>


            <div class="card-subtitle mt-3">
              <p class="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing</p>
            </div>

            <div class="profile">
              <img src="demo/img/sections/team/3.webp" loading="lazy" alt="team">
            </div>
            <div class="card-title mt-4">
              <h4>Jane Doe</h4>
              <small>CSO - Financial</small>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>`
});
	Vvveb.SectionsGroup["Testimonials"] = ["testimonials/testimonials-1","testimonials/testimonials-2","testimonials/testimonials-3"];
