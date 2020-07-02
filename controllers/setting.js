app.controller("settingCtrl", function ($scope) {
    $scope.list = fullLicenses
    $scope.chooseLicense = function (licenseCode) {
        license = fullLicenses.filter(function(license){return license.code == licenseCode})[0]
        chooseLicense(license.code)
        console.log(license)
    };
    $scope.isChoose = function (licenseCode) {
        return isChooseLicense(licenseCode)
    };
});
