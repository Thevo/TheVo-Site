document.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(min-width: 920px)").matches) {
    console.log("matchMedia");

    document.querySelectorAll(".img").forEach((item, i) => {
      var time = 4000 * i;
      // console.log(time);
      setTimeout(function slide() {
        item.classList.toggle("slide");

        setTimeout(function () {
          item.classList.toggle("slide");
        }, 4000);

        setTimeout(slide, 4000 * 7);
      }, time);
    });
  }
});
