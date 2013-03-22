// jquery.scroll.plugin.js

/** Use Case
 var $body_scroll = $('html body').scroll()
 
 $body_scroll.recollect()
*/

;(function($,undefined){
	var options = {
		originalTop: 0
	}

	var $traget = null;//持有目标元素的引用

	var Scroll = function(self,settings){
		$traget = self;
		$.extend(options, settings);//向option merge参数
		this.init();
	}
	Scroll.prototype.init = function(){
		options.originalTop = $traget.scrollTop();
		console.log(options);
	}

	Scroll.prototype.recollect = function(){
		$traget.animate({scrollTop: options.originalTop}, 100);
		return this.destroy();
	}

	Scroll.prototype.destroy = function(){
		$traget = null;//fast to gc
		return this;
	}

	$.fn.scroll = function(settings){
		var scroll = new Scroll(this,settings);
		return this.extend(scroll);// 对象增强
	};
}(jQuery));
