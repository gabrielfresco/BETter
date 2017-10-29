'use strict';

export default function(app) {
	

app.service('UrlHelper', ['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    this.goBack = function (fallbackRoute) {
        if (($rootScope.previousState)&&((!fallbackRoute)||($rootScope.previousState===fallbackRoute))) {
            $state.go($rootScope.previousState, $rootScope.previousStateParams, {reload: true});
        } else {
            if (angular.isFunction(fallbackRoute)) {
                fallbackRoute();
            } else {
                $state.go(fallbackRoute, {}, {reload: true});
            }
        }
    };

    this.go = function (state, params, forwardCurrentParams) {
        if (!forwardCurrentParams)
            $state.go(state, params, {reload: true} );
        else {
            $state.go(state, angular.merge($stateParams, params), {reload: true});
        }
    }
}]);
}
