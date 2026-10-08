function renderMenu() {
  const container = document.getElementById("menu-groups");
  container.innerHTML = "";

  Object.entries(MENU).forEach(([key, group]) => {
    const section = document.createElement("div");
    section.className = "menu-group";
    section.id = key;
    section.innerHTML = `<div class="menu-group-head"><h3>${group.label}</h3><span class="count">${group.items.length} options</span></div>`;

    const grid = document.createElement("div");
    grid.className = "menu-grid";

    group.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "menu-card";
      card.innerHTML = `
        <div class="card-visual"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="card-foot">
          <span class="price">$${item.price.toFixed(2)}</span>
          <button class="add-btn" data-id="${item.id}">Add</button>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  container.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = findMenuItem(btn.dataset.id);
      if (item) addToCart(item);
    });
  });
}

function setupTabHighlighting() {
  const tabs = document.querySelectorAll(".cat-tab");
  const sections = Array.from(tabs)
    .map((t) => document.getElementById(t.dataset.target))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tabs.forEach((t) =>
            t.classList.toggle("active", t.dataset.target === entry.target.id)
          );
        }
      });
    },
    { rootMargin: "-160px 0px -60% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupTabHighlighting();
});
