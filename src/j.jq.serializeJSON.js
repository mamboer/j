;(function ($) {
	/**
	* 将一个form表单序列化成json对象
	* @public
	* @function
	* @name $.fn.serializeJSON
	* @example
		$("#formxxx").serializeJSON();
	*/
	$.fn.serializeJSON = function () {
		var json = {};
		jQuery.map($(this).serializeArray(), function (n, i) {
			json[n['name']] = n['value'];
		});
		return json;
	};
})(jQuery);