if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var b2 = this.convertToBinary(num);
        var reversed = b2.split('').reverse().join('');

        return parseInt(reversed[bit -1]);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var b2 = ("00000000" + num.toString(2));
        return b2.substr(-8);
    },

    multiply: function(a, b) {
        return parseFloat((a*b).toPrecision(1));
    }
  };
});

