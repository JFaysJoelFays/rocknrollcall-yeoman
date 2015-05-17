RocknrollcallYeoman.Router.map(function () {
  // Add your routes here
  this.route('activity', {
    path: 'activity'
  });
  this.route('search-results', {
    path: 'search/:term'
  });
  this.route('artist', {
    path: 'artist/:enid'
  });
  this.route('song', {
    path: 'song/:enid'
  });
});
