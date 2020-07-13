var app = angular.module("app-root", ["ngRoute", "ngTouch"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/list", {
            templateUrl : "views/list.html",
            controller : "listCtrl"
        })
        .when("/random", {
            templateUrl : "views/random.html",
            controller : "randomCtrl"
        })
        .when("/list-wrong", {
            templateUrl : "views/list-wrong.html",
            controller : "listWrongCtrl"
        })
        .when("/list-danger", {
            templateUrl : "views/list-danger.html",
            controller : "listDangerCtrl"
        })
        .when("/list-exam", {
            templateUrl : "views/list-exam.html",
            controller : "listExamCtrl"
        })
        .when("/list-topic", {
            templateUrl : "views/list-topic.html",
            controller : "listTopicCtrl"
        })
        .when("/list-sign", {
            templateUrl : "views/list-sign.html",
            controller : "listSignCtrl"
        })
        .when("/details", {
            templateUrl : "views/details.html",
            controller : "detailsCtrl"
        })
        .when("/signs", {
            templateUrl : "views/signs.html",
            controller : "signsCtrl"
        })
        .when("/question", {
            templateUrl : "views/question.html",
            controller : "questionCtrl"
        })
        .when("/exam", {
            templateUrl : "views/exam.html",
            controller : "examCtrl"
        })
        .when("/reset", {
            templateUrl : "views/reset.html",
            controller : "resetCtrl"
        })
        .when("/setting", {
            templateUrl : "views/setting.html",
            controller : "settingCtrl"
        })
        .when("/user-guide", {
            templateUrl : "views/user-guide.html",
            controller : "userGuideCtrl"
        })
        .when("/nd100", {
            templateUrl : "views/nd100.html",
            controller : "nd100Ctrl"
        })
        .when("/list-law", {
            templateUrl : "views/list-law.html",
            controller : "listLawCtrl"
        })
        .when("/list-violation", {
            templateUrl : "views/list-violation.html",
            controller : "listViolationCtrl"
        })
        .when("/violation", {
            templateUrl : "views/violation.html",
            controller : "violationCtrl"
        })
        .otherwise({
            templateUrl : "views/home.html",
            controller : "homeCtrl"
        });
});
