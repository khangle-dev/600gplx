app.controller("homeCtrl", function ($scope) {
    $scope.licenseCode = license.code
    resetIndex()
    $scope.numofQuestion = fullQuestions.length
    $scope.numofDanger = fullQuestions.filter(function(question){return question.required>0}).length
});