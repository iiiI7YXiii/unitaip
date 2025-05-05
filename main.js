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
  console.log(element);

  if (element.classList.contains("faq__item")) {
    element.firstElementChild.classList.toggle("faq__item-question--open");
    const question = element.firstElementChild.firstElementChild;
    const answer = element.lastElementChild;
    console.log(answer);

    if (element.firstElementChild.classList.contains("faq__item-question--open")) {
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
