var menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", showMenu, true);

var link = document.querySelector("#mobile-link");
link.addEventListener("click", hideMenu, false);

function showMenu(e) {
  link.classList.add("show");

  document.body.style.overflow = "hidden";
}

function hideMenu(e) {
  link.classList.remove("show");
  e.stopPropagation();

  document.body.style.overflow = "auto";
}

// var prevPosition = window.pageYOffset;
// window.onscroll = function () {
//   var currentPosition = window.pageYOffset;
//   if (prevPosition > currentPosition) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-200px";
//   }
//   prevPosition = currentPosition;
// };
