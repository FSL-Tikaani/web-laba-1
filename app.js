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

// 3. Кнопки «Подробнее» внутри карточек каталога фильмов
const cardToggleButtons = document.querySelectorAll(".toggle-card-btn");

cardToggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const extraBlock = document.getElementById(targetId);
    if (extraBlock) {
      const isHidden = extraBlock.classList.toggle("hidden");
      btn.textContent = isHidden ? "Подробнее" : "Скрыть";
    }
  });
});

// 4. Интерактивный переключатель карточек («Следующая карточка» / «Предыдущая»)
const moviesData = [
  {
    title: "Матрица (The Matrix)",
    year: "1999 • Вачовски",
    rating: "IMDb 8.7",
    image: "images/film-matrix.svg",
    alt: "Постер фильма Матрица",
    description:
      "Хакер Нео узнаёт, что привычный мир — это сложная компьютерная симуляция, созданная машинами, и присоединяется к движению сопротивления ради освобождения человечества.",
    fact: "Знаменитый зелёный код Матрицы состоит из зеркально отражённых японских символов катаканы и рецептов суши из поваренной книги жены художника-постановщика."
  },
  {
    title: "Интерстеллар (Interstellar)",
    year: "2014 • Кристофер Нолан",
    rating: "IMDb 8.7",
    image: "images/film-interstellar.svg",
    alt: "Постер фильма Интерстеллар",
    description:
      "Когда засуха и пыльные бури приводят человечество к продовольственному кризису, коллектив исследователей отправляется сквозь червоточину в поисках пригодной для жизни планеты.",
    fact: "Для съёмок кукурузного поля по настоянию режиссёра в Канаде вырастили 200 гектаров настоящей кукурузы, которую после съёмок выгодно продали."
  },
  {
    title: "Начало (Inception)",
    year: "2010 • Кристофер Нолан",
    rating: "IMDb 8.8",
    image: "images/film-inception.svg",
    alt: "Постер фильма Начало",
    description:
      "Доминик Кобб — талантливый извлекатель, способный проникать в чужие сны. Ему предлагают почти невозможное задание: не украсть идею, а внедрить её в подсознание.",
    fact: "Длительность фильма (2 часа 28 минут) — это прямая отсылка к знаменитой песне Эдит Пиаф «Non, je ne regrette rien» (2 минуты 28 секунд), звучащей для пробуждения героев."
  },
  {
    title: "Бегущий по лезвию 2049 (Blade Runner 2049)",
    year: "2017 • Дени Вильнёв",
    rating: "IMDb 8.0",
    image: "images/film-bladerunner.svg",
    alt: "Постер фильма Бегущий по лезвию 2049",
    description:
      "Офицер полиции Кей раскрывает давнюю тайну, способную погрузить остатки общества в хаос, и отправляется на поиски бесследно исчезнувшего Рика Декарда.",
    fact: "Оператор Роджер Дикинс получил за этот фильм свой первый долгожданный «Оскар» после 14 номинаций благодаря уникальной работе со светом и туманом."
  }
];

let currentCardIndex = 0;

const cardImage = document.querySelector("#card-image");
const cardCounter = document.querySelector("#card-counter");
const cardYear = document.querySelector("#card-year");
const cardRating = document.querySelector("#card-rating");
const cardTitle = document.querySelector("#card-title");
const cardDescription = document.querySelector("#card-description");
const cardFact = document.querySelector("#card-fact");
const factBox = document.querySelector("#fact-box");
const prevCardBtn = document.querySelector("#prev-card-btn");
const nextCardBtn = document.querySelector("#next-card-btn");
const randomFactBtn = document.querySelector("#random-fact-btn");

function renderMovieCard(index) {
  const movie = moviesData[index];
  if (!movie) return;

  if (cardImage) {
    cardImage.src = movie.image;
    cardImage.alt = movie.alt;
  }
  if (cardCounter) {
    cardCounter.textContent = `Карточка ${index + 1} из ${moviesData.length}`;
  }
  if (cardYear) cardYear.textContent = movie.year;
  if (cardRating) cardRating.textContent = movie.rating;
  if (cardTitle) cardTitle.textContent = movie.title;
  if (cardDescription) cardDescription.textContent = movie.description;
  if (cardFact) cardFact.textContent = movie.fact;
  if (factBox) factBox.classList.remove("highlight");
}

if (nextCardBtn) {
  nextCardBtn.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex + 1) % moviesData.length;
    renderMovieCard(currentCardIndex);
  });
}

if (prevCardBtn) {
  prevCardBtn.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex - 1 + moviesData.length) % moviesData.length;
    renderMovieCard(currentCardIndex);
  });
}

// 5. Кнопка «Случайный факт о съёмках»
const extraCinemaFacts = [
  "На обдумывание одного кадра чёрной дыры в «Интерстелларе» у рендер-фермы уходило до 100 часов вычислений, а общий объём данных превысил 800 терабайт.",
  "Перед началом съёмок «Матрицы» основные актёры четыре месяца ежедневно проходили курс восточных единоборств и трюковой подготовки.",
  "В «Бегущем по лезвию 2049» большинство футуристических интерьеров и миниатюр зданий были построены физически, чтобы свет отражался естественно.",
  "Музыкальную тему «Интерстеллара» Ханс Циммер написал на старинном органе в лондонской церкви Темпл XII века, даже не зная сначала, что фильм будет о космосе."
];

let lastFactIndex = -1;

if (randomFactBtn && cardFact) {
  randomFactBtn.addEventListener("click", () => {
    let nextIndex = Math.floor(Math.random() * extraCinemaFacts.length);
    if (nextIndex === lastFactIndex) {
      nextIndex = (nextIndex + 1) % extraCinemaFacts.length;
    }
    lastFactIndex = nextIndex;
    cardFact.textContent = extraCinemaFacts[nextIndex];
    if (factBox) {
      factBox.classList.add("highlight");
    }
  });
}
