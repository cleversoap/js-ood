'use strict';

var ood = {
    Symbol: require('./ood-symbol')
};

/**
* @class Attribute
* @constructor
*/
function Attribute(id, type, read_only) {
    
    // Create a new symbol with an id and type
    ood.Symbol.call(this, id, type);

    // If the type passed is a boolean object then it is intended
    // to represent the read_only argument. It needs to be done up
    if (typeof type === 'boolean') {
        read_only = type;
    }

    // Attribute can be read only
    this.read_only = read_only || false; 

    // Attributes cannot be void
    if (!this.type) {
        console.warn('[#' + this.id + '] Attributes should not be void'); 
    }

}

// Attribute extends Symbol
Attribute.prototype = Object.create(ood.Symbol.prototype);

module.exports = Attribute;
