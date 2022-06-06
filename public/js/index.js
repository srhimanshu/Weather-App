const formElement = document.querySelector('form');
const searchElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

formElement.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = searchElement.value
    console.log(location)
    messageOne.textContent = 'loading...'
    fetch(`/weather?address=${location}`).then(response => {
        
        response.json().then(data=>{
            if(data.error){
                messageOne.textContent = data.error;
            } else if(data.forRes){
                messageOne.textContent = data.forRes;
            } else {
                messageOne.textContent = data.forErr;
            }
        })
    })
})