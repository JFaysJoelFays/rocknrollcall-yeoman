/// <reference path="../../../typings/ember/ember.d.ts"/>
RocknrollcallYeoman.ActivityRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('activity')
	}
});
