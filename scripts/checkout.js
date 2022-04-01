let cartdata = JSON.parse(localStorage.getItem('cart'))

  
let parent = document.querySelector(`#checkoutDisplay`)

const removefromcart = (cartdata,el) => {
   // console.log(el.name)
   let temp = []
   cartdata.forEach((elem) => {
      if(elem.name !== el.name) {
         temp.push(elem)
      }
   })
   cartdata = temp
   localStorage.setItem('cart', JSON.stringify(cartdata))
   display(cartdata)
   window.location.reload();
}

const increaseqty = (el) => {
   el.qty++
   localStorage.setItem('cart', JSON.stringify(cartdata))
   display(cartdata)
}

const decreaseqty = (el) => {
   if(el.qty === 0) {
      return
   }
   el.qty--
   localStorage.setItem('cart', JSON.stringify(cartdata))
   display(cartdata)
   
}

const itemCounter = (cartdata) => {
   let count = 0
   cartdata.forEach((el) => {
      count += el.qty
   })
   return count
}

const display = (cartdata) => {
   parent.innerHTML = null
   cartdata.forEach((el) => {
      // console.log(el)
      let main = document.createElement(`div`)
      main.style.display = "flex"

      let divimg = document.createElement(`div`)

      let divprice = document.createElement(`div`)

      let divadd = document.createElement(`div`)

      let img = document.createElement(`img`)
      img.style.width = "105px"
      img.src = el.image
      divimg.append(img)

      let price = document.createElement(`p`)
      price.innerText = `₹ ${el.price}`

      let name = document.createElement(`p`)
      name.innerText = el.name
      name.style.fontWeight = "bold"
      divprice.append(name,price)



      let remove = document.createElement(`img`)
      remove.src = "https://www.eatfit.in/assets/images/Trash.svg"
      remove.setAttribute("id", "remove")
      remove.addEventListener('click', () => {
         removefromcart(cartdata,el)
      })


      let plusminus = document.createElement(`div`)
      plusminus.style.display = "flex"


      let plus = document.createElement(`img`)
      plus.src = "https://static.eatfit.in/assets/images/plus.svg"
      plus.setAttribute("id","plus")
      plus.addEventListener('click', () => {
         increaseqty(el)
      })


      let minus = document.createElement(`img`)
      minus.src = "https://static.eatfit.in/assets/images/minus.svg"
      minus.setAttribute("id","minus")
      minus.addEventListener('click', () => {
         decreaseqty(el)
      })

      let num = document.createElement(`div`)
      num.innerText = el.qty
      num.setAttribute("id","num")

      plusminus.append(minus,num,plus)

      divadd.append(remove,plusminus)



      main.append(divimg,divprice,divadd)

      parent.append(main)

      document.querySelector(`#totalItems`).innerText = itemCounter(cartdata)
   })
}

display(cartdata)

