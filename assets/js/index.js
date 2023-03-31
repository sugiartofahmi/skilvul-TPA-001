const navLink = document.querySelectorAll(".nav_link");
navLink.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    el.classList.add("active");
  });
});

const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const blog = document.getElementById("blog");
const main = document.getElementById("main_section");

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
};

blog.onclick = () => {
  document.title = "Blog | Fahmi Sugiarto";
};
