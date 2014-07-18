define(function (require) {
	var BB = require('backbone'),
		_ = require('lodash'),
		$ = require('jquery'),
		_template = require('hbars!templates/framework');

	var Frameworks = BB.Collection.extend({
		url: 'learn.json',
		parse: function (data) {
			// remove last "templates" object in data
			return _.initial(_.toArray(data));
		}
	});

	var FrameworkView = BB.View.extend({
		template: _template,
		prepareDataForTemplate: function (data) {
			data.todomvc = data.examples && data.examples[0].url;
			return data;
		},
		render: function () {
			var data = this.prepareDataForTemplate(this.model.attributes);
			this.$el.html(this.template(data));
			return this;
		}
	});

    return {
    	start: function () {
    		var frameworks = new Frameworks();

    		frameworks.fetch({
    			success: function (collection) {
    				var random = _.random(0, collection.length-1),
	    				framework = collection.at(random),
	    				view = new FrameworkView({ model: framework });

	    			$('#main').html(view.render().el);
    			}
    		});
    		
    	}
    };
});