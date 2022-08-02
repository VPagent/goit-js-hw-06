function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.


// <div class="widget">
// <p>Background color: <span class="color">-</span></p>
// <button type="button" class="change-color">Change color</button>
// </div>


const btn = document.querySelector(".change-color")
const body = document.body
const span = document.querySelector(".color")

btn.addEventListener("click", final, getRandomHexColor)

function final () {
    body.style.backgroundColor = `${getRandomHexColor()}`
    span.textContent = `${getRandomHexColor()}`
}
