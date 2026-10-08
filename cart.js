// Shared across every page. Since Menu, Deals, and Order each open in
// their own tab, the cart lives in localStorage and syncs across tabs
// via the "storage" event, so adding an item in one tab updates the
// order/badge in any other open tab.

const CART_KEY = "blazehouse_cart";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "{}");
  } catch (e) {
    return {};
  }
}
function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart", e);
  }
}

let cart = loadCart();

// item: { id, name, price, visual }
function addToCart(item) {
  if (cart[item.id]) {
    cart[item.id].qty += 1;
  } else {
    cart[item.id] = { ...item, qty: 1 };
  }
  saveCart();
  updateNavBadge();
  showToast(`${item.name} added to your order`);
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  saveCart();
  updateNavBadge();
}

function cartCount() {
  return Object.values(cart).reduce((sum, i) => sum + i.qty, 0);
}
function cartTotal() {
  return Object.values(cart).reduce((sum, i) => sum + i.qty * i.price, 0);
}

function updateNavBadge() {
  const badge = document.getElementById("cart-badge");
  if (badge) badge.textContent = cartCount();
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function runCheckout() {
  if (cartCount() === 0) return;
  showToast("This is a demo — no real order was placed.");
}

// Keep every open tab in sync when the cart changes elsewhere.
window.addEventListener("storage", (e) => {
  if (e.key !== CART_KEY) return;
  cart = loadCart();
  updateNavBadge();
  if (typeof renderOrder === "function") renderOrder();
});

// Mobile hamburger menu: toggles the nav-links dropdown on small screens
// and closes it again once a link is tapped.
function setupNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", updateNavBadge);
document.addEventListener("DOMContentLoaded", setupNavToggle);
