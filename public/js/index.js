console.log('JS file included...')

// fetch('http://puzzle.mead.io/puzzle').then((res)=>{
//     res.json().then((dta)=>{
//         console.log(dta);
//     })
// })

const weatherForm = document.querySelector('form'); 
const search = document.querySelector('input'); 
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    console.log(location);
    messageOne.textContent = 'loading...'
    messageTwo.textContent = ''

    fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.forecaseError){
            messageOne.textContent = data.forecaseError
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})

