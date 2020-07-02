app.controller("listExamCtrl", function ($scope) {
    $scope.list = [];
    var exams = fullExams.filter(function(exam){return exam.licenseCode == license.code})

    var topics = Array.from(new Set(exams.map((item) => item.exam)))

    for (var i = 0; i < topics.length; i++) {
        var css_class = ""
        var saved = getSavedExam(license.code, topics[i])
        var result = JSON.parse(saved)
        $scope.list.push({index: topics[i], css_class: css_class, pass: result?result.passed:0});
    }
});