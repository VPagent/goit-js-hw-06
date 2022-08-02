// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать 
// и уменьшать его значение на единицу.


// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counter = document.querySelector("#counter")
const valueCount = document.querySelector("#value")
let count = 0;
counter.firstElementChild.addEventListener("click", decrement)
counter.lastElementChild.addEventListener("click", increment)

function increment ()  {
    count += 1
    valueCount.textContent = count
}
function decrement () {
    count -= 1
    valueCount.textContent = count
}