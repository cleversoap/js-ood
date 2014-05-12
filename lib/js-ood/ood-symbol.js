'use strict';

/**
* @class Symbol
* @constructor
*/
function Symbol(id, type) {
    // this.name is already set
    this.id = id;

    // Only a string may describe a type - default to void otherwise or if
    // no type has been passed in. A null value is used to represent a 'void' type.
    if (typeof type !== 'string') {
        type = false;
    }
    this.type = type || null;
}

module.exports = Symbol;
