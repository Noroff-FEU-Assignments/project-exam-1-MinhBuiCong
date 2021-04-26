const navSlide = function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const navSearchContainer = document.querySelector(
    ".nav-search-social-container"
  );

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    if (navSearchContainer.style.animation) {
      navSearchContainer.style.animation = "";
    } else {
      navSearchContainer.style.animation = `navLinkFade 2s ease forwards`;
    }
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();
