(function () {
    'use strict';

    describe('controllers', function () {
        var vm;
        var $timeout;
        var toastr;

        beforeEach(module('<%- appName %>'));
        beforeEach(inject(function (_$controller_, _$timeout_, _toastr_) {
            spyOn(_toastr_, 'info').and.callThrough();

            vm = _$controller_('ContactController');
            $timeout = _$timeout_;
            toastr = _toastr_;
        }));

    });
})();
