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

	var ReloadButtonView = BB.View.extend({
		tagName: 'a',
		attributes: {
			class: 'button tiny reload',
			href: '#'
		},
		events: {
			'click': 'reloadClick'
		},
		reloadClick: function(e) {
			e.preventDefault();
			this.collection.fetch();
		},
		render: function () {
			this.$el.text('try again');
			return this;
		}
	});

    return {
    	start: function () {
    		var frameworks = new Frameworks(),
    			button = new ReloadButtonView({ collection: frameworks });

    		this.setupAnalytics();
    		frameworks.on('sync', function (collection) {
    			var random = _.random(0, collection.length-1),
    				framework = collection.at(random),
    				view = new FrameworkView({ model: framework });

    			$('#main').html(view.render().el);
    			$('.reload').show();
    			this.trackPageView(framework.get('name'));
    			
    		}, this);

    		$('body').append(button.render().el);
    		frameworks.fetch();
    	},
		setupAnalytics: function () {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		},
		trackPageView: function (framework) {
			ga('create', 'UA-4495054-15', 'auto');
			ga('set', 'dimension1', framework);
			ga('send', 'pageview');
		}
    };
});