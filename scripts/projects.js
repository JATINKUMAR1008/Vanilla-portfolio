const copy = document.getElementById("copy");
const year = new Date().getFullYear();
const copy_cont = `© ${year} Jatin Kumar.`;
copy.textContent = copy_cont;
const handleClick = () => {
  let nav = document.getElementById("toggle-nav");
  let item = document.getElementById("items");

  if (String(nav.classList.value).indexOf("toggle-active") !== -1) {
    //remove active class
    nav.classList.remove("toggle-active");
    nav.classList.add("toggle-close");
    item.classList.add("hidden");
    console.log(nav.classList.value);
  } else {
    // add active and remove close classes after a delay of 50ms to avoid animation gl
    nav.classList.remove("toggle-close");
    nav.classList.add("toggle-active");
    setTimeout(() => {
      item.classList.remove("hidden");
    }, 200);
    console.log(nav.classList.value);
  }
};

let project_list = [
  {
    name: "Book Store",
    desc: "A simple book store website built using React.js and Python 'Flask' for API and handles using DevOps.",
    tech: ["web Design", "DevOps", "React.js", "Python"],
    imgUrl: "/Vanilla-portfolio/images/mp1.png",
  },
  {
    name: "Music App",
    desc: "A simple Music App website built using React.js and Rapid API for data.",
    tech: ["web Design", "API", "React.js"],
    imgUrl: "/Vanilla-portfolio/images/music.png",
  },
  {
    name: "Todo App",
    desc: "A simple Todo App website built using React.js and Firebase for data storage and authentication.",
    tech: ["web Design", "Firebase", "React.js"],
    imgUrl: "/Vanilla-portfolio/images/todo.png",
  },
  {
    name: "Netflix Clone",
    desc: "A simple Clone of Netflix website built using React.js and IMwD API for movie database.",
    tech: ["web Design", "React.js"],
    imgUrl: "/Vanill-portfolio/images/netflix.png",
  },
];

const project_Container = document.getElementById("content-pro");
const content = project_list
  .map(
    (value) =>
      `<div class="content-pro">
    <img
      src=${value.imgUrl}
      class="pro-img"
      alt="mp-1"
      loading="lazy"
    />
    <div class="content-text-pro" >
      <div class="pro-text-head">${value.name}</div>
      <div class="content-text-des">
        ${value.desc}
      </div>
      <div class="tech-stk">
      ${value.tech
        .map(
          (value) => `<div class="tec-btn">
      ${value}
    </div>`
        )
        .join("")}
        
        
      </div>
      <div class="pro_link">
        <a href="/pages/project-Details.html" class="pro-link">
          Details →
        </a>
      </div>
    </div>
  </div>
`
  )
  .join("");

project_Container.innerHTML = content;
