// Toggle Class Active Untuk Hamberger Menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle Clas Acrive Untuk Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};
//Klik Di luar SideBar Untuk mengilangkan Menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    searchBox.focus();
  }
});
