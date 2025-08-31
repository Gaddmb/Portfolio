const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const menuToggle = document.querySelector(".menu-toggle");

console.log(menuToggle);

//-----tabs------

tablinks.forEach((link) => {
  link.addEventListener("click", () => {
    const tabname = link.getAttribute("data-tab");
    opentab(tabname, link);
  });
});

function opentab(tabname, clickedElement) {
  tablinks.forEach((link) => link.classList.remove("active-link"));
  tabcontents.forEach((content) => content.classList.remove("active-tab"));

  clickedElement.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//-----menu toggle------

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

//-----animation text------

const target = document.getElementById("target");
const text = "Développeur Junior Fullstack";
target.style.color = "#ff006e";
let idx = 1;
let speed = 150; // ajustable en ms

function writeText() {
  target.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1; // boucle infinie
  }

  setTimeout(writeText, speed);
}

writeText();
