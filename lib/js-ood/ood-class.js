'use strict';

var Function = require('./ood-function')

/**
* @class Class
* @constructor
*/
function Class(id) {
    this.id         = id;
    this.extends    = [];
    this.implements = [];
    this.functions  = {};
    this.attributes = {};
}

/**
 * Adds a function to this class and automatically handles multiple delegates.
 */
Class.prototype.addFunction = function (func) {
    // Delegate comparison
};

/**
 */
Class.prototype.removeFunction = function (func) {
    // String identifier of function or selector
    if (typeof func === 'string') {

    // Function object
    } else if (func instanceof Function) {
    }
};

module.exports = Class;
