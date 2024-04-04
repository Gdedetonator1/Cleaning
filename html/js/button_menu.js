// Получение ссылок на элементы DOM
const oficeButton = document.querySelector(".nav_buttons_block:nth-child(1)");
const afterRepairButton = document.querySelector(
  ".nav_buttons_block:nth-child(2)"
);
const chemicalButton = document.querySelector(
  ".nav_buttons_block:nth-child(3)"
);
const windowCleanButton = document.querySelector(
  ".nav_buttons_block:nth-child(4)"
);
const oficeBlock = document.querySelector(".ofice");
const afterRepairBlock = document.querySelector(".after_repair");
const chemicalBlock = document.querySelector(".chemical");
const windowCleanBlock = document.querySelector(".window_clean");

// Обработчик события для кнопки "Офисы"
oficeButton.addEventListener("click", function () {
  // При нажатии скрываем остальные блоки и отображаем блок "ofice"
  afterRepairBlock.style.display = "none";
  chemicalBlock.style.display = "none";
  windowCleanBlock.style.display = "none";
  oficeBlock.style.display = "block";
});

// Обработчик события для кнопки "После ремонта"
afterRepairButton.addEventListener("click", function () {
  // При нажатии скрываем остальные блоки и отображаем блок "after_repair"
  oficeBlock.style.display = "none";
  chemicalBlock.style.display = "none";
  windowCleanBlock.style.display = "none";
  afterRepairBlock.style.display = "block";
});

// Обработчик события для кнопки "Химчистка"
chemicalButton.addEventListener("click", function () {
  // При нажатии скрываем остальные блоки и отображаем блок "chemical"
  oficeBlock.style.display = "none";
  afterRepairBlock.style.display = "none";
  windowCleanBlock.style.display = "none";
  chemicalBlock.style.display = "block";
});

// Обработчик события для кнопки "Чистка окон"
windowCleanButton.addEventListener("click", function () {
  // При нажатии скрываем остальные блоки и отображаем блок "window_clean"
  oficeBlock.style.display = "none";
  afterRepairBlock.style.display = "none";
  chemicalBlock.style.display = "none";
  windowCleanBlock.style.display = "block";
});
