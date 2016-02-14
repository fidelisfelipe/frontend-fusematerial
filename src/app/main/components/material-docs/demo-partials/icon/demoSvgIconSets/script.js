
angular.module('appSvgIconSets', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {})
  .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'assets/angular-material-assets/img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('assets/angular-material-assets/img/icons/sets/core-icons.svg', 24);
  }]);
