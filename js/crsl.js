// Carousel elements

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide div img");

// Carousel buttons

const prevButton = document.querySelector("#carouselPrev");
const nextButton = document.querySelector("#carouselNext");

let carouselCounter = 1;
let carouselSize = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-carouselSize *
  carouselCounter}px)`;

// Control positionX in the slideshow if viewport suffers a redimension

window.addEventListener("resize", () => {
  carouselSize = carouselImages[0].clientWidth;
  carouselSlide.style.transform = `translateX(${-carouselSize *
    carouselCounter}px)`;
});

// Buttons behaviour

nextButton.addEventListener("click", () => {
  // Prevents change of counter before transitionend
  if (carouselCounter >= carouselImages.length - 1) return;

  carouselSlide.style.transition = `transform 0.4s ease-in-out`;
  carouselCounter++;
  carouselSlide.style.transform = `translateX(${-carouselSize *
    carouselCounter}px)`;
});

prevButton.addEventListener("click", () => {
  // Prevents change of counter before transitionend
  if (carouselCounter <= 0) return;

  carouselSlide.style.transition = `transform 0.4s ease-in-out`;
  carouselCounter--;
  carouselSlide.style.transform = `translateX(${-carouselSize *
    carouselCounter}px)`;
});

// Goes back to first or last pic in the slide

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[carouselCounter].id === "lastClone") {
    carouselSlide.style.transition = `none`;
    carouselCounter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-carouselSize *
      carouselCounter}px)`;
  }
  if (carouselImages[carouselCounter].id === "firstClone") {
    carouselSlide.style.transition = `none`;
    carouselCounter = carouselImages.length - carouselCounter;
    carouselSlide.style.transform = `translateX(${-carouselSize *
      carouselCounter}px)`;
  }
});
