let ex = document.querySelectorAll('.ex');
function showed(){
    ex[0].classList.toggle('show')
}
function showed1(){
    ex[1].classList.toggle('show')
}
function showed2(){
    ex[2].classList.toggle('show')
    ex[3].classList.toggle('show')
    ex[4].classList.toggle('show')
}

// let text = document.querySelector('.texts');
// class Translate{
//     constructor(){
//         document.querySelector('.btn-lang').addEventListener('click',()=>{
//             this.translate('en')
//         })
//         document.querySelectorAll('.btn-lang')[1].addEventListener('click',()=>{
//             this.translate('ar')
//         })
//         this.translate(localStorage.getItem('lang'))
//     }
//     translate(language){
//         if (language == 'en') {
//             text.innerHTML= `
//             <p>Operators: are used to perform operations on variables and values.</p>
//             <ol>
//                 <li>
//                     <p>Arithmetic operators: are used with numeric values to perform common mathematical operations like: [+, -, /, *, %, **, //].</p>
//                 </li>
//                 <li>
//                     <p>Assignment: are used to assign values to variables like: [=, +=, -=, *=, /=, %=, **=, //=].</p>
//                 </li>
//             </ol>
//             <a class="btn btns rounded-5 p-2 text-light" href="./Level 1.docx">Learn More</a>
//             `
//         } else {
//             text.innerHTML = `
//             <p>.المشغلات: تستخدم لإجراء العمليات على المتغيرات والقيم</p>
//             <ol>
//                 <li>
//                     <p>.[+، -، /، *، %، **، //]:العمليات الحسابية: تُستخدم مع القيم الرقمية لإجراء عمليات حسابية شائعة مثل</p>
//                 </li>
//                 <li>
//                     <p>.[=، +=، -=، *=، /=، %=، **=، //=]:التعيين: تستخدم لتعيين قيم للمتغيرات مثل</p>
//                 </li>
//             </ol>
//             <a class="btn btns rounded-5 p-2 text-light" href="./Level 1.docx">تعلم اكتر</a>
//             `
//         }
//         localStorage.setItem('lang',language)
//     }
    
// }
// onload = new Translate();