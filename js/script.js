let profile = document.querySelector('.profile')
let name = localStorage.getItem('name')
let email = localStorage.getItem('email')
let image = localStorage.getItem('image')

let profile_name = document.getElementById('profile_name');
let profile_email = document.getElementById('profile_email')
let profile_image = document.getElementById('profile_image')

if (name) {
    profile_name.innerHTML=name
}

if (email) {
    profile_email.innerHTML = email
}

if (image) {
    profile_image.src = image
}

function check() {
    if (localStorage.getItem('data')) {
        if (localStorage.getItem('level3') == 'Finish the leve3') {
            // window.open('')
        } else if (localStorage.getItem('level2') == 'Finish the leve2') {
            // window.open('')
        } else {
            window.open('./level1/lesson1/level1 lesson1.html')
        }
    } else {
        alert('You must be logged in.')
        window.open('./log in/login.html')
    }
}

function messagelevel0() {
    if (localStorage.getItem('data')) {
        window.open('./level1/lesson1/level1 lesson1.html')
    } else {
        alert('You must be logged in.')
        window.open('./log in/login.html')
    }
}

function messagelevel1() {
    if (localStorage.getItem('level1') !== 'Finish the level1') {
        alert('You must complete level 1.')
    }
    else {
        window.open('./Level2/Lesson1/level2 lesson1.html')
    }
}

function messagelevel2() {
    if (localStorage.getItem('level2') !== 'Finish the level2') {
        alert('You must complete level 2.')
    }
    else {
        window.open('./Level3/Lesson1/Level3 lesson1.html')
    }
}

function messagelevel3() {
    if (localStorage.getItem('level3') !== 'Finish the level3') {
        alert('You must complete level 3.')
    }
    // else {
    //     window.open('./Level2/Lesson1/level2 lesson1.html')
    // }
}


function showprofile(){
    const profileBox = document.querySelector('.profile-box');
        profileBox.classList.toggle('show-profile');
}