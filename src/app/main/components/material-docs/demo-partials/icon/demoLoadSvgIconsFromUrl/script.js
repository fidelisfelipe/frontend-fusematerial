
angular.module('appDemoSvgIcons', ['ngMaterial'])
.controller('DemoCtrl', function( $scope ) {

    $scope.insertDriveIconURL = 'assets/angular-material-assets/img/icons/ic_insert_drive_file_24px.svg';
    $scope.getAndroid = function() {
      return 'assets/angular-material-assets/img/icons/android.svg';
    }
});
