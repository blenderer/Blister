define(['knockout', 'plugins/http'], function (ko, http) {

    return {
        logged_in: ko.observable(false),
        username: ko.observable("")
    };
});