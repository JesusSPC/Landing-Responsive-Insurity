// Catch common HTML classes to iterate
const parallaxElements = document.querySelectorAll(".parallax");

// Catch sections
const header = document.querySelector("header");
const phoneSection = document.querySelector(".customers");
// const teamsSection = document.querySelector(".teams");

// Catch elements of those sections
const headerPolygon = document.querySelector(".header-polygon");
const headerImg = document.querySelector(".header-img");
const phone = document.querySelector(".s2-phone");
const phoneGraph = document.querySelector(".s2-graph");
const teamsBackground = document.querySelector(".moving-bg img");

let speedVertical,
  speedHorizontal = 0;

document.addEventListener("scroll", apply2DEffects);

header.onmousemove = function(e) {
  let polygonX = (e.pageX * -1 / 40);
  let polygonY = (e.pageY * -1 / 40);
  headerPolygon.style.transform = `translate(${polygonX}px, ${polygonY}px)`;
  let imgX = -(e.pageX * -1 / 10);
  let imgY = -(e.pageY * -1 / 10);
  headerImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

header.addEventListener("transitionend", () => {
  console.log("hola")
})

function apply2DEffects() {
  parallaxElements.forEach(element => {
    if (element.dataset.direction === "vertical") {
      speedVertical =
        element.dataset.speed * element.getBoundingClientRect().top;
      // if (teamsSection.getBoundingClientRect().top < window.innerHeight) {
      //   element.style.transform = `translateY(${speedVertical}px)`;
      // }
    } else {
      speedVertical = 0;
    }

    if (element.dataset.direction === "horizontal") {
      speedHorizontal =
        element.dataset.speed * element.getBoundingClientRect().top;
    } else {
      speedHorizontal = 0;
    }

    element.style.transform = `translate(${speedHorizontal}px, ${speedVertical}px)`;
  });

  if (phoneSection.getBoundingClientRect().top < window.innerHeight) {
    phone.classList.add("s2-phone-move");
    phoneGraph.classList.add("s2-graph-move");
  }
}
