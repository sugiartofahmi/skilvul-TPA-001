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
// const projectsData = data

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    el.classList.add("active");
  });
});

home.onclick = () => {
  document.title = "Home | Fahmi Sugiarto";
  main.innerHTML = `<section id="home_section">
        <h1 id="greeting">Hello world, i am</h1>
        <h1>MOHAMMAD NUR<span id="name">FAHMI</span> SUGIARTO</h1>
        <h1 id="description">
          Informatics engineering student at Nusantara Islamic University, has
          an interest in website development, especially in front end web
          developer
        </h1>
        <section id="resume">
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
  main.innerHTML = `<section id="about_section">
  <section>
    <h1 class="label"><span>About</span></h1>
   
  </section>
  <section class="grid_about">
    <div class="card_about">
      <div class="card_info">
        <p class="text_title"><span>
        This is me
        </span>
        </p>
        <p class="text_body">I am a student pursuing a degree in technology. I have experience in web programming, especially in front-end development using HTML, CSS and JavaScript. I also have skills in using frameworks like React and Vue. I am very interested in doing an internship in front-end web development and am confident that I can add positive value to the company.

        </p>

      </div>
    </div>
    <div class="card_about">
    <div class="card_info">
      <p class="text_title"><span>
      This is me
      </span>
      </p>
      <p class="text_body">I am a student pursuing a degree in technology. I have experience in web programming, especially in front-end development using HTML, CSS and JavaScript. I also have skills in using frameworks like React and Vue. I am very interested in doing an internship in front-end web development and am confident that I can add positive value to the company.

      </p>

    </div>
  </div>
  </section>
</section>`;
};

projects.onclick = () => {
  document.title = "Projects | Fahmi Sugiarto";
  main.innerHTML =
    `<section id="projects_section">
  <section>
    <h1 class="label"><span>Projects</span></h1>
    <h1 class="description">
      These are some of the projects I've made
    </h1>
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
  <p class="text_title">${el.title}</p>
  <p class="text_body">${el.description}</p>
  </div>
  </div>
  </a>`
      )
      .join()
      .replace(/\,/gi, "") +
    `</section>
</section>`;
};

blog.onclick = () => {
  document.title = "Blog | Fahmi Sugiarto";
  main.innerHTML = `<section id="blog_section">
  <section>
    <h1 class="label"><span>Blog</span></h1>
    <h1 class="description">
    You can read my writings, hoping to help you understand everything about web developers
    </h1>
  </section>
  <section class="grid_blog">
<a  href="https://shortway.mnfs.dev/" target="_blank">
    <div class="card_blog">
      <div class="card_info">
        <p class="text_title">Error Boundaries</p>
        <p class="text_body">How to handle error with error boundaries in react js</p>

      </div>
    </div>
</a>
  </section>
</section>`;
};
