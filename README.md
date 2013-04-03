j
=

J - A slim javascript module management framework

Demo
====

``` js
J(function($,p,pub){

	//$ = jQuery by defalt. 
	//You can use other dom libraries,
	//just replace the jQuery variables in j.core.js
								
	//private variables
	p.xxx=1;

	//private submodule
	p.subModule1 = {
		M:{
			
		},
		V:{
		
		},
		C:{
			init:function(){},
			onLoad:function(){}
		}
	};

	//public methods .We can invoke J.moduleName.method1 externally.
	pub.method1 = function(){
		//logic
	};
	// module id. required!
	pub.id="testModule";

});
```