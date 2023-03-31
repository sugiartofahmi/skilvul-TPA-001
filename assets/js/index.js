const navLink = document.querySelectorAll(".nav_link");
const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const blog = document.getElementById("blog");
const main = document.getElementById("main_section");

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
</section>`;
};

about.onclick = () => {
  document.title = "About | Fahmi Sugiarto";
  main.innerHTML = `<h1>Tets</h1>`;
};

projects.onclick = () => {
  document.title = "Projects | Fahmi Sugiarto";
  main.innerHTML = `<section id="projects_section">
  <section>
    <h1 id="projects_label"><span>Projects</span></h1>
    <h1 id="projects_description">
      These are some of the projects I've made
    </h1>
  </section>
  <section id="projects_grid">
<a href="https://shortway.mnfs.dev/" target="_blank">
    <div class="card">
      <div class="card_img">
        <img src="/assets/img/shortway.png" alt="" />
      </div>
      <div class="card_info">
        <p class="text_title">Shortway</p>
        <p class="text_body">A website application to shorten long urls</p>
      </div>
    </div>
</a>
<a href="https://weather.mnfs.dev/" target="_blank">
    <div class="card">
      <div class="card_img">
        <img src="/assets/img/weather.png" alt="" />
      </div>
      <div class="card_info">
        <p class="text_title">Weather App</p>
        <p class="text_body">A website to see the weather in several places</p>
      </div>
    </div>
    </a>
    <a href="https://quickchat.mnfs.dev/" target="_blank">
    <div class="card">
      <div class="card_img">
        <img src="/assets/img/quickchat.png" alt="" />
      </div>
      <div class="card_info">
        <p class="text_title">Quickchat</p>
        <p class="text_body">A website to generate whatsapp numbers</p>
      </div>
    </div>
    </a>
  </section>
</section>`;
};

blog.onclick = () => {
  document.title = "Blog | Fahmi Sugiarto";
};
