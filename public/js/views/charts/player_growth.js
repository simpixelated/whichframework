define(function (require) {
	var BB = require('backbone'),
		Chartjs = require('chart'),
		Player = require('models/player');

	return BB.View.extend({
		attributes: {
			width: 600,
			height: 200
		},
		tagName: 'canvas',
		id: 'playerGrowth',
		render: function () {
			var ctx = this.$el[0].getContext("2d"),
				KD = new Player(),
				Kobe = new Player();

			$.when($.ajax('stats/kevin_durant.json'), $.ajax('stats/kobe_bryant.json')).done(function (kd, kobe) {
				console.log(kd, kobe);
				KD.set(kd[0]);
				Kobe.set(kobe[0]);
				var data = {
				    labels: Kobe.seasons.mapStat('Season'),
				    datasets: [
				        {
				            label: "My First dataset",
				            fillColor: "rgba(220,220,220,0.2)",
				            strokeColor: "rgba(220,220,220,1)",
				            pointColor: "rgba(220,220,220,1)",
				            pointStrokeColor: "#fff",
				            pointHighlightFill: "#fff",
				            pointHighlightStroke: "rgba(220,220,220,1)",
				            data: KD.seasons.mapStat('PER')
				        },
				        {
				            label: "My Second dataset",
				            fillColor: "rgba(151,187,205,0.2)",
				            strokeColor: "rgba(151,187,205,1)",
				            pointColor: "rgba(151,187,205,1)",
				            pointStrokeColor: "#fff",
				            pointHighlightFill: "#fff",
				            pointHighlightStroke: "rgba(151,187,205,1)",
				            data: Kobe.seasons.mapStat('PER')
				        }
				    ]
				};
				var myNewChart = new Chart(ctx).Line(data);
			});

			

			return this;
		}
	});
});