// OBJECT
// const weekDays = ["пн", "вт", "ср", "чт", "пт"]

// const weekDays = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт" }

// console.log(weekDays[1])
// console.log(weekDays[2])

// const user = {
//     firstName: "Nika",
//     lastName: "M"
// }

// user.firstName = "Tom"
// delete user.lastName

// console.log(user.firstName)
// console.log(user.lastName)

// const obj = {
//     key1: 5,
//     key2: "Hello World",
//     key3: true,
//     key4: undefined,
//     key5: [1, 2, 3],
//     key6: function() {
//         console.log("тоже метод")
//     },
//     key7: {
//         subKey: "blabla"
//     }
// }

// const rabbit = {
//     name: "Rabbit",
//     child: {
//         name: "Rabbit 2"
//     },
//     eats() {
//         console.log("I'm eating")
//     }
// }
// rabbit.eats()
// console.log(rabbit.child.name)

// const user = {
//     firstName: "John",
//     lastName: "Smith",
//     printName() {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }

// user.printName()

// Задание
// const person = {
//     name: "Nika",
//     age: 22,
//     country: "Russia"
// }

// console.log(person)

// Задание

// const user = {}

// user.name = "Pete"
// user.surname = "Smith"
// user.name = "John"
// delete user.surname

// console.log(user)

// DOM - Document Object Model (Объектная модель страницы)

// document.querySelector - ищет один (первый) элемент

// const title = document.querySelector("h1")
// console.log(title)

// document.querySelectorAll - ищет все элементы

// const listItems = document.querySelectorAll("li, h1")
// console.log(listItems)

// Содержимое элемента
// const h2 = document.querySelector("h2")

// // textContent - узнать, изменить что написано внутри
// console.log(h2.textContent)

// // innerHTML - узнать, изменить разметку
// console.log(h2.innerHTML)

// h2.textContent = "<i>Hello World</>"
// h2.innerHTML = "<i>Hello World</>"

// АТРИБУТЫ
// const link = document.querySelector("a")

// node - HTML-объект

// node.getAttribute("имя атрибута")
// console.log(link.getAttribute("href"))
// console.log(link.getAttribute("target"))
// console.log(link.getAttribute("title"))

// node.setAttribute("имя атрибута", "значение атрибута")
// link.setAttribute("href", "blabla.com")
// link.setAttribute("title", "Hint")

// node.removeAttribute("имя атрибута")
// link.removeAttribute("target")

// КЛАССЫ

// node.classList.add() - добавляет класс или классы
// link.classList.add("external-link")
// link.classList.add("class1", "class2")

// node.classList.remove() - удаляет класс или классы
// link.classList.remove("class1")
// link.classList.remove("class2", "external-link")

// node.classList.toggle() - переключает классы (если есть - удаляет, если нет - добавляет)
// link.classList.toggle("active")

// node.classList.contains() - проверяет есть ли класс у элемента. Если есть, возвращает true, иначе false
// console.log(link.classList.contains("active"))

// Задание
// const p = document.querySelector(".error")
// p.textContent = ("It's error message")

// const h1 = document.querySelector("h1")

// h1.style.color = "red"
// h1.style.border = "2px solid blue"

// const listItems = document.querySelectorAll("li")

// console.log(listItems)

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.color = "red"
// }

// Задание
// const listItems = document.querySelectorAll("li")

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].textContent = listItems[i].textContent + " My text"
// }

// Создание элементов

// document.creatElement("имя тега") - создает новые HTML объект

// const message = document.createElement("p")
// message.textContent = "My new text"

// // APPEND() - помещает элемент в конец указанного элемента

// document.body.append(message)

// // PREPEND - помещает элемент в начало указанного элемента

// document.body.prepend(message)

// const list = document.querySelector("ul")
// const listItem = document.createElement("li")

// for (let i = 0; i < 5; i++) {
//     const listItem = document.createElement("li")
//     listItem.textContent = `Item ${i}`
//     list.append(listItem)
// }

// Удаление элементов
// const list = document.querySelector("ul")

// // REMOVE() - удаляет данный элемент
// list.remove()

// Задание

const table = document.createElement("table")
document.body.append(table)
const tr = document.createElement("tr")
table.append(tr)

for (let i = 1; i < 3; i++) {
    const td = document.createElement("td")
    td.textContent = i
    tr.append(td)
}

table.setAttribute("border", "1")