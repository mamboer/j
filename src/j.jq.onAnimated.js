(function($){
	/** 
	 * 绑定css3的animateend事件
	 * @public
	 * @function
	 * @name $.fn.onAnimated
	 * @param {Function} cbk 事件处理函数
     * @param {Boolean} isOne 是否一次性事件处理
	 */
	$.fn.onAnimated = function (cbk,isOne) {
        var events = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
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