import angular from 'angular';
import TestController from './controllers/testController';
TestController.$inject = ['$scope'];
angular.module('app',[]).controller('TestController',TestController);
angular.bootstrap(document, ['app']);
