/**
* 获取字符串的长度，一个汉字的字符长度为2
* @public
* @function
* @name J#charLength
* @param {string} str 字符串
* @returns 整型数值
*/
J.charLength = function (str) {
	var nstr = str.replace(/[^x00-xff]/g, "JJ");
	return nstr.length;
};