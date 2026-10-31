```javascript
const buttons = document.querySelectorAll(".add-button");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const searchInput = document.querySelector("#search");

let count = 0;
let total = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);

        count++;
        total += price;

        cartCount.textContent = count;
        cartTotal.textContent = total.toLocaleString("ru-RU") + " ₸";
    });
});

searchInput.addEventListener("input", () => {
    const search = searchInput.value.toLowerCase();

    document.querySelectorAll(".product").forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();

        product.style.display = name.includes(search) ? "block" : "none";
    });
});
```
