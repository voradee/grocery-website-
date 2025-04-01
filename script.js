let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    cart.forEach(product => {
        let li = document.createElement("li");
        li.innerText = `${product.item} - $${product.price}`;
        cartList.appendChild(li);
    });
}
