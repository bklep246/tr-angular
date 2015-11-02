'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (trAngularGenerator) {

    trAngularGenerator.prototype.askQuestions = function askQuestions() {
        var done = this.async();
        
        this.prompt([{
            type: 'confirm',
            name: 'jQuery',
            message: 'Do you need jQuery?',
            default: true
        }], function (props) {
            this.jQuery = props.jQuery;

            done();
        }.bind(this));
    };

    trAngularGenerator.prototype.askForModules = function askForModules() {
        var done = this.async();

        var prompts = [{
            type: 'checkbox',
            name: 'angularModules',
            message: 'What Angular modules would you like to have? (ngRoute and ngResource will be addressed after)',
            choices: [
      {
          value: {
              key: 'animate',
              module: 'ngAnimate'
          },
          name: 'angular-animate.js (enable animation features)',
          checked: true
      },
      {
          value: {
              key: 'cookies',
              module: 'ngCookies'
          },
          name: 'angular-cookies.js (handle cookie management)',
          checked: true
      },
      {
          value: {
              key: 'touch',
              module: 'ngTouch'
          },
          name: 'angular-touch.js (for mobile development)',
          checked: true
      },
      {
          value: {
              key: 'sanitize',
              module: 'ngSanitize'
          },
          name: 'angular-sanitize.js (to securely parse and manipulate HTML)',
          checked: true
      },
      {
          value: {
              key: 'messages',
              module: 'ngMessages'
          },
          name: 'angular-messages.js (enhanced support for displaying messages within templates)',
          checked: true
      }
            ]
        }];

        this.prompt(prompts, function (props) {
            var hasMod = function (mod) { return props.angularModules.indexOf(mod) !== -1; };
            this.animateModule = hasMod('animateModule');
            //this.ariaModule = hasMod('ariaModule');
            this.cookiesModule = hasMod('cookiesModule');
            this.messagesModule = hasMod('messagesModule');
            //this.resourceModule = hasMod('resourceModule');
            //this.routeModule = hasMod('routeModule');
            this.sanitizeModule = hasMod('sanitizeModule');
            this.touchModule = hasMod('touchModule');

            var angMods = [];

            if (this.animateModule) {
                angMods.push("'ngAnimate'");
            }

            if (this.cookiesModule) {
                angMods.push("'ngCookies'");
            }

            if (this.messagesModule) {
                angMods.push("'ngMessages'");
            }

            if (this.sanitizeModule) {
                angMods.push("'ngSanitize'");
            }

            if (this.touchModule) {
                angMods.push("'ngTouch'");
            }

            if (angMods.length) {
                this.env.options.angularDeps = '\n    ' + angMods.join(',\n    ') + '\n  ';
                this.log(this.env.options.angularDeps.length);
            }

            done();
        }.bind(this));
    };

    trAngularGenerator.prototype.askForStyles = function askForStyles() {
        var done = this.async();

        var prompts = [{
            type: 'list',
            name: 'csspreprocessor',
            message: 'Which CSS preprocessor do you want?',
            choices: [
      {
          value: {
              key: 'node-sass',
              extension: 'scss'
          },
          name: 'Sass (Node), Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.'
      },
      {
          value: {
              key: 'ruby-sass',
              extension: 'scss'
          },
          name: 'Sass (Ruby), Original Syntactically Awesome StyleSheets (requires Ruby)'
      },
      {
          value: {
              key: 'less',
              extension: 'less'
          },
          name: 'Less, extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.'
      },
      {
          value: {
              key: 'noCssPrepro',
              extension: 'css'
          },
          name: 'None, only use CSS'
      }
            ]
        }];

        this.prompt(prompts, function (props) {
            this.csspreprocessor = props.csspreprocessor;

            done();
        }.bind(this));
    };

};