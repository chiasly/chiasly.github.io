/* Reset and basic styling */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: #f8f8f8;
  color: #333;
}

header {
  background-color: #222;
  color: white;
  padding: 1rem;
  text-align: center;
}

header h1 {
  margin-bottom: 0.5rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

nav button {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

nav button.active {
  text-decoration: underline;
}

/* Tabs content */
.tab-content {
  display: none;
  padding: 1rem;
}

.tab-content.active {
  display: block;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 1rem;
}

.grid-item img {
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.6s ease-in;
}

.grid-item img.loaded {
  opacity: 1;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.8);
  z-index: 1000;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
}

.lightbox .close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

/* Footer */
footer {
  text-align: right;
  padding: 1rem;
  font-size: 0.9rem;
}
