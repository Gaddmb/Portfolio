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

const tabTitlesContainer = document.querySelector(".tab-titles");
const tabContentsContainer = document.querySelector(".tab-contents-container");

tabsData.forEach((tab, idx) => {
  const p = document.createElement("p");
  p.classList.add("tab-links");
  if (idx === 0) p.classList.add("active-link");
  p.dataset.tab = `tab-${idx}`;
  p.innerText = tab.title;
  tabTitlesContainer.appendChild(p);

  const div = document.createElement("div");
  div.classList.add("tab-contents");
  if (idx === 0) div.classList.add("active-tab");
  div.id = `tab-${idx}`;
  div.innerHTML = tab.content;
  tabContentsContainer.appendChild(div);
});

// Tabs click
const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
tablinks.forEach((link) => {
  link.addEventListener("click", () => {
    const tabname = link.dataset.tab;
    tablinks.forEach((l) => l.classList.remove("active-link"));
    tabcontents.forEach((c) => c.classList.remove("active-tab"));
    link.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  });
});
