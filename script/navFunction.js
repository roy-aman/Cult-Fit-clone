import navbar from "../components/navbar.js";
const header = document.querySelector("#navbar");

// navbar section
header.innerHTML = navbar();

// sticky navbar
let lastScrollTop = 0;
let sticky_navbar = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    sticky_navbar.style.transform = "translateY(-70px)";
  } else {
    sticky_navbar.style.transform = "translateY(0px)";
  }
  lastScrollTop = scrollTop;
});

// location popup
const location = document.querySelector("#toggle_location");
const popup = document.querySelector("#location_container");
const overlay = document.querySelector("#overlay");
const city = document.querySelector("#toggle_location>p");

let city_name = localStorage.getItem("city");
city.innerHTML = city_name;

location.addEventListener("click", () => {
  popup.classList.toggle("hide");
  overlay.classList.toggle("overlay");
});

const select_location = document.querySelectorAll(
  "#location_container >div >div >h2"
);

select_location.forEach((el) => {
  if (el.innerText == city.innerHTML) {
    el.innerHTML = `<img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/white-check.svg" alt="Tick">  ${city.innerHTML}`;
  }

  el.addEventListener("click", () => {
    select_city(event);
  });
});

const select_city = (e) => {
  let name = e.target.innerHTML;
  localStorage.setItem("city", name);
  window.location.reload();
};

// search function in location
const search_input = document.querySelector(
  "#location_container > div:nth-child(1) > input"
);

search_input.addEventListener("input", () => {
  search_city(event);
});

const search_city = (e) => {
  let text = e.target.value.toLowerCase();
  // convert to an array
  Array.from(select_location).forEach(function (item) {
    let itemName = item.innerHTML;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

// login popup
const login = document.querySelector("#login");
const close_login = document.querySelector(".close_login");

login.addEventListener("click", () => {
  show_login_form();
});

close_login.addEventListener("click", () => {
  const login_popup = document.querySelector("#login_popup");
  login_popup.style.display = "none";
});

const show_login_form = () => {
  const login_popup = document.querySelector("#login_popup");

  login_popup.style.display = "grid";
};

// cart popup

const cart_btn = document.querySelector("#cart_btn");
const close_cart = document.querySelector(".close_cart");
const cart_popup = document.querySelector("#cart_popup");

cart_btn.addEventListener("click", () => {
  cart_popup.classList.toggle("hide");
});

close_cart.addEventListener("click", () => {
  cart_popup.classList.add("hide");
});
