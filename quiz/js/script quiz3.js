const questions = [
    { q: "What is loop?", choices: ["a)are fundamental concept in programming that allow you to repeat a block of code same time.", "b)are fundamental concept in programming that allow you to repeat a block of code multiple times.", "c)are fundamental concept in programming that allow you to execute a condition.", "d)No thing"], answer: "b)are fundamental concept in programming that allow you to repeat a block of code multiple times." },
    { q: "To create a list you must use____", choices: ["a)()", "b)[]","c){}","d)<>"], answer: "b)[]"},
    { q: 'What is a method used to Add an element at the specified position __', choices: ['a)Append', 'b)Pop', 'c)Remove', 'd)insert'], answer: 'd)insert'},
    { q: "What operation return true if a sequence with the specified value is present in the object? ", choices: ['a)Is', 'b)Is not', 'c)In ', 'd)In not'], answer: 'c)In'},
    { q: "What is the method used to stop the loop before it has looped through all the items?", choices: ['a)Extend', 'b)Break', 'c)Continue', 'd)Index'], answer: 'b)Break'},
    { q: "What method is used to add a list within a list at the end of the list?", choices: ['a)Extend', 'b)Pop', 'c)Continue', 'd)break'], answer: 'b)Pop'},
    { q: "What is the process in which you put more than one loop?", choices: ["a)Identity operator", "b)Membership operator", "c)Nested loop", "d)Nested if"], answer:"c)Nested loop"},
    { q: "What operator is used to return true if the both variables are the same object?", choices: ['a)Is', 'b)Is not', 'c)In', 'd)In not'], answer: 'a)Is'},
    { q: "Guess the output: <br> <img src='./img/level3/Picture1.png' alt='question2' class='img-fluid'>", choices: ['a)Apple, Banana, Orange', 'b)Apple, Banana', 'c)Apple, Banana, Mango', 'd)Apple, Banana, Pineapple'], answer: 'b)Apple, Banana'},
    { q: "Guess the output: <br> <img src='./img/level3/Picture2.png' alt='question3' class='img-fluid'>", choices: ['a)[Task1, Task2, Task3, Task4, Task6, Task7]', 'b)[Task2, Task3, Task6, Task7]', 'c)[Task6, Task1, Task2, Task3, Task4, Task7]', 'd)[Task7, Task1, Task2, Task3, Task4, Task6]'] , answer: 'a)[Task1, Task2, Task3, Task4, Task6, Task7]'}
];

const questionsContainer = document.getElementById("questions");
questions.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<p>${index + 1}. ${item.q}</p>` +
        item.choices.map(choice => `<label><input type="radio" name="q${index}" value="${choice}"> ${choice}</label><br>`).join("");
    questionsContainer.appendChild(div);
});

let btn_submit = document.querySelector('button');

window.onload=()=>{
    let submit = localStorage.getItem('submit3');
    if (submit == 'true') {
        btn_submit.style.display = 'none'
    }
}

function submitQuiz() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const selected = document.querySelector(`input[name=q${i}]:checked`);
        if (!selected) {
            alert("Please answer all questions before submitting.");
            return;
        }
        if (selected.value === questions[i].answer) {
            score++;
        }
        if (selected.value !== questions[i].answer) {
            selected.parentElement.style.border = '1px solid red'
        }
    }

    let allinputs = document.querySelectorAll('input[type=radio]')
    allinputs.forEach(input=>{
        input.disabled=true
    })

    window.open('../score/score level3.html')

    
    btn_submit.style.display='none'

    localStorage.setItem('score3',score);
    localStorage.setItem('submit3',true)
    localStorage.setItem('timing3',clock.innerHTML)
}
localStorage.setItem('total',questions.length)




let clock = document.getElementById('clock')
let secounds = 0;
let minutes = 0;
let hours = 0;
setInterval(()=>{
    secounds++
    if (secounds === 60) {
        secounds = 0;
        minutes++
    }
    if (minutes === 60) {
        minutes = 0
        hours++
    }
    let clocks = (hours < 10 ? '0': '')+ hours + ':' + (minutes < 10 ? '0': '')+ minutes + ':' + (secounds < 10 ? '0': '')+ secounds ;
    clock.innerHTML = clocks
},1000)