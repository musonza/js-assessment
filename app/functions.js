if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(arg) {
            return str + ', ' + arg;
        }
    },

    makeClosures : function(arr, fn) {
        var funcs = [];
        var len = arr.length;

        var makeFn = function(val) {
            return function() { 
                return fn(val); 
            };
        };

        for (var i = 0; i < len; i++) {
          funcs.push(makeFn(arr[i]));
        }

        return funcs;
    },

    partial : function(fn, str1, str2) {
        return function(str3) {
          return fn(str1, str2, str3);
        };
    },

    useArguments : function() {
        var sum = 0, len = arguments.length;

        for (var i = 0; i < len; i++) {
          sum += arguments[i];
        }

        return sum;
    },

    callIt : function(fn) {   
        var arguments = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(null, arguments);
    },

    partialUsingArguments : function(fn) {
        var args1 = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
          var args2 = args1.concat(Array.prototype.slice.call(arguments));
          return fn.apply(null, args2);
        };
    },

    curryIt : function(fn) {
        
        function applyArgs(fn, args){
            return fn.apply(null, args);
        }

        function currier(args, count) {
          return function(currentArg) {
            args.push(currentArg);

            if(args.length == count){
                return applyArgs(fn, args);
            }

            return currier(args, count);
          };
        }

        return currier([], fn.length);
    }
  };
});
