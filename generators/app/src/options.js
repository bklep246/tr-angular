'use strict';

var options = require('../options.json');

module.exports = function (trAngularGenerator) {

    /**
     * Declares options in the generator (only used for the help messages)
     */
    trAngularGenerator.prototype.defineOptions = function defineOptions() {
        options.forEach(function (option) {
            this.option(option.name, {
                type: global[option.type],
                required: option.required,
                desc: option.desc,
                defaults: option.defaults
            });
        }, this);
    };
};
