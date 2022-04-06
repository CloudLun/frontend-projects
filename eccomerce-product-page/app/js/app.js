const nav = document.querySelector(".mobile-primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")
const hero = document.querySelector('.hero')
const image = document.querySelector('.item-image')
const item = document.querySelector('.item-gallery')
const pre = document.querySelector('.pre')
const next = document.querySelector('.next')
const amount = document.querySelector('.amount-section')
const num = document.querySelector('.num')
const cart = document.querySelector('.nav-cart')
const navCartNum = document.querySelector('.nav-cartNum')
const cartContent = document.querySelector('.cart-container')
const itemContent = document.querySelector('.cart-wrapper')
const cartNum = document.querySelector('.cart-num')
const addToCart = document.getElementById('addToCart')
const price = document.querySelector('.priceForOne')
const total = document.querySelector('.total')
const empty = document.getElementById('empty')
const checkout = document.querySelector('.checkout')
let cartNumInt = parseInt(cartNum.textContent)
let numInt = parseInt(num.textContent)

data =[
    {
        image: './images/image-product-1.jpg'
    },
    {
        image: './images/image-product-2.jpg'
    },
    {
        image: './images/image-product-3.jpg'
    },
    {
        image: './images/image-product-4.jpg'
    }
]

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible")
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else {
        nav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

let id = 0
hero.addEventListener('click', (event) => {
    let target = event.target.classList
    if (target.contains('next')) {
        if (id >= 3){
            id = 0
        } else {
            id += 1
        }
    }
    if(target.contains('pre')) {
        if (id <= 0) {
            id = 3
        } else {
            id -= 1
        }
    }
    if(target.contains('item')) {
        image.src = data[parseInt(event.target.id)-1].image
        // console.log(data[parseInt(event.target.id)-1].image)
        // console.log(image.src)
    } else {
        image.src = data[id]['image']
    }
})

cart.addEventListener('click', () => {
    let visibility = cartContent.getAttribute('data-visible')
    if (visibility === 'false') {
        cartContent.setAttribute('data-visible', true)
    } else {
        cartContent.setAttribute('data-visible', false)
    }
})

itemContent.addEventListener('click', (event) => {
    target = event.target.id 
    if (target === 'delete') {
        empty.setAttribute('data-visible', true)
        itemContent.setAttribute('data-visible', false)
        checkout.classList.remove('d-block')
        checkout.classList.add('d-none')
        navCartNum.classList.remove('d-flex')
        navCartNum.classList.add('d-none')
    } 
})




amount.addEventListener('click', (event) => {
    let e = event.target.id
    if(e === 'plus') {
        numInt += 1
    } else if (e === 'minus') {
        if (numInt > 0) {
            numInt -= 1
        } else {
            numInt = 0
        } 
    }
    num.textContent = numInt
})

addToCart.addEventListener('click', () => {
    let visibility = itemContent.getAttribute('data-visible')
    if (numInt !== 0) {
        if (visibility === 'false') {
            itemContent.setAttribute('data-visible', true)
            empty.setAttribute('data-visible', false)
            checkout.classList.remove('d-none')
            checkout.classList.add('d-block')
        }
        navCartNum.classList.remove('d-none')
        navCartNum.classList.add('d-flex')
        navCartNum.textContent = numInt
        cartNum.textContent = numInt
        total.textContent = `$${parseFloat(parseInt(price.textContent)*cartNum.textContent).toFixed(2)}`
        num.textContent = 0
        numInt = 0
    }        
})