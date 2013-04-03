/**
* ajax json post，适用于asp.net mvc ajax json post
* @public
* @function
* @name J#jsonPost
* @param {String} url ajax url
* @param {Object} opts options
*/
J.jsonPost = function (url, opts) {

	opts = opts || {};
	if (opts.data) {
		opts.data = JSON.stringify(opts.data);
	}
	var opts0 = {
		dataType: 'json',
		contentType: 'application/json; charset=utf-8',
		type: "POST"
	};
	var xhrObj = $.ajax(url, $.extend(opts0, opts));

	return xhrObj;

};