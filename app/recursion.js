if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
	    var filesList = [];
	    var subdir = [];
	    
	    function process(data){
	    	var files = data.files;
	        subdir.push(data.dir);
	        
	        for(file in files){
	          if(typeof files[file] !== 'object'){
	          	if (!dirName || subdir.indexOf(dirName) > -1) {
	            	filesList.push(files[file]);
	            }
	          }else{
	            process(files[file]);
	          }
	        }
	        
	        subdir = [];
	    }
	    
	    process(data);
	    
	    return filesList;
    },

    permute: function(arr) {
		var perm = [], usedChar = [];

		function permute(arr) {
		  var i, ch, len = arr.length;

		  for (i = 0; i < len; i++) {
		    ch = arr.splice(i, 1)[0];
		    usedChar.push(ch);
		    if (arr.length == 0) {
		      perm.push(usedChar.slice());
		    }
		    permute(arr);
		    arr.splice(i, 0, ch);
		    usedChar.pop();
		  }
		  
		  return perm
		};

		return permute(arr);
    }
  };
});
