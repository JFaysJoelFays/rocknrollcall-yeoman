/// <reference path="../../../typings/ember/ember.d.ts"/>
RocknrollcallYeaoman.ArtistRoute = Ember.Route.extend({
	model: function(params) {
		/* pseudocode
		XHK("some URL", {"td": params.enid}, function callback(response) {
			var artist = App.Artist.Create({
				name: response.name,
				hotttnesss: response.hotttnesss,
			});
		});
		*/
	}
});