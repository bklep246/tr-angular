'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var s = require('underscore.string');
var pkg = require('../../package.json');

var trAngularGenerator = yeoman.generators.Base.extend({

    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        this.argument('appName', { type: String, required: false });
        this.appName = s.camelize(s.slugify(s.humanize(this.appName)));

        this.version = pkg.version;
        this.appPath = 'src';

        this.log('version:' + this.version);

        this.props = {};
    },
    welcome: function () {
        this.log(yosay(
            'Welcome to the TR AngularJS generator!'
        ));
    }
});

require('./src/options')(trAngularGenerator);
require('./src/prompts')(trAngularGenerator);
require('./src/paths')(trAngularGenerator);
require('./src/files')(trAngularGenerator);

require('./src/modules')(trAngularGenerator);
//require('./src/ui.js')(trAngularGenerator);
require('./src/preprocessors')(trAngularGenerator);

require('./src/write')(trAngularGenerator);

module.exports = trAngularGenerator;