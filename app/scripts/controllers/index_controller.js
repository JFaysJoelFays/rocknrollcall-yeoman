/// <reference path="../../../typings/ember/ember.d.ts"/>
RocknrollcallYeoman.IndexController = Ember.Controller.extend({
	actions: {
		viewedArtist: function(artist) {
			console.log('hang on I"m viewing: ' + artist.name)
		}
	}
});