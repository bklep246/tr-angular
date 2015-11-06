(function() {
  'use strict';

  angular
    .module('<%- appName %>')
    .directive('acmeNavbar', acmeNavbar);

    /** @ngInject */
  function NavbarController() {
      var vm = this;
        
      $('ul.nav > li').click(function (e) {
          e.preventDefault();
          $('ul.nav > li').removeClass('active');
          $(this).addClass('active');
      });
  }
}

})();
