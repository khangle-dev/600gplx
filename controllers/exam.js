app.controller("examCtrl", function ($scope) {

    $scope.examCode = getParaCurr("examCode")
    $scope.licenseCode = license.code

    var questionNos = fullExams.filter(function(exam){return (exam.exam == parseInt($scope.examCode) && exam.licenseCode == $scope.licenseCode)}).map(function(exam){return exam.questionNo})
    $scope.questions = fullQuestions.filter(function(question){return questionNos.includes(question.index)})

    load(0);

    function load(index = 0) {
        
        $scope.index = index;
        $scope.show_result = false;

        $scope.question = $scope.questions[index]
    }

    $scope.nextQuestion = function() {
        var index = $scope.index;
        index ++;

        if (index > $scope.questions.length - 1) index = 0;

        load(index);
    }

    $scope.prevQuestion = function() {
        var index = $scope.index;
        index --;

        if (index < 0) index = $scope.questions.length - 1;

        load(index);
    }

    $scope.toggleAnswer = function (answerIndex) {
        toggleAnswer($scope.licenseCode, $scope.index, answerIndex);
    };

    $scope.isAnswered = function(answerIndex) {
        return isAnswered($scope.licenseCode, $scope.index, answerIndex) == true ? "checked" : ""
    }
});