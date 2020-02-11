const buildingsSlide = document.querySelector(".buildings-container");

let isDown = false;
let startX;
let scrollLeft;

buildingsSlide.addEventListener("mousedown", e => {
  e.preventDefault();
  isDown = true;
  startX = e.pageX - buildingsSlide.offsetLeft;
  scrollLeft = buildingsSlide.scrollLeft;
});
buildingsSlide.addEventListener("mouseleave", () => {
  isDown = false;
});
buildingsSlide.addEventListener("mouseup", () => {
  isDown = false;
});
buildingsSlide.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - buildingsSlide.offsetLeft;
  const walk = (x - startX) * 2;
  buildingsSlide.scrollLeft = scrollLeft - walk;
});
