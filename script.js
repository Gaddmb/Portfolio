const menuItems = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];
const navUl = document.querySelector("nav ul");
menuItems.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${item.href}">${item.label}</a>`;
  navUl.appendChild(li);
});

// Toggle menu
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// Typewriter dynamique
const target = document.getElementById("target");
const texts = [
  "Développeur web Junior",
  "Passionné par le Front-end & le Back-end",
];
let textIndex = 0,
  charIndex = 0,
  speed = 100;

function typeWriter() {
  const currentText = texts[textIndex];
  target.innerText = currentText.slice(0, charIndex);
  charIndex++;
  if (charIndex > currentText.length) {
    charIndex = 0;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, 1500);
  } else {
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Portfolio dynamique
const portfolioData = [
  {
    img: "img/openclass.webp",
    title: "Projets OpenClassrooms",
    desc: "Une collection de tous les projets réalisés pendant ma formation OpenClassrooms.",
    link: "https://github.com/Gaddmb/Openclassrooms",
  },
  {
    img: "img/Evo.jpg",
    title: "Projets FromScratch",
    desc: "Projets réalisés de manière autonome après ma formation pour renforcer mes compétences.",
    link: "https://github.com/Gaddmb/FromScratch",
  },
  {
    img: "img/Astro.webp",
    title: "Projets actuels",
    desc: "Projets autodidactes plus complexes que je développe actuellement.",
    link: "https://github.com/Gaddmb/Current-projet-HTML-CSS-and-JS",
  },
];
const workList = document.querySelector(".work-list");
portfolioData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <div class="card-content">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <a href="${item.link}" target="_blank" class="btn">Voir plus</a>
    </div>
  `;
  workList.appendChild(card);
});

// Services dynamiques

const servicesData = [
  {
    icon: "fa-code",
    title: "Développement Front-end",
    desc: "Interfaces modernes et responsives avec React, Next.js, TypeScript, JS, HTML, CSS.",
  },
  {
    icon: "fa-server",
    title: "Développement Back-end",
    desc: "APIs, Auth, Bases de données, sécurité avec Node.js & Express.",
  },
  {
    icon: "fa-mobile-screen",
    title: "Développement Full-Stack",
    desc: "Intégration front + back pour des applications complètes et performantes.",
  },
];
const servicesList = document.querySelector(".services-list");
servicesData.forEach((s) => {
  const div = document.createElement("div");
  div.innerHTML = `<i class="fa-solid ${s.icon}"></i><h2>${s.title}</h2><p>${s.desc}</p>`;
  servicesList.appendChild(div);
});

// Tabs dynamique About
const tabsData = [
  {
    title: "Compétences",
    content: `
      <ul>
        <li><span>Front-end:</span> React.js, Next.js, TypeScript, JS, HTML, CSS</li>
        <li><span>Back-end:</span> Node.js, API REST, Express, Auth (JWT/OAuth)</li>
        <li><span>Outils:</span> Git/GitHub, VS Code, SEO, Responsive Design</li>
      </ul>`,
  },
  {
    title: "Expérience",
    content: `
      <ul>
        <li><span>2024:</span> Stagiaire Front-end, Alexandre Martinet (Remote)</li>
        <li><span>2018-2022:</span> Assistant Manager, Bagelstein</li>
      </ul>`,
  },
  {
    title: "Formation",
    content: `
      <ul>
        <li><span>2023-2024:</span> Développeur web & Intégrateur, OpenClassrooms</li>
        <li><span>2016:</span> Bac Pro, Lycée Louis Armand</li>
      </ul>`,
  },
];

console.log(tabsData);

// Création containers dynamiques
const container = document.querySelector(".about-col-2");
const tabTitlesContainer = document.createElement("div");
tabTitlesContainer.classList.add("tab-titles");
const tabContentsContainer = document.createElement("div");
tabContentsContainer.classList.add("tab-contents-container");
container.appendChild(tabTitlesContainer);
container.appendChild(tabContentsContainer);

// Génération des tabs
tabsData.forEach((tab, idx) => {
  const title = document.createElement("p");
  title.classList.add("tab-links");
  if (idx === 0) title.classList.add("active-link");
  title.innerText = tab.title;
  tabTitlesContainer.appendChild(title);

  const content = document.createElement("div");
  content.classList.add("tab-contents");
  if (idx === 0) content.style.display = "block";
  content.innerHTML = tab.content;
  tabContentsContainer.appendChild(content);

  // Click event
  title.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-links")
      .forEach((t) => t.classList.remove("active-link"));
    document
      .querySelectorAll(".tab-contents")
      .forEach((c) => (c.style.display = "none"));
    title.classList.add("active-link");
    content.style.display = "block";
  });
});
