angular.module("app", ['ngRoute']);
angular.module("app").config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/reserve', {
                templateUrl: '/app/components/reservation/reservationView.html',
                controller: 'reservationController',
                controllerAs: 'vm'
            })
            .when('/contact/', {
                templateUrl: '/app/contactUs/index.html',
                controller: 'ContactUsController',
                controllerAs: 'vm'
            })
            .when('/', {
                templateUrl: '/app/home/index.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' })
    }
]);