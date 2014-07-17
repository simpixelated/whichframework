define(function (require) {
	var BB = require('backbone'),
		_ = require('lodash');

	var Frameworks = BB.Collection.extend({
		url: 'learn.json',
		parse: function (data) {
			return _.toArray(data);	
		}
	});

    return {
    	start: function () {
    		var frameworks = new Frameworks(),
    			random;

    		frameworks.fetch().done(function (response) {
    			var random = _.random(0, frameworks.length);
    			console.log(frameworks.at(random).get('name'));
    		});
    	}
    };
});