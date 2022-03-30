var slideIndex,slides,dots;
function slider()
{
    slideIndex=0;
    slides = document.querySelectorAll(".imageContainer");
    slides[slideIndex].style.opacity=1;

    dots=[];
    var dotContainer=document.querySelector("#dotsContainer");
    
    for(var i=0;i<slides.length;i++)
    {
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onclick","autoSlider("+i+")")
        dotContainer.append(dot);
        dots.push(dot);
    }
    console.log(dots[slideIndex]);
    dots[slideIndex].style.backgroundColor="red";
}
slider();
function plusSlides(n)
{
    autoSlider(slideIndex+n);
}
function autoSlider(n){
    var i,currentSlide,nextSlide
    var autoSliderAnimationClass={
        forCurrent:"",
        forNext:""

    }
    if(n > slideIndex)
    {
        if(n>=slides.length)[
            n=0
        ]
        autoSliderAnimationClass.forCurrent="moveLeftCurrentSlide"
        autoSliderAnimationClass.forNext="moveLeftNextSlide"
        // slideIndex=1;
    }
    else if(n<slideIndex)
    {
        if(n<0)
        {
            n=slides.length-1
        }
        autoSliderAnimationClass.forCurrent="moveRightCurrentSlide"
        autoSliderAnimationClass.forNext="moveRightNextSlide"

    }
    if(n!=slideIndex)
    {
        nextSlide = slides[n];
        currentSlide = slides[slideIndex];
        for(i=0;i<slides.length;i++)
        {
            slides[i].className="imageContainer";
            slides[i].style.opacity=0;
            dots[i].style.backgroundColor="pink";
            
        }
        currentSlide.classList.add(autoSliderAnimationClass.forCurrent);
        nextSlide.classList.add(autoSliderAnimationClass.forNext);
        dots[n].style.backgroundColor="skyblue";
        slideIndex=n;
    }
}


var timer=null;
function setTimer()
{
    timer = setInterval(function ()
    {
        plusSlides(1);
    },5000)
}
setTimer();