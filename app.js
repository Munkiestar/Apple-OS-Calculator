let oneBtn = document.getElementById('calc-one');
let twoBtn = document.getElementById('calc-two');
let threeBtn = document.getElementById('clac-three');
let fourBtn = document.getElementById('calc-four');
let fiveBtn = document.getElementById('calc-five');
let sixBtn = document.getElementById('calc-six');
let sevenBtn = document.getElementById('calc-seven');
let eightBtn = document.getElementById('calc-eight');
let nineBtn = document.getElementById('calc-nine');
let zeroBtn = document.getElementById('calc-zero');

let decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backspaceBtn = document.getElementById('calc-backspace');
let displayValElem = document.getElementById('calc-display-val');

let calcNumBtns = document.getElementsByClassName('calc-btn-num');
let calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

let displayVal = '0';
let pendingVal;
let evalStringArr = [];



for(let i = 0; i < calcNumBtns.length; i++){
	calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for(let i = 0; i < calcOperatorBtns.length; i++){
	calcOperatorBtns[i].addEventListener('click', performOperation, false);
}


function updateDisplayVal(click){
	let btnText = click.target.innerText;

	if(displayVal === '0'){
		displayVal = '';
	}
		displayVal += btnText;
		displayValElem.innerText = displayVal;
}


// clear button
clearBtn.onclick = () => {
	displayVal = '0';
	pendingVal = undefined;
	evalStringArr = [];
	displayValElem.innerHTML = displayVal;
}

// backspace btn
backspaceBtn.onclick = () => {
	let lengthOfDisplayVal = displayVal.length;
	displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

	if(displayVal === ''){
		displayVal = '0';
	}

	displayValElem.innerText = displayVal;
}

// decimal btn
decimalBtn.onclick = () => {
	// we can use 'dot' only once!
	if(!displayVal.includes('.')){
		displayVal += '.';
		displayValElem.innerText = displayVal;
	}
}

function performOperation(click){
	let operator = click.target.innerText;

	switch(operator){
		case '+':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElem.innerText = displayVal;
			evalStringArr.push(pendingVal);
			evalStringArr.push('+');
			break;

		case '-':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElem.innerText = displayVal;
			evalStringArr.push(pendingVal);
			evalStringArr.push('-');
			break;

		case 'x':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElem.innerText = displayVal;
			evalStringArr.push(pendingVal);
			evalStringArr.push('*');
			break;

		case '÷':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElem.innerText = displayVal;
			evalStringArr.push(pendingVal);
			evalStringArr.push('/');
			break;

		case '=':
			evalStringArr.push(displayVal);
			let evalutaion = eval(evalStringArr.join(' '));
			displayVal = evalutaion + '';
			displayValElem.innerText = displayVal;
			evalStringArr = [];
			break;	

		default:
			break;
						
	}
}