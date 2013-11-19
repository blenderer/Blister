define(['plugins/router', 'durandal/app', 'knockout', 'plugins/http'], function (router, app, ko, http) {

    var ko = require('knockout');



    return {
        router: router,
        login_attempts: ko.observable(0),
        logged_in: ko.observable(false),
        username: ko.observable(""),
        password: ko.observable(""),
        login: function() {
            var that = this;
            request = $.ajax({ 
                dataType: "json",
                type: "POST",
                url: "http://localhost/blister/public/login",
                data: {
                    username: this.username, 
                    password: this.password 
                },
                statusCode: {
                    403: function() {
                        that.login_attempts(that.login_attempts() + 1);
                    },
                    200: function() {
                        app.showMessage("You are now logged in.");
                        that.logged_in(true);
                        
                    }
                }
            });
            
        },
        logout: function() {
            var that = this;
            request = $.ajax({ 
                dataType: "json",
                type: "GET",
                url: "http://localhost/blister/public/logout",
                statusCode: {
                    200: function() {
                        app.showMessage("You have now logged out.");
                        that.username("");
                        that.password("");
                        that.logged_in(false);
                        that.login_attempts(0);
                    }
                }
            });
        },
        activate: function () {
            router.map([
                { route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true }
            ]).buildNavigationModel();

            var that = this;

            http.get('http://localhost/blister/public/account').then(function(response) {
                that.logged_in(true);
                that.username(response.data.user.username);
            })
            
            return router.activate();
        }
    };
});