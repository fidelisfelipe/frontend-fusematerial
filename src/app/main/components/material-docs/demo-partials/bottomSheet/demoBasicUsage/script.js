angular.module('bottomSheetDemo1', ['ngMaterial'])
.config(function($mdIconProvider) {
    $mdIconProvider
      .icon('share-arrow', 'assets/angular-material-assets/img/icons/share-arrow.svg', 24)
      .icon('upload', 'assets/angular-material-assets/img/icons/upload.svg', 24)
      .icon('copy', 'assets/angular-material-assets/img/icons/copy.svg', 24)
      .icon('print', 'assets/angular-material-assets/img/icons/print.svg', 24)
      .icon('hangout', 'assets/angular-material-assets/img/icons/hangout.svg', 24)
      .icon('mail', 'assets/angular-material-assets/img/icons/mail.svg', 24)
      .icon('message', 'assets/angular-material-assets/img/icons/message.svg', 24)
      .icon('copy2', 'assets/angular-material-assets/img/icons/copy2.svg', 24)
      .icon('facebook', 'assets/angular-material-assets/img/icons/facebook.svg', 24)
      .icon('twitter', 'assets/angular-material-assets/img/icons/twitter.svg', 24);
  })
.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet, $mdToast) {
  $scope.alert = '';

  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'bottom-sheet-list-template.html',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem['name'] + ' clicked!';
    });
  };

  $scope.showGridBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'bottom-sheet-grid-template.html',
      controller: 'GridBottomSheetCtrl',
      clickOutsideToClose: false,
      targetEvent: $event
    }).then(function(clickedItem) {
      $mdToast.show(
            $mdToast.simple()
              .textContent(clickedItem['name'] + ' clicked!')
              .position('top right')
              .hideDelay(1500)
          );
    });
  };
})

.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

  $scope.items = [
    { name: 'Share', icon: 'share-arrow' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Hangout', icon: 'hangout' },
    { name: 'Mail', icon: 'mail' },
    { name: 'Message', icon: 'message' },
    { name: 'Copy', icon: 'copy2' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Twitter', icon: 'twitter' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
.run(function($http, $templateCache) {

    var urls = [
      'assets/angular-material-assets/img/icons/share-arrow.svg',
      'assets/angular-material-assets/img/icons/upload.svg',
      'assets/angular-material-assets/img/icons/copy.svg',
      'assets/angular-material-assets/img/icons/print.svg',
      'assets/angular-material-assets/img/icons/hangout.svg',
      'assets/angular-material-assets/img/icons/mail.svg',
      'assets/angular-material-assets/img/icons/message.svg',
      'assets/angular-material-assets/img/icons/copy2.svg',
      'assets/angular-material-assets/img/icons/facebook.svg',
      'assets/angular-material-assets/img/icons/twitter.svg'
    ];

    angular.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });

  });
