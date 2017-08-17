// lesson 4.2 js
window.onload = function() {
  var imgBox = document.getElementById('test');
  var uls = document.getElementsByTagName('ul');
  var imgs = uls[0].getElementsByTagName('li');
  var nums = uls[1].getElementsByTagName('li');
  var timer = play = null;
  var i = index = 0;

  // swith botton
  for (i=0; i<nums.length; i++) {
    nums[i].index = i;
    nums[i].onmouseover = function() {
      show(this.index);
    }
  }

  // mouse over close timer
  imgBox.onmouseover = function() {
    clearInterval(play);
  }

  // mouse out open sutoplay
  imgBox.onmouseout = function() {
    autoPlay();
  }

  // autoplay func
  function autoPlay() {
    play = setInterval(function() {
      index++;
      index >= imgs.length && (index = 0);
      show(index);
    },2000);
  }
  autoPlay();

  // swith images,fade in fade out
  function show(a) {
    index = a;
    var alpha = a;
    for (i=0; i<nums.length; i++) {
      nums[i].className = "";
    }
    nums[index].className = 'current';
    clearInterval(timer);

    for (i=0; i<imgs.length; i++) {
      imgs[i].style.opacity = 0;
      imgs[i].style.filter = 'alpha(opacity=0)';
    }

    timer = setInterval(function() {
      alpha += 2;
      alpha > 100 && (alpha = 100);
      imgs[index].style.opacity = alpha/100;
      imgs[index].style.filter = "alpha(opacity = ' + alpha + ')";
      alpha == 100 && clearInterval(timer);
    },20);
  }
};
