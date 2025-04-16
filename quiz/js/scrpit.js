const questions = [
    { q: "What are Operators?", choices: ["a)They are commands used to execute a specific command when printed.", "b)They are operations that deal with variables and values and can deal with numbers and texts.", "c)They are operations that calculate only two numbers.", "d)They are operations that only assign values to variables."], answer: "b)They are operations that deal with variables and values and can deal with numbers and texts." },
    { q: "Printing and input are used for:", choices: ["a)Print one command and enter one value", "b)Print many commands and enter many commands","c)Print multiple commands and enter one value","d)Not one from above"], answer: "c)Print multiple commands and enter one value"},
    { q: '(/n) is used to print text on more than one line.', choices: ['a)True', 'b)False', 'c)Error in the question'], answer: 'a)True'},
    { q: "To print more than one line we use:", choices: ['a)‘’’', 'b)\/n', 'c)A and b', 'd)Not one from above'], answer: 'c)A and b'},
    { q: "To know the type of a variable's value, we use:", choices: ['a)Type()', 'b)Typeof()', 'c)Kind()', 'd)Print(like())'], answer: 'a)Type()'},
    { q: "Can the print command print a list?", choices: ['a)True', 'b)False', 'c)Error in the question'], answer: 'a)True'},
    { q: "Guess the output: print(type(10 / 2))", choices: ["a)class 'float'", "b)class 'int'", "c)class 'str'", "d)class 'bool'"], answer:"a)class 'float'"},
    { q: "Guess the output: <br> <img src='./img/Picture1.png'>", choices: ['a)10', 'b)7', 'c)25', 'd)30'], answer: 'c)25'},
    { q: "Guess the output: <br> <img src='./img/Picture2.png'>", choices: ['a)“Python”', 'b)Python', 'c)1var', 'd)Error'], answer: 'd)Error'},
    { q: "Guess the output: <br> <img src='./img/Picture3.png'>", choices: ['a)54', 'b)9', 'c)4444', 'd)Error'] , answer: 'a)54'}
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
    let submit = localStorage.getItem('submit');
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

    window.open('../score/score level1.html')

    
    btn_submit.style.display='none'

    localStorage.setItem('score',score);
    localStorage.setItem('submit',true)
    localStorage.setItem('timing',clock.innerHTML)
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