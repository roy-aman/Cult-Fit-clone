let cartdata = JSON.parse(localStorage.getItem("cart"));

let discount = Math.floor(Math.random() * (50 - 10) + 10);

document.getElementById("discountp").innerText = discount;

let del_charge = Math.floor(Math.random() * (60 - 20) + 20);
document.getElementById("delcharge").innerText = del_charge;

let cutlery = document.getElementById("check");

cutlery.addEventListener("click", () => {
  pricecal();
});
const pricecal = () => {
  let totalPrice = cartdata.reduce(function (accumulator, item) {
    return accumulator + item.price * item.qty;
  }, 0);
  document.getElementById("totalp").innerText = totalPrice;

  let totalpay = totalPrice + del_charge - discount;
  document.getElementById("totalpay").innerText = totalpay;

  let cutlery = document.getElementById("check").checked;
  if (cutlery == true) {
    document.getElementById("saving").innerText = discount + 3;
  } else {
    document.getElementById("saving").innerText = discount;
  }
};
pricecal();

let parent = document.querySelector(`#checkoutDisplay`);

const removefromcart = (cartdata, el) => {
  // console.log(el.name)
  let temp = [];
  cartdata.forEach((elem) => {
    if (elem.name !== el.name) {
      temp.push(elem);
    }
  });
  cartdata = temp;
  localStorage.setItem("cart", JSON.stringify(cartdata));
  display(cartdata);
  window.location.reload();
};

const increaseqty = (el) => {
  el.qty++;
  localStorage.setItem("cart", JSON.stringify(cartdata));
  display(cartdata);
  pricecal();
};

const decreaseqty = (el) => {
  if (el.qty === 1) {
    pricecal();
    return;
  }
  el.qty--;
  localStorage.setItem("cart", JSON.stringify(cartdata));
  display(cartdata);
  pricecal();
};

const itemCounter = (cartdata) => {
  let count = 0;
  cartdata.forEach((el) => {
    count += el.qty;
  });
  return count;
};

const display = (cartdata) => {
  parent.innerHTML = null;
  cartdata.forEach((el) => {
    // console.log(el)
    let main = document.createElement(`div`);
    main.style.display = "flex";

    let divimg = document.createElement(`div`);

    let divprice = document.createElement(`div`);

    let divadd = document.createElement(`div`);

    let img = document.createElement(`img`);
    img.style.width = "105px";
    img.src = el.image;
    divimg.append(img);

    let price = document.createElement(`p`);
    price.innerText = `₹ ${el.price}`;

    let name = document.createElement(`p`);
    name.innerText = el.name;
    name.style.fontWeight = "bold";
    divprice.append(name, price);

    let remove = document.createElement(`img`);
    remove.src = "https://www.eatfit.in/assets/images/Trash.svg";
    remove.setAttribute("id", "remove");
    remove.addEventListener("click", () => {
      removefromcart(cartdata, el);
    });

    let plusminus = document.createElement(`div`);
    plusminus.style.display = "flex";

    let plus = document.createElement(`img`);
    plus.src = "https://static.eatfit.in/assets/images/plus.svg";
    plus.setAttribute("id", "plus");
    plus.addEventListener("click", () => {
      increaseqty(el);
    });

    let minus = document.createElement(`img`);
    minus.src = "https://static.eatfit.in/assets/images/minus.svg";
    minus.setAttribute("id", "minus");
    minus.addEventListener("click", () => {
      decreaseqty(el);
    });

    let num = document.createElement(`div`);
    num.innerText = el.qty;
    num.setAttribute("id", "num");

    plusminus.append(minus, num, plus);

    divadd.append(remove, plusminus);

    main.append(divimg, divprice, divadd);

    parent.append(main);

    document.querySelector(`#totalItems`).innerText = itemCounter(cartdata);
  });
};

display(cartdata);

const pay_now_btn = document.querySelector("#paybutton");
const pay_now_popup = document.querySelector("#pay_now_popup");
const close_payPopup = document.querySelector(".close_pay_now");
const go_to_payment = document.querySelector(
  "#pay_now_container>div:nth-child(2)"
);

pay_now_btn.addEventListener("click", () => {
  pay_now_popup.style.display = "grid";
});

close_payPopup.addEventListener("click", () => {
  pay_now_popup.style.display = "none";
});

go_to_payment.addEventListener("click", () => {
  window.location.href = "./payment.html";
});

// for adress --------------------------
const adress = document.querySelector("#adres");
// const close_login = document.querySelector(".close_login");

adress.addEventListener("click", () => {
  show_address_form();
});

const show_address_form = () => {
  const adress = document.querySelector("#addres");
  adress.innerHTML = `<div>
   <div class="row">
      <div class="col-75">
        <div class="container">
          <form action="/action_page.php">
    
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com">
                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
                <label for="city"><i class="fa fa-institution"></i> City</label>
                <input type="text" id="city" name="city" placeholder="New York">
    
                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" placeholder="NY">
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="10001">
                  </div>
                </div>
              </div>
    
    
            </div>
            <label>
              <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
            </label>
          </form>
        </div>
      </div>
   </div>
</div>`;
};
