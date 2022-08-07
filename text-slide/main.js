let mainText = document.querySelector("h1");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value > 300) {
    mainText.style.animation = "back 2s ease-out forwards";
  } else {
    mainText.style.animation = "slide 2s ease-out";
  }
  console.log("scrollY", value);
});
