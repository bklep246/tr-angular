'use strict';

var yeoman = require('yeoman-generator');
var pkg = require('../../package.json');

module.exports = generators.Base.extend({

    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        // Define arguments
        this.argument('appName', {
            type: String,
            required: false
        });

        this.version = pkg.version;

    },
    method1: function () {
        console.log('method 1 just ran');
    },
    method2: function () {
        console.log('method 2 just ran');
    }

});