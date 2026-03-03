// TAB SWITCHING
const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    tabs.forEach(tab => tab.classList.remove("active"));
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// IMAGE LOADING
const gallery = document.getElementById("gallery");
let page = 1;

function loadImages() {
  for (let i = 1; i <= 16; i++) {
    const img = document.createElement("img");
    img.src = `images/photo_${page}_${i}.jpg`;

    img.onload = () => {
      img.classList.add("loaded");
    };

    gallery.appendChild(img);
  }
  page++;
}

loadImages();

// INFINITE SCROLL
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    loadImages();
  }
});

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

gallery.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    lightbox.classList.add("active");
    lightboxImg.src = e.target.src;
  }
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});