j
=

J - A slim javascript module management framework

## Versions

V2.0.0 (2013/10/18)

## Demo


``` js
J('foo',function(M,V,C){
	//Note the obvious M(model data),V(view),C(controller) variables.
	//J recommends to split your codes into M/V/C layer logically.
	
	//model data 
	M.xxx=1;

	//view - ui staff
	V.$btn:$('#btn1');

	//controller
	//special action _init is an interface to J
	C._init = function(){};
	// action 'sayHi'
	C.sayHi = function(){
		alert('hi from J');
	};

	//public methods .We can invoke J.foo.method1 externally.
	this.method1 = function(){
		//logic
		alert(this.id==='foo');
	};
});
```