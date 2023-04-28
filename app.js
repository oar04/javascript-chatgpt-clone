const API_KEY = "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"

//TEXT COMPLETIONS
// 
//async function fetchData(){
//     const response = await fetch("https://api.openai.com/v1/completions", {
//         method: "POST",
//         headers: {
//             Authorization: `Bearer ${API_KEY}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             model: "text-davinci-003",
//             prompt: "hello, how are you today?",
//             max_tokens: 7
//         })
//     })

//     const data = await response.json()
//     console.log(data)
// }

//CHAT COMPLETIONS
//

const submitButton = document.querySelector('#submit')
const outputElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')


async function getMessage(){
    console.log('clicked')
    const options = {
        method: 'POST', 
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: inputElement.value}],
            max_tokens: 100

        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outputElement.textContent = data.choices[0].message.content
        if(data.choices[0].message.content){
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            historyElement.append(pElement)
        }
    }catch(error){
        console.log(error)
    }
    
}

submitButton.addEventListener('click', getMessage)


getMessage()
