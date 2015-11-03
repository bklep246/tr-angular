(function() {
  'use strict';

  angular
    .module('gulpAngularBase')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
