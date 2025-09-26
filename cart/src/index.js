import faker from "faker";

const cartText = `<div>You have ${faker.random.number()} items in your cart.</div>`;

document.querySelector("#cart-dev").innerHTML = cartText;
console.log("Cart app is loaded!");
