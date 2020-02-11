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

let phoneSlided = false;

// Effects in header images
header.onmousemove = function(e) {
  let polygonX = (e.pageX * -1) / 60;
  let polygonY = (e.pageY * -1) / 30;
  headerPolygon.style.transform = `translate(${polygonX}px, ${polygonY}px)`;
  let imgX = -((e.pageX * -1) / 20);
  let imgY = -((e.pageY * -1) / 40);
  headerImg.style.transform = `translate(${imgX}px, ${imgY}px)`;
};

// Effects when scrolling the page
document.addEventListener("scroll", apply2DEffects);

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

  // Phone & Graph appear/dissapear when you enter/leave customers section.
  if (
    !phoneSlided &&
    phoneSection.getBoundingClientRect().top < window.innerHeight
  ) {
    phone.classList.remove("s2-phone-move-down");
    phoneGraph.classList.remove("s2-graph-move-down");
    phone.classList.add("s2-phone-move-up");
    phoneGraph.classList.add("s2-graph-move-up");
    phoneSlided = true;
  }

  if (phoneSlided && phoneSection.getBoundingClientRect().top <= 0) {
    phone.classList.remove("s2-phone-move-up");
    phoneGraph.classList.remove("s2-graph-move-up");
    phone.classList.add("s2-phone-move-down");
    phoneGraph.classList.add("s2-graph-move-down");
    phoneSlided = false;
  }
}
