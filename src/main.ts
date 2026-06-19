import "./style.css";

/* ============================================================
   Assets — inline SVG icons & graphics (stroke = currentColor)
   ============================================================ */
const EMBLEM =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/960px-Emblem_of_Uzbekistan.svg.png";

const ICONS: Record<string, string> = {
  "eye-off": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  id: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="14" x="3" y="5" rx="2.5"/><circle cx="9" cy="10.5" r="2"/><path d="M6.4 16a2.6 2.6 0 0 1 5.2 0"/><line x1="14.5" y1="9.5" x2="18" y2="9.5"/><line x1="14.5" y1="13.5" x2="18" y2="13.5"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1.4"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>`,
  health: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/><path d="M3.5 12h3l1.5-3 2.5 6 1.5-3h3"/></svg>`,
  education: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.4 10.9a1 1 0 0 0 0-1.8L12.8 5.2a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z"/><path d="M22 10.5V16"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
  family: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="6" r="2.6"/><circle cx="17" cy="6" r="2.6"/><path d="M3 15v-.5a4 4 0 0 1 7-2.6"/><path d="M21 15v-.5a4 4 0 0 0-7-2.6"/><circle cx="12" cy="14.3" r="2.2"/><path d="M8.6 22v-.4a3.4 3.4 0 0 1 6.8 0V22"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10.2 9-7 9 7"/><path d="M5 9.2V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.2"/><path d="M9.5 21v-5.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V21"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  "tab-home": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11 12 4l8 7"/><path d="M6 9.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.5"/></svg>`,
  "tab-apps": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2.2"/><rect x="14" y="3" width="7" height="7" rx="2.2"/><rect x="3" y="14" width="7" height="7" rx="2.2"/><rect x="14" y="14" width="7" height="7" rx="2.2"/></svg>`,
  qr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>`,
  "tab-wallet": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V5.5A1.5 1.5 0 0 0 17.5 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1v-2"/><path d="M21 9.5a1.5 1.5 0 0 0-1.5-1.5H16a3 3 0 0 0 0 6h3.5a1.5 1.5 0 0 0 1.5-1.5z"/></svg>`,
  "tab-user": `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="7.5" r="4.2"/><path d="M4.2 20a7.8 7.8 0 0 1 15.6 0 1 1 0 0 1-1 1H5.2a1 1 0 0 1-1-1z"/></svg>`,
  rotate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/></svg>`,
};

const FLAG_SVG = `<svg viewBox="0 0 60 42" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="42" fill="#ffffff"/>
  <rect width="60" height="13" fill="#1aa7d6"/>
  <rect y="12.4" width="60" height="1.8" fill="#d61a2b"/>
  <rect y="27.8" width="60" height="1.8" fill="#d61a2b"/>
  <rect y="29" width="60" height="13" fill="#1eb53a"/>
  <circle cx="10.5" cy="6.5" r="4.3" fill="#ffffff"/>
  <circle cx="12.4" cy="6.5" r="3.4" fill="#1aa7d6"/>
  <g fill="#ffffff">
    <circle cx="17.5" cy="3.4" r="0.8"/><circle cx="21" cy="3.4" r="0.8"/><circle cx="24.5" cy="3.4" r="0.8"/>
    <circle cx="17.5" cy="6.5" r="0.8"/><circle cx="21" cy="6.5" r="0.8"/><circle cx="24.5" cy="6.5" r="0.8"/><circle cx="28" cy="6.5" r="0.8"/>
    <circle cx="17.5" cy="9.6" r="0.8"/><circle cx="21" cy="9.6" r="0.8"/><circle cx="24.5" cy="9.6" r="0.8"/><circle cx="28" cy="9.6" r="0.8"/><circle cx="31.5" cy="9.6" r="0.8"/>
  </g>
</svg>`;

const BARS_SVG = `<svg viewBox="0 0 44 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="2" width="44" height="11" rx="2.5" fill="#1aa7d6"/>
  <rect x="0" y="17" width="44" height="11" rx="2.5" fill="#1eb53a"/>
</svg>`;

const VBARS_SVG = `<svg viewBox="0 0 30 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="0" width="11" height="64" rx="3" fill="#1aa7d6"/>
  <rect x="17" y="0" width="11" height="64" rx="3" fill="#1eb53a"/>
</svg>`;

/* ============================================================
   Inject graphics into placeholders
   ============================================================ */
for (const el of document.querySelectorAll<HTMLElement>("[data-icon]")) {
  const name = el.dataset.icon;
  if (name && ICONS[name]) el.innerHTML = ICONS[name];
}
for (const el of document.querySelectorAll<HTMLElement>("[data-flag]")) {
  el.innerHTML = FLAG_SVG;
}
for (const el of document.querySelectorAll<HTMLElement>("[data-flagbars]")) {
  el.innerHTML = BARS_SVG;
}

/* ============================================================
   Preloaded images (photo1.jpg va photo2.jpg)
   ============================================================ */
const PHOTO1_URL = "image/photo1.jpg";
const PHOTO2_URL = "image/photo2.jpg";

/* ============================================================
   "UZB" plate o'rniga photo1.jpg ko'rsatish
   ============================================================ */
const uzbButton = document.getElementById("uzbButton") as HTMLButtonElement;

// plate elementini topib, barcha UZB/UZ matnlarni yashirib, rasm qo'yamiz
const plateTextEl = uzbButton.querySelector<HTMLElement>(".plate__text");
if (plateTextEl) {
  plateTextEl.style.display = "none";
}
// plate__side ichidagi UZ matni va chiziqlarini ham yashiramiz
const plateSideEl = uzbButton.querySelector<HTMLElement>(".plate__side");
if (plateSideEl) {
  plateSideEl.style.display = "none";
}
const plateEl = uzbButton.querySelector<HTMLElement>(".plate");
if (plateEl) {
  const photo1Img = document.createElement("img");
  photo1Img.src = PHOTO1_URL;
  photo1Img.alt = "photo1";
  photo1Img.style.cssText =
    "position:absolute;inset:0;width:100%;height:100%;object-fit:contain;";
  // plateEl.style.position = "relative";
  // plateEl.style.overflow = "hidden";
  plateEl.insertBefore(photo1Img, plateEl.firstChild);
}

/* ============================================================
   Image viewer
   ============================================================ */
type Slide = { type: "card" } | { type: "image"; url: string };

const viewer = document.getElementById("viewer") as HTMLDivElement;
const track = document.getElementById("viewerTrack") as HTMLDivElement;
const dotsEl = document.getElementById("viewerDots") as HTMLDivElement;
const closeBtn = document.getElementById("viewerClose") as HTMLButtonElement;
const rotateBtn = document.getElementById("rotateBtn") as HTMLButtonElement;
const showBtn = document.getElementById("showBtn") as HTMLButtonElement;
const stage = viewer.querySelector(".viewer__stage") as HTMLDivElement;
const scrim = viewer.querySelector(".viewer__scrim") as HTMLDivElement;

// photo1 va photo2 oldindan yuklangan
const urls: string[] = [PHOTO1_URL, PHOTO2_URL];

let slides: Slide[] = [
  ...urls.map((url) => ({ type: "image", url }) as Slide),
];
let index = 0;

function portraitCard(): string {
  return `<div class="idp">
    <div class="idp__plate">
      <span class="idp__uzb">UZB</span>
      <span class="idp__uz">UZ</span>
    </div>
    <div class="idp__side">
      <span class="idp__bars">${VBARS_SVG}</span>
      <div class="idp__titles">
        <span class="idp__title idp__title--blue">O'ZBEKISTON RESPUBLIKASI</span>
        <span class="idp__title idp__title--green">SHAXS GUVOHNOMASI</span>
        <span class="idp__title--sub">REPUBLIC OF UZBEKISTAN · IDENTITY CARD</span>
      </div>
      <div class="idp__foot">
        <img src="${EMBLEM}" alt="O'zbekiston gerbi" />
        <span>UZB</span>
      </div>
    </div>
  </div>`;
}

function buildSlides(): void {
  track.innerHTML = slides
    .map((s, i) => {
      const inner =
        s.type === "card"
          ? portraitCard()
          : `<img src="${s.url}" alt="Yuklangan hujjat ${i}" />`;
      return `<div class="viewer__slide"><div class="slide-card">${inner}</div></div>`;
    })
    .join("");

  dotsEl.innerHTML = slides
    .map(
      (_, i) =>
        `<button type="button" data-dot="${i}" aria-label="Rasm ${i + 1}"></button>`,
    )
    .join("");
  for (const b of dotsEl.querySelectorAll<HTMLButtonElement>("button")) {
    b.addEventListener("click", () => goTo(Number(b.dataset.dot)));
  }
}

function update(): void {
  track.style.transform = `translateX(${-index * 100}%)`;
  const children = Array.from(track.children);
  children.forEach((c, i) => c.classList.toggle("is-current", i === index));
  dotsEl
    .querySelectorAll<HTMLButtonElement>("button")
    .forEach((b, i) => b.classList.toggle("is-active", i === index));
}

function goTo(i: number): void {
  const n = slides.length;
  index = ((i % n) + n) % n;
  update();
}

function next(): void {
  goTo(index + 1);
}

function openViewer(startIndex: number): void {
  index = startIndex;
  viewer.classList.add("is-open");
  viewer.setAttribute("aria-hidden", "false");
  requestAnimationFrame(update);
}

function closeViewer(): void {
  viewer.classList.remove("is-open");
  viewer.setAttribute("aria-hidden", "true");
}

function spinIcon(): void {
  const icon = rotateBtn.querySelector<HTMLElement>(".vbtn__icon");
  if (!icon) return;
  icon.setAttribute("data-spin", "1");
  window.setTimeout(() => icon.removeAttribute("data-spin"), 650);
}

/* ---------- uzbButton: file picker yo'q, viewer ochiladi ---------- */
uzbButton.addEventListener("click", () => {
  openViewer(0); // photo1.jpg — index 0
});

/* ---------- showBtn: file picker yo'q, viewer ochiladi ---------- */
showBtn.addEventListener("click", () => {
  openViewer(0); // photo1.jpg — index 0
});

/* ---------- navigation controls ---------- */
rotateBtn.addEventListener("click", () => {
  spinIcon();
  next();
});
closeBtn.addEventListener("click", closeViewer);
scrim.addEventListener("click", closeViewer);

/* keyboard */
window.addEventListener("keydown", (e) => {
  if (!viewer.classList.contains("is-open")) return;
  if (e.key === "Escape") closeViewer();
  else if (e.key === "ArrowRight") next();
  else if (e.key === "ArrowLeft") goTo(index - 1);
});

/* swipe */
let startX = 0;
let dragging = false;
stage.addEventListener("pointerdown", (e) => {
  startX = e.clientX;
  dragging = true;
});
window.addEventListener("pointerup", (e) => {
  if (!dragging) return;
  dragging = false;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 45) {
    if (dx < 0) next();
    else goTo(index - 1);
  }
});

/* initial */
buildSlides();
