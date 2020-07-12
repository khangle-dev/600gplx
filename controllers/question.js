app.controller("questionCtrl", function ($scope) {
    resetTopic()
    $scope.topicCode = getParaCurr("topic")

    console.log($scope.topicCode)
    $scope.topic = topics.filter(function(topic){return topic.code==$scope.topicCode})[0]
    
    resetIndex()
    
    if ($scope.topicCode == "" || $scope.topicCode == "0") {
        $scope.questions = fullQuestions;
    }else{
        if ($scope.topicCode == "8"){
            $scope.questions = fullQuestions.filter(function(question) {return question.required > 0});
        }else{
            $scope.questions = fullQuestions.filter(function(question) {return question.topic == parseInt($scope.topicCode)});
        }
    }

    load(0);

    function load(index = 0) {
        $scope.index = index;
        $scope.show_result = true;
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

});