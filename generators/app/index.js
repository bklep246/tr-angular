'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var pkg = require('../../package.json');

var trAngularGenerator = yeoman.generators.Base.extend({

    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        // Define arguments
        this.argument('appName', {
            type: String,
            required: false
        });

        this.version = pkg.version;
        this.appPath = 'src';

        //console.log('version:' + this.version);
        this.log('version:' + this.version);
    }
});

require('./src/prompts')(trAngularGenerator);

module.exports = trAngularGenerator;