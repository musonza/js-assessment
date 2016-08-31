if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var len = arr.length;

        for(var i = 0; i < len; i++) {
            if(arr[i] === item){
                return i;
            }
        }

        return -1;
    },

    sum : function(arr) {
        var len = arr.length, sum = 0;

        for(var i = 0; i < len; i++) {
            sum += arr[i];
        }

        return sum;
    },

    remove : function(arr, item) {
        var len = arr.length, result = [];

        for(var i = 0; i < len; i++) {
            if(arr[i] !== item) {
                result.push(arr[i]);
            }
        }

        return result;
    },

    removeWithoutCopy : function(arr, item) {
        var len = arr.length;

        for(var i = 0; i < len; i++) {
            if(arr[i] === item) {
                arr.splice(i, 1);
                i--;
                len--;
            }
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);

        return arr;
    },

    truncate : function(arr) {
        arr.pop()

        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);

        return arr;
    },

    curtail : function(arr) {
        arr.shift();

        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);

        return arr;
    },

    count : function(arr, item) {
        var count = 0, len = arr.length;

        for(var i = 0; i < len; i++) {
            if(arr[i] === item) {
                count++;
            }
        }

        return count;
    },

    duplicates : function(arr) {
        var temp = [], duplicates = [], len = arr.length;

        for (var i = 0; i < len; i++) {
            if(temp[arr[i]]){
                temp[arr[i]] = temp[arr[i]] + 1;
            }else{
                temp[arr[i]] = 1;
            }
        }

        for(var key in temp) {
            if(temp[key] > 1){
                duplicates.push(key);
            }
        }

        return duplicates;
    },

    square : function(arr) {
        return arr.map(function(item)
        {
            return item*item;
        });
    },

    findAllOccurrences : function(arr, target) {
        var len = arr.length, result = [];

        for(var i = 0; i < len; i++) {
            if(arr[i] === target) {
                result.push(i);
            }
        }

        return result;
    }
  };
});
