document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const navMenu = document.querySelector(".header-navigation");
  const body = document.body;

  burgerBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  // Закрытие меню при клике на ссылку
  document.querySelectorAll(".header-menu-link").forEach(link => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
});
