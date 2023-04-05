const modal = document.getElementById("my_modal");
const openModal = document.getElementById("open_modal");
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
