const navSlide = function () {
  let burger = document.querySelector(".burger");
  const nav = document.querySelector(".section-2");
  const navLinks = document.querySelectorAll(".section-2 li");

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
        nav.style.display = "none";
      }
    });
    burger.classList.toggle("toggle");
    nav.style.display = "flex";
  });
};

navSlide();
