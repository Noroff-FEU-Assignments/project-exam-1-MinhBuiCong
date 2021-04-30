var prevPosition = window.pageYOffset;
window.onscroll = function () {
  var currentPosition = window.pageYOffset;
  if (prevPosition > currentPosition) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevPosition = currentPosition;
};
