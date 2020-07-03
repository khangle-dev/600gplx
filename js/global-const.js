var fullLicenses = [
    {"code":"A1", "display":"Xe môtô 2 bánh có dung tích xi-lanh từ 50cc đến dưới 175cc", "timer":900, "pass":21, "randQuestions":[{"topicCode":1, "num":11},{"topicCode":2, "num":0},{"topicCode":3, "num":0},{"topicCode":4, "num":2},{"topicCode":5, "num":0},{"topicCode":6, "num":8},{"topicCode":7, "num":4}]},
    {"code":"A2", "display":"Xe môtô 2 bánh có dung tích xi-lanh từ 175cc trở lên", "timer":900, "pass":23, "randQuestions":[{"topicCode":1, "num":8},{"topicCode":2, "num":0},{"topicCode":3, "num":1},{"topicCode":4, "num":1},{"topicCode":5, "num":1},{"topicCode":6, "num":10},{"topicCode":7, "num":4}]},
    {"code":"A3", "display":"Xe môtô 3 bánh", "timer":900, "pass":23, "randQuestions":[{"topicCode":1, "num":9},{"topicCode":2, "num":0},{"topicCode":3, "num":1},{"topicCode":4, "num":1},{"topicCode":5, "num":0},{"topicCode":6, "num":9},{"topicCode":7, "num":5}]},
    {"code":"A4", "display":"Xe máy kéo có tải trọng đến 1.000 kg", "timer":900, "pass":24, "randQuestions":[{"topicCode":1, "num":8},{"topicCode":2, "num":0},{"topicCode":3, "num":1},{"topicCode":4, "num":1},{"topicCode":5, "num":0},{"topicCode":6, "num":9},{"topicCode":7, "num":6}]},
    
    {"code":"B1", "display":"Không hành nghề lái xe, xe đến 9 chỗ ngồi, xe trọng tải dưới 3.500 kg", "timer":1020, "pass":26, "randQuestions":[{"topicCode":1, "num":9},{"topicCode":2, "num":0},{"topicCode":3, "num":1},{"topicCode":4, "num":3},{"topicCode":5, "num":1},{"topicCode":6, "num":9},{"topicCode":7, "num":7}]},
    {"code":"B2", "display":"Hành nghề lái xe, xe đến 9 chỗ ngồi, xe trọng tải dưới 3.500 kg", "timer":1200, "pass":32, "randQuestions":[{"topicCode":1, "num":10},{"topicCode":2, "num":1},{"topicCode":3, "num":1},{"topicCode":4, "num":3},{"topicCode":5, "num":2},{"topicCode":6, "num":10},{"topicCode":7, "num":8}]},

    {"code":"C", "display":"Xe đến 9 chỗ ngồi, xe trọng tải trên 3.500 kg", "timer":1320, "pass":37, "randQuestions":[{"topicCode":1, "num":12},{"topicCode":2, "num":2},{"topicCode":3, "num":4},{"topicCode":4, "num":2},{"topicCode":5, "num":3},{"topicCode":6, "num":12},{"topicCode":7, "num":7}]},

    {"code":"D", "display":"Xe từ 10 đến 30 chỗ ngồi", "timer":1500, "pass":42, "randQuestions":[{"topicCode":1, "num":12},{"topicCode":2, "num":2},{"topicCode":3, "num":2},{"topicCode":4, "num":4},{"topicCode":5, "num":2},{"topicCode":6, "num":12},{"topicCode":7, "num":7}]},
    {"code":"E", "display":"Xe trên 30 chỗ ngồi", "timer":1500, "pass":42, "randQuestions":[{"topicCode":1, "num":12},{"topicCode":2, "num":2},{"topicCode":3, "num":2},{"topicCode":4, "num":4},{"topicCode":5, "num":2},{"topicCode":6, "num":12},{"topicCode":7, "num":7}]},
    {"code":"F", "display":"Các loại xe rơ moóc có trọng tải trên 750 kg, sơ mi rơ moóc, ô tô khách nối toa", "timer":1500, "pass":42, "randQuestions":[{"topicCode":1, "num":12},{"topicCode":2, "num":2},{"topicCode":3, "num":2},{"topicCode":4, "num":4},{"topicCode":5, "num":2},{"topicCode":6, "num":12},{"topicCode":7, "num":7}]}
]

if (localStorage.getItem("is_license")){

}else{
    localStorage.setItem("is_license", "B2")
}

var license = fullLicenses.filter(function(lic){return lic.code==(localStorage.getItem("is_license")?localStorage.getItem("is_license"):"B2")})[0]
