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

//toggle_mobile_nav

const mobile_nav = document.querySelector(".toggle_mobile_nav");
const close_mobile_nav = document.querySelector(".close_mobile_nav");
const toggle_mob_menu = document.querySelector("#mobile_nav_links");

mobile_nav.addEventListener("click", () => {
  toggle_mob_menu.classList.toggle("mobile_nav_links_active");
});

close_mobile_nav.addEventListener("click", () => {
  toggle_mob_menu.classList.remove("mobile_nav_links_active");
});

const mobile_signin = document.querySelector("#mobile_signin");
mobile_signin.addEventListener("click", () => {
  toggle_mob_menu.classList.remove("mobile_nav_links_active");
  show_login_form();
});

const mobile_cart = document.querySelector("#mobile_cart");
mobile_cart.addEventListener("click", () => {
  toggle_mob_menu.classList.remove("mobile_nav_links_active");
  cart_popup.classList.toggle("hide");
});

const mobile_location = document.querySelector("#mobile_location");
mobile_location.addEventListener("click", () => {
  popup.classList.toggle("hide");
  overlay.classList.toggle("overlay");
});

// location popup
const location = document.querySelector("#toggle_location");
const popup = document.querySelector("#location_container");
const overlay = document.querySelector("#overlay");
const city = document.querySelector("#toggle_location>p");

let city_name = localStorage.getItem("city");
city.innerHTML = city_name;
mobile_location.innerHTML = city_name;

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
  const logged = localStorage.getItem("login") || 0;
  const user_logged = document.querySelector("#user_logged");
  const logout = document.querySelector("#user_logged > button");
  const close_user = document.querySelector("#user_logged>p");
  if (logged == 1) {
    user_logged.style.display = "block";
    close_user.addEventListener("click", () => {
      user_logged.style.display = "none";
    });
    logout.addEventListener("click", () => {
      localStorage.setItem("login", 0);
      window.location.reload();
    });
  } else {
    login_popup.style.display = "grid";
  }
};

//login validation
const number = document.querySelector(".login_input > input");
const check_btn = document.querySelector("#login_popup > div > button");

number.addEventListener("input", () => {
  if (number.value.trim().length == 10) {
    check_btn.disabled = false;
    check_btn.style.cursor = "pointer";
    check_btn.style.opacity = "100%";
  } else {
    check_btn.disabled = true;
    check_btn.style.cursor = "not-allowed";
    check_btn.style.opacity = "50%";
  }
});

check_btn.addEventListener("click", () => {
  check_valid_num();
});

const check_valid_num = () => {
  const login_form = document.querySelector("#login_popup > div:nth-child(1)");
  const otp_form = document.querySelector("#login_popup > .enter_otp");
  login_form.style.display = "none";
  otp_form.style.display = "flex";

  const otp_field = document.querySelector("#login_popup > .enter_otp > .otp");
  let otp = Math.floor(Math.random() * 900000) + 100000;
  localStorage.setItem("otp", otp);
  let time = 1 * 60;
  otp_field.innerHTML = `Your otp is ${otp} and it is valid for <span class="countDown"><span>`;
  startTimer(time, otp);

  const backToLogin = document.querySelector(".backToLogin");
  backToLogin.addEventListener("click", () => {
    login_form.style.display = "flex";
    otp_form.style.display = "none";
  });

  const otp_input = document.querySelector(".enter_otp > div > input ");
  const otp_btn = document.querySelector(".enter_otp > button ");

  otp_input.addEventListener("input", () => {
    if (otp_input.value.trim().length == 6) {
      otp_btn.disabled = false;
      otp_btn.style.cursor = "pointer";
      otp_btn.style.opacity = "100%";
    } else {
      otp_btn.disabled = true;
      otp_btn.style.cursor = "not-allowed";
      otp_btn.style.opacity = "50%";
    }
  });

  otp_btn.addEventListener("click", () => {
    let gene_otp = localStorage.getItem("otp");
    const otp_message = document.querySelector(".otp_message");
    if (otp_input.value == gene_otp) {
      otp_message.innerHTML = "Login Successful";
      localStorage.setItem("login", 1);
      window.location.reload();
    } else {
      otp_message.innerHTML = "Wrong otp";
    }
    otp_input.value = "";
  });
};

let minutes;
let seconds;

const startTimer = (time, otp) => {
  const countDown = document.querySelector(".enter_otp > .otp>.countDown");
  setInterval(() => {
    if (time >= 0) {
      minutes = Math.floor(time / 60);
      seconds = time % 60;

      seconds = seconds < 10 ? "0" + seconds : seconds;
      countDown.innerText = `${minutes}:${seconds}s`;
      time--;
    } else {
      countDown.innerText = `otp expired`;
      otp = Math.floor(Math.random() * 900000) + 100000;
      localStorage.setItem("otp", otp);
    }
  }, 1000);
};

// cart popup

const cart_btn = document.querySelector("#cart_btn");
const close_cart = document.querySelector(".close_cart");
const cart_popup = document.querySelector("#cart_popup");
const cart_mid = document.querySelector("#cart_popup > .cart_mid");
const total_items_price = document.querySelector(
  "#cart_popup > .total_items_price"
);
const cart_buy_button = document.querySelector("#cart_popup > button");

cart_btn.addEventListener("click", () => {
  cart_popup.classList.toggle("hide");
});

close_cart.addEventListener("click", () => {
  cart_popup.classList.add("hide");
});

const cart_items = JSON.parse(localStorage.getItem("cart")) || [];

const display_cart_data = (data) => {
  cart_mid.innerHTML = null;
  data.map((el, index) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let div1 = document.createElement("div");
    let name = document.createElement("h4");
    name.innerHTML = el.name;

    let div2 = document.createElement("div");

    let div3 = document.createElement("div");
    let dec = document.createElement("button");
    dec.className = "decrmt";
    dec.innerHTML = "-";
    dec.addEventListener("click", () => {
      decrease_qty(index);
    });

    let qty = document.createElement("span");
    qty.className = "qty";
    qty.innerHTML = el.qty;

    let inc = document.createElement("button");
    inc.className = "incrmt";
    inc.innerHTML = "+";
    inc.addEventListener("click", () => {
      increase_qty(index);
    });

    div2.append(dec, qty, inc);

    let price = document.createElement("h6");
    price.innerHTML = `₹${el.price}`;

    div3.append(div2, price);

    div1.append(name, div3);

    div.append(img, div1);

    cart_mid.append(div);
  });
};

const increase_qty = (index) => {
  cart_items[index].qty++;
  localStorage.setItem("cart", JSON.stringify(cart_items));
  display_cart_data(cart_items);
  show_total();
};

const decrease_qty = (index) => {
  cart_items[index].qty--;
  if (cart_items[index].qty == 0) {
    cart_items.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart_items));
    display_cart_data(cart_items);
    show_total();
  }
  localStorage.setItem("cart", JSON.stringify(cart_items));
  display_cart_data(cart_items);
  show_total();
  if (cart_items.length == 0) {
    window.location.reload();
  }
};

const show_total = () => {
  let total = cart_items.reduce((acc, elem) => {
    return acc + elem.price * elem.qty;
  }, 0);

  total_items_price.innerHTML = `${cart_items.length} items - ₹${total}`;
};

if (cart_items.length > 0) {
  display_cart_data(cart_items);
  show_total();
  cart_buy_button.innerHTML = "Buy Now";
  cart_buy_button.addEventListener("click", () => {
    window.location.href = "../checkout.html";
  });
} else {
  cart_buy_button.addEventListener("click", () => {
    window.location.href = "../eatOrder.html";
  });
}
