require.config({
	paths: {
		chart: '//cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min',
		backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
		lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
		jquery: '//code.jquery.com/jquery-2.0.3.min',
		marionette: '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/1.4.0-bundled/backbone.marionette.min',
		handlebars: '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.1.2/handlebars.min',
		foundation: '//cdnjs.cloudflare.com/ajax/libs/foundation/5.2.2/js/foundation.min',
		templates: '../templates'
	},
	shim: {
		marionette: {
			exports: 'Marionette',
			deps: ['backbone']
		},
		lodash: {
			exports: '_'
		},
		handlebars: {
			exports: 'Handlebars'
		},
		foundation: {
			deps: ['jquery'],
            exports: 'jQuery.fn.foundation'
		}
	},
	map: {
		'backbone': {
			'underscore': 'lodash'
		}
	}
});

require(['app'],
function (App) {
	App.start();
});