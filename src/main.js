"use strict";

const mainNav = document.querySelector(".main-nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", handleBurger);

function handleBurger(e) {
  mainNav.classList.toggle("open");
}
gsap.fromTo(
  ".hero",
  { x: -200, opacity: 0.3 },
  { duration: 1, delay: 0.2, x: 0, opacity: 1 }
);
gsap.fromTo(".hero-clipped", { scaleX: 0 }, { duration: 1, scaleX: 1 });
gsap.fromTo(
  ".logo",
  { x: -200, opacity: 0 },
  { duration: 1, delay: 0.7, x: 0, opacity: 1 }
);
gsap.fromTo(
  ".hamburger-menu",
  { x: 200, opacity: 0 },
  { duration: 1, delay: 1, x: 0, opacity: 1 }
);
gsap.fromTo(
  ".hero-textbox",
  { yPercent: 40, opacity: 0 },
  { duration: 1, delay: 2, yPercent: -50, opacity: 1 }
);
