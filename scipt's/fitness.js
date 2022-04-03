// preloader on load
window.onload = () => {
  let preLoader = document.querySelector(".site_loader");
  preLoader.style.display = "none";
};

// Slide Show---------------------------------
let images = [
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/949dcfd6-0f48-47ac-babf-ef32bf37fc28.jpg",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/10c91272-727f-4851-89a0-a0c9968cc8db.jpg",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/7a2f2b75-2881-4174-8251-579d6439e79a.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/19398fe0-af3e-4c26-b09c-38871a1ba24d.jpg",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/25e5a67b-aeb3-41a1-ba13-71e498619a67.jpg",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/8a114cf9-9033-4c19-9780-3cef353b4c73.png",
];

let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
let btn5 = document.createElement("button");
let btn6 = document.createElement("button");

let btn = [];
btn[0] = btn1;
btn[1] = btn2;
btn[2] = btn3;
btn[3] = btn4;
btn[4] = btn5;
btn[5] = btn6;

let slideshow = document.getElementById("slideshow");

let dotsNav = document.querySelector("#buttons_nav");

dotsNav.append(btn1, btn2, btn3, btn4, btn5, btn6);

document.getElementById("slide");

let i = 0;

let timer;

function chang_image() {
  // images[i].addEventListener("click",()=>{
  //     clearTimeout(timer)
  // })

  if (i == images.length) {
    i = 0;
  }
  if (i > 0) {
    btn[i - 1].style.backgroundColor = null;
  }
  if (i == 0) {
    btn[images.length - 1].style.backgroundColor = null;
  }

  btn[i].style.backgroundColor = "black";
  btn[i].addEventListener("click", () => {
    clearTimeout(timer);
  });
  btn[i].addEventListener("dblclick", () => {
    chang_image();
  });
  let hvr = document.getElementById("slide");
  hvr.src = images[i];
  // hvr.addEventListener("mouseover",()=>{
  //     clearTimeout(timer)
  // })
  // hvr.addEventListener("mouseleave",()=>{
  //     chang_image();
  // })

  i++;

  timer = setTimeout("chang_image()", 2000);
}
window.onload = chang_image;

