app.controller("violationCtrl", function ($scope) {
    $scope.violationNo = getParaCurr("index")
    $scope.violationGroup = getParaCurr("violationGroup")
    
    $scope.topic = fullLawTopics.filter(function(law){
        return law.code == $scope.violationGroup
    })[0]

    $scope.violation = fullViolations.filter(function(violation){
        return violation.no == $scope.violationNo
    })[0]

    $scope.list = fullViolations.filter(function(violation){
        return $scope.violation.relations.includes(violation.no) 
    })

    $scope.bookmarks1 = $scope.violation.bookmarks.filter (function(book){
        return book.bookmarkType == 1
    })

    $scope.bookmarks2 = $scope.violation.bookmarks.filter (function(book){
        return book.bookmarkType == 2
    })

    $scope.bookmarks3 = $scope.violation.bookmarks.filter (function(book){
        return book.bookmarkType == 3
    })
});