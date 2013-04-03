/**
* ajax json get，适用于asp.net mvc ajax json get request
* @public
* @function
* @name J#jsonGet
* @param {String} url ajax url
* @param {Object} opts options
*/
J.jsonGet = function (url, opts) {

	opts = opts || {};
	var opts0 = {
		dataType: 'json',
		contentType: 'application/json; charset=utf-8',
		type: "GET"
	};
	var xhrObj = $.ajax(url, $.extend(opts0, opts));

	return xhrObj;

};