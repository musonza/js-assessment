if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
	    var timeout;
	    function resumeCounter () {
	      console.log(start++);
	      
	      if (start <= end) {
	        timeout = setTimeout(resumeCounter, 100);
	      }else{
	      	clearTimeout(timeout);
	      }
	    }

	    resumeCounter();

	    return {
	    	cancel: function(){
	    		clearTimeout(timeout);
	    	}
	    }
    }
  };
});