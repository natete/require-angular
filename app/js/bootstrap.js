/**
 * Created by natete on 18/12/15.
 */
(function () {
    define([
        'require',
        'angular',
        'ngRoute',
        'app',
        'routes'
    ], function (require, ng) {
        'use strict';

        require(['domReady!'], function (document) {
            ng.bootstrap(document, ['myApp']);
        })
    })
})();