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

        var props = {};
        //var files = [];
    }
});

require('./src/options')(trAngularGenerator);
require('./src/prompts')(trAngularGenerator);
require('./src/paths')(trAngularGenerator);
require('./src/files')(trAngularGenerator);

require('./src/ui.js')(trAngularGenerator);
require('./src/preprocessors')(trAngularGenerator);

require('./src/write')(trAngularGenerator);

module.exports = trAngularGenerator;