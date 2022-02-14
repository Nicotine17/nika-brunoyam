// //Объявление переменной
// // let username
// // const age

// //Инициализация переменной
// // username = "John"
// // username = "Jonas"

// //Создание переменной
// // let username = "John"
// // const age = 18

// // console.log(username)
// // console.log(age)

// // console.log("Hello World", "Hello World 2")
// // console.log(5)

// // Типы данных
// // number
// // console.log(5)
// // console.log(0.5)

// // // string
// // console.log("Строка 1")
// // console.log('Строка 2')
// // console.log(`Строка 3`)

// // // undefined
// // console.log(undefined)

// // // boolean
// // console.log(true)
// // console.log(false)

// // Динамическая типизация
// // let a = "Test"

// // // typeof - определение типа значения или переменной
// // console.log(typeof a)
// // console.log(typeof "Test")

// // a = 5

// // console.log(typeof a)
// // console.log(typeof 5)

// // a = true
// // console.log(typeof a)
// // console.log(typeof true)

// // let a = 10
// // let b = a
// // console.log(a)
// // console.log(b)

// // Задание 1
// // let num = 123
// // console.log(num)

// // Задание 2
// // let userName = "John"
// // userName = "Tom"
// // console.log(userName)

// // Математические операторы
// // Сложение (сумма)
// // let num = 10 + 1.5 + 2 + 7
// // let num2 = num + 2
// // console.log(5 + 2)
// // console.log(num2)

// // Разность (вычитание)
// // console.log(10 - 1 - 2 + 1)

// // Умножение 
// // console.log(4 * 5)

// // Деление
// // console.log(10 / 5)
// // console.log(10.23 / 10)
// // console.log(10 / 0)

// // Остаток от деления
// // console.log(9 % 2)

// // Возведение в степень
// // console.log(2 ** 3)

// // Подвох - страшное число
// // console.log(0.1 + 0.2)

// // Сокращенные операторы
// // let num = 2
// // num = num + 5 + 1
// // num += 5 + 1
// // console.log(num)

// // Декримент и инкремент
// // let num = 2

// // // Инкремент
// // num++
// // ++num
// // console.log(num) // -> 2
// // console.log(num++) // -> 2
// // console.log(++num) // -> 3

// // // Декримент 
// // num--
// // --num
// // console.log(num)

// // Приоритет операций
// // let equality = 5 + 5 / 2
// // let equality = (5 + 5) / 2

// // Преобразование типов
// // console.log(10 + 12) // -> 22
// // console.log(10 + "12" + 10) // -> 101210
// // console.log("10" + "12") // -> 1012
// // console.log(10 + true) // -> 11
// // console.log(10 + false) // -> 10
// // console.log(undefined + undefined) // -> NaN (Not a Number)

// // let a = 5
// // console.log(typeof a)
// // // String
// // a = String(a)
// // console.log(typeof a)

// // Number
// // console.log(Number("10"))

// // Boolean - Falsy-значения
// // console.log(Boolean(0))
// // console.log(Boolean(""))
// // console.log(Boolean(false))
// // console.log(Boolean(null))
// // console.log(Boolean(undefined))

// // Задание
// // "" + 1 + 0 = "1" + 0 = "10"
// // "" - 1 + 0 = 0 - 1 + 0 = -1
// // true + false = 1 + 0 = 1
// // 6 / "3" = 6 / 3 = 2
// // "2" * "3" = 2 * 3 = 6
// // 4 + 5 + "px" = 9px
// // "$" + 4 + 5 = $45
// // "4" - 2 = 2
// // "  -9  " + 5 =  -9  5
// // "  -9  " - 5 = -14
// // null + 1 = 1
// // undefined + 1 = NaN

// // Операторы сравнения
// console.log(5 > 0) // -> true
// console.log(5 < 0) // -> false
// console.log(5 >= 0) // -> true
// console.log(5 <= 0) // -> false
// console.log(true > false) // -> true
// console.log("a" > "A") // -> true - из таблицы кодировки

// // Нестрогое равенство - работает преобразование типов (не использовать)
// console.log(5 == 2) // -> false
// console.log(5 == "5") // -> true

// // Строгое равенство - сравниваются и значения, и типы данных
// console.log(5 === 2) // -> false
// console.log(5 === "5") // -> false

// // Нестрогое неравенство - работает преобразование типов (не использовать)
// console.log(5 != 2) // -> true
// console.log(5 != "5") // -> false

// // Строгое неравенство - неработает преобразование
// console.log(5 !== 2) // -> true// ->
// console.log(5 !== "5") // -> false

// // Условия
// if (5 > 2) {
//     console.log('Ok')
// }

// // Логические операторы

// // Логическое ИЛИ (||)
// if (условие1 || условие2) {}

// // Логическое И (&&)
// if (условие1 && условие2) {}

// // Комбинация
// if (условие1 || условие2 && условие3) {}

// //ELSE
// const age = 12
// if (age >= 18) {
//     console.log('Ok')
// } else {
//     console.log('Not good')
// }

// // ELSE IF
// if (age >= 18) {
//     console.log('Ok')
// } else if (age <= 18) {
//     console.log('Ok 2')
// } else if (age === 1) {
//     console.log('What?')
// } else {
//     console.log('Not good')
// }

// //SWITCH
// switch (значение) {
//     case вариант_значения:
//         {
//             // ... какой-то код
//             break;
//         }
//     case вариант_значения:
//         {
//             // ... какой-то код
//             break;
//         }
//     case вариант_значения:
//         {
//             // ... какой-то код
//             break;
//         }
//     default:
//         {
//             // ... какой-то код
//         }
// }

// const key = 'LeftArrow'

// switch (key) {
//     case "Up Arrow":
//         {
//             console.log("Была нажата стрелка вверх")
//             break
//         }
//     case "DownArrow":
//         {
//             console.log("Была нажата стрелка вниз")
//             break
//         }
//         // и т.д.
// }

// // Циклы
// // WHILE
// while (условие) {
//     // код
// }

// let i = 0
// while (i < 10) {
//     console.log("hello world")
//     i++
// }

// //DO..WHILE - не знаем кол-во повторений кода
// do {
//     // код
// } while (условие)

// let i = 5
// do {
//     console.log(i)
// } while (i < 0)

// // FOR - знаем кол-во повторений кода
// for (выражение1; выражение2; выражение3) {
//     // код
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// BREAK / CONTINUE
let i = 0;
while (i < 10) {
    if (i === 2) {
        break или
        i++
        continue
    }

    console.log(i)
    i++
}

console.log("after loop")