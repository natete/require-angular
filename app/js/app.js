(function () {

    define([
        'angular',
        'ngRoute',
        './view1/index'
        //'./view2/view2.module'

    ], function (ng) {
        'use strict';

        return ng.module('myApp', [
            'myApp.view1',
            'ngRoute'
            //'myApp.view2',
        ]);
    })
})();