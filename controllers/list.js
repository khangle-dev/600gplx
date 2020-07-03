app.controller("listCtrl", function ($scope) {
    $scope.countChuaLam = 0;
    $scope.countDung = 0;
    $scope.countSai = 0;
    $scope.list = [];
    $scope.questions = fullQuestions

    $scope.questions.forEach(function(question){
        var danger_css =question.required > 0 ? "danger" : ""
        var css_class = "" + danger_css;

        if (!hasAnswered(license.code, question.index)) {
            $scope.countChuaLam ++;
        } else if (isAnsweredWrong(license.code, question.index)) {
            $scope.countSai ++;
            css_class = "wrong" + danger_css;
        } else {
            $scope.countDung ++;
            css_class = "correct" + danger_css;
        }
        
        $scope.list.push({index: question.index, css_class: css_class})
    })
});
