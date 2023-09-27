// Hmburger
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".moblie-nav-toggle");
const hamburgerXIcon = document.querySelector(".hamburger-X-icon");
const hamburgerIcon = document.querySelector(".hamburger-icon");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    hamburgerXIcon.classList.remove("hidden");
    hamburgerIcon.classList.add("hidden");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    hamburgerXIcon.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
  }
});

// loader

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");

  const nav = document.querySelector(".newNav");
  nav.classList.remove("hidden");
  const showCaseImage = document.querySelector(".showcase-img");
  showCaseImage.classList.remove("hidden");
  // all sections
  const showCase = document.querySelector("#showcase");
  showCase.classList.remove("hidden");
  const useCase = document.querySelector("#use-case");
  useCase.classList.remove("hidden");
  const aboutSec = document.querySelector("#about-sec");
  aboutSec.classList.remove("hidden");
  const team = document.querySelector("#team");
  team.classList.remove("hidden");
  const howToBuy = document.querySelector("#how-to-buy");
  howToBuy.classList.remove("hidden");
  const tokenomics = document.querySelector("#tokenomics");
  tokenomics.classList.remove("hidden");
  const socials = document.querySelector("#socials");
  socials.classList.remove("hidden");
  ArowBtn.classList.remove("hidden");
  const logo = document.querySelector(".logo");
  logo.classList.remove("hidden");
  const useCaseImg = document.querySelector(".use-case-1");
  useCaseImg.classList.remove("hidden");
  const aboutImage = document.querySelector(".about-image");
  aboutImage.classList.remove("hidden");
  loader.addEventListener("transitioned", () => {
    document.body.removeChild(loader);
  });
});

// background color on scroll

// let preScroll = window.scrollY;
// let nav = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   let currentScroll = window.scrollY;

//   if (preScroll >= currentScroll) {
//   }
// });

// arrow btn

let ArowBtn = document.getElementsByClassName("arow-up")[0];
console.log(ArowBtn);

ArowBtn.onclick = () => {
  window.scrollTo(0, 0);
  // ArowBtn.style.display = "none";
};

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    ArowBtn.classList.add("hidden");
    ArowBtn.style.display = "none";
  } else {
    ArowBtn.classList.remove("hidden");
    ArowBtn.style.display = "block";
  }
});

// reveals
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Navlinks down

let Navlinks = document.querySelectorAll(".Nav-links");
for (var i = 0; i < Navlinks.length; i++) {
  Navlinks[i].addEventListener("click", () => {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    hamburgerXIcon.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
  });
}
