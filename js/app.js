const parallaxElements = document.querySelectorAll(".parallax");

let speedVertical,
  speedHorizontal = 0;

document.addEventListener("scroll", apply2DEffects);

function apply2DEffects() {
  parallaxElements.forEach(element => {
    if (element.dataset.direction === "vertical") {
      speedVertical = element.dataset.speed * element.getBoundingClientRect().top
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

const movingBackground = document.querySelector(".moving-bg");