'use strict';

var Class = require('./ood-class');
var Interface = require('./ood-interface');
var Function = require('./ood-function');
var Attribute = require('./ood-attribute');

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

    // Packages will create a new object at their path in root.
    // Items without a package will skip this and be added directly
    // to the root.
    // eg. basepkg.test.things = {basepkg: { test: { things[item.id] = item }}}
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

/**
 * Gets the ood type of a given selector
 */
Model.prototype.type_of = function (selector) {
    if (typeof selector === 'string') {
        selector = this.select(selector).get(0);
    }

    if (selector) {
        
        if (selector instanceof Class) {
            return 'class';
        } else if (selector instanceof Interface) {
            return 'interface';
        } else if (selector instanceof Function) {
            return 'function';
        } else if (selector instanceof Attribute) {
            return 'attribute';
        } else if (selector instanceof Object) {
            return 'package';
        }

    }
};

module.exports = Model;
