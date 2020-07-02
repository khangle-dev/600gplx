app.controller("examCtrl", function ($scope, $interval) {

    $scope.examCode = getParaCurr("examCode")
    $scope.licenseCode = license.code

    var questionNos = fullExams.filter(function(exam){return (exam.exam == parseInt($scope.examCode) && exam.licenseCode == $scope.licenseCode)}).map(function(exam){return exam.questionNo})
    
    $scope.questionNos = questionNos
    $scope.questions = fullQuestions.filter(function(question){return questionNos.includes(question.index)})

    $scope.countDown = 10//license.timer
    //$scope.saveAnses = new Array(questionNos.length).fill(false)

    $interval(function() {
        $scope.countDown--
        var minutes = Math.floor($scope.countDown / 60)
        var seconds = Math.floor($scope.countDown % 60)

        $scope.timer = `${minutes} : ${seconds}`
        
        if ($scope.countDown == 0) alert("Hết giờ")
    }, 1000, $scope.countDown)

    load(0)

    function load(index = 0) {
        
        $scope.index = index;
        $scope.show_result = false;

        $scope.question = $scope.questions[index]
    }

    $scope.nextQuestion = function() {
        var index = $scope.index;
        index ++;

        if (index > $scope.questions.length - 1) index =$scope.questions.length - 1

        load(index);
    }

    $scope.prevQuestion = function() {
        var index = $scope.index;
        index --;

        if (index < 0) index = 0;

        load(index);
    }

    $scope.toggleAnswer = function (answerIndex) {
        //$scope.saveAnses[$scope.index] = $scope.question.answers[answerIndex].correct
        toggleExamAnswer($scope.licenseCode, $scope.examCode, $scope.index, answerIndex);
    }

    $scope.isAnswered = function(answerIndex) {
        return isExamAnswered($scope.licenseCode, $scope.examCode, $scope.index, answerIndex) == true ? "checked" : ""
    }

    $scope.submit = function() {
        var saveAnses = $scope.questionNos.map(function(questionIndex){
            return isExamAnsweredCorrect($scope.licenseCode, $scope.examCode, questionIndex)
        })
        
        console.log (saveAnses)
        var danger = 0
        saveExam($scope.licenseCode, $scope.examCode, `{"passed":"${saveAnses.filter(function(e){return e == true}).length}", "time":"${$scope.countDown}", "danger":"${danger}"}`)
    }
});
