routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  const home = {
    name: 'home',
    url: '/',
    views: {
      Root: {
        template: require('./home.html'),
        controller: 'homeController',
        controllerAs: 'home',
      },
    },
  };

  $stateProvider
    .state(home);
}
