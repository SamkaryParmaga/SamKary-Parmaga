function check() {
    let input = document.getElementById('code').value;
    let codes = input.split('\n');
    // let variable = null; // store the vaiable name

    for (let line of codes) {
        
        if (line.includes('append') && !line.startsWith(' ')) {
            alert('Fail: Syntax Error (Hint: You Must important indentation)');
            return;
        }
        if (line.includes('input') && !line.startsWith(' ')) {
            alert('Fail: Syntax Error (Hint: You Must not important indentation)');
            return;
        }
        
        if (line.includes('=') && line.includes('for')) {
            alert('Fail: Syntax error')
            return
        }
        if (line.includes('for') && line.includes('print')) {
            alert('Fail: Syntax error')
            return
        }
        if ((line.includes('[]') || line.includes('for') || (line.includes('print') && !line.includes("-"))) && line.startsWith(' ')) {
            alert('Fail: Syntax error4')
            return
        }
    }

    // if (!variable) {
    //     alert('Fail: Check the variable name');
    //     return;
    // }

    
    // let regexVarUsage = new RegExp(`\\b${variable}\\b`, 'g');
    // let varUsageCount = (input.match(regexVarUsage) || []).length;

    // if (varUsageCount < 3) {
    //     alert('Fail: The variable is defined but not used in all conditions.');
    //     return;
    // }

    
    if (codes[codes.length -1].includes('print')) {
        if (codes[codes.length -1].startsWith(' ') ) {
            alert('Good')
            return
        } else {
            alert('Fail: Syntax error')
            return
        }
    }
    if (
        input.includes('[]')&&
        (input.match(/\bfor\b/g) || []).length == 2 &&
        (input.match(/\bin\b/g) || []).length == 2 && 
        (input.match(/\bprint\b/g) || []).length == 2 && 
        (input.match(/\brange\b/g) || []).length == 1 && 
        (input.match(/\binput\b/g) || []).length == 1 && 
        (input.match(/\bappend\b/g) || []).length == 1 
    ) {
        alert('Good');
    } else {
        alert('Fail');
        console.log(input.lastIndexOf('print'))
    }
}


// show or hidden the example
let ex = document.querySelectorAll('.ex');
function showed(){
    ex[0].classList.toggle('show')
    ex[1].classList.toggle('show')
}

function clearall() {
    let enter = document.getElementById('code');
    enter.value=''
}