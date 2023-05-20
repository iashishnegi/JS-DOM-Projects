let cart = [];

function addItem() {
  const itemName = document.getElementById("item-name").value;
  const itemQuantity = parseInt(document.getElementById("item-quantity").value);
  cart.push({ name: itemName, quantity: itemQuantity });
  document.getElementById("output").innerText = `Added ${itemQuantity} ${itemName}(s) to the cart.`;
} 

function doubleCartItems(cart) {
  for (let i = 0; i < cart.length; i++) {
    cart[i].quantity = cart[i].quantity * 2;
  }
  return cart;
}


function doubleCart() {
  const updatedCart = doubleCartItems(cart);
  let output = "";
  for (let i = 0; i < updatedCart.length; i++) {
    output += `${updatedCart[i].quantity} ${updatedCart[i].name}(s)\n`;
  }
       
  document.getElementById("output").innerText = "updated cart: \n" + output;
}