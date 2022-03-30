
import { getfooddata, appendfooddata } from "./getfooddata.js"

let fooddata = await getfooddata(`https://www.themealdb.com/api/json/v1/1/search.php?f=k`)

let parent = document.querySelector(`#foodcontainer`)
// <<<<<<< tapish
appendfooddata(fooddata, parent, "mealPlans")
// =======
appendfooddata(fooddata, parent)
// >>>>>>> main

const changeSelect = async(x) => {
   // console.log(1)
   let elem = document.getElementById(x)
   if(x === 'breakfast') {
      fooddata = await getfooddata(`https://www.themealdb.com/api/json/v1/1/search.php?f=k`)
      document.getElementById('breakfast').style.borderBottom = "3px solid red"
   } else {
      document.getElementById('breakfast').style.borderBottom = "3px solid white"
   }
   if(x === 'lunch') {
      fooddata = await getfooddata(`https://www.themealdb.com/api/json/v1/1/search.php?f=m`)
      document.getElementById('lunch').style.borderBottom = "3px solid red"
   } else {
      document.getElementById('lunch').style.borderBottom = "3px solid white"
   }
   if(x === 'snacks') {
      fooddata = await getfooddata(`https://www.themealdb.com/api/json/v1/1/search.php?f=f`)
      document.getElementById('snacks').style.borderBottom = "3px solid red"
   } else {
      document.getElementById('snacks').style.borderBottom = "3px solid white"
   }
   if(x === 'dinner') {
      fooddata = await getfooddata(`https://www.themealdb.com/api/json/v1/1/search.php?f=l`)
      document.getElementById('dinner').style.borderBottom = "3px solid red"
   } else {
      document.getElementById('dinner').style.borderBottom = "3px solid white"
   }
// <<<<<<< tapish
   appendfooddata(fooddata, parent, "mealPlans")
=======
   appendfooddata(fooddata, parent)
// >>>>>>> main
}

let type = document.querySelectorAll(`#mealsType>div`)
// console.log(type)

type.forEach((el) => {
   // console.log(id)
   el.addEventListener('click', () => {
      // console.log(el)
      changeSelect(el.id)
   })
})

