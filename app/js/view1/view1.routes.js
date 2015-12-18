/**
 * Created by natete on 18/12/15.
 */
(function () {

    define(['./view1.module'], function(view1) {
        'use strict';

        return view1.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: 'js/view1/view1.html',
                controller: 'View1Controller'
            });
        }]);
    });
})();