// Set the date we're counting down to
var countDownDate = new Date("Mar 30, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  document.getElementById("demo").innerHTML =
    days + " : " + hours + " : " + minutes + ": " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const book_offer = () => {
  window.location.href =
    "https://www.cult.fit/live/cult-live-membership?selectedProductId=CFLIVE_2401&pageType=livefitnessbrowsepage";
};

// --------------------------cards section-------------------//

var totalimages = [
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/4237c1b8-1f59-40c7-814b-76c8a710d314",
    name: "Covid Recovery",
    dis: "It's time to say goodbye to the physical and mental stress brought upon by this virus. This program focuses on bringing stability back into the body through gentle stretches and a sense of peace into the mind through deep meditation. The sessions in these series have low-intensity movements that do not challenge the lung capacity and help reset the body for recovery.",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/a9e0327d-8882-4bc0-a3f3-01be11daf295",
    name: "Running Programs",
    dis: "Running Programs",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/242290e4-3a59-463c-9c7b-e21bd14b434e",
    name: "5 Min Meditation",
    dis: "Panic? Anxiety? We have you all covered with these short 5 minute meditations. Dive in!",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/936125f4-ffc8-4e52-943b-efe9d068b758",
    name: "Sleep Stories",
    dis: "Say goodbye to sleepless nights! Created by Dr.Shyam Bhat, these stories will help you relax to drift into a peaceful and deep sleep.",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/db8fdf60-64c0-4938-9d9a-4fac5fb076d9",
    name: "Focus Meditation",
    dis: "It's the present that matters! Created by Dr.Shyam Bhat, this meditation series will help you bring your attention to the present moment by improving focus and concentration.",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/8acb1c22-4cde-45ae-b2f9-14042fdd408c.jpg    ",
    name: "Beat the Stress Program",
    dis: "Say no to stress with this series! The various packs will help you manage stressful thoughts and feel more relaxed.    ",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/94cf3985-f59e-48b3-88b3-fb1fef54d39a    ",
    name: "30 Minutes Yoga Nidra",
    dis: "This will be a half an hour audio-led Yoga NIdra class by Divya Rolla. Yoga Nidra is a powerful practise which has a profound effect on your body and mind. This practise will relax a person on all 3 levels physically, mentally and emotionally. It is one of the most easily accessible ways to reduce stress.",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/3f6bf321-5c8d-4f12-adbf-5dd60b4f3fec    ",
    name: "Difficult Emotions",
    dis: "This pack by Prasiddha Ramarao addresses the fact that strong emotions do not have to be scary. Emotions often tell us that we need to take care of ourselves, so denying or suppressing them harms rather than helps us. This series explores six common emotions _ often seen as difficult or troublesome _ utilising different techniques to work through them. Please",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/3d8bf8ac-64bf-4fc0-80b0-dc64ba6a831e    ",
    name: "Relationship Healing",
    dis: "This meditation pack on Relationships created by Spiritual Coach ModMonk Anshul will take you on a journey of bonding with yourself and will help in building a bridge of love, forgiveness, and acceptance with everyone around you.    ",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/a5748b24-ddea-429e-8dea-51fa60c258c6",
    name: "Walking Meditation",
    dis: "A guide to walking mindfully, transforming the simple act of walking by staying present in the moment- created by Dr Shyam Bhat    ",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/3aadf32b-c5a4-422a-b648-fa715eb409ed.jpg",
    name: "Yoga - Endurance",
    dis: "This pack is a capsulated practice to building physical endurance through a flow-based approach to yoga asanas. One will see improved physical and mental endurance when practiced regularly    ",
  },
  // ---------------------------------------------------------
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/19d81eab-d659-44d8-8466-52a2fb6744c2",
    name: "Meditation - Foundation",
    dis: "Get started with meditation! This series will guide you through the basic skills of meditation and help you explore mindfulness.",
  },

  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/57054865-0ce0-4572-976a-19b19385f48d",
    name: "Yoga- Pranayama",
    dis: "This Pranayama series contains breath practices which have the potential to effect the gross body.",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/867fb6bd-d196-45c3-bad8-13a066ff4af1",
    name: "Stress Reduction Meditation",
    dis: "Say no to stress with this series! The various packs created by Dr. Shyam Bhat will help you manage stressful thoughts and feel more relaxed.",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/5992b24c-f970-4beb-a4fe-8f0e265b67d9",
    name: " 30 Minutes Pranayama",
    dis: " Rolla. Breath is life. Most people breathe using a small portion of their lung capacity. Regular practise of these Pranayama sessions will help the practitioner develop a healthy breathing habit which will in-turn help one achieve peace of mind and",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/b1bc9e1e-22f2-4e93-90ed-73703dcc973d",
    name: " Yoga for Relaxation and Stress Relief",
    dis: "A series which will guide you through asana, pranayama and savasana addressing the body, mind and breath",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/83a5a31b-68f8-4acd-b6ff-d7bb8430ecd5",
    name: " Meditation for Kids",
    dis: "his series led by Prasiddha Ramarao would serve as a wonderful start for your child's meditation journey. The language is simple and engaging and something that would captures a child's imagination",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/95593272-76b9-4776-bd98-23934db3fc1b",
    name: "Falling into Sleep",
    dis: "If you've been struggling to catch some shut eye lately, meditating before bed might help. Insomnia is an unhealthy condition that plagues far too many people. Our radical lifestyle changes have significantly altered our sleep patterns, turning many of us into daytime zombies. Meditation to the rescue! Sleep meditation is a powerful tool that can help us fall",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/57ee03e5-6515-4892-9729-718edbc7505f",
    name: "Saying Yes to Life",
    dis: "The meditation sessions in this pack helps us take a closer look at our default responses to life's invitations for growth. Saying “yes” to life means a lot of things in a lot of different circumstances. The basic thing that unifies all of these circumstances is to take a risk in the direction of opening oneself up and being vulnerable — to not knowing, to not being able to control an outcome. It means trusting yourself and",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/206bf7fd-de2b-4ab8-9783-6b94acbab483.jpg",
    name: " Sleep Meditation",
    dis: "Say goodbye to sleepless nights! Created by Dr.Shyam Bhat, this series will help you relax to drift into a peaceful and deep sleep.",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/2e8dffed-4d9c-4eed-9bad-f5b577ab1fef",
    name: "7 days of Happiness",
    dis: "Spiritual coach ModMonk Anshul guides you through a beautiful journey of creating and enhancing your inner peace and happiness. Being happy is the basic right of every individual as we are innately happy beings, we just forget how to access that feeling and get stuck in a maze that makes us feel falsely worried, lonely, and unhappy. This pack is carefully crafted to help you climb the ladder of your inner subconscious to access",
  },
  {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/7fc199ea-0457-4d03-bd93-add35aa3a64c",
    name: "Meditation - Yoga Nidra",
    dis: "This series uses the pre-meditative practices of Yoga Nidra to help deepen relaxation. You are bound to wake up refreshed!",
  },
];

totalimages.map((elem) => {
  let div = document.createElement("div");
  div.id = "grd";

  let div1 = document.createElement("div");

  let div2 = document.createElement("div");

  let img = document.createElement("img");
  img.src = elem.img;

  let name = document.createElement("h2");
  name.innerText = elem.name;

  let dis = document.createElement("p");
  dis.innerText = elem.dis;

  div1.append(img);
  div2.append(name, dis);

  div.append(div1, div2);

  document.getElementById("books").append(div);
});

// scroll 1--------------------------

let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");

const btnLeft = document.querySelector("#btn-scroll-left");
const btnRight = document.querySelector("#btn-scroll-right");

btnLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
  currentScrollPosition += val * scrollAmount;

  if (currentScrollPosition > 0) {
    currentScrollPosition = 0;
    btnLeft.style.opacity = "0";
  } else {
    btnLeft.style.opacity = "1";
  }

  if (currentScrollPosition < maxScroll) {
    currentScrollPosition = maxScroll;
    btnRight.style.opacity = "0";
  } else {
    btnRight.style.opacity = "1";
  }

  sCont.style.left = currentScrollPosition + "px";
}
