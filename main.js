const headerEl = document.querySelector(".header");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 1) {
    headerEl.classList.add("header--scroll");
  } else {
    headerEl.classList.remove("header--scroll");
  }
});

const faqList = document.querySelector(".faq__list");

faqList.addEventListener("click", (event) => {
  const element = event.target;

  if (element.classList.contains("faq__item")) {
    element.firstElementChild.classList.toggle("faq__item-question--open");
    const question = element.firstElementChild.firstElementChild;
    const answer = element.lastElementChild;

    if (
      element.firstElementChild.classList.contains("faq__item-question--open")
    ) {
      question.setAttribute("aria-expanded", true);
      answer.setAttribute("aria-hidden", false);
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      question.setAttribute("aria-expanded", false);
      answer.setAttribute("aria-hidden", true);
      answer.style.maxHeight = null;
    }
  }
});

const cookieBtn = document.querySelector(".cookie__btn");

cookieBtn.addEventListener("click", () => {
  document.querySelector(".cookie").style.display = "none";
});

const langBtn = document.querySelector(".header__lang-btn");

langBtn.addEventListener("click", () => {
  document
    .querySelector(".header__lang")
    .classList.toggle("header__lang--open");
});

const burgerBtn = document.querySelector(".header__burger-btn");
const burgerClose = document.querySelector(".header__burger-close");

burgerBtn.addEventListener("click", () => {
  document.querySelector(".header__burger-menu").style.transform =
    "translateY(0)";
  burgerClose.style.transform = "translateY(0)";

  burgerClose.addEventListener("click", () => {
    document.querySelector(".header__burger-menu").style.transform =
      "translateY(100%)";
    burgerClose.style.transform = "translateY(100%)";
  });
});

const searchBtn = document.querySelector(".header__search-icon");
const searchEl = document.querySelector(".header__search");

searchBtn.addEventListener("click", () => {
  searchEl.classList.toggle("header__search--open");

  if (searchEl.classList.contains("header__search--open")) {
    document.querySelector(".header__main-nav").style.transform = "scale(0)";
  } else {
    document.querySelector(".header__main-nav").style.transform = "scale(1)";
  }
});

const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const createList = document.querySelector(".create__list");

document.addEventListener("DOMContentLoaded", () => {
  if (createList.scrollWidth > createList.clientWidth) {
    arrowRight.classList.add("active");
  }
});

const manageArrow = () => {
  if (createList.scrollLeft > 10) {
    arrowLeft.classList.add("active");
  } else {
    arrowLeft.classList.remove("active");
  }

  let maxScrollValue = createList.scrollWidth - createList.clientWidth;

  console.log(createList.scrollWidth);
  console.log(createList.clientWidth);
  console.log(createList.scrollLeft);
  console.log(maxScrollValue);

  if (createList.scrollLeft >= maxScrollValue) {
    arrowRight.classList.remove("active");
  } else {
    arrowRight.classList.add("active");
  }
};

arrowRight.addEventListener("click", () => {
  createList.scrollLeft += 150;
  setTimeout(() => {
    manageArrow();
  }, 100);
});

arrowLeft.addEventListener("click", () => {
  createList.scrollLeft += -150;
  setTimeout(() => {
    manageArrow();
  }, 100);
});

function renderList(arr) {
  createList.innerHTML = "";

  arr.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("create__item");
    li.innerHTML = `
                  <img class="create__item-image" src="images/create/${element}"
                    alt="фон-визитки" />
          `;
    createList.appendChild(li);

    if (createList.scrollWidth > createList.clientWidth) {
      arrowRight.classList.add("active");
    } else {
      arrowRight.classList.remove("active");
    }
  });
}

const hit = [
  "hit1.jpg",
  "hit2.jpg",
  "hit3.jpg",
  "hit4.jpg",
  "hit5.jpg",
  "hit6.jpg",
  "hit7.jpg",
  "hit8.jpg",
];
const abstraction = [
  "abstraction1.jpg",
  "abstraction2.jpg",
  "abstraction3.jpg",
  "abstraction4.jpg",
  "abstraction5.jpg",
  "abstraction6.jpg",
  "abstraction7.jpg",
  "abstraction8.jpg",
  "abstraction9.jpg",
  "abstraction10.jpg",
  "abstraction11.jpg",
  "abstraction12.jpg",
  "abstraction13.jpg",
  "abstraction14.jpg",
  "abstraction15.jpg",
  "abstraction16.jpg",
  "abstraction17.jpg",
  "abstraction18.jpg",
  "abstraction19.jpg",
  "abstraction20.jpg",
];
const colors = ["color1.jpg", "color2.jpg", "color3.jpg"];

renderList(hit);

const choiceBg = document.querySelector(".create__choice-bg");
const radioBg = document.querySelectorAll(".radio-bg__input");

const arrArr = [hit, abstraction, colors];

choiceBg.addEventListener("click", () => {
  setTimeout(() => {
    radioBg.forEach((element) => {
      if (element.checked) {
        const radioId = element.getAttribute("id");
        renderList(arrArr[radioId]);
      }
    });
  }, 100);
});
