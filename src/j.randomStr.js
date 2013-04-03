/**
* 获取指定长度的随机字符串。注意：仅仅由数字和字母组成
* @public
* @function
* @name J#randomStr
* @param {int} size 随机字符串的长度
* @param {Boolean} plusTimeStamp 是否加上当前时间戳
*/
J.randomStr = function (size, plusTimeStamp) {
	var size0 = 8;
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	size = size || size0; size = size < 1 ? size0 : size; size = size > chars.length ? size0 : size;
	var s = '';
	for (var i = 0; i < size; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		s += chars.substring(rnum, rnum + 1);
	};
	if (plusTimeStamp) {
		s += new Date().getTime();
	};
	return s;
};