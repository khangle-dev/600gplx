app.controller("listWrongCtrl", function ($scope) {
    $scope.list = []
    $scope.licenseCode = license.code
    $scope.questions = fullQuestions
    resetIndex()

    $scope.questions.forEach(function(question){
        if (hasAnswered($scope.licenseCode, question.index) && isAnsweredWrong($scope.licenseCode, question.index)) {
            $scope.list.push(question);
        }
    })

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