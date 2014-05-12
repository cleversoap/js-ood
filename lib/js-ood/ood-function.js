'use strict';

var ood = {
    Symbol: require('./ood-symbol'),
    Argument: require('./ood-argument')
};

/**
* @class Function
* @constructor
*/
function Function(id, returns, args) {
    ood.Symbol.call(this, id, returns);
    
    // Arguments to the function will always be a list
    // even if there are no arguments
    this.args = args ? [].concat(args) : [];

    // TODO: Check that everything is an ood argument?
}

// Function extends Symbol
Function.prototype = Object.create(ood.Symbol);

module.exports = Function;
