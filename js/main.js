$(function () {
    FastClick.attach(document.body);

    document.addEventListener("deviceready", function () {
        if (StatusBar) StatusBar.hide();
    }, false);

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "300",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
});

var db = {
    hasValue: function (key) {
        var value = localStorage.getItem(key);
        if (value == null || value == undefined || value == "") {
            return false;
        }
        return true;
    },
    set: function (key, value) {
        localStorage.setItem(key, value);
    },
    get: function (key) {
        var value = localStorage.getItem(key);
        if (value == null || value == undefined) {
            return "";
        }
        return value;
    },
    getInt: function (key, defaultValue) {
        var value = db.get(key);
        if (value == "") {
            return defaultValue;
        } else {
            return parseInt(value);
        }
    },
    getList: function (key) {
        var json = db.get(key);
        if (json == "") {
            return [];
        } else {
            return JSON.parse(json);
        }
    }
};

function getCurrentQuestionIndex() {
    return db.getInt("currentIndex", 0);
}

function toggleAnswer(licenseCode, questionIndex, answerIndex) {
    var key = "is_answer_" + licenseCode + "_" + questionIndex
    localStorage.setItem(key, answerIndex)
    return true
}

function isAnswered(licenseCode, questionIndex, answerIndex) {
    var key = "is_answer_" + licenseCode + "_" + questionIndex
    var value = localStorage.getItem(key)
    if (value == answerIndex) {
        return true;
    } else {
        return false;
    }
}

function toggleExamAnswer(licenseCode, examCode, questionIndex, answerIndex) {
    var key = "is_answer_" + licenseCode + "_" + examCode + "_" + questionIndex
    localStorage.setItem(key, answerIndex);
    return true
}

function clearExamAnswer(licenseCode, examCode) {
    for (i=1; i<=650; i++){
        let key = "is_answer_" + licenseCode + "_" + examCode + "_" + i
        localStorage.removeItem(key);
    }
    
    return true
}

function getExamAnswered(licenseCode, examCode, questionIndex) {
    var key = "is_answer_" + licenseCode + "_" + examCode + "_" + questionIndex
    var value = localStorage.getItem(key)
    return value
}

function isExamAnsweredCorrect(licenseCode, examCode, questionIndex) {
    var question = fullQuestions.filter(function (question) { return question.index == questionIndex })[0]

    for (var answerIndex = 0; answerIndex < question.answers.length; answerIndex++) {
        var answer = question.answers[answerIndex];

        if (answer.correct && getExamAnswered(licenseCode, examCode, questionIndex)==answerIndex) return true;
    }
    return false;
}

function hasExamAnswered(licenseCode, examCode, questionIndex) {
    var key = "is_answer_" + licenseCode + "_" + examCode + "_" + questionIndex
    var value = localStorage.getItem(key)
    if (value) {
        return true;
    } else {
        return false;
    }
}

function getSaveAns(licenseCode, questionIndex) {
    var key = "is_answer_" + licenseCode + "_" + questionIndex;
    var value = localStorage.getItem(key);
    return value
}

function isChooseLicense(licenseCode) {
    var key = "is_license"
    var value = localStorage.getItem(key);
    if (value == licenseCode) {
        return true;
    } else {
        return false;
    }
}

function chooseLicense(licenseCode) {
    var key = "is_license"
    localStorage.setItem(key, licenseCode);
    return true
}

function getSavedLicense() {
    var key = "is_license"
    var value = localStorage.getItem(key)

    return value ? value : "B2"
}

function hasAnswered(licenseCode, questionIndex) {
    var question = fullQuestions.filter(function (question) { return question.index == questionIndex })[0]

    for (var i = 0; i < question.answers.length; i++) {
        if (isAnswered(licenseCode, questionIndex, i)) {
            return true;
        }
    }
    return false;
}

function isAnsweredWrong(licenseCode, questionIndex) {
    var question = fullQuestions.filter(function (question) { return question.index == questionIndex })[0]
    for (var i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        if (answer.correct && !isAnswered(licenseCode, questionIndex, i)) return true;
        if (!answer.correct && isAnswered(licenseCode, questionIndex, i)) return true;
    }
    return false;
}

function saveExam(licenseCode, examCode, result) {
    var key = "is_saveexam_" + licenseCode + "_" + examCode
    localStorage.setItem(key, result)
    return true
}

function getSavedExam(licenseCode, examCode) {
    var key = "is_saveexam_" + licenseCode + "_" + examCode
    return localStorage.getItem(key)
}

function showAlertBox(msg, closeText, callback) {
    var boxHtml = "<div id='alert-box' style='position: fixed; z-index: 99999; top: 0px; left: 0px; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; background-color: rgba(0, 0, 0, 0.5);'>"
        + "<div style='border: 1px solid #505050; padding: 15px; background-color: #fff; border-radius: 10px;'>"
        + "<div>" + msg + "</div>"
        + "<div style='text-align: center; margin-top: 15px;'>"
        + "<a href='javascript:void(0);' style='text-decoration: none; display: inline-block; line-height: 50px; min-width: 100px; padding: 0px 15px; border: 1px solid #a0a0a0; border-radius: 4px; color: #fff; background-color: #337ab7; border: 1px solid #2e6da4;'>" + closeText + "</a>"
        + "</div>"
        + "</div>"
        + "</div>";
    $(boxHtml).appendTo('body');
    $("#alert-box a").click(function () {
        $("#alert-box").remove();
        if (callback != null) callback();
    });
}

