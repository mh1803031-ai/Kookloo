// script.js

// Main audio
const audio = document.getElementById("birthdaySong");

// Confetti Button
document.getElementById("confettiBtn").addEventListener("click", () => {
  audio.play();
  // Tambahkan efek confetti jika ingin (bisa gunakan library seperti canvas-confetti)
  // import confetti from 'https://cdn.skypack.dev/canvas-confetti';
  // confetti({ particleCount: 100, spread: 70 });
  showSlide(2);
});

// Final Button
document.getElementById("finalBtn").addEventListener("click", () => {
  document.getElementById("galleryModal").style.display = "flex";
});

// Close Modal
document.getElementById("closeModalBtn").addEventListener("click", () => {
  document.getElementById("galleryModal").style.display = "none";
  audio.pause();
});

// Gallery Slider
let currentImageIndex = 0;
const sliderTrack = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Ganti dengan URL gambar kamu
const images = [
  "https://via.placeholder.com/800x400?text=Momen+1",
  "https://via.placeholder.com/800x400?text=Momen+2",
  "https://via.placeholder.com/800x400?text=Momen+3"
];

// Generate gambar
images.forEach(imgSrc => {
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "Momen Kita";
  sliderTrack.appendChild(img);
});

function updateSlider() {
  const offset = -currentImageIndex * 100;
  sliderTrack.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateSlider();
});

// Slide Function
function showSlide(index) {
  document.querySelectorAll(".slide").forEach((slide, i) => {
    slide.classList.toggle("active", i + 1 === index);
  });
}

// Optional: Auto-play audio on click (mobile browsers block autoplay)
document.body.addEventListener("click", () => {
  if (audio.paused) audio.play();
}, { once: true });