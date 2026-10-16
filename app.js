// 1. Смена темы оформления: «Белая тема» / «Темная тема»
const themeButton = document.querySelector("#theme");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    themeButton.textContent = isLight ? "Темная тема" : "Белая тема";
  });
}
