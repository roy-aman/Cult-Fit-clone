// preloader on load
window.onload = () => {
  let preLoader = document.querySelector(".site_loader");
  preLoader.style.display = "none";
};

document.querySelector("#form").addEventListener("submit", myForm);
function myForm(event) {
  event.preventDefault();
  let cardName = document.querySelector("#name").value;
  let cardNum = document.querySelector("#cardno").value;
  let cV = document.querySelector("#cvv").value;
  let modal1 = document.getElementById("myModal1");
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];

  // modal ended
  if (cardNum.length == 16) {
    let tID = setTimeout(function () {
      window.location.href = "index.html";
      localStorage.removeItem("cart");
      window.clearTimeout(tID);
    }, 2000);
    modal1.style.display = "block";
  } else {
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    };
  }
}
