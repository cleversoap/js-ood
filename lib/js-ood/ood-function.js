'use strict';

var ood = {
    Symbol: require('./ood-symbol')
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
}

// Function extends Symbol
Function.prototype = Object.create(ood.Symbol);

module.exports = Function;
