'use strict';

/**
* @class Interface
* @constructor
*/
function Interface(id) {
    this.id = id;
    this.package = null;
    this.extends = [];
    this.implements = [];
    this.functions = {};
    this.attributes = {};
}

module.exports = Interface;
