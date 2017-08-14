// lesson 4.1 js
var get = {
	byId: function(id) {
		return document.getElementById(id);
	},
	byClass: function(sClass, oParent) {
		var aClass = [];
		var reClass = new RegExp("(^| )" + sClass + "( |$)");
		var aElem = this.byTagName("*", oParent);
		
		for (var i=0; i<aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
		return aClass;
	},
	byTagName: function(elem, obj){
		return (obj || document).getElementsByTagName(elem);
	}
};
var navDiv = get.byId('nav');
var lis = get.byTagName('li', navDiv);
var subnavs = get.byClass('subnav', navDiv);
var oSubNav = oEm = timer = null;
var i = 0;

for (i=1; i<lis.length; i++) {
	lis[i].onmouseover = function() {
		// hidden all subnava.
		for (i=0; i<subnavs.length; i++){
			subnavs[i].style.display = 'none';
		}
		
		// get the subnav under this nav
		oSubNav = get.byClass('subnav', this)[0];
		
		// get the em under this nav
		oEm = get.byTagName('em', this)[0];
		
		// show the subnav under this nav
		oSubNav.style.display = 'block';
		
		// dicide the show area
		if (navDiv.offsetWidth - this.offsetLeft > oSubNav.offsetWidth) {
			// if in the show area,show at left
			oSubNav.style.left = this.offsetLeft + 'px';
		} else {
			// if exceed the area,show at right
			oSubNav.style.right = 0;
		}
		
		// calculate the em location
		oEm.style.left = this.offsetLeft - oSubNav.offsetLeft + 50 + 'px';
		clearTimeout(timer);
		
		//prevent the event
		oSubNav.onmouseover = function (event) {
			(event || window.event).cancelBubble = true;
			clearTimeout(timer);
		}
	};
	lis[i].onmouseout = function() {
		timer = setTimeout(function() {
			oSubNav.style.display = 'none';
		},300)
	}
};
