app.controller("listWrongCtrl", function ($scope) {
    $scope.list = []
    $scope.licenseCode = license.code

    for (var i = 0; i < 450; i++) {
        if (hasAnswered($scope.licenseCode, i) && isAnsweredWrong($scope.licenseCode, i)) {
            $scope.list.push(fullQuestions[i]);
        }
    }

    $scope.hasChecked = function (questionIndex, answerIndex) {
        return isAnswered($scope.licenseCode, questionIndex, answerIndex);
    }

    $scope.getResultClass = function (questionIndex, answerIndex, answer) {
        if (answer.correct) {
            return "correct";
        } else if (isAnswered($scope.licenseCode, questionIndex, answerIndex)) {
            return "wrong";
        } else {
            return "";
        }
    }
});