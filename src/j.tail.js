/**
* 截断字符串
* @public
* @function
* @name J#tail
* @param {string} str 待截断的字符串
* @param {int} size 截断长,注:1个中文字符长度为2
* @param {string} tailStr 截断后加在末尾的小尾巴,默认"..."
* @returns 截断后的字符串
*/
J.tail = function (str, size, tailStr) {
	str = $.trim(str);
	var cLen = str.replace(/[^x00-xff]/g, "JJ").length;
	size = size <= 0 ? cLen : size;
	if (size >= cLen) return str;
	while (str.replace(/[^x00-xff]/g, "JJ").length > size) {
		str = str.substr(0, str.length - 1);
	};
	str += (tailStr || "...");
	return str;
};