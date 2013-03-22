// jquery.scroll.plugin.js

/** Use Case

var $body = $('html body').scroll()
$body.toggleScroll()

*/

;(function($,undefined){
	var options = {
		original: undefined
	}

	var $target = null;//持有目标元素的引用

	var Scroll = function(self,settings){
		$target = self;
		$.extend(options, settings);//向option merge settings
		this.init();
	}
	Scroll.prototype.init = function(){
		options.original = $target.scrollTop();
		console.log(options);
	}

	Scroll.prototype.toggleScroll = function(){
		var before = options.original
		options.original = $target.scrollTop();
		$target.animate({scrollTop: before}, 100);
		return this;
	}

	Scroll.prototype.destroy = function(){
		$target = null;//fast to gc
		//return this;
	}

	$.fn.scroll = function(settings){
		var scroll = new Scroll(this,settings);
		return this.extend(scroll);// 对象增强  enhance object
	};
}(jQuery));
