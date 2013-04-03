/**
* J.console
* @public
* @function
* @name J#console
*/
J.console =(window['console'] || {log:function(){},info:function(){}});
/*
* window.console.log的快捷方法
* @public
* @function
* @name J#log
*/
J.log = function(){
	J.console.log.apply(J.console,arguments);
};
/**
* window.console.info的快捷方法
* @public
* @function
* @name J#info
*/
J.info = function(){
	J.console.info.apply(J.console,arguments);
};