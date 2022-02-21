// События браузера (load, unload)
// События мыши (click, dblclick, mouseenter, mouseleave)
// События клавиатуры (keyup, keydown)
// События формы (input, change, focus, blur, submit)
// Другие ...

// function sayHello() {
//     console.log("Hello World")
// }

// function sayGoodbye() {
//     console.log("Goodbye World")
// }

// const btn = document.querySelector("button")

// Обработчик события через свойство объекта
// btn.onclick = sayHello
// btn.onclick = sayGoodbye

// Добавление обработчика через addEventListener 
// btn.addEventListener("click", sayHello)

// btn.addEventListener("click", sayGoodbye)

// btn.addEventListener("dblclick", function() {
//     console.log("It's double click")
//     btn.removeEventListener("click", sayHello)
// })

// btn.addEventListener("contextmenu", function() {
//     console.log("It's right click")
// })

// // Удаление обработчика через removeEventListener (принимает только ссылки на отдельные функции)
// btn.removeEventListener("click", sayHello)

// Задание

// const paragraph = document.querySelector("p")

// paragraph.addEventListener("click", function() {
//     paragraph.style.color = "red"
// })

// // Задание

// paragraph.addEventListener("click", function() {
//     paragraph.classList.toggle("active")
// })

// Задание

// const btn = document.querySelector("button")
// const rsl = document.querySelector("p")

// btn.addEventListener("click", function() {
//     const fNum = document.querySelector(".firstNumber")
//     const sNum = document.querySelector(".secondNumber")

//     rsl.textContent = Number(fNum.value) + Number(sNum.value)

//     fNum.value = ""
//     sNum.value = ""
// })

// События формы
// const input = document.querySelector(".password")
//     //Событие - INPUT
// input.addEventListener("input", function(event) {
//         if (event.currentTarget.value.length >= 6) {
//             input.classList.remove("invalid")
//         } else {
//             input.classList.add("invalid")
//         }
//     })
// Событие - CHANGE
// input.addEventListener("change", function() {
//     console.log("change", input.value)
// })

// Событие - FOCUS
// input.addEventListener("focus", function() {
//     console.log("focus")
// })

// // Событие - BLUR
// input.addEventListener("blur", function() {
//     console.log("blur")
// })

// События клавиатуры
// Событие - KEYDOWN
// document.body.addEventListener("keydown", function() {
//         console.log("keydown")
//     })
//     // Событие - KEYUP
// document.body.addEventListener("keyup", function() {
//     console.log("keyup")
// })

// Объект события (Event Target)
// document.body.addEventListener("keyup", function(event) {
//     console.log("code", event.code)
//     console.log("key", event.key)
//     console.log("keyCode", event.keyCode)
// })

// Для div - двигать стрелочками
// const div = document.querySelector("div")

// document.body.addEventListener("keydown", function(event) {
//     console.log("code", event.code)

//     const top = Number(div.style.top.replace("px", ""))
//     const left = Number(div.style.left.replace("px", ""))

//     console.log("top", top)
//     console.log("left", left)

//     switch (event.code) {
//         case "ArrowUp":
//             {
//                 div.style.top = `${top - 10}px`

//                 break
//             }
//         case "ArrowDown":
//             {
//                 div.style.top = `${top + 10}px`

//                 break
//             }
//         case "ArrowLeft":
//             {
//                 div.style.left = `${left - 10}px`

//                 break
//             }
//         case "ArrowRight":
//             {
//                 div.style.left = `${left + 10}px`

//                 break
//             }
//     }
// })

// const btn = document.querySelector("button")

// btn.addEventListener("click", function(event) {
//     console.log("currentTarget", event.currentTarget)
//     console.log("target", event.target)
// })

// Для div с детьми

// const div = document.querySelector('div')
// const p = document.querySelector('p')
// const b = document.querySelector('b')

// div.addEventListener('click', function() {
//     console.log('its div')
// })

// p.addEventListener('click', function() {
//     console.log('its p')
// })

// b.addEventListener('click', function() {
//     event.stopPropagation()
//     console.log('its b')
// })

// BUBBLING - всплытие

// const listItems = document.querySelectorAll('li')

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', function() {
//         listItems[i].remove()
//     })
// }

// const list = document.querySelector('ul')

// list.addEventListener('click', function(event) {
//     event.target.remove()
// })

// Контекст-меню

// document.body.addEventListener('contextmenu', function() {
//     event.preventDefault()
//     console.log("right click")
// })

// const link = document.querySelector('a')
// link.addEventListener('click', function(event) {
//     event.preventDefault()
// })

const input = document.querySelector('.task')
const ul = document.querySelector('.tasks-list')

input.addEventListener('keyup', function(event) {
    if (event.code === "Enter" && input.value !== "") {
        const li = document.createElement("li")
        ul.append(li)
        li.textContent = input.value
        input.value = ""

        li.addEventListener('click', function(event) {
            event.target.remove()
        })
    }
})