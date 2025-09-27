import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${Math.floor(
    faker.random.number() / 1000
  )} items in your cart.</div>`;

  el.innerHTML = cartText;

  console.log("Cart app is mounted!");
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");
  if (el) {
    mount(el);
  }
}

export { mount };
