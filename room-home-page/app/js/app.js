const nav = document.querySelector(".mobile-navigation");
const navToggle = document.querySelector(".mobile-toggle");
const container = document.querySelector('.container')
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");


//navigation
navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

//hero gallery
data = [
  {
    image_mobile: "../../images/mobile-image-hero-1.jpg",
    image_desktop: "../../images/desktop-image-hero-1.jpg",
  },
  {
    image_mobile: "../../images/mobile-image-hero-2.jpg",
    image_desktop: "../../images/desktop-image-hero-2.jpg",
  },
  {
    image_mobile: "../../images/mobile-image-hero-3.jpg",
    image_desktop: "../../images/desktop-image-hero-3.jpg",
  },
];


let id = 0;
container.addEventListener("click", (event) => {
  let target = event.target.classList;
  if (target.contains("next")) {
    if (id >= 2) {
      id = 0;
    } else {
      id += 1;
    }
  }
  if (target.contains("pre")) {
    if (id <= 0) {
      id = 2;
    } else {
      id -= 1;
    }
  }
  if (window.matchMedia("(min-width: 900px)").matches) {
    hero.style.backgroundImage = `url(${data[id].image_desktop})`;
  } else {
    hero.style.backgroundImage = `url(${data[id].image_mobile})`;
  }
});


window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 900px)").matches ) {

    }
  })
