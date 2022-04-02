
import { getfooddata, appendfooddata } from "./getfooddata.js"

// preloader on load
window.onload = () => {
   let preLoader = document.querySelector(".site_loader");
   preLoader.style.display = "none";
};

// footer
import footer from "../components/footer.js"
document.querySelector(`#footer`).innerHTML = footer()

// Intial data appended
let fooddata = await getfooddata(`https://www.themealdb.com/api/json/v1/1/search.php?f=k`)
let parent = document.querySelector(`#itemDescription`)
appendfooddata(fooddata, parent, "eatOrder")

// vegetarian filter
let vegdiv = document.querySelector(`#veg`)
let vegClickCounter = false
const showVeg = async () => {
   if (!vegClickCounter) {
      vegClickCounter = true
      vegdiv.style.backgroundColor = "#D8F2BC"
      vegdiv.style.color = "green"
      fooddata = await getfooddata(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`)
      appendfooddata(fooddata, parent, "eatOrder")
   }
   else {
      vegClickCounter = false
      let fooddata = await getfooddata(`https://www.themealdb.com/api/json/v1/1/search.php?f=k`)
      vegdiv.style.backgroundColor = "white"
      vegdiv.style.color = "black"
      appendfooddata(fooddata, parent, "eatOrder")
   }
}
vegdiv.addEventListener('click', showVeg)

