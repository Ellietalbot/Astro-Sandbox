const cart = [
  {id: 1, name: "Item 1", price:"10"},
  {id: 2, name: "Item 2", price:"15"},
  {id: 3, name: "Item 3", price:"12"}
]

const cartElement = document.querySelector("#cart");

cart.forEach((item) => {
  cartElement.innerHTML += `
    <div>
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
    </div>
  `;
});