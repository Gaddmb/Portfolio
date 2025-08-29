const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");
const target = document.getElementById("target");

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

let array = ["Développeur", "Front-end", "Backend"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
};

const loop = () => {
  if (wordIndex >= array.length) {
    wordIndex = 0;
  }

  const showWord = () => {
    if (letterIndex >= array[wordIndex].length) {
      letterIndex = 0;
      wordIndex++;
      setTimeout(() => {
        target.innerHTML = "";
        loop();
      }, 2800);
      return;
    }
    createLetter();
    letterIndex++;
    setTimeout(showWord, 60);
  };
  showWord();
};

loop();
