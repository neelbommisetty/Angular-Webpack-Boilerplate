import angular from 'angular';
import HomeController from './ctrl.home';
import routes from './routes.home';

export default angular.module('app.home', [])
  .config(routes)
  .controller('homeController', HomeController)
  .name;
