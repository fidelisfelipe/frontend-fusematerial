
angular.module('appUsingTemplateCache', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {})
  .config(function($mdIconProvider) {

    // Register icon IDs with sources. Future $mdIcon( <id> ) lookups
    // will load by url and retrieve the data via the $http and $templateCache

    $mdIconProvider
      .iconSet('core', 'assets/angular-material-assets/img/icons/sets/core-icons.svg',24)
      .icon('social:cake', 'assets/angular-material-assets/img/icons/cake.svg',24);

  })
  .run(function($http, $templateCache) {

    var urls = [
      'assets/angular-material-assets/img/icons/sets/core-icons.svg',
      'assets/angular-material-assets/img/icons/cake.svg',
      'assets/angular-material-assets/img/icons/android.svg'
    ];

    // Pre-fetch icons sources by URL and cache in the $templateCache...
    // subsequent $http calls will look there first.

    angular.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });

  })
  ;
