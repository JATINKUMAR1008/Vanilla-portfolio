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
const copy = document.getElementById("copy");
const year = new Date().getFullYear();
const copy_cont = `© ${year} Jatin Kumar.`;
copy.textContent = copy_cont;

const list = [
  {
    title: "software engineering virtual experience",
    cpy: "JPMorgan Chase & Co.",
    iss: "Issued Jun 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_NASJ5ShvoBW8YFCWP_1687789365087_completion_certificate.pdf",
    imgUrl:
      "https://media.licdn.com/dms/image/C4E0BAQFN7ZGRjNcgeA/company-logo_100_100/0/1656681489088?e=1697673600&v=beta&t=--tvDzKgI2qgI4lXHK8TXX8pAH-OSD9KxzPPBaavE7s",
  },
  {
    title: "aws academy graduate - aws academy cloud foundations",
    cpy: "Amazon Web Services (AWS)",
    iss: "Issued Apr 2023",
    link: "https://www.credly.com/badges/e63fa91e-b921-4f8c-9b76-e3fb14190293/linked_in_profile",
    imgUrl:
      "https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264050886?e=1697673600&v=beta&t=6aC0OTTBUVT2avH-MuwRFjB_aZje674khG5vMbtHv2Q",
  },
  {
    title: "software engineering virtual experience program",
    cpy: "Goldman Sachs",
    iss: "Issued Mar 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_NASJ5ShvoBW8YFCWP_1679501293655_completion_certificate.pdf",
    imgUrl:
      "https://media.licdn.com/dms/image/C4E0BAQHm5bYK6emQSg/company-logo_100_100/0/1595518030728?e=1697673600&v=beta&t=EgZRXBNC5la0NBA00-WHC3KcohwNmXj-PKhH8C3VR2A",
  },
  {
    title: "virtual Experience Program Participants",
    cpy: "Cognizant",
    iss: "Issued Mar 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant%20USA/ZZswQd6xGydd758vz_Cognizant%20USA_NASJ5ShvoBW8YFCWP_1679499817362_completion_certificate.pdf",
    imgUrl:
      "https://media.licdn.com/dms/image/D4E0BAQHDKo68h6DqgQ/company-logo_100_100/0/1688389916667?e=1697673600&v=beta&t=enUfhJwl4szv65wR6OKOPnkiAFwGy87-37SMy9Njb_I",
  },
  {
    title: "NDG Linux Unhatched",
    cpy: "Cisco",
    iss: "Issued Jan 2023",
    link: "https://drive.google.com/file/d/1oAti7UO1V6tNDK8rzrd0K7Bzqu_RuHLQ/view",
    imgUrl:
      "https://media.licdn.com/dms/image/D560BAQFVQnYFvzs9jw/company-logo_100_100/0/1688482473599?e=1697673600&v=beta&t=npdaiCPFl2f6h_YGHbPsRmUAEGoAXYe5LtPmmUuEWuU",
  },
  {
    title: "Cisco Networking Essentials",
    cpy: "Cisco",
    iss: "Issued Dec 2022",
    link: "https://drive.google.com/file/d/1ux3pgtoWwhJFrMUzRORA6kEaQHgNTOHX/view",
    imgUrl:
      "https://media.licdn.com/dms/image/D560BAQFVQnYFvzs9jw/company-logo_100_100/0/1688482473599?e=1697673600&v=beta&t=npdaiCPFl2f6h_YGHbPsRmUAEGoAXYe5LtPmmUuEWuU",
  },
];

const conatiner = document.getElementById('edu-cont')

const content = list.map(value=>
    `
    <div class="edu-item">
                    <img class="edu_img" src=${value.imgUrl}>
                        <div class="edu-text">
                            <span class="i-name">
                                ${value.title}
                            </span>
                            <span class="i-course">
                                ${value.cpy}
                            </span>
                            <span class="i-year">
                                ${value.iss}
                            </span>
                            <span class="i-link">
                                <a href=${value.link} target="_blank" class="i-link">
                                    Verification Link →
                                </a>
                            </span>
                            
                        </div>
                </div>
    `).join("")

conatiner.innerHTML=content
