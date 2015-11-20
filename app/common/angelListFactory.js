var app = angular.module('angelListFactory', ['firebase']);

app.factory('searchAngelListStartups', ['$q', '$http', function($q, $http) {

  var companyName = 'periscope';

  $http({
    method: 'GET',
    url: 'https://api.angel.co/1/search?query=' + companyName + '&access_token='
  })
    .then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response)
    })
}]);
