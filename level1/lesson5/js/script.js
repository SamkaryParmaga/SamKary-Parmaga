let inputcode = document.querySelector('textarea');

function check() {
    let input = inputcode.value; 
    let lines = input.split("\n"); 
    let list =[]

    for (let line of lines) {
        
        if (line.startsWith(' ') || (line.match(/=/g) || []).length > 1 || line.endsWith(':') || (line.match(/'/g) || []).length == 1 || line.match(/\)print/) || 
            line.startsWith('(') || line.startsWith('+')|| line.startsWith('\bint\b') || (line.match(/"/g) || []).length == 1 ||line.trim().endsWith('=')) { 
            alert('Fail: syntax error');
            return;
        }
        let val = line.split('=')
        
        list.push(val[0].trim())
    }
    for (const line of lines) {
        if (line.startsWith('print')) {
            let val2 = line.substring(6,line.length-1)
            let words = val2.split(' ')
            
            for (let word of words) {
                let cleanWord = word.replace(/[()+\-*/]/g, " ").trim();
                let subWords = cleanWord.split(/\s+/); 

                for (let subWord of subWords) {
                    subWord = subWord.trim(); 

                    if (subWord.startsWith("int")) {
                        subWord = subWord.slice(4, -1);
                    }

                    if (!list.includes(subWord) && isNaN(subWord) && subWord !== "int") { 
                        alert(`Fail: undfined ${subWord}`);
                        return;
                    }
                }
            }
            
        }
    }

    if (
        (input.match(/\binput\b/g) || []).length === 2 &&
        (input.match(/\bint\b/g) || []).length === 2 &&
        input.includes('+') &&
        input.includes('print')
    ) {
        alert('Good');
        window.location.href = '../../Feedback/index.html';
        sessionStorage.setItem('formlevel1',true)
    } else {
        alert('Fail');
    }
}

function clearall() {
    inputcode.value = '';
}


function showed(){
    let ex = document.querySelector('.ex')
    ex.classList.toggle('show')
}


// translate
// let text = document.querySelector('.text');
// class Translate {
//     constructor() {
//         document.querySelectorAll('.btn-lang')[0].addEventListener('click',()=>{
//             this.translate('en')
//         })
//         document.querySelectorAll('.btn-lang')[1].addEventListener('click',()=>{
//             this.translate('ar')
//         })
//         this.translate(localStorage.getItem('lang'))
//     }
//     translate(lang) {
//         if (lang == 'en') {
//             text.innerHTML=`
//             <p>
//                 You are required to create two entries. When the user enters number 1 and number 2, the program prints number 1 + number 2
//             </p>
//             <div class="text-center">
//                 <img src="./images/Project.png" class="img-fluid mb-4 h-25 rounded"  alt="project">
//             </div>
//             <a class="btn rounded-5 p-2 text-light btns" href="./Level 1.docx">Learn More</a>
//             `
//         } else if (lang == 'ar') {
//             text.innerHTML=`
//                 <p>
//                     يجب عليك انشاء مدخلين عندما يقوم المستخدم بادخال الرقم1 و الرقم2 يقوم البرنامج بطباعة الرقم1 + الرقم2
//                 </p>
//                 <div class="text-center">
//                     <img src="./images/Project.png" class="img-fluid mb-4 h-25 rounded"  alt="project">
//                 </div>
//                 <a class="btn rounded-5 p-2 text-light btns" href="./Level 1.docx">اتعلم اكثر</a>
//             `
//         }
//         localStorage.setItem('lang',lang);
//     }
// }
// onload = new Translate()