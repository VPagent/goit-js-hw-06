function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
//  Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

const controls = document.querySelector("#controls")
const boxes = document.querySelector("#boxes")
const createBtn = document.querySelector("button[data-create]")
const destroyBtn = controls.lastElementChild
let amount = controls.firstElementChild.value
let sizes = 30;
let allBoxes = " "


createBtn.addEventListener("click", createBoxes)
destroyBtn.addEventListener("click", cleaner)

function cleaner (){
  boxes.innerHTML = ""
  controls.firstElementChild.value = ""
  allBoxes =" "
  sizes = 30
}

function createBoxes(){

  for (let i = 1; i <= Number(controls.firstElementChild.value); i += 1){
  allBoxes += `<div style="width:${sizes}px; height:${sizes}px; background-color:${getRandomHexColor()}; margin-top:5px"></div>`
  sizes += 10
  }
  boxes.innerHTML = allBoxes
}

