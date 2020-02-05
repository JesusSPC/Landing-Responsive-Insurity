const parallaxElements = document.querySelectorAll(".parallax");
const teamsSection = document.querySelector(".teams");
const teamsBackground = document.querySelector(".moving-bg img");

let speedVertical,
  speedHorizontal = 0;

document.addEventListener("scroll", apply2DEffects);

function apply2DEffects() {

  parallaxElements.forEach(element => {
    if (element.dataset.direction === "vertical") {
      speedVertical = element.dataset.speed * element.getBoundingClientRect().top
      if (teamsSection.getBoundingClientRect().top < window.innerHeight){
        element.style.transform = `translateY(${speedVertical}px)`;
      }
    } else {
      speedVertical = 0
    }

    if (element.dataset.direction === "horizontal") {
      speedHorizontal = element.dataset.speed * element.getBoundingClientRect().top
    } else {
      speedHorizontal = 0
    }

    element.style.transform = `translate(${speedHorizontal}px, ${speedVertical}px)`;
  });
}

