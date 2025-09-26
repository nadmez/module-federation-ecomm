import faker from "faker";

const cartText = `<div>You have ${Math.floor(
  faker.random.number() / 1000
)} items in your cart.</div>`;

document.querySelector("#cart-dev").innerHTML = cartText;
console.log("Cart app is loaded!");
