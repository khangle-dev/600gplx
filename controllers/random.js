app.controller("randomCtrl", function ($scope, $interval) {

    $scope.examCode = 99
    $scope.licenseCode = license.code

    clearExamAnswer($scope.licenseCode, $scope.examCode)

    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
      }

    resetIndex()

    $scope.questions = []
    for (i=1; i<=7; i++){
        let randOfTopic = fullQuestions.filter(function(question){return question.topic == i})
        let num = license.randQuestions.filter(function (rand) {return rand.topicCode == i})[0].num

        let set = new Set()
        if (num > 0) {
            while (set.size < num) {
                let rand = randOfTopic.random()
                set.add(rand)
            }
        }

        set.forEach(function(item) {
            $scope.questions.push(item)
        })
    }

    $scope.countDown = license.timer

    $interval(function() {
        $scope.countDown--
        let minutes = Math.floor($scope.countDown / 60)
        let seconds = Math.floor($scope.countDown % 60)

        $scope.timer = `${minutes}:${seconds}`
        
        if ($scope.countDown == 0) $scope.submit()
    }, 1000, $scope.countDown)

    load(0)

    function load(index = 0) {
        
        $scope.index = index
        $scope.show_result = false

        $scope.question = $scope.questions[index]
        $scope.dangerCss = ($scope.question.required > 0) ? "color:#ff9400" : ""
    }

    $scope.nextQuestion = function() {
        let index = $scope.index
        index ++

        if (index > $scope.questions.length - 1) index =$scope.questions.length - 1

        load(index)
    }

    $scope.prevQuestion = function() {
        let index = $scope.index
        index --

        if (index < 0) index = 0

        load(index)
    }

    $scope.toggleAnswer = function (answerIndex) {
        toggleExamAnswer($scope.licenseCode, $scope.examCode, $scope.question.index, answerIndex)
        toggleAnswer($scope.licenseCode, $scope.question.index, answerIndex)
    }

    $scope.isAnswered = function(answerIndex) {
        return getExamAnswered($scope.licenseCode, $scope.examCode, $scope.question.index) == answerIndex ? "checked" : ""
    }

    $scope.submit = function() {
        let saveAnses = $scope.questions.map(function(question){
            return isExamAnsweredCorrect($scope.licenseCode, $scope.examCode, question.index)
        })
        let dangerQuestions = $scope.questions.filter(function(question){return question.required > 0})
        let dangerCorrectAnses  = dangerQuestions.map(function(question){return isExamAnsweredCorrect($scope.licenseCode, $scope.examCode, question.index) }).filter(function(correct){return correct == true})
        let danger = dangerCorrectAnses.length
        let passed = saveAnses.filter(function(ans){return ans == true}).length
        let result = ((passed >= license.pass) && (danger>=dangerQuestions.length))? "ĐẠT" : "KHÔNG ĐẠT"
        let hasAns = $scope.questions.filter(function(question){return hasExamAnswered($scope.licenseCode, $scope.examCode, question.index)}).length
        let unchecked = $scope.questions.length - hasAns
        let failed = $scope.questions.length - (passed + unchecked)
        let duration = license.timer - $scope.countDown
        let minutes = Math.floor(duration / 60)
        let seconds = Math.floor(duration % 60)
        let timer = `${minutes}:${seconds}`

        alert(`Kết quả: ${result} \n - Số câu đúng: ${passed} \n - Số câu sai: ${failed} \n - Câu liệt đúng: ${danger}/${dangerQuestions.length}`)
        //saveExam($scope.licenseCode, $scope.examCode, `{"passed":${passed}, "failed":${failed}, "danger":${danger}, "unchecked": ${unchecked}, "time":"${timer}", "result":${result}}`)
    }
})
