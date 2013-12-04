define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {



    return {
    	list : null,
    	title: ko.observable(""),
    	items: ko.observableArray([]),

        activate: function (id) {
        	var that = this;
            return { 
            	mine: http.get('http://localhost/blister/public/list/' + id).then(function(response) {
                        that.list = response.data.list;
                        that.title(that.list.name);
                        that.items(that.list.items);
	            	})
        	}
        }
    };
    
});