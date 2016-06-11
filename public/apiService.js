angular.module('gifsChat', [])

.service('apiServices', function () {
  var service = {};

  service.getGif = function (queryText) {
    var uri = 'http://api.giphy.com/v1/gifs/search?q=' + queryText + '&api_key=dc6zaTOxFJmzC';

    return $http.post(uri)
    .then(function (response) {
      return response;
    })
    .catch(function (err) {
      console.error(err);
    });

  };

  return service;
});
