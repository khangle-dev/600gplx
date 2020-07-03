app.controller("settingCtrl", function ($scope) {
    $scope.list = fullLicenses
    $scope.chooseLicense = function (licenseCode) {
        license = fullLicenses.filter(function(license){return license.code == licenseCode})[0]
        chooseLicense(license.code)
        
        fullQuestions = ["B2", "C", "D", "E", "F"].includes(localStorage.getItem("is_license")) ? originalQuestions : 
        (["B1"].includes(localStorage.getItem("is_license")) ? originalQuestions.filter(function(question){return question.b1>0}) : 
        (["A3", "A4"].includes(localStorage.getItem("is_license")) ? originalQuestions.filter(function(question){return question.a3>0}) : 
        (["A1"].includes(localStorage.getItem("is_license")) ? originalQuestions.filter(function(question){return question.a1>0}) : 
        (["A2"].includes(localStorage.getItem("is_license")) ? originalQuestions.filter(function(question){return question.a2>0}) : [])))
        )

        resetIndex()
    };
    $scope.isChoose = function (licenseCode) {
        return isChooseLicense(licenseCode)
    };
});
