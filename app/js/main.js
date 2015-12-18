/**
 * Created by natete on 18/12/15.
 */
(function () {

    require.config({
        paths: {
            'domReady': '../lib/requirejs-domready/domReady',
            'angular': '../lib/angular/angular',
            'ngRoute': '../lib/angular-route/angular-route'
        },
        shim: {
            'angular': {
                exports: 'angular'
            }
        },

        deps: ['./bootstrap']
    });

})();