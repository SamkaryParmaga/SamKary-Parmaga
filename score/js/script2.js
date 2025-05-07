// image
let yourimage = localStorage.getItem('image');
let image = document.querySelector('#image');
if (yourimage) {
    image.src=yourimage
}


// name
let yourname = localStorage.getItem('name')
let name = document.querySelector('#name')
if (yourname) {
    name.innerHTML=yourname
}

// score
let yourscore = localStorage.getItem('score2')
let total = localStorage.getItem('total')
let score = document.querySelector('#Score')
if (yourscore && total) {
    score.innerHTML=`${yourscore}/${total}`
}


// time 
let timing = localStorage.getItem('timing2');
let time = document.getElementById('time');
if (timing) {
    time.innerHTML = timing
}


function timeToSeconds(t) {
    let [hh, mm, ss] = t.split(':').map(Number);
    return (hh * 3600) + (mm * 60) + ss;
}

// gife
let discount = document.getElementById('discount')
if (Number(yourscore) == 10 && totalSeconds <= 300) {
    discount.innerHTML = '50%';
} else if (Number(yourscore) == 10) {
    discount.innerHTML = '25%';
} else {
    discount.innerHTML = '0%';
}

// save the finish the level1 
function save() {
    localStorage.setItem('level2','Finish the level2')
    window.open('../Level3/Lesson1/Level3 lesson1.html')
}