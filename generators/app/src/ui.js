'use strict';

module.exports = function (trAngularGenerator) {

    /**
   * Add files of the navbar and the main view depending on the ui framework
   * and the css preprocessor
   */
    trAngularGenerator.prototype.uiFiles = function uiFiles() {
        //this.files = [];
        this.files.push({
            src: 'src/app/styles/index.scss',
            dest: 'src/app/styles/index.scss',
            template: false
        });

        this.files.push({
            src: 'src/app/styles/vendor.scss',
            dest: 'src/app/styles/vendor.scss',
            template: false
        });

        this.files.push({
            src: 'src/app/styles/_helper.scss',
            dest: 'src/app/styles/_helper.scss',
            template: false
        });

        this.files.push({
            src: 'src/app/styles/_utils.scss',
            dest: 'src/app/styles/_utils.scss',
            template: false
        });
    };
};