const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.header-menu-list');

if (menuBtn && menuList) {
  menuBtn.addEventListener("click", () => {
    menuList.classList.toggle('active');
  });

  document.addEventListener("click", (event) => {
    if (!menuBtn.contains(event.target) && !menuList.contains(event.target)) {
      menuList.classList.remove('active');
    }
  });
}

  const burgerBtn = document.querySelector(".burger-btn");
  const closeBtn = document.querySelector(".mobile-menu-close-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".mobile-menu-link");

  function openMenu() {
    mobileMenu.classList.add("is-open");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }

  burgerBtn.addEventListener("click", openMenu);

  closeBtn.addEventListener("click", closeMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  mobileMenu.addEventListener("click", function (event) {
    if (!event.target.closest(".mobile-menu-container")) {
      closeMenu();
    }
  });


