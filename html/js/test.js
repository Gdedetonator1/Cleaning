var slider = document.querySelector(".slider");
var sliderContainer = document.querySelector(".slider-container");
var sliderImages = document.querySelectorAll(".slider img");
var slideWidth = sliderImages[0].clientWidth;
var currentSlide = 0;
var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");

function startSlider() {
  setInterval(function () {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    var translateXValue = -1 * slideWidth * currentSlide;
    sliderContainer.style.transform = "translateX(" + translateXValue + "px)";
  }, 2000);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
  var translateXValue = -1 * slideWidth * currentSlide;
  sliderContainer.style.transform = "translateX(" + translateXValue + "px)";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  var translateXValue = -1 * slideWidth * currentSlide;
  sliderContainer.style.transform = "translateX(" + translateXValue + "px)";
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

startSlider();
