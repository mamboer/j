/**
* 样式支持检测
* @public
* @function
* @name J#cssSupport
* @param {string} prop css property
* @returns {Boolean}
*/
J.cssSupport = (function() {
   var div = document.createElement('div'),
      vendors = 'Khtml Ms O Moz Webkit'.split(' '),
      len = vendors.length;

   return function(prop) {
      if ( prop in div.style ) return true;

      prop = prop.replace(/^[a-z]/, function(val) {
         return val.toUpperCase();
      });

      while(len--) {
         if ( vendors[len] + prop in div.style ) {
            // browser supports box-shadow. Do what you need.
            // Or use a bang (!) to test if the browser doesn't.
            return true;
         } 
      }
      return false;
   };
})();