'use strict';

var ood = {
    Symbol: require('./ood-symbol')
};

/**
 * @class Argument
 * @constructor
 */
function Argument(id, type, default_value) {
    
    ood.Symbol.call(this, id, type);

    // If the default value is passed then create a property
    // for it, otherwise store nothing. A null or false value
    // is perfectly valid to be default so only stop from
    // storing it if it is actually undefined.
    if (typeof default_value !== 'undefined') {
        this.default = default_value;
    }

}

module.exports = Argument;
