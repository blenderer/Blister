define(['plugins/http', 'durandal/app', 'knockout', 'global', 'plugins/jquery-ui', 'plugins/knockout-sortable'], function (http, app, ko, global) {


    return {
        name : ko.observable(""),
        items: ko.observableArray([]),
        listuser: ko.observable(""),

        logged_in: ko.observable(false),
        username: ko.observable(""),

        activate: function (id) {
            this.logged_in(global.logged_in());
            this.username(global.username());

        	var that = this;
            return http.get('http://localhost/blister/public/list/' + id).then(function(response) {
                
                //shortcut variable
                list = response.data.list;
                
                //grab the list's name
                that.name(list.name);

                that.listuser(list.user.username);

                //clear the items list
                that.items([]);

                //get the list's items and their properties
                for (var i=0;i<list.items.length;i++) {

                    var checked = false;
                    if (list.items[i].checked == 1)
                        checked = true;

                    that.items.push({
                        item_text: ko.observable(list.items[i].item_text),
                        checked: ko.observable(checked)
                    });
                }


            });
        }
    };

});