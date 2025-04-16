let ex = document.querySelectorAll('.ex');
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
//             <div class="card container mb-3" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//         <h3 class="text-white">to create variable you can just write a name of a variable like
//         </h3>
//         <h4 class="text-white">like:</h4>
//         <div class="d-flex container">
//             <ul class="text-white bg-black rounded-3 p-4">
//                 <li class="">username="ahmed"</li>
//                 <li>print(username)</li>
//             </ul>
//             <div>
//                 <ul class="text-white ms-5 ">
//                     <h4>output :</h4>
//                     <li>ahmed</li>
//                 </ul>
//             </div>
//         </div> 
//       </div>
//       <div class="card container mb-3" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//         <h3 class="text-white">the variable name must begin with a name and be text, not a number, and there must be no spaces in the variable name that you can replace (_) but you must be no begin the any number to create a variable like:</h3>
//         <h4 class="text-white">like:</h4>
//         <div class="d-flex container justify-content-center">
//             <div class="row">
//                 <div class="col-lg-4">
//                 <ul class="text-white ms-5 ">
//                     <h4>output :</h4>
//                     <li>error</li>
//                 </ul>
//                 <ul class="text-white bg-black rounded-3 p-4">
//                     <li class="">4username="ahmed"</li>
//                     <li>print(4username)</li>
//                 </ul>
//                 </div>
//                 <div class="col-lg-4">

//                 <div>
//                   <ul class="text-white ms-5 ">
//                       <h4>output :</h4>
//                       <li>error</li>
//                     </ul>
//                     </div>
//                     <ul class="text-white bg-black rounded-3 p-4">
//                         <li class=""> username="ahmed"</li>
//                         <li>print( username)</li>
//                     </ul>
//                 </div>

//                 <div class="col-lg-4">
//                 <div>
//                     <ul class="text-white ms-5 ">
//                         <h4>output :</h4>
//                         <li>error</li>
//                     </ul>
//                 </div>
//                 <ul class="text-white bg-black rounded-3 p-4">
//                     <li class="">_user_name="ahmed"</li>
//                     <li>print(_user_name)</li>
//                 </ul>
//                 </div>
//             </div>
//         </div>
//       </div>
//       <div class="card container" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//         <h3 class="text-white">data type:<br>
//          <p class="fs-6">
//           1.	String <br>
//           2.	integer<br>
//           3.	Boolean<br>
//           4.	Float<br>
//           5.	List<br>
//           6.	Tuple<br>
//          </p>
//         </h3>
//         <h4 class="text-white">To know data type via variables you should use (type()) like:</h4>
//         <div class="d-flex container">
//             <ul class="text-white bg-black rounded-3 p-4">
//                 <li class="">Strings="ahmed"</li>
//                 <li>integers=16</li>
//                 <li>Booleans=true</li>
//                 <li>floats=3.4</li>
//                 <li>lists=[2,"ahmed",5]</li>
//                 <li>tuples={1,3,5}</li>
//                 <li>print(type(Strings))</li>
//                 <li>print(type(integers))</li>
//                 <li>print(type(Booleans))</li>
//                 <li>print(type(floats))</li>
//                 <li>print(type(lists))</li>
//                 <li>print(type(tuples))</li>
//             </ul>
//             <div>
//                 <ul class="text-white ms-5 ">
//                     <h4>output :</h4>
//                     <li>String</li>
//                     <li>integer</li>
//                     <li>Boolean</li> 
//                     <li>float</li>
//                     <li>list</li>
//                     <li>tuple</li>
//                 </ul>
//             </div>
            
