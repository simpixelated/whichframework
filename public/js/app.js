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
			// limit character length for better design
			if (data.description.length > 150) {
				data.description = data.description.substring(0,150);
				data.description += '...';
			}
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