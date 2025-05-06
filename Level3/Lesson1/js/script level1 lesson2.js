let btnshow_hide = document.querySelector('.interactive-button')
btnshow_hide.addEventListener('click', ()=>{
    let ex = document.querySelector('#ex');
    if (ex) {
        console.log(ex)
    }
    else {
        console.log(false)
    }
    
    ex.classList.toggle('show')
})
