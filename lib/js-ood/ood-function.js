'use strict';

var Symbol = require('./ood-symbol');
var Argument = require('./ood-argument');

/**
* @class Function
* @constructor
*/
function Function(id, returns, args) {
    Symbol.call(this, id, returns);

    // Arguments to the function will always be a list
    // even if there are no arguments
    this.args = args ? [].concat(args) : [];

    // TODO: Check that everything is an ood argument?
}

// Function extends Symbol
Function.prototype = Object.create(Symbol.prototype);

/**
* Compare id and argument types to determine whether or not another
* function has the same delegate. Note that argument ids may be different
* but it is the type that determines the equality.
*
* @param func  Function object to compare with.
*/
Function.prototype.delegateEquals = function (func) {

    var result = false;

    // ID must match
    if (this.id === func.id) {

        // Remove arguments that have default values as if they are not
        // passed when called it can cause an ambiguous collision with
        // another function that may also have a match for the passed args.
        var A = this.args;
        var B = func.args;

        var default_reduce = function (arg) {
            return typeof arg.default === 'undefined';
        };

        A.some(default_reduce);
        B.some(default_reduce);

        // Argument types must match
        if (A.length === B.length) {

            // Compare argument types
            for (var i = 0; i < A.length; ++i) {
                if (A[i].type === B[i].type) {
                    result = true; 
                } else {
                    result = false;
                    break;
                }
            }

        }
    }

    return result;

};

module.exports = Function;
