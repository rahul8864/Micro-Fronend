import faker from 'faker'

// Showing List Product 
let productString = ''

for(let i = 0; i < 15; i++) {
    productString += `<div>${faker.commerce.productName()}</div>`
}

document.querySelector("#product-list").innerHTML = productString

// Carts

// const cartString = `<div>You have ${faker?.datatype?.number(20)} items in your cart!</div>`
// document.querySelector("#root").innerHTML = cartString

//{***Container***}