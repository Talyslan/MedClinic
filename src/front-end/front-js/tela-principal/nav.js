// handlers
const toggleNav = (isOpen) => {
  const nav = document.querySelector("nav");
  if (isOpen) nav.classList.toggle("opened");
  else nav.classList.remove("opened");
};

const handleScroll = () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
};

const handlerLink = ({ target }) => {
    if (target.matches(".link")) toggleNav(false);
}


// selectors
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const ulLinks = document.querySelector("nav ul");

// events
openNav.addEventListener("click", () => toggleNav(true));
closeNav.addEventListener("click", () => toggleNav(false));
ulLinks.addEventListener("click", handlerLink);
window.addEventListener("scroll", handleScroll);
