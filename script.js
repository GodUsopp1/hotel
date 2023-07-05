var ul = document.getElementsByClassName("ul")[0];
var barsIcon = document.querySelector(".fa-bars");
var xmarkIcon = document.querySelector(".fa-xmark");

barsIcon.addEventListener("click", function () {
  ul.classList.add("baractive");
  barsIcon.classList.remove("active");
  xmarkIcon.classList.add("active");
});

xmarkIcon.addEventListener("click", function () {
  ul.classList.remove("baractive");
  barsIcon.classList.add("active");
  xmarkIcon.classList.remove("active");
});
