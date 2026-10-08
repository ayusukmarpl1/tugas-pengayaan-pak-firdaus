function renderOrder() {
  const list = document.getElementById("order-items");
  const count = cartCount();

  if (count === 0) {
    list.innerHTML = `<div class="order-empty">Your order is empty.<br><a href="menu.html" target="_blank">Browse the menu</a> to add something tasty.</div>`;
  } else {
    list.innerHTML = Object.values(cart)
      .map(
        (i) => `
      <div class="order-row">
        <div class="card-visual small"><img src="${i.image}" alt="${i.name}" loading="lazy"></div>
        <div class="info">
          <div class="name">${i.name}</div>
          <div class="unit-price">$${i.price.toFixed(2)} each</div>
        </div>
        <div class="qty-control">
          <button data-id="${i.id}" data-delta="-1" aria-label="Remove one">−</button>
          <span>${i.qty}</span>
          <button data-id="${i.id}" data-delta="1" aria-label="Add one">+</button>
        </div>
        <div class="line-total">$${(i.price * i.qty).toFixed(2)}</div>
      </div>`
      )
      .join("");

    list.querySelectorAll(".qty-control button").forEach((btn) => {
      btn.addEventListener("click", () => {
        changeQty(btn.dataset.id, parseInt(btn.dataset.delta, 10));
        renderOrder();
      });
    });
  }

  document.getElementById("order-total").textContent = `$${cartTotal().toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderOrder();
  document.getElementById("checkout-btn").addEventListener("click", runCheckout);
});
