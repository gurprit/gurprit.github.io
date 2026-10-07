const COLORS = [
  "#ff2da6",
  "#00d9ff",
  "#ffe600",
  "#8d3cff",
  "#ff6a00",
  "#64f000",
  "#246bff",
  "#ff334f",
];
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
function burst(target, amount = 16) {
  if (reduced()) return;
  const layer = document.createElement("span");
  layer.className = "dk-burst-layer";
  if (getComputedStyle(target).position === "static")
    target.style.position = "relative";
  target.appendChild(layer);
  for (let i = 0; i < amount; i++) {
    const p = document.createElement("i");
    p.className = "dk-like-confetti" + (i % 5 === 2 ? " dk-round" : "");
    p.style.setProperty("--dk-x", (Math.random() - 0.5) * 120 + "px");
    p.style.setProperty("--dk-peak", -48 - Math.random() * 72 + "px");
    p.style.setProperty("--dk-fall", 120 + Math.random() * 92 + "px");
    p.style.setProperty(
      "--dk-rotation",
      (Math.random() > 0.5 ? 1 : -1) * (320 + Math.random() * 520) + "deg",
    );
    p.style.setProperty("--dk-scale", String(0.58 + Math.random() * 0.78));
    p.style.setProperty("--dk-delay", Math.random() * 100 + "ms");
    p.style.setProperty("--dk-sway", 7 + Math.random() * 12 + "px");
    p.style.setProperty("--dk-drift", (Math.random() - 0.5) * 30 + "px");
    p.style.setProperty("--dk-color", COLORS[i % COLORS.length]);
    p.innerHTML = "<b></b>";
    layer.appendChild(p);
  }
  setTimeout(() => layer.remove(), 6200);
}
function ambient() {
  if (reduced()) return;
  const root = document.querySelector("#ambient");
  let seed = 271828;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < 42; i++) {
    const depth = random(),
      heart = random() > 0.84,
      square = !heart && random() > 0.72,
      width = heart
        ? 11 + random() * 6
        : square
          ? 6 + random() * 4
          : 4 + random() * 4,
      height = heart ? width : square ? width : 10 + random() * 10;
    const piece = document.createElement("span");
    piece.className = "dk-ambient-piece";
    piece.style.left = 1 + random() * 98 + "%";
    piece.style.top = -4 + random() * 104 + "%";
    piece.style.width = width + "px";
    piece.style.height = height + "px";
    piece.style.setProperty("--dk-ambient-fall", 42 + random() * 32 + "s");
    piece.style.setProperty("--dk-ambient-delay", -(random() * 65) + "s");
    piece.style.setProperty("--dk-ambient-sway", 18 + random() * 38 + "px");
    piece.style.setProperty(
      "--dk-ambient-sway-duration",
      5.5 + random() * 5.5 + "s",
    );
    piece.style.setProperty("--dk-ambient-sway-delay", -(random() * 8) + "s");
    piece.style.setProperty("--dk-ambient-flip", 3.8 + random() * 5.2 + "s");
    piece.style.setProperty("--dk-ambient-flip-delay", -(random() * 6) + "s");
    piece.style.setProperty(
      "--dk-ambient-rotation",
      (random() > 0.5 ? 1 : -1) * (18 + random() * 42) + "deg",
    );
    piece.style.setProperty("--dk-ambient-scale", String(0.72 + depth * 0.68));
    piece.style.setProperty(
      "--dk-ambient-opacity",
      String(0.42 + depth * 0.42),
    );
    piece.style.setProperty(
      "--dk-ambient-blur",
      depth < 0.18 ? 0.45 + random() * 0.55 + "px" : "0px",
    );
    piece.style.setProperty(
      "--dk-color",
      COLORS[Math.floor(random() * COLORS.length)],
    );
    piece.innerHTML = `<span class="dk-ambient-sway"><span class="dk-paper${heart ? " dk-heart-piece" : ""}">${heart ? "♥" : ""}</span></span>`;
    root.appendChild(piece);
  }
}
const status = document.querySelector("#demo-status");
const items = new Map();
const totalLabel = document.querySelector("#subtotal");
const progress = document.querySelector("#shipping-progress");
const shipping = document.querySelector("#shipping-message");
const toast = document.querySelector("#unlock-toast");
const money = (value) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
let total = 0;
function renderBasket() {
  const root = document.querySelector("#basket-items");
  root.replaceChildren();
  let count = 0;
  for (const [name, item] of items) {
    count += item.quantity;
    const row = document.createElement("div");
    const label = document.createElement("span");
    const price = document.createElement("strong");
    label.textContent = `${name} × ${item.quantity}`;
    price.textContent = money(item.price * item.quantity);
    row.append(label, price);
    root.append(row);
  }
  if (!count) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Good things are on their way. Add something you love.";
    root.append(empty);
  }
  document.querySelector("#basket-count").textContent =
    `${count} ${count === 1 ? "item" : "items"}`;
  totalLabel.textContent = money(total);
  progress.value = Math.min(total, 50);
  shipping.textContent =
    total >= 50
      ? "Lovely. Delivery is on us."
      : `You’re ${money(50 - total)} away from free delivery.`;
  toast.hidden = total < 50;
}
document.querySelectorAll("[data-cart]").forEach((button) => {
  let timer;
  button.addEventListener("click", () => {
    const name = button.dataset.cart,
      price = Number(button.dataset.price),
      previous = total;
    const item = items.get(name) || { price, quantity: 0 };
    item.quantity++;
    items.set(name, item);
    total += price;
    renderBasket();
    burst(button, 24);
    button.querySelector("span").textContent = "Added to basket ✓";
    clearTimeout(timer);
    timer = setTimeout(
      () => (button.querySelector("span").textContent = "Add to basket"),
      1800,
    );
    status.textContent = `${name} added. Basket total ${money(total)}.${previous < 50 && total >= 50 ? " Free delivery unlocked!" : ""}`;
    if (previous < 50 && total >= 50) burst(toast, 28);
  });
});
document.querySelectorAll("[data-wishlist]").forEach((button) =>
  button.addEventListener("click", () => {
    const liked = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(liked));
    button.classList.toggle("is-liked", liked);
    button.setAttribute(
      "aria-label",
      `${liked ? "Remove" : "Save"} ${button.dataset.wishlist} ${liked ? "from" : "to"} wishlist`,
    );
    const heart = button.querySelector(".dk-heart");
    heart.textContent = liked ? "♥" : "♡";
    if (liked) burst(heart, 16);
    status.textContent = `${button.dataset.wishlist} ${liked ? "saved to" : "removed from"} your wishlist.`;
  }),
);
document.querySelector("#reset-basket").addEventListener("click", () => {
  items.clear();
  total = 0;
  renderBasket();
  status.textContent = "Demo basket reset. Try another shopping moment.";
  document
    .querySelectorAll("[data-cart] > span:first-child")
    .forEach((label) => (label.textContent = "Add to basket"));
});
const offerButton = document.querySelector("#offer-button");
offerButton.addEventListener("click", () => {
  document.querySelector("#offer-result").textContent =
    "Treat unlocked: 10% off with JOY10 — demo code only.";
  offerButton.querySelector("span").textContent = "✦";
  burst(offerButton, 28);
});
const motion = matchMedia("(prefers-reduced-motion: reduce)");
const toggle = document.querySelector("#ambient-toggle");
let paused = false;
function syncMotion() {
  document.querySelector("#ambient").replaceChildren();
  if (!motion.matches) ambient();
  toggle.disabled = motion.matches;
  toggle.textContent = motion.matches
    ? "Reduced motion respected"
    : paused
      ? "Resume ambient motion"
      : "Pause ambient motion";
  toggle.setAttribute("aria-pressed", String(paused));
}
toggle.addEventListener("click", () => {
  paused = !paused;
  document.querySelector(".promo").classList.toggle("is-paused", paused);
  toggle.setAttribute("aria-pressed", String(paused));
  toggle.textContent = paused
    ? "Resume ambient motion"
    : "Pause ambient motion";
});
motion.addEventListener("change", syncMotion);
syncMotion();
