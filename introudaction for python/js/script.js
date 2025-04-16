let texts = document.getElementById('texts');
class Translate{
    constructor(){
        document.querySelector('.btn').addEventListener('click',()=>{
            this.translate('en')
        })
        document.querySelectorAll('.btn')[1].addEventListener('click',()=>{
            this.translate('ar')
        })
        this.translate(localStorage.getItem('lang'))
    }
    translate(language){
        if (language == 'en') {
            texts.innerHTML= `
            <p>
                <strong>Python</strong>:- is a popular programming language. It was created by Guido van Rossum, and released in 1991.
            </p>
            <h3>Why python?</h3>
            <ul>
                <li>Easy to learn and use</li>
                <li>Supports procedural, object-oriented or Functional programming</li>
                <li>Perfect for complex and quick projects</li>
            </ul>
            <h3>What can Python do?</h3>
            <ul>
                <li>Python can be used on a server to create web applications.</li>
                <li>Python can be used alongside software to create workflows.</li>
                <li>Python can connect to database systems. It can also read and modify files. <a href="./Level 1.docx" class="btns">Read More</a></li>
            </ul>
            `
        } else {
            texts.innerHTML = `
            <p>
                <strong>بايثون</strong>:- هي لغة برمجة شائعة. تم انشاؤها بواسطة خيدو فان روسم و تم اصداره في عام 1991
            </p>
            <h3>لماذا بايثون؟</h3>
            <ul>
                <li>سهل التعلم و الاستخدام</li>
                <li>يدعم البرمجة الاجرائية او المواجهة للكائنات او الوظيفة</li>
                <li>مثالي للمشاريع المعقدة و السريعة</li>
            </ul>
            <h3>ماذا يمكن ان يفعل بايثون؟</h3>
            <ul>
                <li>يمكن استخدام بايثون علي الخادم لانشاء التطبيقات الويب</li>
                <li>يمكن استخدام بايثون جنبا الي جنب مع البرامج لانشاء تدفقات العمل</li>
                <li>يمكن بايثون الاتصال بانظمة قواعد البيانات .ويمكنه ايضا قراءة الملفات و تعدليها <a href="./Level 1.docx" class="btns">اقرا اكثر</a></li>
            </ul>
            `
        }
        localStorage.setItem('lang',language)
    }
    
}
onload = new Translate();