let inputs =document.querySelectorAll('input');
let form = document.getElementById('form');
let text = document.querySelectorAll('.message-error')
let image = document.getElementById('profile')

window.onload = ()=>{
    localStorage.getItem('data')
    if (localStorage.getItem('data')=='true') {
        window.location.href='../../level1/lesson1/level1 lesson1.html'
    }
}

// chaneg image to male:
function male() {
    image.src='./img/male-removebg-preview.png'
}
// chaneg image to female:
function female() {
    image.src='./img/female-removebg-preview.png'
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let isValid = true
    if (inputs[0].value=='') {
        text[0].innerHTML='Enter your name'
        isValid = false
    }else {
        text[0].innerHTML=''
        localStorage.setItem('name',inputs[0].value)
    }
    if (inputs[1].value=='') {
        text[1].innerHTML='Enter your email'
        isValid = false
    }else {
        text[1].innerHTML=''
        localStorage.setItem('email',inputs[1].value)
    }
    if (inputs[2].value=='') {
        text[2].innerHTML='Enter your password'
        isValid = false
    }else {
        text[2].innerHTML=''
    }
    if (!isValid) {
        return;
    }
    fetch(form.action , {
        method: 'POST',
        body: new FormData(form)
    }).then(
        response => response.json()
    ).then((data)=>{
        alert('Registration has been completed successfully.')
        localStorage.setItem('data',true);
        localStorage.setItem('image',image.src)
        window.open('../../level1/lesson1/level1 lesson1.html')
    })
    
});

function change_image() {
    let upload = document.getElementById('upload');
    let file = upload.files[0];
    let reader = new FileReader;
    reader.onload = (event)=>{
        image.src = event.target.result;
    }
    reader.readAsDataURL(file)
}


