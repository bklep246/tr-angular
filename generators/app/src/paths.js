﻿'use strict';

var path = require('path');
var _ = require('lodash');

var utils = require('./utils.js');

var pathOptions = ['app-path', 'dist-path', 'e2e-path', 'tmp-path'];

module.exports = function (trAngularGenerator) {

    /**
     * Check paths options to refuse absolutes ones and normalize them
     */
    trAngularGenerator.prototype.checkPaths = function checkPaths() {
        pathOptions.forEach(function (name) {
            //this.log(name);
            if (utils.isAbsolutePath(this.options[name])) {
                this.env.error(name + ' must be a relative path');
            }
            
            this.options[name] = utils.normalizePath(this.options[name]);
            //this.log(this.options[name]);
        }, this);
    };

    /**
     * Create the paths object from options and add them to props
     */
    trAngularGenerator.prototype.storePaths = function storePaths() {
        this.props = _.merge(this.props, {
            paths: {
                src: this.options['app-path'],
                dist: this.options['dist-path'],
                e2e: this.options['e2e-path'],
                tmp: this.options['tmp-path']
            }
        });
    };

    /**
     * Compute paths deductible from the first ones
     */
    //trAngularGenerator.prototype.computePaths = function computePaths() {
    //    this.computedPaths = {
    //        appToBower: path.relative(this.props.paths.src, '')
    //    };
    //};

};
