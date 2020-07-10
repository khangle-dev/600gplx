app.controller("nd100Ctrl", function($scope) {
    var elementTop1 = 0;
    var elementTop2 = 0;
    var elementTop3 = 0;

    var hash1 = "";
    var hash2 = "";
    var hash3 = "";

    if (window.location.hash) {
        var bookmarks = window.location.hash.split("?")
        var hash = bookmarks[1] //window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        var element = document.getElementsByName(hash)[0];
        element.style.backgroundColor = "#C8E6C9"
        elementTop1 = element.offsetTop;

        if (hash.indexOf("diem_") >= 0) {

            var temp = hash.substring(hash.indexOf("_") + 1);
            var res1 = temp.substring(0, temp.indexOf("_"));
            temp = temp.substring(temp.indexOf("_") + 1);
            var res2 = temp.substring(0, temp.indexOf("_"));
            temp = temp.substring(temp.indexOf("_") + 1);
            var res3 = temp;

            hash2 = "khoan_" + res1 + "_" + res2;
            var element = document.getElementsByName(hash2)[0];
            element.style.backgroundColor = "#C8E6C9"
            elementTop2 = element.offsetTop;

            hash3 = "dieu_" + res1;
            var element = document.getElementsByName(hash3)[0];
            element.style.backgroundColor = "#C8E6C9"
            elementTop3 = element.offsetTop;

            if (res3 == "dd") {
                res3 = "đ";
            }
        }
        if (hash.indexOf("khoan_") >= 0) {

            var temp = hash.substring(hash.indexOf("_") + 1);
            var res1 = temp.substring(0, temp.indexOf("_"));
            temp = temp.substring(temp.indexOf("_") + 1);
            var res2 = temp;


            hash2 = "dieu_" + res1;
            var element = document.getElementsByName(hash2)[0];
            element.style.backgroundColor = "#ffc69c"
            elementTop2 = element.offsetTop;
        }

        let goto = elementTop1 == 0 ? (elementTop2 == 0 ? (elementTop3) : elementTop2) : elementTop1
        window.scrollTo({
            top: goto,
            behavior: 'smooth'
        });
    }
});