function check() {
    let input = document.getElementById('code').value;
    let codes = input.split('\n');
    let variable = null; // store the vaiable name

    for (let line of codes) {
        if (line.includes('print') && !line.startsWith(' ')) {
            alert('Fail: Syntax Error (Hint: You Must important indentation)');
            return;
        }
        if (line.includes('input') && line.startsWith(' ')) {
            alert('Fail: Syntax Error (Hint: You Must not important indentation)');
            return;
        }
        if (line.includes('input') && line.endsWith(':')) {
            alert('Fail: Syntax Error');
            return;
        }

        // search the variable name
        let match = line.match(/^\s*(\w+)\s*=\s*int\s*\(\s*input\s*\(/);
        if (match) {
            variable = match[1]; // selection the vaiable name
        }
    }

    if (!variable) {
        alert('Fail: Check the variable name');
        return;
    }

    
    let regexVarUsage = new RegExp(`\\b${variable}\\b`, 'g');
    let varUsageCount = (input.match(regexVarUsage) || []).length;

    if (varUsageCount < 3) {
        alert('Fail: The variable is defined but not used in all conditions.');
        return;
    }

    
    if (
        (input.match(/\bint\b/g) || []).length == 1 &&
        (input.match(/\binput\b/g) || []).length == 1 &&
        (input.match(/\bif\b/g) || []).length == 1 &&
        (input.match(/\belif\b/g) || []).length == 1 &&
        (input.match(/\belse\b/g) || []).length == 1 &&
        (input.match(/\bprint\b/g) || []).length == 3 &&
        (input.match(/\b%\b/g) || []).length == 1 &&
        (input.match(/\b2\b/g) || []).length == 1 &&
        (input.match(/\b0\b/g) || []).length == 2
    ) {
        alert('Good');
    } else {
        alert('Fail');
    }
}


// show or hidden the example
let ex = document.querySelectorAll('.ex');
function showed(){
    ex[0].classList.toggle('show')
    ex[1].classList.toggle('show')
    ex[2].classList.toggle('show')
}

function clearall() {
    let enter = document.getElementById('code');
    enter.value=''
}