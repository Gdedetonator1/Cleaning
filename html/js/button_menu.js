// Получение ссылок на элементы DOM
const oficeButton = document.querySelector(".nav_buttons_block:nth-child(1)");
const afterRepairButton = document.querySelector(
  ".nav_buttons_block:nth-child(2)"
);
const chemicalButton = document.querySelector(
  ".nav_buttons_block:nth-child(3)"
);
const windowCleenButton = document.querySelector(
  ".nav_buttons_block:nth-child(4)"
);
const oficeBlock = document.querySelector(".ofice");
const afterRepairBlock = document.querySelector(".after_repair");
const chemicalBlock = document.querySelector(".chemical");
const windowCleenBlock = document.querySelector(".window_Cleen");

// Обработчик события для кнопки "Офисы"
oficeButton.addEventListener("click", function () {
  // При нажатии скрываем остальные блоки и отображаем блок "ofice"
  afterRepairBlock.style.display = "none";
  chemicalBlock.style.display = "none";
  windowCleenBlock.style.display = "none";
  oficeBlock.style.display = "block";
});

// Обработчик события для кнопки "После ремонта"
afterRepairButton.addEventListener("click", function () {
  // При нажатии скрываем остальные блоки и отображаем блок "after_repair"
  oficeBlock.style.display = "none";
  chemicalBlock.style.display = "none";
  windowCleenBlock.style.display = "none";
  afterRepairBlock.style.display = "block";
});

// Обработчик события для кнопки "Химчистка"
chemicalButton.addEventListener("click", function () {
  // При нажатии скрываем остальные блоки и отображаем блок "chemical"
  oficeBlock.style.display = "none";
  afterRepairBlock.style.display = "none";
  windowCleenBlock.style.display = "none";
  chemicalBlock.style.display = "block";
});

// Обработчик события для кнопки "Чистка окон"
windowCleenButton.addEventListener("click", function () {
  // При нажатии скрываем остальные блоки и отображаем блок "window_Cleen"
  oficeBlock.style.display = "none";
  afterRepairBlock.style.display = "none";
  chemicalBlock.style.display = "none";
  windowCleenBlock.style.display = "block";
});
