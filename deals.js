function renderDeals() {
  const grid = document.getElementById("deal-grid");
  grid.innerHTML = COMBOS.map(
    (combo) => `
    <div class="deal-card">
      <div class="card-visual dark"><img src="${combo.image}" alt="${combo.name}" loading="lazy"></div>
      <span class="tag">${combo.tag}</span>
      <h4>${combo.name}</h4>
      <p>${combo.desc}</p>
      <div class="price-row">
        <span class="price-now">$${combo.price.toFixed(2)}</span>
        <span class="price-was">$${combo.was.toFixed(2)}</span>
      </div>
      <button class="add-btn wide" data-id="${combo.id}">Add combo to order</button>
    </div>
  `
  ).join("");

  grid.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const combo = findCombo(btn.dataset.id);
      if (combo) addToCart(combo);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderDeals);
