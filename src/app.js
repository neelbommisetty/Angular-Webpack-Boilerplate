import angular from 'angular';
import TestController from './controllers/testController';
import './app.scss';

angular.module('app', []).controller('TestController', TestController);
angular.bootstrap(document, ['app']);
