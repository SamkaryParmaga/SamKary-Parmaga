let ex = document.querySelectorAll('.ex')
function showed() {
    ex[0].classList.toggle('show')
}
function showed1() {
    ex[1].classList.toggle('show')
}
function showed2() {
    ex[2].classList.toggle('show')
}

// let text = document.querySelector('.texts');
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
//             <div class=" rounded container mb-3" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//     <h3 class="text-white">print(massage) massage can be:
//     </h3>
//     <ol class="text-white">
//         <li>string</li>
//         <li>number</li>
//         <li>Boolean</li>
//         <li>list</li>
//     </ol>
//     <h4 class="text-white">like:</h4>
//     <div class="d-flex container">
//         <ul class="text-white bg-black rounded-3 p-4">
//             <li class="">print("hello") <span class="text-success"># string</span></li>
//             <li>print(25) <span class="text-success"># number</span></li>
//             <li>print(true)<span class="text-success"># boolean</span></li>
//             <li>print([1,2,"hello"])<span class="text-success"># list</span></li>
//         </ul>
//         <div>
//             <ul class="text-white ms-5 ">
//                 <h4>output :</h4>
//                 <li>hello</li>
//                 <li>25</li>
//                 <li>true</li>
//                 <li>[1,2,"hello"]</li>
//             </ul>
//         </div>
//     </div> 
//   </div>
//   <div class=" container mb-3" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//     <h3 class="text-white">you can add multiple message in the same function via (+)or(,):</h3>
//     <h4 class="text-white">like:</h4>
//     <div class="d-flex container">
//         <ul class="text-white bg-black rounded-3 p-4">
//             <li class="">print("hello" + "pyton")</li>
//             <li>print("welcome" , 25)</li>
//         </ul>
//         <div>
//             <ul class="text-white ms-5 ">
//                 <h4>output :</h4>
//                 <li>hello python</li>
//                 <li>welcome 25</li>
//             </ul>
//         </div>
//     </div>
//   </div>
//   <div class=" container" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//     <h3 class="text-white">you can create multiple lines in the same message via (\\n)or(""")or('''):</h3>
//     <h4 class="text-white">like:</h4>
//     <div class="d-flex container">
//         <ul class="text-white bg-black rounded-3 p-4">
//             <li class="">print("welcome \\n python")</li>
//             <li>print("""<br>
//                 welcome<br>
//                 python <br>
//                 """)</li>
//                 <li>print('''<br>
//                     welcome<br>
//                     python <br>
//                     '''')</li>
//         </ul>
//         <div>
//             <ul class="text-white ms-5 ">
//                 <h4>output :</h4>
//                 <li>welcome<br>python</li>
//                 <li>welcome<br>python</li>
//                 <li>welcome<br>python</li> 
//             </ul>
//         </div>
//     </div>
//     <div class="links1">
//         <span class="text-white fs-5">Arabic videos:</span>
//         <a href="https://youtu.be/Vl1mHJMrEnk?si=M0k23TQp3UTwMwBp">Link1</a>
//         <a href="https://youtu.be/u3q-e9vOl8w?si=teII5mK8TyBkDIXn">Link2</a>
//     </div>
//     <div class="links2">
//         <span class="text-white fs-5">English videos:</span>
//         <a href="https://youtube.com/shorts/5VRl-gvGnlI?si=Q5Z_Q1eu8faGob87">Link1</a>
//     </div>
//   </div>
//             `
//         } else if (lang == 'ar') {
//             text.innerHTML=`
//                 <div class=" rounded container mb-3" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//     <h3 class="text-white">print(massage) :الرسالة يمكن ان تكون
//     </h3>
//     <ol class="text-white">
//         <li>نص</li>
//         <li>رقم</li>
//         <li>منطقي</li>
//         <li>قائمة</li>
//     </ol>
//     <h4 class="text-white">:مثل</h4>
//     <div class="d-flex container">
//         <ul class="text-white bg-black rounded-3 p-4">
//             <li class="">print("hello") <span class="text-success"># string</span></li>
//             <li>print(25) <span class="text-success"># number</span></li>
//             <li>print(true)<span class="text-success"># boolean</span></li>
//             <li>print([1,2,"hello"])<span class="text-success"># list</span></li>
//         </ul>
//         <div>
//             <ul class="text-white ms-5 ">
//                 <h4>:الاخراج</h4>
//                 <li>hello</li>
//                 <li>25</li>
//                 <li>true</li>
//                 <li>[1,2,"hello"]</li>
//             </ul>
//         </div>
//     </div> 
//   </div>
//   <div class=" container mb-3" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//     <h3 class="text-white">(,)يمكنك إضافة رسائل متعددة في نفس الوظيفة عبر (+) أو</h3>
//     <h4 class="text-white">:مثل</h4>
//     <div class="d-flex container">
//         <ul class="text-white bg-black rounded-3 p-4">
//             <li class="">print("hello" + "pyton")</li>
//             <li>print("welcome" , 25)</li>
//         </ul>
//         <div>
//             <ul class="text-white ms-5 ">
//                 <h4>:الاخراج</h4>
//                 <li>hello python</li>
//                 <li>welcome 25</li>
//             </ul>
//         </div>
//     </div>
//   </div>
//   <div class=" container" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//     <h3 class="text-white">(""") او (''') او (\\n)يمكنك إنشاء أسطر متعددة في نفس الرسالة عبر</h3>
//     <h4 class="text-white">:مثل</h4>
//     <div class="d-flex container">
//         <ul class="text-white bg-black rounded-3 p-4">
//             <li class="">print("welcome \\n python")</li>
//             <li>print("""<br>
//                 welcome<br>
//                 python <br>
//                 """)</li>
//                 <li>print('''<br>
//                     welcome<br>
//                     python <br>
//                     '''')</li>
//         </ul>
//         <div>
//             <ul class="text-white ms-5 ">
//                 <h4>:الاخراج</h4>
//                 <li>welcome<br>python</li>
//                 <li>welcome<br>python</li>
//                 <li>welcome<br>python</li> 
//             </ul>
//         </div>
//     </div>
//     <div class="links1">
//         <span class="text-white fs-5">فيديوهات عربية</span>
//         <a href="https://youtu.be/Vl1mHJMrEnk?si=M0k23TQp3UTwMwBp">الرابط 1</a>
//         <a href="https://youtu.be/u3q-e9vOl8w?si=teII5mK8TyBkDIXn">الرابط 2</a>
//     </div>
//     <div class="links2">
//         <span class="text-white fs-5">فيديو باللغة الانجليزية</span>
//         <a href="https://youtube.com/shorts/5VRl-gvGnlI?si=Q5Z_Q1eu8faGob87">الرابط 1</a>
//     </div>
//   </div>
//             `
//         }
//         localStorage.setItem('lang',lang);
//     }
// }
// onload = new Translate()
