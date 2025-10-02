const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
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

// Dynamic Typewriter
const target = document.getElementById("target");
const texts = ["Junior Web Developer", "Passionate about Front-end & Back-end"];
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

// Dynamic Portfolio
const portfolioData = [
  {
    img: "img/openclass.webp",
    title: "OpenClassrooms Projects",
    desc: "A collection of all projects completed during my OpenClassrooms training.",
    link: "https://github.com/Gaddmb/Openclassrooms",
  },
  {
    img: "img/Evo.jpg",
    title: "FromScratch Projects",
    desc: "Projects completed independently after my training to strengthen my skills.",
    link: "https://github.com/Gaddmb/FromScratch",
  },
  {
    img: "img/Astro.webp",
    title: "Current Projects",
    desc: "More complex self-taught projects that I am currently developing.",
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
      <a href="${item.link}" target="_blank" class="btn">See more</a>
    </div>
  `;
  workList.appendChild(card);
});

// Dynamic Services

const servicesData = [
  {
    icon: "fa-code",
    title: "Front-end Development",
    desc: "Modern and responsive interfaces with React, Next.js, TypeScript, JS, HTML, CSS.",
  },
  {
    icon: "fa-server",
    title: "Back-end Development",
    desc: "APIs, Auth, Databases, security with Node.js & Express.",
  },
  {
    icon: "fa-mobile-screen",
    title: "Full-Stack Development",
    desc: "Front + back integration for complete and performant applications.",
  },
];
const servicesList = document.querySelector(".services-list");
servicesData.forEach((s) => {
  const div = document.createElement("div");
  div.innerHTML = `<i class="fa-solid ${s.icon}"></i><h2>${s.title}</h2><p>${s.desc}</p>`;
  servicesList.appendChild(div);
});

// Dynamic About Tabs
const tabsData = [
  {
    title: "Skills",
    content: `
      <ul>
        <li><span>Front-end:</span> React.js, Next.js, TypeScript, JS, HTML, CSS</li>
        <li><span>Back-end:</span> Node.js, REST API, Express, Auth (JWT/OAuth)</li>
        <li><span>Tools:</span> Git/GitHub, VS Code, SEO, Responsive Design</li>
      </ul>`,
  },
  {
    title: "Experience",
    content: `
      <ul>
        <li><span>2024:</span> Front-end Intern, Alexandre Martinet (Remote)</li>
        <li><span>2018-2022:</span> Assistant Manager, Bagelstein</li>
      </ul>`,
  },
  {
    title: "Education",
    content: `
      <ul>
        <li><span>2023-2024:</span> Web Developer & Integrator, OpenClassrooms</li>
        <li><span>2016:</span> Vocational Baccalaureate, Lycée Louis Armand</li>
      </ul>`,
  },
];

console.log(tabsData);

// Create dynamic containers
const container = document.querySelector(".about-col-2");
const tabTitlesContainer = document.createElement("div");
tabTitlesContainer.classList.add("tab-titles");
const tabContentsContainer = document.createElement("div");
tabContentsContainer.classList.add("tab-contents-container");
container.appendChild(tabTitlesContainer);
container.appendChild(tabContentsContainer);

// Generate tabs
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
