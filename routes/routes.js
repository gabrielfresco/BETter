'use strict'

export default function (app) {
    // configure our routes
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: `/home`,
                templateUrl: `${window.BASE_URL}/resources/views/home.html`,
                /*controller: 'HomeController',
                controllerAs: 'homeCtrl'*/
            })
            .state('admin', {
                url: `/admin`,
                templateUrl: `${window.BASE_URL}/resources/views/admin.html`,
                /*controller: 'HomeController',
                controllerAs: 'homeCtrl'*/
            })
    }]);
}
