///////////////////////////////////////////////////////////
// Animated typing

let typed = new Typed("#dynamicText", {
  strings: ["Developer.", "Designer."],
  typeSpeed: 60, // Typing speed in milliseconds
  backSpeed: 40, // Backspacing speed in milliseconds
  loop: true, // Set to true to loop through the strings infinitely
});

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation when clicking on mobile nav link

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Smooth animated navbar while scrolling

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header");
  if (window.scrollY > 100) {
    navbar.classList.add("header-scrolled"); // Add class when scrolled
  } else {
    navbar.classList.remove("header-scrolled"); // Remove class when not scrolled
  }
});
