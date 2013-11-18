define(['durandal/app', 'knockout'], function (app, ko) {

		this.json = {"status":"success","data":{"latest_lists":[{"id":"4","user_id":"2","name":"List of Counties in Maryland","public":"1","created_at":"2013-09-19 14:06:50","updated_at":"2013-09-19 14:06:50","items":[{"id":"13","roll_id":"4","item_text":"Baltimore City","order":"0","checked":"0","created_at":"2013-09-19 14:06:50","updated_at":"2013-09-19 14:06:50"},{"id":"14","roll_id":"4","item_text":"Howard ","order":"1","checked":"0","created_at":"2013-09-19 14:06:50","updated_at":"2013-09-19 14:06:50"},{"id":"15","roll_id":"4","item_text":"Montgomery","order":"2","checked":"0","created_at":"2013-09-19 14:06:50","updated_at":"2013-09-19 14:06:50"},{"id":"16","roll_id":"4","item_text":"Charles","order":"3","checked":"0","created_at":"2013-09-19 14:06:50","updated_at":"2013-09-19 14:06:50"}]},{"id":"2","user_id":"1","name":"Christmas Wish List","public":"1","created_at":"2013-09-19 14:06:49","updated_at":"2013-09-19 14:06:49","items":[{"id":"5","roll_id":"2","item_text":"Mechanical Keyboard","order":"0","checked":"0","created_at":"2013-09-19 14:06:49","updated_at":"2013-09-19 14:06:49"},{"id":"6","roll_id":"2","item_text":"Samsung Galaxy S4","order":"1","checked":"0","created_at":"2013-09-19 14:06:49","updated_at":"2013-09-19 14:06:49"},{"id":"7","roll_id":"2","item_text":"Craft Beer","order":"2","checked":"0","created_at":"2013-09-19 14:06:50","updated_at":"2013-09-19 14:06:50"},{"id":"8","roll_id":"2","item_text":"Medieval Mace Weapon","order":"3","checked":"0","created_at":"2013-09-19 14:06:50","updated_at":"2013-09-19 14:06:50"}]}]}};
		this.rolls = this.json.data.latest_lists;

    return {
    	rolls: this.rolls
    }
    
});