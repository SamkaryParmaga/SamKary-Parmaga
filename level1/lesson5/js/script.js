let inputcode = document.querySelector('textarea');

function check() {
    let input = inputcode.value; 
    let lines = input.split("\n"); 
    let list =[];

    for (let line of lines) {
        
        if (line.startsWith(' ') || (line.match(/=/g) || []).length > 1 || line.endsWith(':') || (line.match(/'/g) || []).length == 1 || line.match(/\)print/) || 
            line.startsWith('(') || line.startsWith('+')|| line.startsWith('\bint\b') || (line.match(/"/g) || []).length == 1 ||line.trim().endsWith('=')) { 
            alert('Fail: syntax error');
            return;
        }
        let val = line.split('=');
        
        list.push(val[0].trim());
    }
    for (const line of lines) {
        if (line.startsWith('print')) {
            let val2 = line.substring(6,line.length-1);
            let words = val2.split(' ');
            
            for (let word of words) {
                let cleanWord = word.replace(/[()+\-*/]/g, " ").trim();
                let subWords = cleanWord.split(/\s+/); 

                for (let subWord of subWords) {
                    subWord = subWord.trim(); 

                    if (subWord.startsWith("int")) {
                        subWord = subWord.slice(4, -1);
                    };

                    if (!list.includes(subWord) && isNaN(subWord) && subWord !== "int") { 
                        alert(`Fail: undfined ${subWord}`);
                        return;
                    };
                };
            };
            
        };
    };

    if (
        (input.match(/\binput\b/g) || []).length === 2 &&
        (input.match(/\bint\b/g) || []).length === 2 &&
        input.includes('+') &&
        input.includes('print')
    ) {
        alert('Good');
        window.open('../../Feedback/Feedback.html','_blank');
        sessionStorage.setItem('formlevel1',true);
    } else {
        alert('Fail');
    };
};

function clearall() {
    inputcode.value = '';
}


function showed(){
    let ex = document.querySelector('.ex');
    ex.classList.toggle('show');
};
