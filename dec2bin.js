let decBar = document.getElementById('dec-bar');
let decBtn = document.getElementById('dec-btn');

let binBar = document.getElementById('bin-bar');
let binBtn = document.getElementById('bin-btn');

let values = document.getElementById('values');
let divis = document.getElementById('division');
let bin = document.getElementById('binary');

let decNum = Number(decBar.value);
let decRem = Number((decNum % 2));

let decArr = [];
let binArr = [];
let copyArr = [];

let total = 0;
    
decBtn.addEventListener('click', updateDec);
binBtn.addEventListener('click', updateBin);

function updateDec(e) {
    decNum = decBar.value;
    decArr = [];

    decArr.push(decNum % 2);
    for (let i = 0; i < (decBar.value / 2); i++) { 
        decNum /= 2;
        if ((decNum / 2) > 0.5) {
decArr.push(Math.floor(decNum % 2));
        }
        if (decArr.length > 8) {
decArr.splice(8, 0, " ");
        }
    }   

    if (decBar.value == 2 || decBar.value == 4 || decBar.value == 8) {
        decArr.push(1);
    }

    copyArr = decArr.slice().reverse();
    resArr = copyArr.join("");
    values.innerHTML = e.target.value;
    divis.innerHTML = resArr;
}

function updateBin(e) {
    binNum = binBar.value;
    binArr = [];

    for (let i = 0; i < binNum.length; i++) {
        binArr.push(Number(binNum[i]));
        total *= 2;
        total += binArr[i];
    }

    bin.innerHTML = total;
    total = 0;
}