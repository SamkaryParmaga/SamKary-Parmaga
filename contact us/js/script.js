let inputs = document.querySelectorAll('input')
let message = document.querySelector('textarea')
function submit(){
    if (!inputs[0].value || !inputs[1].value || !inputs[2].value || !message.value) {
        alert('please enter data')
    }else{
        let text = `Name: ${inputs[0].value}%A \n Email: ${inputs[1].value}%A \n Phone: ${inputs[2].value}%A \n Message: ${message.value}`;
        let url = `https://wa.me/+201033248788?text=${text}`
        window.open(url,'_blank')
    }
}