define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {



	return {
		rolls: ko.observableArray([]),
    	activate: function () {
            var that = this;
            return { 
            	latest: http.get('http://localhost/blister/public/latest').then(function(response) {
	                	that.rolls(response.data.latest_lists);
	            	})
        	}

        }
    }
    
});