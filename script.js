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

let list = [
  {
    title: "Converting a Laravel Inertai App from Mix to Vite",
    description:
      "I recently converted my Inertia app from Laravel Mix to using Vite. In this post I'll talk about how it went, as well as some of the gotchas.",
    date: "02 September 2022",
    reading_time : "4 minute read",
    tech:"Laravel"
  },
  {title: "Converting a Laravel Inertai App from Mix to Vite",
  description:
    "I recently converted my Inertia app from Laravel Mix to using Vite. In this post I'll talk about how it went, as well as some of the gotchas.",
  date: "02 September 2022",
  reading_time : "4 minute read",
  tech:"Laravel"},
  {title: "Converting a Laravel Inertai App from Mix to Vite",
  description:
    "I recently converted my Inertia app from Laravel Mix to using Vite. In this post I'll talk about how it went, as well as some of the gotchas.",
  date: "02 September 2022",
  reading_time : "4 minute read",
  tech:"Laravel"},
];

const article = document.getElementById('article-content')

const content = list.map(value=>
    `<h3 class="art-ct-heading" id="art-ct-heading">
    ${value['title']}
  </h3>
  <div class="tec-btn">
    ${value['tech']}
  </div>
  <div class="post-date-time">
    <span class="p-date">
      ${value['date']}
    </span>/
    <span class="r-time">
      ${value['reading_time']}
    </span>
  </div>
  <div class="art-cont">
    <p>${value['description']}</p>
  </div>
  <a href="" class="read-btn"> Read Article →</a>
  
  <div class="seprater"></div>`
).join("")
article.innerHTML= content


const copy = document.getElementById('copy')
const year = new Date().getFullYear()
const copy_cont = `© ${year} Jatin Kumar.`
copy.textContent=copy_cont


//nav





