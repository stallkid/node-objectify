'use strict';
let utils = require('./utils');

/**
 * transform array to object
 * @param {string} name
 * @param {arguments}
 * @return {Object}
 */
exports.nameObjectify = function (name) {
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
exports.mergeArrayInObject = function () {
    let args = new Array;
    let obj = new Object;
    for (let i = 0; i < arguments.length; i++) {
        args[i] = Array.prototype.slice.call(arguments[i]);
    }
    obj['object'] = args;
    return obj;
}

/**
 * Convert array to object and store inside another object
 * @param {arguments}
 * @return {Object}
 */
exports.mergeToObject = function () {
    let args = arguments;
    let obj = new Object;
    let newObj = new Object;
    for (let i = 0; i < args.length; i++) {
        newObj[i] = utils.toObject(Array.prototype.slice.call(args[i]));
    }
    obj['object'] = newObj;

    return obj;
}
