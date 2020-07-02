app.controller("listCtrl", function ($scope) {
    $scope.countChuaLam = 0;
    $scope.countDung = 0;
    $scope.countSai = 0;
    $scope.list = [];

    for (var i = 0; i < fullQuestions.length; i++) {
        var danger_css = fullQuestions[i].required > 0 ? "danger" : ""
        var css_class = "" + danger_css;

        if (!hasAnswered(license.code, i)) {
            $scope.countChuaLam ++;
        } else if (isAnsweredWrong(license.code, i)) {
            $scope.countSai ++;
            css_class = "wrong" + danger_css;
        } else {
            $scope.countDung ++;
            css_class = "correct" + danger_css;
        }

        $scope.list.push({index: i, css_class: css_class});
    }
});
