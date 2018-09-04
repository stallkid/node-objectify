'use strict';
let utils = require('./utils');

/**
 * transform array to object
 * @param {string} name
 * @param {arguments}
 * @return {Object}
 */
exports.objectify = function (name) {
    let obj = new Object;
    let args = new Array;
    for (let i = 0; i < arguments.length; i++) {
        if (i > 0) args[i] = Array.prototype.slice.call(arguments[i]);
    }
    args.splice(0,1);
    obj[name] = Array.prototype.slice.call(args);
    return obj;
}

/**
 *  Merge arrays into one object
 * @param {arguments}
 * @return {Object}
 */
exports.mergeArrayToObject = function () {
    let args = new Array;
    let obj = new Object;
    for (let i = 0; i < arguments.length; i++) {
        args[i] = Array.prototype.slice.call(arguments[i]);
    }
    obj['object'] = args;
    return obj;
}

// mergeArrayToObject([1,2],[2,3]);
