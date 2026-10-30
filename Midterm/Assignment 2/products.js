const products = {
  SG5: {
    name: "SG5 wireless Gaming Mouse",
    price: "Rs. 8700",
    color: "Black",
    description:
      "The SG5 wireless gaming mouse is designed for precision and comfort, featuring customizable buttons, adjustable DPI settings, and a sleek ergonomic design. It offers a seamless gaming experience with its responsive sensor and long-lasting battery life.",
    image: "../Material_For_Website/SG5-wireless-Gaming-mouse.png",
  },
};

const id = new URLSearchParams(window.location.search).get("id");
const product = products[id];

if (product) {
  document.title = product.name;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("color").textContent = product.color;
  document.getElementById("product-description").textContent =
    product.description;
  document.getElementById("product-image").src = product.image;
} else {
  document.querySelector("main").innerHTML = "Product not found";
}
