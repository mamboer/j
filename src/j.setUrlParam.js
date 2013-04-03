/**
* 设置指定的URL查询字符串
* @public
* @function
* @name J#setUrlParam
* @param {String} param 查询字符串的键名
* @param {String} paramVal 查询字符串的键值
* @param {String} url 指定的url。不若不指定则默认location.href
*/
J.setUrlParam = function( param, paramVal, url) {

	url = url || location.href;

	var newAdditionalURL = "",
		tempArray = url.split("?"),
		baseURL = tempArray[0],
		additionalURL = tempArray[1],
		temp = "";
	
	if (additionalURL) {
		tempArray = additionalURL.split("&");
		for (i=0; i<tempArray.length; i++){
			if(tempArray[i].split('=')[0] != param){
				newAdditionalURL += temp + tempArray[i];
				temp = "&";
			}
		}
	}
	var rows_txt = temp + "" + param + "=" + paramVal,
		retVal = baseURL + "?" + newAdditionalURL + rows_txt;
	
	return retVal;
};