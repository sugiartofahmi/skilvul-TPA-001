const navLink = document.querySelectorAll(".nav_link");
const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const blog = document.getElementById("blog");
const main = document.getElementById("main_section");
const projectsData = [
  {
    title: "Shortway",
    description: "A website application to shorten long urls",
    image: "/assets/img/shortway.png",
    url: "https://shortway.mnfs.dev/",
  },
  {
    title: "Weather App",
    description: "A website to see the weather in several places",
    image: "/assets/img/weather.png",
    url: "https://weather.mnfs.dev/",
  },
  {
    title: "Quickchat",
    description: "A website to generate whatsapp numbers to url",
    image: "/assets/img/quickchat.png",
    url: "https://quickchat.mnfs.dev/",
  },
];

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    el.classList.add("active");
  });
});

home.onclick = () => {
  document.title = "Home | Fahmi Sugiarto";
  main.innerHTML = ` <section id="home_page">
  <h1 id="greeting">Hello world, i am</h1>
  <h1 id="name">
    MOHAMMAD NUR<span class="active">FAHMI</span> SUGIARTO
  </h1>
  <h1 class="about">
    Informatics engineering student at Nusantara Islamic University, has
    an interest in website development, especially in front end web
    developer
  </h1>
  <section class="resume">
  <a href="https://github.com/sugiartofahmi" target="_blank">
    <img class="resume_icon" src="./assets/icon/github.svg" alt="" />
  </a>
  <a
    href="https://www.linkedin.com/in/mohammad-nurfahmi-sugiarto"
    target="_blank"
  >
    <img class="resume_icon" src="./assets/icon/linkedin.png" alt="" />
  </a>
  <a href="https://www.instagram.com/mnfs.dev/" target="_blank">
    <img class="resume_icon" src="./assets/icon/instagram.png" alt="" />
  </a>
</section>
</section>`;
};

about.onclick = () => {
  document.title = "About | Fahmi Sugiarto";
  main.innerHTML = `<section id="about_page">
  <section>
    <h1 class="title"><span class="active">About</span></h1>
  </section>
  <section class="grid_about">
    <section class="card_about">
      <section class="card_info">
        <p class="text_title"><span class="active">
        This is me
        </span>
        </p>
        <p class="text_body">I am a student pursuing a degree in technology. I have experience in web programming, especially in front-end development using HTML, CSS and JavaScript. I also have skills in using frameworks like React and Vue. I am very interested in doing an internship in front-end web development and am confident that I can add positive value to the company.
        </p>
      </section>
    </section>
    <section class="card_about">
      <section class="card_info">
        <p class="text_title"><span class="active">
        Skills
        </span>
        </p>
        <section class="resume">
        <img class="skill_icon" src="./assets/icon/html.svg" />
        <img class="skill_icon" src="./assets/icon/css.svg" />
        <img class="skill_icon" src="./assets/icon/js.svg" />
        <img class="skill_icon" src="./assets/icon/react.svg" />
        <img class="skill_icon" src="./assets/icon/tailwind.svg" />
        </section>
      </section>
    </section>
  </section>
</section>`;
};

projects.onclick = () => {
  document.title = "Projects | Fahmi Sugiarto";
  main.innerHTML =
    `<section id="projects_page">
  <section>
    <h1 class="title"><span class="active">Projects</span></h1>
    <h1 class="description">These are some of the projects I've made</h1>
  </section>
  <section class="grid"> 
  ` +
    projectsData
      .map(
        (el) =>
          `<a href=${el.url} target="_blank">
<div class="card">
<div class="card_img">
<img src=${el.image} alt="" />
</div>
<div class="card_info">
<p class="card_title">${el.title}</p>
<p class="card_body">${el.description}</p>
</div>
</div>
</a>`
      )
      .join()
      .replace(/\,/gi, "") +
    `
    </section>
</section>`;
};

blog.onclick = () => {
  document.title = "Blog | Fahmi Sugiarto";
  main.innerHTML = `<section id="blog_page">
  <section>
    <h1 class="title"><span class="active">Blog</span></h1>
    <h1 class="description">
    You can read my writings, hoping to help you understand everything about web developers
    </h1>
  </section>
  <section class="grid_blog">
    <div class="card_blog">
      <div id="openModal" class="card_info">
        <p class="text_title">React app with Vite</p>
        <p class="text_body">How to create a new React app with Vite</p>
      </div>
    </div>
  </section>
</section>
    <section id="myModal" class="modal">
      <section class="modal-content">
        <span class="close">&times;</span>
        <section class="content">
            <section>
            <p class="text_title">How to create a new React app with Vite</p>
            <p class="text_body">Vite.js is a development tool that comes with a dev server and is used for modern web applications. It offers a faster and smoother workflow in terms of development. It has two major parts:</p>
      
            <ul class="sub_content">
            <li>
            A dev server serves the source files over native ES modules, with build-in features and fast Hot Module Replacement (HMR) for updating modules during the execution of the application. When changes are made to the source code of an application, only those changes are updated, without the need to reload the entire application. This helps speed up the development time.
            </li>
            <li>
            A build command enables us to bundle our code with Rollup and offers highly optimized static assets for production.
            </li>
            </ul>
            </section>
            <section>
            <p class="text_title">How to use</p>
            <ol class="sub_content">
            <li>
            yarn create vite
            </li>
            <li>
            Name the project to be created, example "learn-react"
            </li>
            <li>
            Enter into the project folder that was created, with the command, cd learn-react
            </li>
            <li>
            Install dependencies, with command yarn
            </li>
            <li>
            Run the dev command below to start the development server, with command yarn dev
            </li>
            </ol>
            </section>
            
      </section>
    </section>
`;
  const modal = document.getElementById("myModal");
  const openModal = document.getElementById("openModal");
  const span = document.getElementsByClassName("close")[0];
  openModal.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
