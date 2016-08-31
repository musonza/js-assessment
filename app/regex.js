if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (str.match(/\d+/g) !== null) ? true : false;
    },

    containsRepeatingLetter : function(str) {
        return (/([a-zA-Z]).*?\1/).test(str);
    },

    endsWithVowel : function(str) {
        return (str.match(/.*[aeoiu]$/i) !== null) ? true : false;
    },

    captureThreeNumbers : function(str) {
        var matches = str.match(/\d{3}/)
        return ( matches !== null) ? matches.toString() : false;
    },

    matchesPattern : function(str) {
        var match = str.match(/^(\d{3}[-]){2}\d{4}$/);
        return (match !== null) ? true : false;
    },
    isUSD : function(str) {
        return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
    }
  };
});
