let inputs = document.querySelectorAll('input');
let message = document.getElementById('message');
let text = document.querySelectorAll('p');
let form = document.querySelector('form');

form.addEventListener('submit' , ()=>{
    let valid = true;
    event.preventDefault()
    if (inputs[0].value=='') {
        text[0].innerHTML='Please enter your name'
        valid = false;
    } else {
        text[0].innerHTML=''
    }
    
    if (inputs[1].value=='') {
        text[1].innerHTML='Please enter your phone'
        valid = false;
    } else if (isNaN(inputs[1].value)) {
        text[1].innerHTML='invalid phone number'
    }
    else {
        text[1].innerHTML=''
    }

    if (inputs[2].value=='') {
        text[2].innerHTML='Please enter your email'
        valid = false;
    }else if (inputs[2].value.indexOf('.')==-1 || inputs[2].value.indexOf('@')==-1) {
        text[2].innerHTML='invalid email'
    }
    else {
        text[2].innerHTML=''
    }

    if (message.value=='') {
        text[3].innerHTML='Please enter your message'
        valid = false;
    } else {
        text[3].innerHTML=''
    }
    if (valid == false) {
        return;
    }

    fetch(form.action, {
        method:'POST',
        body: new FormData(form)
    }
    ).then((response)=>response.json)
    .then((data)=>{
        
        if (sessionStorage.getItem("formlevel1") === 'true') {
            window.open('../quiz/quiz level1.html')
            sessionStorage.removeItem('formlevel1')
        } else {
            alert('Thank you for your reply.')
        }
    })
})
