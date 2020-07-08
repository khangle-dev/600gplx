app.controller("listViolationCtrl", function ($scope) {
    $scope.violationGroup = getParaCurr("violationGroup")
    $scope.violationType = getParaCurr("violationType")
    
    $scope.topic = fullLawTopics.filter(function(law){
        return law.code == $scope.violationGroup
    })[0]

    $scope.list = fullViolations.filter(function(violation){
        return violation.topicCode == $scope.violationGroup && violation.code == $scope.violationType
    })
});