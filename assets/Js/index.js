const navBar = document.querySelector("nav");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");
const about = document.querySelector(".about-description");
const buttons = document.querySelectorAll(".tab-button");
const skill = document.querySelector(".skills-section");
const skillsGallery = document.getElementById("skills-gallery");
const containerProject = document.querySelector(".container");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

const images = [
  {
    src: "assets/img/Booki.webp",
    category: "OpenClassroom",
    title: "HTML / CSS",
    github: "https://github.com/Gaddmb/Booki",
  },
  {
    src: "assets/img/mont.webp",
    category: "MyProject",
    title: "HTML / CSS",
    github: "https://github.com/Gaddmb/Mont",
  },
  {
    src: "assets/img/argentbank.webp",
    category: "OpenClassroom",
    title: "React",
    github: "https://github.com/Gaddmb/ArgentBank-website",
  },
  {
    src: "assets/img/Techno.webp",
    category: "MyProject",
    title: "HTML / CSS",
    github: "https://github.com/Gaddmb/Tech",
  },
  {
    src: "assets/img/Sophie-Bluel.webp",
    category: "OpenClassroom",
    title: "JavaScript",
    github: "https://github.com/Gaddmb/Sophie-bluel",
  },
  {
    src: "assets/img/Nina-Carducci.webp",
    category: "OpenClassroom",
    title: "SEO",
    github: "https://github.com/Gaddmb/Nina-Carducci",
  },
  {
    src: "assets/img/run.webp",
    category: "MyProject",
    title: "HTML / CSS",
    github: "https://github.com/Gaddmb/Running",
  },
  {
    src: "assets/img/Event.webp",
    category: "OpenClassroom",
    title: "Debugging",
    github: "https://github.com/Gaddmb/Projet_10",
  },
  {
    src: "assets/img/gaming.webp",
    category: "MyProject",
    title: "HTML / CSS",
    github: "https://github.com/Gaddmb/Gaming",
  },
  {
    src: "assets/img/meal.webp",
    category: "MyProject",
    title: "API meal",
    github: "https://github.com/Gaddmb/meal-app",
  },
  {
    src: "assets/img/form.webp",
    category: "MyProject",
    title: "JavaScript",
    github: "https://github.com/Gaddmb/form-checker",
  },
  {
    src: "assets/img/popup.webp",
    category: "MyProject",
    title: "JavaScript",
    github: "https://github.com/Gaddmb/scroll-Event",
  },
  {
    src: "assets/img/date.webp",
    category: "MyProject",
    title: "JavaScript",
    github: "https://github.com/Gaddmb/Date_calculator-",
  },
  {
    src: "assets/img/Printit.webp",
    category: "OpenClassroom",
    title: "JavaScript",
    github: "https://github.com/Gaddmb/Print-it-JS-main",
  },
  {
    src: "assets/img/projet.png",
    category: "MyProject",
    title: "HTML / CSS",
    github: "https://github.com/Gaddmb/Restaurant",
  },
  {
    src: "assets/img/Riding.webp",
    category: "OpenClassroom",
    title: "HTML / CSS",
    github: "https://github.com/Gaddmb/Riding",
  },
  {
    src: "assets/img/todoList.webp",
    category: "MyProject",
    title: "JavaScript",
    github: "https://github.com/Gaddmb/TodoList",
  },
  {
    src: "assets/img/Ohmyfood.webp",
    category: "OpenClassroom",
    title: "HTML / CSS",
    github: "https://github.com/Gaddmb/Ohmyfood",
  },
  {
    src: "assets/img/Kasa.webp",
    category: "OpenClassroom",
    title: "React",
    github: "https://github.com/Gaddmb/Kasa",
  },
  {
    src: "assets/img/user.webp",
    category: "MyProject",
    title: "API user",
    github: "https://github.com/Gaddmb/user-app",
  },
];

const skillImages = [
  { src: "assets/img/HTML5.svg", alt: "HTML" },
  { src: "assets/img/CSS3.svg", alt: "CSS" },
  { src: "assets/img/SaSS.svg", alt: "SaSS" },
  { src: "assets/img/javaScript.svg", alt: "JavaScript" },
  { src: "assets/img/nodeJS.svg", alt: "NodeJS" },
  { src: "assets/img/React.svg", alt: "React" },
];

//** Scrolling */
let playOne = true;
let scrollIndex = 0;
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollIndex) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-80px";
  }
  scrollIndex = window.scrollY;

  if (window.scrollY < lastScrollY) {
    navLinks.classList.remove("active");
  }

  lastScrollY = window.scrollY;

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.35) {
    about.style.opacity = 1;
    about.style.transform = "none";
    skill.style.opacity = 1;
    skill.style.transform = "none";
  }

  if (scrollValue > 0.4) {
    containerProject.style.opacity = 1;
    containerProject.style.transform = "none";
  }
  if (scrollValue > 0.7 && playOne) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
  }
});

//** Generator Words */
const target = document.getElementById("target");
let array = ["Développeur", "Junior"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};

loop();

//** Hamburger Menu */
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//** skills Gallery */
skillImages.forEach((image) => {
  const imgElement = document.createElement("img");
  imgElement.src = image.src;
  imgElement.alt = image.alt;
  skillsGallery.appendChild(imgElement);
});

//** project galerry */
const displayImages = (filter) => {
  const container = document.getElementById("container-img");
  container.innerHTML = "";

  let filteredImages;

  if (filter === "all") {
    filteredImages = images;
  } else {
    filteredImages = images.filter((image) => image.category === filter);
  }

  for (const image of filteredImages) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-card");

    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = image.title;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const title = document.createElement("h4");
    title.textContent = image.title;

    const link = document.createElement("a");
    link.href = image.github;
    link.textContent = "Voir sur GitHub";
    link.target = "_blank";

    overlay.appendChild(title);
    overlay.appendChild(link);

    projectDiv.appendChild(imgElement);
    projectDiv.appendChild(overlay);

    container.appendChild(projectDiv);
  }
};

displayImages("all");

for (const button of buttons) {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    displayImages(filter);
  });
}

closeBtn.addEventListener("click", function () {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
  playOne = false;
});
