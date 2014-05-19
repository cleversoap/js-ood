'use strict';

var Class = require('./ood-class')

/**
* @class Model
* @constructor
*/
function Model () {
    this.root = {};
}

/**
* Add an entry to the model.
*/
Model.prototype.add = function (item, pkg) {

    // If the item does not have a package and one
    // was passed in then the item will use it
    if (!item.package && pkg) {
        item.package = pkg;
    }

    // Parse the package string otherwise
    var pn = this.root;

    if (item.package && typeof item.package === 'string') {
        item.package.split('.').forEach(function (i) {
            if (!pn[i]) {
                pn[i] = {};
            }
            pn = pn[i];
        });
    }

    pn[item.id] = item;
};

/**
* Remove an entry from the model.
*/
Model.prototype.remove = function (selector) {
};

/**
* Select an entry from the model.
*/
Model.prototype.select = function () {
};

module.exports = Model;
