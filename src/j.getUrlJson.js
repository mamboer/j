/**
* 获取url的查询字符串并转换为json对象.需约定查询字符串是json字符串
* @public
* @function
* @name J#getUrlJson
*/
J.getUrlJson = function () {
	var paramStr = location.search,
		retVal = {};
	if (paramStr.length == 0 || paramStr.charAt(0) != '?') return retVal;
	paramStr = unescape(paramStr);
	paramStr = paramStr.substring(1);
	if (paramStr.length == 0) return retVal;

	try {
		retVal = JSON.parse(paramStr);
	} catch (e) {

	}
	return retVal;

};