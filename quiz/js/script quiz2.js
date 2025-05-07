const questions = [
    { q: "When a specific word “love” is found in a variable that contains the sentence “I love you,” what is the appropriate Method to use?", choices: ["a)Index", "b)Find", "c)Replace", "d)a and b"], answer: "d)a and b" },
    { q: "When you use consecutive conditional cases or use a condition within another condition if the first condition is met, What is the name of this process?", choices: ["a)Comparison", "b)Short hand if-else","c)Nested if","d)Logical operator"], answer: "c)Nested if"},
    { q: 'What is the process that checks the value and type of a variable?', choices: ['a)!=', 'b)===', 'c)!==', 'd)=='], answer: 'b)==='},
    { q: "When we check more than one condition or if it is checked that all the conditions are true, we use the operation.....", choices: ['a)And', 'b)Or', 'c)Not', 'd)No thing'], answer: 'a)And'},
    { q: "What operation reverses the result, returning False if the result is true?", choices: ['a)And', 'b)Or', 'c)Not', 'd)No thing'], answer: 'c)Not'},
    { q: "What is the command used to execute a block of code if the same condition is false?", choices: ['a)If', 'b)Elif', 'c)Else if', 'd)else'], answer: 'd)else'},
    { q: "What is the comments?", choices: ["a)Ignored the condition by interpreter", "b)Ignored the code by compiler", "c)Ignored the code by interpreter", "d)Ignored the condition by compiler"], answer:"c)Ignored the code by interpreter"},
    { q: "Guess the output: <br> <img src='./img/level2/Picture1.png' alt='question1' class='img-fluid'>", choices: ['a)pro', 'b)Is pro', 'c)_pro', 'd)prog'], answer: 'c)_pro'},
    { q: "Guess the output: <br> <img src='./img/level2/Picture2.png' alt='question2' class='img-fluid'>", choices: ['a)samkary', 'b)SAMKARY', 'c)Samkary', 'd)No thing'], answer: 'c)Samkary'},
    { q: "Guess the output: <br> <img src='./img/level2/Picture3.png' alt='question3' class='img-fluid'>", choices: ['a)False,8,9', 'b)True,8,8', 'c)False,9,8', 'd)False,8,10'] , answer: 'a)False,8,9'}
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
    let submit = localStorage.getItem('submit2');
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

    window.open('../score/score level2.html')

    
    btn_submit.style.display='none'

    localStorage.setItem('score2',score);
    localStorage.setItem('submit2',true)
    localStorage.setItem('timing2',clock.innerHTML)
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