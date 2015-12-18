/**
 * Created by natete on 18/12/15.
 */
(function () {

    define(['./app'], function (app) {
        'use strict';

        return app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/view1'});
        }])
    });
})();