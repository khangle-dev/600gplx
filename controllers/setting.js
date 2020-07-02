app.controller("settingCtrl", function ($scope) {
    $scope.list = fullLicenses
    $scope.chooseLicense = function (licenseCode) {
        console.log(licenseCode)
    };
    $scope.isChoose = function (licenseCode) {
        return true
    };
});
