const menuBars = document.querySelector(".toggle-menu");
menuBars.onclick = () => {
  const ul = document.querySelector(".toggle-menu + ul");
  ul.classList.toggle("display-flex");
};
