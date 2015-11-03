'use strict';

module.exports = function (trAngularGenerator) {
    /**
       * Compute gulp inject task dependencies depending on js and css preprocessors
       */
    trAngularGenerator.prototype.computeWatchTaskDeps = function computeInjectTaskDeps() {
        this.watchTaskDeps = [];

        //if (this.props.jsPreprocessor.srcExtension === 'es6' || this.props.jsPreprocessor.srcExtension === 'ts') {
        //    this.watchTaskDeps.push('\'scripts:watch\'');
        //}

        //if (this.props.htmlPreprocessor.key !== 'noHtmlPrepro') {
            this.watchTaskDeps.push('\'markups\'');
        //}

        this.watchTaskDeps.push('\'inject\'');
    };
};