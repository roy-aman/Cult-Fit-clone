// preloader on load
window.onload = () => {
  let preLoader = document.querySelector(".site_loader");
  preLoader.style.display = "none";
};

// footer
import footer from "../components/footer.js";
document.querySelector(`#footer`).innerHTML = footer();

// video mute and unmute
const audio_unmute = document.querySelector(".audio_icon > img");
audio_unmute.addEventListener("click", () => {
  const video = document.querySelector(".main_section_video");
  if (video.muted == true) {
    video.muted = false;
    audio_unmute.src =
      "https://static.cure.fit/assets/images/volume-up-outline.svg";
  } else {
    video.muted = true;
    audio_unmute.src =
      "https://static.cure.fit/assets/images/volume-off-outline.svg";
  }
});

// image slide section
const list = document.querySelectorAll("#cult_image_section>ul>li");
const list2 = document.querySelectorAll("#live_image_section>ul>li");
const list3 = document.querySelectorAll("#sport_image_section>ul>li");
const list4 = document.querySelectorAll("#mind_image_section>ul>li");
const list5 = document.querySelectorAll("#care_image_section>ul>li");
const list6 = document.querySelectorAll("#eat_image_section>ul>li");

// loop for 3 slides
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("mouseover", () => {
    slide_in(list[i].id);
  });
  list2[i].addEventListener("mouseover", () => {
    slide_in2(list2[i].id);
  });
  list3[i].addEventListener("mouseover", () => {
    slide_in3(list3[i].id);
  });
  list4[i].addEventListener("mouseover", () => {
    slide_in4(list4[i].id);
  });
}

// loop for 2 slides
for (let j = 0; j < list5.length; j++) {
  list5[j].addEventListener("mouseover", () => {
    slide_in5(list5[j].id);
  });
}

// loop for 4 slides
for (let k = 0; k < list6.length; k++) {
  list6[k].addEventListener("mouseover", () => {
    slide_in6(list6[k].id);
  });
}

const slide_in = (id) => {
  let one = document.querySelector(`#slide1`);
  let two = document.querySelector(`#slide2`);
  let three = document.querySelector(`#slide3`);

  let d1 = document.querySelector("#slide1>div");
  let d2 = document.querySelector("#slide2>div");
  let d3 = document.querySelector("#slide3>div");

  if (id == "slide1") {
    one.style.flex = "3";
    two.style.flex = "1";
    three.style.flex = "1";
    d1.classList.add("opacity");
    d2.classList.remove("opacity");
    d3.classList.remove("opacity");
  } else if (id == "slide2") {
    one.style.flex = "1";
    two.style.flex = "3";
    three.style.flex = "1";

    d1.classList.remove("opacity");
    d2.classList.add("opacity");
    d3.classList.remove("opacity");
  } else {
    one.style.flex = "1";
    two.style.flex = "1";
    three.style.flex = "3";

    d1.classList.remove("opacity");
    d2.classList.remove("opacity");
    d3.classList.add("opacity");
  }
};

const slide_in2 = (id) => {
  let one = document.querySelector(`#live1`);
  let two = document.querySelector(`#live2`);
  let three = document.querySelector(`#live3`);

  let d1 = document.querySelector("#live1>div");
  let d2 = document.querySelector("#live2>div");
  let d3 = document.querySelector("#live3>div");

  if (id == "live1") {
    one.style.flex = "3";
    two.style.flex = "1";
    three.style.flex = "1";
    d1.classList.add("opacity");
    d2.classList.remove("opacity");
    d3.classList.remove("opacity");
  } else if (id == "live2") {
    one.style.flex = "1";
    two.style.flex = "3";
    three.style.flex = "1";

    d1.classList.remove("opacity");
    d2.classList.add("opacity");
    d3.classList.remove("opacity");
  } else {
    one.style.flex = "1";
    two.style.flex = "1";
    three.style.flex = "3";

    d1.classList.remove("opacity");
    d2.classList.remove("opacity");
    d3.classList.add("opacity");
  }
};

