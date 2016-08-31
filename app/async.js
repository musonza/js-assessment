if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
	    var defer = $.Deferred();
	    
	    setTimeout(function() {
	      defer.resolve(value);
	    }, 100);

	    return defer.promise();
    },

    manipulateRemoteData : function(url) {
	    var defer = $.Deferred();

	    $.ajax(url).then(function(resp) {
	      var people = (resp.people).map( function(p) {
	        return p.name;
	      });
	      defer.resolve(people.sort());
	    });

	    return defer.promise();
	    }
  };
});
