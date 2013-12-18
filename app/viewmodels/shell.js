define(['plugins/router', 'durandal/app', 'knockout', 'plugins/http','global'], function (router, app, ko, http, global) {





    return {
        router: router,
        login_attempts: ko.observable(0),
        username: ko.observable(""),
        password: ko.observable(""),
        logged_in: ko.observable(false),
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
                        global.logged_in(true);
                        global.username(that.username);
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
                        global.username("");
                        global.logged_in(false);
                        that.login_attempts(0);
                    }
                }
            });
        },
        activate: function () {
        	var that = this;

            http.get('http://localhost/blister/public/account').then(function(response) {
                	global.logged_in(true);
                	global.username(response.data.user.username);
                    that.logged_in(true);
                    that.username(response.data.user.username)
            	})

            router.map([
                { route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'list(/:id)', title: 'List', moduleId: 'viewmodels/list', hash: '#list' }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});