const slide_in3 = (id) => {
  let one = document.querySelector(`#sport1`);
  let two = document.querySelector(`#sport2`);
  let three = document.querySelector(`#sport3`);

  let d1 = document.querySelector("#sport1>div");
  let d2 = document.querySelector("#sport2>div");
  let d3 = document.querySelector("#sport3>div");

  if (id == "sport1") {
    one.style.flex = "3";
    two.style.flex = "1";
    three.style.flex = "1";
    d1.classList.add("opacity");
    d2.classList.remove("opacity");
    d3.classList.remove("opacity");
  } else if (id == "sport2") {
    one.style.flex = "1";
    two.style.flex = "3";
    three.style.flex = "1";

    d1.classList.remove("opacity");
    d2.classList.add("opacity");
    d3.classList.remove("opacity");
  } else {
    one.style.flex = "1";
    two.style.flex = "1";
    three.style.flex = "3";

    d1.classList.remove("opacity");
    d2.classList.remove("opacity");
    d3.classList.add("opacity");
  }
};

const slide_in4 = (id) => {
  let one = document.querySelector(`#mind1`);
  let two = document.querySelector(`#mind2`);
  let three = document.querySelector(`#mind3`);

  let d1 = document.querySelector("#mind1>div");
  let d2 = document.querySelector("#mind2>div");
  let d3 = document.querySelector("#mind3>div");

  if (id == "mind1") {
    one.style.flex = "3";
    two.style.flex = "1";
    three.style.flex = "1";
    d1.classList.add("opacity");
    d2.classList.remove("opacity");
    d3.classList.remove("opacity");
  } else if (id == "mind2") {
    one.style.flex = "1";
    two.style.flex = "3";
    three.style.flex = "1";

    d1.classList.remove("opacity");
    d2.classList.add("opacity");
    d3.classList.remove("opacity");
  } else {
    one.style.flex = "1";
    two.style.flex = "1";
    three.style.flex = "3";

    d1.classList.remove("opacity");
    d2.classList.remove("opacity");
    d3.classList.add("opacity");
  }
};

const slide_in5 = (id) => {
  let one = document.querySelector(`#care1`);
  let two = document.querySelector(`#care2`);

  let d1 = document.querySelector("#care1>div");
  let d2 = document.querySelector("#care2>div");

  if (id == "care1") {
    one.style.flex = "3";
    two.style.flex = "1";

    d1.classList.add("opacity");
    d2.classList.remove("opacity");
  } else if (id == "care2") {
    one.style.flex = "1";
    two.style.flex = "3";

    d1.classList.remove("opacity");
    d2.classList.add("opacity");
  } else {
    one.style.flex = "1";
    two.style.flex = "1";

    d1.classList.remove("opacity");
    d2.classList.remove("opacity");
  }
};

const slide_in6 = (id) => {
  let one = document.querySelector(`#eat1`);
  let two = document.querySelector(`#eat2`);
  let three = document.querySelector(`#eat3`);
  let four = document.querySelector(`#eat4`);

  let d1 = document.querySelector("#eat1>div");
  let d2 = document.querySelector("#eat2>div");
  let d3 = document.querySelector("#eat3>div");
  let d4 = document.querySelector("#eat4>div");

  if (id == "eat1") {
    one.style.flex = "3";
    two.style.flex = "1";
    three.style.flex = "1";
    four.style.flex = "1";
    d1.classList.add("opacity");
    d2.classList.remove("opacity");
    d3.classList.remove("opacity");
    d4.classList.remove("opacity");
  } else if (id == "eat2") {
    one.style.flex = "1";
    two.style.flex = "3";
    three.style.flex = "1";
    four.style.flex = "1";

    d1.classList.remove("opacity");
    d2.classList.add("opacity");
    d3.classList.remove("opacity");
    d4.classList.remove("opacity");
  } else if (id == "eat3") {
    one.style.flex = "1";
    two.style.flex = "1";
    three.style.flex = "3";
    four.style.flex = "1";

    d1.classList.remove("opacity");
    d2.classList.remove("opacity");
    d3.classList.add("opacity");
    d4.classList.remove("opacity");
  } else {
    one.style.flex = "1";
    two.style.flex = "1";
    three.style.flex = "1";
    four.style.flex = "3";

    d1.classList.remove("opacity");
    d2.classList.remove("opacity");
    d3.classList.remove("opacity");
    d4.classList.add("opacity");
  }
};
