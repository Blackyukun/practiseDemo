// lesson2.12
'use strict';

window.onload = function() {
	var inputs = document.getElementsByTagName('input');
	var label = document.getElementsByTagName('label')[0];
	var selectA = document.getElementsByTagName('a')[0];
	// 全局判断checked状态
	var isSelectAll = function() {
		for (var i=1,n=0; i<inputs.length; i++) {
			if (inputs[i].checked) {
				n++;
			}
			if (n === inputs.length-1) {
				inputs[0].checked = true;
				label.innerText = '全不选';
			} else{
				inputs[0].checked = false;
				label.innerText = '全选';
			}
		}
	};
	// 响应全选，全不选
	inputs[0].onclick = function() {
		for (var i=1; i<inputs.length; i++) {
			inputs[i].checked = this.checked;
		}
		isSelectAll()
	};
	// 反选
	selectA.onclick = function() {
		for (var i=1; i<inputs.length; i++) {
			inputs[i].checked = !inputs[i].checked;
		}
		isSelectAll();
	};
	// 根据复选个数更新全选框状态
	for (var i=1; i<inputs.length; i++) {
		inputs[i].onclick = function() {
			isSelectAll();
		}
	}
};
