// XMLHttpRequest - устаревший
// Создание объекта запроса
// const xhr = new XMLHttpRequest()
// console.log(xhr)

// Инициация (открытие) запроса
// xhr.open('GET', "https://api.github.com/zen")

// Отправление запроса GET
// xhr.send()

// xhr.addEventListener('load', function() {
//     console.log(xhr.response)
//     console.log(xhr)

// JSON.parse - превращает JSON-СТРОКУ В JavaScript объект
// JSON.stringify - превращает JavaScript объект или массив в JSON строку


//     if (xhr.status === 200) {
//         console.log(`Success: ${xhr.response}`)
//     } else {
//         console.log(`Failure: ${res.message}`)
//         const res = JSON.parse(xhr.response)
//     }
// })

// xhr.addEventListener('error', function() {
//     console.log('error')
// })

// Отправление запроса POST
// const xhr = new XMLHttpRequest()

// xhr.open('POST', "https://api.github.com/user/repos")

// xhr.setRequestHeader('Authorization', 'Bearer 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')
// xhr.setRequestHeader('Content-Type', 'application/json') - если нужно больше заголовков

// const repoInfo = {
//     name: "test-api-github-2",
//     description: "It s my repo"
// }

// xhr.send('{"name": "test-api-github", "description": "It s my repo"}') - сложно

// xhr.send(JSON.stringify(repoInfo))

// xhr.addEventListener('load', function() {
//     const output = document.querySelector(".output")

//     output.textContent = xhr.response
// })


// fetch

// $.ajax - асинхронный запрос
$.ajax({
    method: "GET",
    url: "https://api.github.com/ze",
    headers: {
        Authorization: "Bearer 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"
    },
    success(result) {
        console.log(result)
    },
    error(err) {
        console.log(err)
        console.log(err.responseJSON.message)
    }
})

$ajax({
    method: "POST",
    url: 'https://api.github.com/user/repos'
    headers: {
        Authorization: "Bearer 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"
    },
    data: JSON.stringify({
        name: "test-repo-2",
        description: "Sample text"
    }),
    success(result) {
        console.log(result)
    },
    error(err) {
        console.log(err.responseJSON.message)
    }
})



// Задание

// const xhr = new XMLHttpRequest()
// const btn = document.querySelector("button")
// const input = document.querySelector("input")
// const ul = document.querySelector("ul")


// btn.addEventListener('click', function() {
//     xhr.open('GET', `https://api.github.com/users/${input.value}/repos`)
//     xhr.setRequestHeader('Authorization', 'Bearer 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')
//     xhr.send()
//     input.value = ""
// })

// xhr.addEventListener('load', function() {
//     const repos = JSON.parse(xhr.response)
//     console.log(repos)
//     const body = document.querySelector("body")
//     body.append(ul)
//     ul.innerHTML = ""

//     for (i = 0; i < repos.length; i++) {
//         const li = document.createElement("li")
//         ul.append(li)
//         li.textContent = repos[i].full_name
//     }
// })