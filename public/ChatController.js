angular.module('gifsChat', [])

.controller('ChatController', function (apiService) {

  $scope.sendChat = function () {
    apiService.getGif = function (queryText, callback) {}
    .then(function (response) {
      $scope.gifsArray.push(response.data.data[0])
    })
    .catch(function (err) {
      console.error(err);
    })
  };

});
