app.controller("resetCtrl", function ($scope) {
    $scope.reset = function () {
        localStorage.clear();
        localStorage.setItem("is_license", "B2")
        resetQuestion()
        resetIndex()
        license = fullLicenses.filter(function(lic){return lic.code==(localStorage.getItem("is_license")?localStorage.getItem("is_license"):"B2")})[0]
        toastr.success("Khôi phục dữ liệu thành công!");
        window.location = "#!index";
    }
});