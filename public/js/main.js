require.config({
	paths: {
		chart: '//cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min',
		backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
		lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
		jquery: '//code.jquery.com/jquery-2.0.3.min',
		marionette: '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/1.4.0-bundled/backbone.marionette.min',
		handlebars: '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.1.2/handlebars.min',
		hbars: '//cdnjs.cloudflare.com/ajax/libs/requirejs-handlebars/0.0.2/hbars',
		text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
		foundation: '//cdnjs.cloudflare.com/ajax/libs/foundation-essential/5.3.1/js/foundation.min',
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
		},
		'hbars': {
			'Handlebars': 'handlebars'
		}
	}
});

require(['app'],
function (App) {
	App.start();
});