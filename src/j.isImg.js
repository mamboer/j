/**
* 指定的文件是否是图片
* @public
* @function
* @name J#isImg
* @param {String} file 文件路径
*/
J.isImg = function(file) {
    file = file.toLowerCase();
    var isImg = false;
    var arrImg = ['.jpg','.png','.gif','.jpeg'];
    for (var i = 0; i < arrImg.length; i++) {
        isImg = (file.substr(file.lastIndexOf(arrImg[i])) == arrImg[i]);
        if (isImg) {
            break;
        }
    }
    return isImg;
};