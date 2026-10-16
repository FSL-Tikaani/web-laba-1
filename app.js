// 1. Смена темы оформления: «Белая тема» / «Темная тема»
const themeButton = document.querySelector("#theme");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    themeButton.textContent = isLight ? "Темная тема" : "Белая тема";
  });
}

// 2. Кнопка «Подробнее о клубе» в первом экране
const detailsBtn = document.querySelector("#details-btn");
const projectDetails = document.querySelector("#project-details");

if (detailsBtn && projectDetails) {
  detailsBtn.addEventListener("click", () => {
    const isHidden = projectDetails.classList.toggle("hidden");
    detailsBtn.textContent = isHidden ? "Подробнее о клубе" : "Скрыть описание";
  });
}
