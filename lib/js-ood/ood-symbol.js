'use strict';

/**
* @class Symbol
* @constructor
*/
function Symbol(id, type) {
    // this.name is already set
    this.id = id;

    if (typeof type === 'boolean') {
        type = false;
    }
    this.type = type || 'void';
}

module.exports = Symbol;
