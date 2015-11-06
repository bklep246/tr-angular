'use strict';

var _ = require('lodash');
var path = require('path');
var chalk = require('chalk');
var prompts = require('../prompts.json');

module.exports = function (trAngularGenerator) {

    trAngularGenerator.prototype.appName = function appName() {
        // If we passed in the app name, don't prompt the user for it
        this.log(this.appName);
        if (this.appName) {
            return;
        }

        var done = this.async();

        var prompts = [{
            type: 'input',
            name: 'appName',
            message: 'What would you like to name the app?',
            default: this.appName || path.basename(process.cwd())
        }];

        this.prompt(prompts, function (answers) {
            this.appName = answers.appName;
            this.appName = this.appName || 'trAngularApp';
            done();
        }.bind(this));
    };

    trAngularGenerator.prototype.displayName = function displayName() {
        this.log(chalk.blue.bold('Creating ' + this.appName + ' app based on TRAngular.'));
    };

    trAngularGenerator.prototype.askQuestions = function askQuestions() {
        var done = this.async();
    
        this.prompt(prompts, function (props) {
           
            this.props = _.merge(this.props, props);

            done();
        }.bind(this));
    };

    trAngularGenerator.prototype.advancedQuestions = function advancedQuestions() {
        this.includeModernizr = true;
        this.imageMin = false;
        this.qrCode = false;
    };
};