//         </div>
//         <div class="links1">
//             <span class="text-white fs-5">Arabic videos:</span>
//             <a href="https://youtu.be/2g0-njo4Gzo?si=wOjtAK2EbHqDhtRs">Link1</a>
//             <a href="https://youtu.be/gQxch0k9B0E?si=JYngvYvFe9uNzeda">Link2</a>
//         </div>
//         <div class="links2">
//             <span class="text-white fs-5">English videos:</span>
//             <a href="https://youtu.be/7IoQ5BGkTJo?si=3tcCUk6QuahHL8X4">Link1</a>
//         </div>
//       </div>
//             `
//         } else if (lang == 'ar') {
//             text.innerHTML=`
//                 <div class="card container mb-3" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//         <h3 class="text-white">:لإنشاء متغير يمكنك فقط كتابة اسم المتغير مثل
//         </h3>
//         <h4 class="text-white">:مثل</h4>
//         <div class="d-flex container">
//             <ul class="text-white bg-black rounded-3 p-4">
//                 <li class="">username="ahmed"</li>
//                 <li>print(username)</li>
//             </ul>
//             <div>
//                 <ul class="text-white ms-5 ">
//                     <h4>:الاخراج</h4>
//                     <li>ahmed</li>
//                 </ul>
//             </div>
//         </div> 
//       </div>
//       <div class="card container mb-3" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//         <h3 class="text-white">يجب أن يبدأ اسم المتغير باسم وأن يكون نصًا وليس رقمًا، ويجب ألا تكون هناك مسافات في اسم المتغير يمكنك استبدالها بـ (_)، ولكن يجب ألا تبدأ بأي رقم لإنشاء متغير مثل:</h3>
//         <h4 class="text-white">:مثل</h4>
//         <div class="d-flex container">
//             <ul class="text-white bg-black rounded-3 p-4">
//                 <li class="">4username="ahmed"</li>
//                 <li>print(4username)</li>
//             </ul>

//                 <ul class="text-white ms-5 ">
//                     <h4>output :</h4>
//                     <li>error</li>
//                 </ul>
//                 <ul class="text-white bg-black rounded-3 p-4">
//                   <li class=""> username="ahmed"</li>
//                   <li>print( username)</li>
//               </ul>
//               <div>
//                   <ul class="text-white ms-5 ">
//                       <h4>output :</h4>
//                       <li>error</li>
//                   </ul>
//                   </div>
//                   <ul class="text-white bg-black rounded-3 p-4">
//                     <li class="">_user_name="ahmed"</li>
//                     <li>print(_user_name)</li>
//                 </ul>
//                 <div>
//                     <ul class="text-white ms-5 ">
//                         <h4>output :</h4>
//                         <li>error</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//       </div>
//       <div class="card container" style="background-color:rgba(0, 0, 0, 0); border:1px white solid;">
//         <h3 class="text-white">:نوع البيانات<br>
//          <p class="fs-6">
//           1.	نص <br>
//           2.	عدد صحيح<br>
//           3.	منطقي<br>
//           4.	عدد عشري<br>
//           5.	قامة<br>
//           6.	مجموعة<br>
//          </p>
//         </h3>
//         <h4 class="text-white">(type())لمعرفة نوع البيانات عبر المتغيرات يجب عليك استخدام </h4>
//         <div class="d-flex container">
//             <ul class="text-white bg-black rounded-3 p-4">
//                 <li class="">Strings="ahmed"</li>
//                 <li>integers=16</li>
//                 <li>Booleans=true</li>
//                 <li>floats=3.4</li>
//                 <li>lists=[2,"ahmed",5]</li>
//                 <li>tuples={1,3,5}</li>
//                 <li>print(type(Strings))</li>
//                 <li>print(type(integers))</li>
//                 <li>print(type(Booleans))</li>
//                 <li>print(type(floats))</li>
//                 <li>print(type(lists))</li>
//                 <li>print(type(tuples))</li>
//             </ul>
//             <div>
//                 <ul class="text-white ms-5 ">
//                     <h4>:الاخراج</h4>
//                     <li>String</li>
//                     <li>integer</li>
//                     <li>Boolean</li> 
//                     <li>float</li>
//                     <li>list</li>
//                     <li>tuple</li>
//                 </ul>
//             </div>
//         </div>
//         <div class="links1">
//             <span class="text-white fs-5">فيديوهات عربية</span>
//             <a href="https://youtu.be/2g0-njo4Gzo?si=wOjtAK2EbHqDhtRs">الرابط 1</a>
//             <a href="https://youtu.be/gQxch0k9B0E?si=JYngvYvFe9uNzeda">الرابط 2</a>
//         </div>
//         <div class="links2">
//             <span class="text-white fs-5">فيديو باللغة الانجليزية:</span>
//             <a href="https://youtu.be/7IoQ5BGkTJo?si=3tcCUk6QuahHL8X4">الرابط 1</a>
//         </div>
//       </div>
//             `
//         }
//         localStorage.setItem('lang',lang);
//     }
// }
// onload = new Translate()