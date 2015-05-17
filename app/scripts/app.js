/// <reference path="../../typings/ember/ember.d.ts"/>
var RocknrollcallYeoman = window.RocknrollcallYeoman = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_ACTIVE_GENERATION: true
});

RocknrollcallYeoman.ApplicationController = Em.ObjectController.extend({
	searchTerms: '',
	applicationName: function() {
		var st = this.get('searchTerms');
		if (st) {
			return st + "???";
		} else {
			return "Rock'n'Roll Call";
		}
	}.property('searchTerms'),
	actions: {
		submit: function() {
			this.transitionToRoute('search-results', this.get('searchTerms'));
		}
	}
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/components/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');

/*
Ember.Application.initializer({
	name: "DBSeeds",
	initialize: function(container, application) {
		
		localStorage.clear();
		
		var store = container.lookup('store:main');
		console.log('store: ', store);
		
		for (var i = 0; i < 300; i++) {
			
			var id = 'ARNH6LU1187FB430FA';
			var random_id = id.split('').sort(function() {
				return 0.5 - Math.random()
			}).join('');
			
			var types = [
				'song',
				'artist'
			];
			
			var random_type = Math.floor(Math.random() * types.length);
			
			var name = 'Willie Nelson';
			var random_name = name.split('').sort(function() {
				return 0.5 - Math.random()
			}).join('');
			
			var random_hotness = Math.floor(Math.random() * 100) + 1;
			var random_timestamp = new Date(new Date(2013, 9, 30).getTime() +
					Math.random() * (new Date().getTime() - new Date(2013, 9, 30).getTime()));
			
			activity = store.createRecord('activity', {
				display_id: random_id,
				type: types[random_type],
				display_name: random_name,
				hotttnesss: random_hotness,
				timestamp: random_timestamp
			});
			
			activity.save();
		}
		
		console.log(store.find('activity')
			.then(function(stuff) {
				console.log('Total Activity Records: ' + stuff.toArray().length)
			})
		);
	}
});
*/

Ember.Handlebars.helper('hotttnesss-badge', function(value, options) {
	var h = parseFloat(value);
	var hotttnesss_num = Math.round(h * 10);
	var hotttnesss_css = Math.ceil(h * 10) - 1;
	var html = "<h4>Hotness: ";
	if (hotttnesss_num > 0) {
		html += '<i class="hotttnesss">';
		for (var i = 0; i < hotttnesss_css; i++) {
			html += '<i class="glyphicon glyphicon-fire hotttnesss' + i + '"></i>';
		}
		html += "</i>";
		html += '<span class="hotttnesss-badge">' + hotttnesss_num + '</span></h4>';
	} else {
		html += "0</h4>";
	}
	return new Handlebars.SafeString(html);
});
