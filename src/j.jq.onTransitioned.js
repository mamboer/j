(function($){
	/**
	 * transitionend
	 * @public
	 * @function
	 * @name $.fn.onTransitioned
	 * @param {Function} cbk 事件处理函数
	 */	
	$.fn.onTransitioned = function (cbk) {

		return this.each(function () {

			$(this).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", cbk);

		});

	};
})(jQuery);