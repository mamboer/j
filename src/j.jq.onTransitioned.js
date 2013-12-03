(function($){
	/**
	 * transitionend
	 * @public
	 * @function
	 * @name $.fn.onTransitioned
	 * @param {Function} cbk 事件处理函数
     * @param {Boolean} isOne 是否一次性事件处理
	 */
	$.fn.onTransitioned = function (cbk,isOne) {
        var events = "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd";
        isOne = isOne||false;
		return this.each(function () {
			if (cbk===false) {
				$(this).unbind(events);
				return;
			}
			$(this).bind(events, function(e){
                isOne&&$(this).unbind(events);
                cbk.call(this);
            });

		});
	};
})(jQuery);