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
const searchEl = document.querySelector(".header__search-field");
const navEl = document.querySelector(".header__main-nav")
const headerRight = document.querySelector(".header__right")
const burgerEl = document.querySelector(".header__burger")
const searchCloseBtn = document.querySelector(".header__search-icon-close");

searchBtn.addEventListener("click", () => {
  searchEl.classList.remove("visually-hidden");
  navEl.classList.add("visually-hidden");
  burgerEl.classList.add("visually-hidden");
  searchCloseBtn.style.display = 'block'

    searchEl.style.transform = `scaleX(1)`
    navEl.style.transform = "scale(0)";
    headerRight.style.flexGrow = '1'
});

searchCloseBtn.addEventListener("click", () => {
  searchEl.classList.add("visually-hidden");
  navEl.classList.remove("visually-hidden");
  burgerEl.classList.remove("visually-hidden");
  searchCloseBtn.style.display = 'none'

    searchEl.style.transform = `scaleX(0)`
    navEl.style.transform = "scale(1)";
    headerRight.style.flexGrow = '0'

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

const previewCard = document.querySelector(".create__preview-card");

createList.addEventListener("click", (event) => {

  if (event.target.classList.contains("create__item-image")) {
       const srcEl = event.target.getAttribute('src');

  previewCard.style.background = `url('${srcEl} ') no-repeat center`
  previewCard.style.backgroundSize = 'cover'
  }

});

const cardTitle = document.querySelector(".create__preview-card-title");
const cardDescription = document.querySelector(".create__preview-card-description");
const inputName = document.querySelector("#name");
const inputDescription = document.querySelector("#description");

inputName.addEventListener("input", () => {
   cardTitle.textContent = inputName.value
   if (!inputName.value) {
    cardTitle.textContent = 'Как к вам обращаться'
   }
});

inputDescription.addEventListener("input", () => {
   cardDescription.textContent = inputDescription.value
   if (!inputDescription.value) {
    cardDescription.textContent = 'Небольшое описание'
   }
});