function getPara(url, name) {
    url = url + ""; // convert to string
    var array = url.split(/\?|&/);
    var i = 0;
    for (i = 1; i < array.length; i++) {
        if (array[i].split('=')[0].toLowerCase() == name.toLowerCase()) return array[i].split('=')[1];
    }
    return '';
}

function getParaCurr(name) {
    var url = document.location;
    return getPara(url, name);
}

function setPara(url, name, value) {
    url = url + ""; // convert to string
    var check = false;
    var isFirst = true;
    var ret = "";
    var array = url.split(/\?|&/);
    ret = ret + array[0];
    var i = 0;
    for (i = 1; i < array.length; i++) {
        var N = array[i].split('=')[0];
        var V = array[i].split('=')[1];
        if (N == name) {
            V = value;
            check = true;
        }
        ret = isFirst ? ret + "?" + N + "=" + V : ret + "&" + N + "=" + V;
        isFirst = false;
    }
    if (!check) ret = isFirst ? ret + "?" + name + "=" + value : ret + "&" + name + "=" + value;
    return ret;
}

function getOuterHtml(jqueryElement) {
    $('<div></div>').append(jqueryElement.clone()).html();
}

function resetQuestion() {
    fullQuestions = ["B2", "C", "D", "E", "F"].includes(localStorage.getItem("is_license")) ? originalQuestions :
        (["B1"].includes(localStorage.getItem("is_license")) ? originalQuestions.filter(function (question) { return question.b1 > 0 }) :
            (["A3", "A4"].includes(localStorage.getItem("is_license")) ? originalQuestions.filter(function (question) { return question.a3 > 0 }) :
                (["A1"].includes(localStorage.getItem("is_license")) ? originalQuestions.filter(function (question) { return question.a1 > 0 }) :
                    (["A2"].includes(localStorage.getItem("is_license")) ? originalQuestions.filter(function (question) { return question.a2 > 0 }) : [])))
        )

    dangerQuestions = fullQuestions.filter(function (question) {
        return question.required > 0;
    })

}
function resetIndex() {
    if (license.code == "A1") {
        fullQuestions = fullQuestions.map(function (question) {
            var item = question
            item.no = item.a1
            return item
        })
    }

    if (license.code == "A2") {
        fullQuestions = fullQuestions.map(function (question) {
            var item = question
            item.no = item.a2
            return item
        })
    }

    if (license.code == "A3") {
        fullQuestions = fullQuestions.map(function (question) {
            var item = question
            item.no = item.a3
            return item
        })
    }

    if (license.code == "A4") {
        fullQuestions = fullQuestions.map(function (question) {
            var item = question
            item.no = item.a4
            return item
        })
    }

    if (license.code == "B1") {
        fullQuestions = fullQuestions.map(function (question) {
            var item = question
            item.no = item.b1
            return item
        })
    }
}

function resetTopic() {

    var numOfQuestion = fullQuestions.length
    var numOfTopic1 = fullQuestions.filter(function (question) { return question.topic == 1 }).length
    var numOfTopic2 = fullQuestions.filter(function (question) { return question.topic == 2 }).length
    var numOfTopic3 = fullQuestions.filter(function (question) { return question.topic == 3 }).length
    var numOfTopic4 = fullQuestions.filter(function (question) { return question.topic == 4 }).length
    var numOfTopic5 = fullQuestions.filter(function (question) { return question.topic == 5 }).length
    var numOfTopic6 = fullQuestions.filter(function (question) { return question.topic == 6 }).length
    var numOfTopic7 = fullQuestions.filter(function (question) { return question.topic == 7 }).length
    var numOfTopic8 = fullQuestions.filter(function (question) { return question.required > 0 }).length

    topics = [
        { "code": 0, "display": "Toàn bộ câu hỏi", "subTitle": `${numOfQuestion} câu`, "num": numOfQuestion },
        { "code": 1, "display": "Khái niệm và quy tắc giao thông", "subTitle": `${numOfTopic1} câu`, "num": numOfTopic1 },
        { "code": 2, "display": "Nghiệp vụ vận tải", "subTitle": `${numOfTopic2} câu`, "num": numOfTopic2 },
        { "code": 3, "display": "Văn hoá và đạo đức", "subTitle": `${numOfTopic3} câu`, "num": numOfTopic3 },
        { "code": 4, "display": "Kỹ thuật lái xe", "subTitle": `${numOfTopic4} câu`, "num": numOfTopic4 },
        { "code": 5, "display": "Cấu tạo và sữa chữa", "subTitle": `${numOfTopic5} câu`, "num": numOfTopic5 },
        { "code": 6, "display": "Biển báo và đường bộ", "subTitle": `${numOfTopic6} câu`, "num": numOfTopic6 },
        { "code": 7, "display": "Sa hình", "subTitle": `${numOfTopic7} câu`, "num": numOfTopic7 },
        { "code": 8, "display": "Câu liệt", "subTitle": `${numOfTopic8} câu`, "num": numOfTopic8 }];
}