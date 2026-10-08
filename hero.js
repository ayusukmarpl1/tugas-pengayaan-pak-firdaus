// Lets the hero section on the home page swap between a few food photos
// (burger / chicken / fries / drink). Each key points to a real image file
// under images/ - replace those files with your own photos any time and
// the hero will pick them up automatically.

const HERO_VISUALS = {
  burger: { src: "images/images/hero-burger.jpg", alt: "Burger" },
  chicken: { src: "images/images/hero-chicken.jpg", alt: "Chicken" },
  fries: { src: "images/images/hero-fries.jpg", alt: "Fries" },
  drink: { src: "images/images/hero-drink.jpg", alt: "Drink" },
};

function setHeroVisual(key) {
  const stage = document.getElementById("hero-visual-stage");
  const visual = HERO_VISUALS[key];
  if (!stage || !visual) return;

  stage.classList.add("swap");
  stage.innerHTML = `<img src="${visual.src}" alt="${visual.alt}" loading="lazy">`;
  requestAnimationFrame(() => stage.classList.remove("swap"));

  document.querySelectorAll(".visual-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.visual === key);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setHeroVisual("burger");

  document.querySelectorAll(".visual-tab").forEach((btn) => {
    btn.addEventListener("click", () => setHeroVisual(btn.dataset.visual));
  });
});
