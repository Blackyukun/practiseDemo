// lesson3.7 js
var calScreen = document.getElementsByClassName('screen')[0];
var formula = document.getElementById('formula');
var allA = document.getElementById('test').getElementsByTagName('a');
var s = false;

for (var i=0; i<allA.length; i++) {
	allA[i].onfocus = function() {
		this.blur();// 当光标移到a标签是使其失去焦点
	};
	allA[i].onclick = function() {
		switch(this.innerHTML) {
			case "c":
				calScreen.value = 0;
				formula.value = '';
				break;
			case "%":
				count('%')
				break;
			case "÷":
				count('/')
				break;
			case '×':
				count('*')
				break;
			case '-':
				count('-')
				break;
			case '+':
				count('+')
				break;
			case '=':
				s || (formula.value += calScreen.value);// if的简写,后面的? :组合就是if...else...简写
				calScreen.value = eval(formula.value.replace(/\%\/\*\-\+/,''));
				calScreen.value = calScreen.value.substr(0,10).replace('NaN',0);
				s = true;
				break;
			case '.':
				if (calScreen.value.search(/[\.\%\/\*\-\+]/) != -1)
				break;
			default:
				s && (calScreen.value = 0, formula.value='', s=false);
				calScreen.value.length < 10 && (calScreen.value=(calScreen.value+this.innerHTML).replace(/^[0\%\/\*\-\+](\d)/,'$1'));
		}
	}
}
function count(a) {
	if (s) {
		formula.value = calScreen.value + a;
		calScreen.value = a;
		s = false;
	} else{
		/[\%\/\*\-\+]$/.test(calScreen.value) || (formula.value += calScreen.value);
		calScreen.value = a;
		/[\%\/\*\-\+]$/.test(formula.value) || (formula.value += calScreen.value);
		formula.value = formula.value.slice(-1) != a ? formula.value.replace(/.$/,a) : formula.value
	}
}
