// Функции для взаимодействия с пользователем
// ALERT - то, что отобразится в модальном окне
// alert("Hello World")
// console.log("after alert") - остановка скрипта полностью, до закрытия модального окна
// const userName = "John"
// alert("Hello" + "John")
// alert(`Hello${userName}`)

// PROMPT
// const userName = +prompt("Введите имя", "Default") - "+" преобразовывает в число
// alert(`Hello ${userName}`)

// CONFIRM - ответ на вопрос да или нет
// const isAdult = confirm("Вам есть 18 лет?")
// alert(isAdult)

// Задание
// const age = +prompt("Укажите свой возраст")

// if (age >= 18) {
//     alert("Добро пожаловать")
// } else if (age < 18) {
//     alert("Вход запрещен")
// }
// Если пользователю обязательно нужно что-то ввести
// while (true) {
//     const password = prompt("Введите пароль")
//     if (password && password.length > 6) {
//         alert("Пароль введен")
//         break;
//     }
// }

// Длина строки
// const userName = "John"
// console.log("Hello".length)

// МАССИВЫ (arrays)
// Создание пустого массива
// const fruits = []
// console.log(fruits)
// console.log(fruits.length)

// const fruits = ["Apple", "Orange", "Banana"]
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// fruits[0] = "Cherry"
// console.log(fruits[0])

// fruits[3] = "Qiwi"
// console.log(fruits)

// Конец массива - POP (удаляет последний элемент массива и возвращает его) и PUSH добавляет элементы в конец массива)
// console.log(fruits.pop())
// console.log(fruits)

// fruits.push("Blueberry", "Coco")
// console.log(fruits)


// Начало массива - SHIFT (удаляет первый элемент массива и возвращает его) и UNSHIFT (добавляет элементы в начала массива)
// console.log(fruits.shift())

// fruits.unshift("Blueberry")
// console.log(fruits)

// Перебор массива

// const fruits = ["Apple", "Orange", "Banana"]
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// const num = [2, 5, 3, 7]
// console.log(num)
// for (let i = 0; i < num.length; i++) {
//     num[i] += 2
// }
// console.log(num)

// Показать индекс элемента массива
// const num = [2, 5, 3, 7]
// let index = null
// for (let i = 0; i < num.length; i++) {
//     if (num[i] === 3) {
//         index = i
//         break
//     }
// }
// console.log(index)

// Задание
// 1. Создаем переменную
// 2. Запускаем цикл for и перебираем каждый элемент массива
// 3. Если текущий элемент массива больше, чем max, то сохраняем этот элемент в max
// Если num[i] больше, чем max, то max = num[i]

// const num = [4, 9, 1, 3, 7, 8]
// let max = num[0]
// let min = num[0]
// for (i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//         max = num[i]

//     }
//     if (num[i] < min) {
//         min = num[i]

//     }
// }
// console.log(max, min)

// Функции - готовые части кода, которые можно вызвать в любом месте программы (писать в начале скрипта)
// function имя_функции(глагол)() {
//     код функции
// }

// Объявление функции (Function Declaration)
// sayHello() // - not an error

// function sayHello() {
//     alert("Hello World")
// }

// // Вызов функции - можно ставить в любом месте
// sayHello()

// // Function Expression - не можем использовать до объявления
// sayHello() // - error

// const sayHello = function() {
//     alert("Hello World")
// }

// function sayHello(name = "Anonymous", age = "unknown") {
//     console.log(`Hello ${name}, you're ${age} years old`)
// }
// sayHello("John") // "Hello John"
// sayHello("Tom", 35) // "Hello Tom"
// sayHello()

// // Функция для нахождения максимального значения
// function getMaxValue(arr = []) {
//     let max = arr[0]

//     for (let i = 0; i < arr.length; i++)
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     return max
// }
// getMaxValue([3, 12, 52, 1, 5])

// // Функция для нахождения минимального значения
// function getMinValue(arr = []) {
//     let min = arr[0]

//     for (let i = 0; i < arr.length; i++)
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     return min
// }
// getMinValue([3, 12, 52, 1, 5])

// const result = getMinValue([3, 12, 52, 1, 5])
// console.log(`result: ${result}`)


// function checkAge(age) {
//     return age >= 18
// }
// const age = +prompt("Ваш возраст?")
// const isAdult = checkAge(age)
// console.log(isAdult)

// Задание
// function getEvenNumbers(arr = []) {
//     for (let i = 0; i < arr.length; i++)
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i])
//         }
// }
// getEvenNumbers([1, 7, 2, 5, 34, 45, 80, 24])

// Задание
// function removeNegative(arr = []) {
//     const result = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// const a = removeNegative([2, -5, 1, -2, -10])
// console.log(a)

// Стрелочные функции (Arrow functions)
// const sayHello = () => {
//     alert("Hello World")
// }

// const sayHello = () => alert("Hello World")

// const getNumber = () => 10
// const getNumber = () => {
//     return 10
// }

// sayHello()