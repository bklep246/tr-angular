'use strict';

angular.module('yeomanApps')
  .controller('NavbarCtrl', function ($scope) {
      $scope.date = new Date();

      $scope.toggleNav1 = function () {
          $('#nav').toggleClass('site-nav--open');
          $('.nav-button').toggleClass('nav-button--open');
          $('.site-nav--list').toggleClass('site-nav--display');
      };
  });
