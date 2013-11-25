/**
 * @namespace J
 * @summary 一个简单的js模块管理框架
 * @desc 实现Module Pattern，解决最基本的js代码组织问题。不包含依赖管理，动态加载等功能，如需要推荐使用SeaJS或RequireJS。注：JF假设你使用jQuery，如果您使用别的库，可以针对性改一下代码。
 * @author Levin
 * @version 2.0.2
 * @example 
    J('id',function(M,V,C){
        C.submodule = {
            _init:function(){
                alert('init submodule');
            }
        };

        this.hi = function(){
            alert('hi from module'+this.id);
        };
    });
 */
var J = (function(){

    var modUtil = {
        J:"2.0.2",
        //export global event
        EVT:function(name){
            if( Object.prototype.toString.call( name ) === '[object Array]' ){
                for(var c in name){
                    J.EVT[this.id][name[c]]=this.id+'_'+name[c]+'.'+this.id
                };
            }else{
                J.EVT[this.id][name]=this.id+'_'+name+'.'+this.id;
            };
            return this;
        }
    };

    var define = function(module,id){
        var module1 = {id:id,_M:{},_V:{},_C:{}},
            jSay = window[J.__mode==='silent'?'throw':'alert'];
        
        if (!module1.id) {
            jSay('J complains: A J module require a public id property!');
            return;
        };
        if (J[module1.id]) {
            jSay('J complains: A J module with id "'+module1.id+'" exists!');
            return;
        };

        //add public J module methods
        J.EVT[module1.id]={};
        for(var c in modUtil){
            module1[c]=J.proxy(module1,modUtil[c]);
        };

        module.call(module1,module1._M,module1._V,module1._C);
        J[module1.id]=module1;
        module1=null;
    };

    return (function(id,module){
        var t = typeof(id);
        if (t==='undefined') {return J;};
        if (t==='function'){ return define(id);};
        if (t==='object'){return id;};
        t = typeof(module);
        if (t==='undefined') {return J[id];};
        if (t==='function') {return define(module,id);};
    });
})();
J.__mode="silent";
J.EVT={};
J.proxy=function(_this,func){
    if(typeof(func)==='function'){
        return (function(){
            return func.apply(_this,arguments);
        });
    };
    return func;
};

/**
 * @public
 * @name J#GOD
 * @summary common J module loader
 */
J('GOD',function(M,V,C){
    var $ = window['Zepto']||window['jQuery']||(function(){
        var my$ = function(cbk){
            // Old browsers
            if (window.addEventListener)
                window.addEventListener('load', cbk, false);
            else if (window.attachEvent)
                window.attachEvent('onload', cbk);
            else {
                var fn = window.onload; // very old browser, copy old onload
                window.onload = function() { // replace by new onload and call the old one
                    fn && fn();
                    cbk();
                };
            };
        };
        //simple extend
        my$.extend = function(targetObj,srcObj){
            for(var c in srcObj){
                targetObj[c]=srcObj[c];
            };
            return targetObj;
        };
        return my$;
    })();
    /**
     * @private
     * @desc execSub 初始化J模块的子模块
     * @param {Object} sub 子模块
     * @param {String} action 接口方法名
     */
    C.execSub = function(sub,action){
        if(typeof(sub)!=='object') return;
        if(sub[action]&&C.isFunc(sub[action])){
            sub[action].call(sub);
            delete sub[action];
        };
        for (var c in sub) {
            c = sub[c];
            if ( (!c) || (c.jquery) || (!c[action]) ) {
                continue;
            };
            if ( C.isFunc(c[action]) ) {
                c[action].call(c);
                delete c[action];
            };
        };
    };
    /**
     * @private
     * @desc exec 初始化J的模块
     * @param {String} action 模块回调函数名称，J一共定义了有两个回调接口:1,_onLoad 页面内容加载完毕后的回调；2，_init
     */
    C.exec = function(action,destroyMVCAfterExec){
         for (var m in J) {
            m = J[m];
            if( (!m.J) || typeof(m)!=='object') continue;
            if( C.isFunc(m[action]) ) {
                m[action].call(m);
                delete m[action];
            };
            var mvc = {'_M':1,'_V':1,'_C':1};
            for(var c in mvc){
                m[c] && C.execSub(m[c],action);
                destroyMVCAfterExec && (delete m[c]);
            };
        };
    };
    //function test
    C.isFunc = function(v){
        return (v && typeof(v)==='function');
    };
    /**
    * 初始化J框架，页面js逻辑的唯一入口。一般至于</body>标签之前，用户向整个app传递参数用
    * @public
    * @function
    * @name J#init
    * @param {Object} opts 配置对象
    * @example
    *
    *   J.init({x:'kk',y:'zz'});
    *
    */
    this.init = function (opts) {
        J.opts = M.opts = opts = $.extend(opts || {},J.opts||{});
        C.exec('_init',false);
        //document ready callback
        $(function(){
            C.exec('_onLoad',true);
        });
    };
    
    //export the init method to J
    J.init = this.init;

});