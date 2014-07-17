// {
//         "Season":"2007-08",
//         "Age":19,
//         "Tm":"SEA",
//         "Lg":"NBA",
//         "Pos":"SG",
//         "G":80,

define(function (require) {
	var BB = require('backbone');

	var Seasons = BB.Collection.extend({
		mapStat: function (stat) {
			return this.map(function (season) {
            	return season.get(stat);
            });
         }
	});

	return BB.Model.extend({
		initialize: function () {
			this.on('change:Seasons', function (model, seasons) {
				model.seasons = new Seasons(seasons);
			});
		}
	});

});