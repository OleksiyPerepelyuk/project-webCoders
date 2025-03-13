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
