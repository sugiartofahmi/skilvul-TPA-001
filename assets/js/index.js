const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    el.classList.add("active");
  });
});
