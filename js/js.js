// JavaScript Document
$(function(){
	(function(){
		function navFloat(obj,height){
			function scrollFunc(e) {
				e = e || window.event;
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				if (top >= height) {
					$(obj).css('background-color', 'rgba(0,0,0,0.8)');
					
				}
				else {
					$(obj).css('background-color','#A15C42');
					
				}
			}
			if (document.addEventListener) {
				document.addEventListener('DOMMouseScroll', scrollFunc, false);
				document.addEventListener("scroll", scrollFunc, false);
			}
			window.onmousewheel = document.onmousewheel = scrollFunc;
			window.onscroll = scrollFunc;
		};
			var h = $('#top').height();
			navFloat($('#top'),h);
	})();
});