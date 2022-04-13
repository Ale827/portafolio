//scroll-up
document.getElementById("btn-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.scrollTo(0, 0);
  }
}

buttonUp = document.getElementById("btn-up");

window.onscroll = function () {
  var scrol = document.documentElement.scrollTop;

  if (scrol > 500) {
    buttonUp.style.transform = "scale(1)";
  } else if (scrol < 500) {
    buttonUp.style.transform = "scale(0)";
  }
};
