// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let boxStep = 30;
let firstStep = boxStep;

const refs = {
  boxAmount: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.btnCreate.addEventListener('click', () => {
  createBoxes(refs.boxAmount.valueAsNumber);
})

refs.btnDestroy.addEventListener('click', () => {
  destroyBoxes();
})

function createBoxes(amount) { 
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = boxStep + 'px';
    box.style.height = boxStep + 'px';
    box.style.background = getRandomHexColor();
      
    refs.boxes.append(box);

    boxStep += 10;
  }
};

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  boxStep = firstStep;
}
