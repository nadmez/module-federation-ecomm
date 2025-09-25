import faker from "faker";

let products = "";

for (let i = 0; i < 10; i++) {
  const name = faker.commerce.productName();
  products += `
    <tr>
      <td>${name}</td>
      <td>${faker.commerce.price()}</td>
    </tr>
  `;
}

console.log(products);
