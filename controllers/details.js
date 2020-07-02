app.controller("detailsCtrl", function ($scope) {
    saveDataFromQueryString()
    $scope.licenseCode = license.code
    var index = parseInt(getParaCurr("index"))

    load(index);

    function load(index) {
        $scope.index = index;
        
        $scope.question = fullQuestions.filter(function(question){return question.index == $scope.index})[0];
        
        $scope.show_result = hasAnswered($scope.licenseCode, $scope.question.index);
    }

    $scope.getAnswerClass = function (answerIndex) {
        if (!$scope.show_result) {
            return "";
        }

        var answer = $scope.question.answers[answerIndex];
        if (answer.correct) {
            return "correct";
        } else if (isAnswered($scope.licenseCode, $scope.question.index, answerIndex)) {
            return "wrong";
        } else {
            return "";
        }
    };

    $scope.toggleAnswer = function (answerIndex) {
        toggleAnswer($scope.licenseCode, $scope.question.index, answerIndex);
    };

    $scope.isAnswered = function(answerIndex) {
        return isAnswered($scope.licenseCode, $scope.question.index, answerIndex) == true ? "checked" : ""
    }

    $scope.nextQuestion = function() {
        var index = $scope.index;
        index ++;
        if (index > fullQuestions.length - 1) index = 0;

        load(index);
    }

    $scope.prevQuestion = function() {
        var index = $scope.index;
        index --;
        if (index < 0) index = fullQuestions.length - 1;

        load(index);
    }

    $scope.toggleResult = function () {
        $scope.show_result = !$scope.show_result;
    };

    function saveDataFromQueryString() {
        var index = getParaCurr("index");
        if (index != "") {
            db.set("currentIndex", index);
        }
    }
});
