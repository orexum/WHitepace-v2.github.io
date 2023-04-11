//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// СМЕНА БОЛКА ПРИ АДАПТИВЕ
const item = document.querySelectorAll(".testimonial__item__card--desc");
const container = document.querySelectorAll(".testimonial__item");
const containerOriginals = document.querySelectorAll(
  ".testimonial__item__card"
);
const user = document.querySelector(".user");
const userContainer = document.querySelector(".nav__list");
const userContainerOriginals = document.querySelector(".wrapper-menu");

window.addEventListener("resize", function (event) {
  const vieportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (vieportWidth <= 450) {
    for (let i = 0; i < container.length; i++) {
      containerOriginals[i].insertBefore(
        item[i],
        containerOriginals[i].children[1]
      );
      item[i].classList.remove("done");
    }
    return;
  }
  if (vieportWidth <= 768) {
    for (let i = 0; i < container.length; i++) {
      if (!item[i].classList.contains("done")) {
        container[i].insertBefore(item[i], container[i].children[3]);
        item[i].classList.add("done");
      }
    }
  } else {
    for (let i = 0; i < container.length; i++) {
      if (item[i].classList.contains("done")) {
        containerOriginals[i].insertBefore(
          item[i],
          containerOriginals[i].children[1]
        );
        item[i].classList.remove("done");
      }
    }
  }
  ///////////////////////////////////
  if (vieportWidth <= 768) {
    if (!user.classList.contains("done")) {
      userContainer.insertBefore(user, userContainer.children[4]);
      user.classList.add("done");
    }
  } else {
    if (user.classList.contains("done")) {
      userContainerOriginals.insertBefore(
        user,
        userContainerOriginals.children[0]
      );
      user.classList.remove("done");
    }
  }
  /////////////////////////////////////////
});
// СМЕНА БОЛКА ПРИ АДАПТИВЕ


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// КРЮК-ССЫЛКА

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    onBurgerMenu = false;
    burgerMenuList.classList.remove("nav__list__active");
    const blockId = anchor.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// КРЮК-ССЫЛКА

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HEADER HIDDEN
let onBurgerMenu = false;
const burgerMenu = document.querySelector(".menu");
const burgerMenuList = document.querySelector(".nav__list");

const clickBurgerMenu = () => {
  burgerMenu.addEventListener("click", () => {
    if (onBurgerMenu) {
      onBurgerMenu = false;
      burgerMenuList.classList.remove("nav__list__active");
      return;
    }
    onBurgerMenu = true;
    burgerMenuList.classList.add("nav__list__active");
    return;
  });
};
const hideHeader = () => {
  const header = document.querySelector(".glav--header");
  const fixedHeaderClassName = "glav--header__fixed";
  const hiddenHeaderClassName = "glav--header__hidden";
  const headerHeight = 98;
  const navHeight = 50;
  let initialYvalue = window.scrollY;

  let isItHidden = false;
  let isItFixed = false;

  window.addEventListener("scroll", function (event) {
    const scrollY = window.scrollY;

    if (scrollY > headerHeight) {
      makeItFixed();
      if (scrollY > headerHeight + navHeight && scrollY > initialYvalue) {
        hide();
      } else {
        show();
      }
    } else {
      makeItNotFixed();
    }

    initialYvalue = scrollY;

    function hide() {
      if (onBurgerMenu) {
        return;
      }
      if (!isItHidden) {
        header.classList.add(hiddenHeaderClassName);
        isItHidden = true;
      }
    }

    function show() {
      if (isItHidden) {
        header.classList.remove(hiddenHeaderClassName);
        isItHidden = false;
      }
    }

    function makeItFixed() {
      header.classList.add(fixedHeaderClassName);
      document.body.style.paddingTop = 100 + "px";
    }

    function makeItNotFixed() {
      header.classList.remove(fixedHeaderClassName);
      document.body.style.paddingTop = 0 + "px";
    }
  });
};
clickBurgerMenu();
hideHeader();

// HEADER HIDDEN
