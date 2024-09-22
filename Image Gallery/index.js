const gallery = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector(".close");

gallery.forEach((item) => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = item.querySelector("img").src;
  });
});

close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

let slideIndex = 0;

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
}

function moveSlide(n) {
  showSlides((slideIndex += n));
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});
