import faker from 'faker'

// Showing List Product 
// let productString = ''

// for(let i = 0; i < 5; i++) {
//     productString += `<div>${faker.commerce.productName()}</div>`
// }

// document.querySelector("#root").innerHTML = productString

// Carts

const cartString = `<div>You have ${faker?.datatype?.number(20)} items in your cart!</div>`
document.querySelector("#cart-list").innerHTML = cartString

//{***Container***}