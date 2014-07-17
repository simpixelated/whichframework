define(function (require) {
	var BB = require('backbone'),
		_ = require('lodash'),
		$ = require('jquery');

	var Frameworks = BB.Collection.extend({
		url: 'learn.json',
		parse: function (data) {
			return _.toArray(data);
		}
	});

	var FrameworkView = BB.View.extend({
		template: function (data) {
			return '<a href="//'+data.homepage+'">'+data.name+'</a>';
		},
		render: function () {
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});

    return {
    	start: function () {
    		var frameworks = new Frameworks(),
    			view;

    		frameworks.fetch().done(function (response) {
    			var random = _.random(0, frameworks.length),
    				framework = frameworks.at(random);

    			view = new FrameworkView({ model: framework });
    			$('#main').html(view.render().el);
    		});
    		
    	}
    };
});