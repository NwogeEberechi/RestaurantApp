angular.module('app').config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/reservation/', {
                templateUrl: '/app/components/reservation/reservationView.html',
                controller: 'reservationController',
                controllerAs: 'vm' //This is declaring a prefix of vm to be used in our view
            })
            .when('/menu/', {
                templateUrl: '/app/components/menu/menuView.html',
                controller: 'menuController',
                controllerAs: 'vm'
            })
            .when('/contact/', {
                templateUrl: '/app/components/contact/contactView.html',
                controller: 'contactController',
                controllerAs: 'vm'
            })
            .when('/order/', {
                templateUrl: 'app/components/order/orderView.htm',
                controller: 'orderController',
                controllerAs: 'vm'
            })
            .when('/', {
                templateUrl: '/app/components/home/index.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' })
    }
]);