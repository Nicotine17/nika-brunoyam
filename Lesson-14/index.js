// Обращение (доступ) к jQuery
// console.log($)
// console.log(jQuery)

// Поиск элементов (как querySelectorAll)
// console.log($("h1"));
// console.log($(".container .item"))
// console.log($(".container .item")[0])

// Получение содержимого элемента (возвращает только первый элемент массива) - как innerHTML
// console.log($(".container .item").html())
// console.log($(".container .item").text())

// Изменение содержимого элемента (работает для всех элементов сразу)
// $(".container .item").html("New text")
// $(".container .item").html("<b>New text</b>")

// $(".container .item").text("New text")
// $(".container .item").text("<b>New text</b>")

// 1 вариант
// const item = document.querySelector(".container .item")
// $(item).text("New text")

// 2 вариант
// const item = $(".container . item")[0]
// $(item).text("New text")

// 3 вариант
// $(".container .item:first-child").text("New text")

// 4 вариант
// $(".container .item").each(function()) {
//     console.log($(this).html())
// }

// 5 вариант
// $(".container . item").each(function(i) {
//     if (i === 0 || i === 2) {
//         $(this).text("New text")
//     }
// })

// Изменение атрибута style
// $(".container .item").css("background-color", "rosybrown")
// $(".container .item").css({
//     border: "2px solid pink"
// })

// $(".container .item").html("New text").css({
//     backgroundColor: "royalblue",
//     border: "2px silver solid"
// }).text("New text 2")

// Получение атрибутов
// console.log($("h1").attr("title"))

// // Изменение атрибутов
// $("h1").attr("title", "New value")
// $(".container .item").attr("title", "Value new")

// Удаление атрибутов
// $("h1").removeAttr("title")

// Добавление классов
// $("h1").addClass("heading").addClass("SuperTitle")
// $(".container .item").addClass("my-class")

// Удаление классов
// $("h1").removeClass("superText")

// // Переключение классов
// $("h1").toggleClass("superText")

// Оборачивание элементов (wrapping)
// $("h1").wrap('<div class="container"><span></span></div>')
// $(".container .item").wrap("<section></section>")

// Разворачивание элементов (unwrapping)
// $("div p").unwrap()

// Оборачивание всех элементов (wrapping all)
// $("div").wrapAll("<div></div>")

// Удаление
// $("div p").remove()

// Вставка элементов на страницу
// APPEND - в конец
// $(".container").append('<div class=item></div>')
// const $item = $('<div class="anotherItem></div>')

// PREPEND - в начало
// $(".container").prepend($item)

// BEFORE - перевод контейнером
// $(".container").before($item)

// AFTER - после контейнера
// $(".container").after($item)

// Добавление обработчика событий (как addEventListener)
// $("li").on("click", function() {
//     $(this).remove()
// })

// $("input").on("input", function() {
//     console.log($(this).val())
// })

// Задание
// У нас есть div, и он должен двигаться с помощью стрелок на клавиатуре
// $("div").css({
//     width: "150px",
//     height: "150px",
//     backgroundColor: "rosybrown",
//     border: "2px solid pink",
//     position: "relative"
// })

// let qtop = 0
// let qleft = 0

// $("body").on("keydown", function(event) {

//     console.log("qtop", qtop)

//     switch (event.code) {
//         case "ArrowUp":
//             {
//                 $("div").css("top", `${qtop - 10}px`)
//                 qtop = qtop - 10

//                 break
//             }

//         case "ArrowDown":
//             {
//                 $("div").css("top", `${qtop + 10}px`)
//                 qtop = qtop + 10

//                 break
//             }

//         case "ArrowRight":
//             {
//                 $("div").css("left", `${qleft + 10}px`)
//                 qleft = qleft + 10

//                 break
//             }

//         case "ArrowLeft":
//             {
//                 $("div").css("left", `${qleft - 10}px`)
//                 qleft = qleft - 10

//                 break
//             }
//     }
// })

// Задание с модальным окном

$(".openButton").on("click", function(eventOpen) {
    $("div").toggleClass("module")
})

$(".closeButton").on("click", function(eventClose) {
    $("div").toggleClass("module")
})