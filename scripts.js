* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #f8f8f6;
  color: #111;
  font-family: 'Inter', sans-serif;
}

/* HEADER */

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 60px;
  border-bottom: 1px solid #e5e5e5;
}

.logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  letter-spacing: 1px;
}

nav button {
  background: none;
  border: none;
  margin-left: 28px;
  font-size: 13px;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
}

nav button::after {
  content: "";
  width: 0%;
  height: 1px;
  background: #000;
  display: block;
  transition: width 0.4s ease;
  margin-top: 4px;
}

nav button:hover::after,
nav button.active::after {
  width: 100%;
}

/* TABS */

main {
  padding: 60px;
}

.tab {
  display: none;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.tab.active {
  display: block;
  opacity: 1;
}

/* GRID */

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.grid img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease, transform 0.4s ease;
  cursor: pointer;
}

.grid img.loaded {
  opacity: 1;
}

.grid img:hover {
  transform: scale(1.01);
}

/* CONTENT */

.content {
  max-width: 620px;
  margin: 80px auto;
  line-height: 1.8;
}

h2 {
  font-family: 'Cormorant Garamond', serif;
  margin-bottom: 20px;
  font-size: 28px;
}

/* FOOTER */

footer {
  position: fixed;
  bottom: 25px;
  right: 40px;
  font-size: 11px;
  letter-spacing: 1px;
  color: #666;
}

/* LIGHTBOX */

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.95);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.lightbox img {
  max-width: 90%;
  max-height: 85%;
}

.lightbox.active {
  display: flex;
}

.close {
  position: absolute;
  top: 40px;
  right: 60px;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
