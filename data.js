// ---------- Menu data ----------
// Each item points to a real image file under images/. Swap any file in
// that folder (keep the same file name) to change what shows up on the
// site — no code changes needed.
const MENU = {
  burgers: {
    label: "Burgers",
    items: [
      { id: "B1", name: "Classic Smash", desc: "Smashed beef patty, American cheese, pickles, house sauce.", price: 6.49, image: "images/images/B1.jpg" },
      { id: "B2", name: "Double Melt Stack", desc: "Two patties, double cheese, crispy onions, smoky BBQ glaze.", price: 8.29, image: "images/images/B2.jpg" },
      { id: "B3", name: "Blazing Jalapeño", desc: "Pepper-jack, fresh jalapeños, chipotle mayo, a real kick.", price: 7.79, image: "images/images/B3.jpg" },
      { id: "B4", name: "Garden Veggie Stack", desc: "Grilled veggie patty, avocado spread, arugula, tomato.", price: 7.29, image: "images/images/B4.jpg" },
    ],
  },
  chicken: {
    label: "Chicken",
    items: [
      { id: "C1", name: "Crispy Tenders (5pc)", desc: "Hand-breaded tenders, choice of dip on the side.", price: 6.99, image: "images/images/C1.jpg" },
      { id: "C2", name: "Nashville Hot Sandwich", desc: "Crispy fillet, spicy honey glaze, crunchy slaw.", price: 7.49, image: "images/images/C2.jpg" },
      { id: "C3", name: "Buffalo Wings (6pc)", desc: "Classic buffalo toss, celery, blue cheese dip.", price: 7.99, image: "images/images/C3.jpg" },
      { id: "C4", name: "Grilled Chicken Wrap", desc: "Grilled chicken, lettuce, ranch, warm tortilla.", price: 6.79, image: "images/images/C4.jpg" },
    ],
  },
  fries: {
    label: "Fries & Sides",
    items: [
      { id: "F1", name: "Classic Fries", desc: "Crispy-edged, fluffy inside, salted just right.", price: 3.49, image: "images/images/F1.jpg" },
      { id: "F2", name: "Loaded Cheese Fries", desc: "Melted cheddar, bacon bits, scallions.", price: 5.29, image: "images/images/F2.jpg" },
      { id: "F3", name: "Curly Fries", desc: "Seasoned and spiraled, extra crunch per bite.", price: 3.99, image: "images/images/F3.jpg" },
      { id: "F4", name: "Spicy Cajun Fries", desc: "Tossed in a smoky Cajun seasoning blend.", price: 3.99, image: "images/images/F4.jpg" },
    ],
  },
  drinks: {
    label: "Drinks",
    items: [
      { id: "D1", name: "Fountain Cola", desc: "Ice-cold classic cola, refillable size.", price: 2.29, image: "images/images/D1.jpg" },
      { id: "D2", name: "Fresh Lemonade", desc: "Hand-squeezed, lightly sweetened.", price: 2.79, image: "images/images/D2.jpg" },
      { id: "D3", name: "Iced Tea", desc: "Brewed daily, unsweet or sweet.", price: 2.49, image: "images/images/D3.jpg" },
      { id: "D4", name: "Chocolate Milkshake", desc: "Thick, creamy, topped with whipped cream.", price: 4.29, image: "images/images/D4.jpg" },
    ],
  },
};

// ---------- Combo deals ----------
const COMBOS = [
  {
    id: "CO1", tag: "Most popular", name: "Classic Combo",
    desc: "Classic Smash burger, Classic Fries, and a Fountain Cola.",
    price: 9.99, was: 12.27, image: "images/images/CO1.jpg",
  },
  {
    id: "CO2", tag: "Spicy pick", name: "Heat Wave Combo",
    desc: "Nashville Hot Sandwich, Spicy Cajun Fries, and an Iced Tea.",
    price: 11.49, was: 13.97, image: "images/images/CO2.jpg",
  },
  {
    id: "CO3", tag: "Sharing size", name: "Double Feast Combo",
    desc: "Double Melt Stack, Loaded Cheese Fries, and a Chocolate Milkshake.",
    price: 14.99, was: 17.87, image: "images/images/CO3.jpg",
  },
];

function findMenuItem(id) {
  for (const group of Object.values(MENU)) {
    const found = group.items.find((i) => i.id === id);
    if (found) return found;
  }
  return null;
}
function findCombo(id) {
  return COMBOS.find((c) => c.id === id) || null;
}
