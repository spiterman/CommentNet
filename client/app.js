angular.module('app', [
  // 'app.main',
  'ui.router'
  // 'ui.bootstrap'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        templateUrl: 'partials/home/home.html',
        url: '/'
      })
      .state('state2', {
        templateUrl: 'partials/state2/state2.html',
        url: '/state2'
      })
  }]);
