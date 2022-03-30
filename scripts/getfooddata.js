
// <<<<<<< tapish
const getfooddata = async (url) => {

   let res = await fetch(url)
   let data = await res.json()
   console.log(data.meals)

const getfooddata = async(url) => {

   let res = await fetch(url)
   let data = await res.json()
   // console.log(data.meals)
// >>>>>>> main
   return data.meals
}


// <<<<<<< tapish
const appendfooddata = (data, parent, who) => {
   parent.innerHTML = null
   data.forEach(({ strMeal, strMealThumb }) => {
      let div = document.createElement(`div`)
      div.setAttribute("id", "fooditemdiv")

      let title = document.createElement(`P`)
      title.innerText = strMeal
      title.style.fontWeight = "bold"

const appendfooddata = (data, parent) => {
   parent.innerHTML = null
   data.forEach(({strMeal, strMealThumb}) => {
      let div = document.createElement(`div`)
      div.setAttribute("id","fooditemdiv")

      let title = document.createElement(`P`)
      title.innerText = strMeal
// >>>>>>> main

      let money = Math.floor(Math.random() * (250 - 100) + 100)
      let origional = money + Math.floor(Math.random() * (50 - 25) + 25)

// <<<<<<< tapish

      let bottomdiv = document.createElement(`div`)
      bottomdiv.style.display = "grid"
      bottomdiv.style.padding = "0 5px"
      bottomdiv.style.gridTemplateColumns = "repeat(2,1fr)"

// >>>>>>> main
      let starting = document.createElement(`div`)
      starting.innerText = "Starting Price"

      let strikedoffPrice = document.createElement(`div`)
      strikedoffPrice.innerText = `₹` + origional + '/meal'
      strikedoffPrice.style.textDecoration = 'line-through'
      strikedoffPrice.style.textAlign = "right"
// <<<<<<< tapish

// =======
      let offer = document.createElement(`div`)
      offer.innerText = "Offer Price"

      let price = document.createElement(`div`)
      price.innerText = `₹` + money + '/meal'
      price.style.fontWeight = "bold"
      price.style.textAlign = "right"

      let image = document.createElement(`img`)
      image.src = strMealThumb
      image.style.width = "100%"
      image.style.borderRadius = "5px"

// <<<<<<< tapish
      let bottomdiv = document.createElement(`div`)

      let cartbutton = document.createElement(`div`)
      let button = document.createElement(`button`)
      button.addEventListener('click', () => {
         addtocart(strMeal,strMealThumb,money)
      })
      button.setAttribute("id","cart")
      button.innerText = "add"
      cartbutton.append(button)

      if (who === "mealPlans") {
         bottomdiv.append(starting, strikedoffPrice, offer, price)
         div.append(image, title, bottomdiv)
         parent.append(div)
      }
      if(who === "eatOrder") {
         bottomdiv.append(starting, strikedoffPrice, offer, price)
         div.append(image, title, bottomdiv, cartbutton)
         parent.append(div)
      }

   })
}

// Add to cart
let cartdata = JSON.parse(localStorage.getItem('cart')) || []
const addtocart = (strMeal,strMealThumb,money) => {
   // console.log(strMeal,strMealThumb,money)
   let obj = {
      name : strMeal,
      image : strMealThumb,
      price : money
   } 
   cartdata.push(obj)
   // console.log(cartdata)

   localStorage.setItem('cart', JSON.stringify(cartdata))

}

export { getfooddata, appendfooddata }
// =======

      bottomdiv.append(starting,strikedoffPrice,offer,price)
      div.append(image,title,bottomdiv)
      parent.append(div)
   })
}

export {getfooddata , appendfooddata}
// >>>>>>> main
