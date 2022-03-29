// Slide Show---------------------------------
let  images = ["../images/1.webp","../images/2.webp","../images/3.webp","../images/4.webp","../images/5.webp","../images/6.webp"];


let btn1 = document.createElement('button');
let btn2 = document.createElement('button')
let btn3 = document.createElement('button')
let btn4 = document.createElement('button')
let btn5 = document.createElement('button')
let btn6 = document.createElement('button')

let btn = [];
btn[0]=btn1;
btn[1]=btn2;
btn[2]=btn3;
btn[3]=btn4;
btn[4]=btn5;
btn[5]=btn6;



let slideshow = document.getElementById("slideshow");

let dotsNav = document.querySelector("#buttons_nav")

dotsNav.append(btn1,btn2,btn3,btn4,btn5,btn6)


document.getElementById("slide");


let i=0;

let timer;

function chang_image(){
        // images[i].addEventListener("click",()=>{
        //     clearTimeout(timer)
        // })

        if(i==images.length){
            i=0;
        }
        if(i>0){
             btn[i-1].style.backgroundColor = null;
        }
        if(i==0){
            btn[images.length-1].style.backgroundColor = null;
        }

        btn[i].style.backgroundColor = "black";
        btn[i].addEventListener("click", ()=>{
            clearTimeout(timer)
        });
        btn[i].addEventListener("dblclick", ()=>{
            chang_image();
        })
        let hvr = document.getElementById("slide");
        hvr.src=images[i];
        hvr.addEventListener("mouseover",()=>{
            clearTimeout(timer)
        })
        hvr.addEventListener("mouseleave",()=>{
            location.reload()
        })
        
       

        i++;

        timer = setTimeout("chang_image()",2000)
}
window.onload=chang_image;





// Set the date we're counting down to
var countDownDate = new Date("Mar 30, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

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


  document.getElementById("demo").innerHTML = days + " : " + hours + " : "
  + minutes + ": " + seconds ;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


const book_offer = ()=>{
    
}
