(function($){
	/** 
	 * 绑定css3的animateend事件
	 * @public
	 * @function
	 * @name $.fn.onAnimated
	 * @param {Function} cbk 事件处理函数
	 */
	$.fn.onAnimated = function (cbk) {

		return this.each(function(){
			if (cbk === false) {
				$(this).unbind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
				return;
			}
			$(this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",cbk);
			
		});
		
	};
})(jQuery);