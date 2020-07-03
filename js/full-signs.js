const signTopics = [
    {"signType":"P", "display":"Biển báo cấm", "subTitle":"Biển báo có dạng tròn viền đỏ, nền màu trắng, trên nền có hình vẽ màu đen đặc trưng cho điều cấm hoặc hạn chế sự đi lại"},
    {"signType":"W", "display":"Biển báo nguy hiểm", "subTitle":"Biển báo có dạng hình tam giác đều, viền đỏ, nền màu vàng, trên có hình vẽ màu đen mô tả sự việc báo hiệu nhằm báo cho người sử dụng đường biết trước tính chất các sự nguy hiểm trên đường để có biện pháp phòng ngừa, xử trí"},
    {"signType":"I", "display":"Biển chỉ dẫn", "subTitle":"Biển báo có dạng hình vuông hoặc hình chữ nhật, nền xanh, hình vẽ màu trắng. Biển chỉ dẫn để chỉ dẫn hướng đi hoặc các điều cần biết nhằm thông báo cho những người sử dụng đường biết những định hướng cần thiết hoặc những điều có ích khác, đồng thời có tác dụng giúp cho việc điều khiển và hướng dẫn giao thông trên đường được thuận lợi, đảm bảo an toàn chuyển động"},
    {"signType":"R", "display":"Biển hiệu lệnh", "subTitle":"Biển báo có dạng hình tròn, nền xanh với hình vẽ màu trắng. Chúng đưa ra những hiệu lệnh mà người đi đường phải thực hiện"},
    {"signType":"S", "display":"Biển báo phụ", "subTitle":"Biển báo có dạng hình vuông hoặc hình chữ nhật, viền đen, nền trắng, hình vẽ màu đen, thường nằm dưới các biển chính để bổ sung làm rõ ý nghĩa các biển chính"}
]
const fullSigns = [{
    "signType": "P",
    "code": "P.101",
    "name": "Đường cấm",
    "detail": "Biển báo đường cấm tất cả các loại phương tiện tham gia giao thông đi lại cả hai hướng, trừ xe ưu tiên theo luật định.",
    "image": "P101"
},
{
    "signType": "P",
    "code": "P.102",
    "name": "Cấm đi ngược chiều",
    "detail": "Biển báo đường cấm tất cả các loại phương tiện tham gia giao thông đi vào theo chiều đặt biển.",
    "image": "P102"
},
{
    "signType": "P",
    "code": "P.103a",
    "name": "Cấm ô tô",
    "detail": "Biển báo đường cấm tất cả các loại xe cơ giới kể cả mô tô 3 bánh có thùng đi qua, trừ xe mô tô 2 bánh, xe gắn máy (kể cả xe máy điện) và các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P103a"
},
{
    "signType": "P",
    "code": "P.103b",
    "name": "Cấm ô tô rẽ phải",
    "detail": "Biển báo đường cấm xe ô tô rẽ phải ( kể cả xe mô tô ba bánh), trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P103b"
},
{
    "signType": "P",
    "code": "P.103c",
    "name": "Cấm ô tô rẽ trái",
    "detail": "Biển báo đường cấm xe ô tô rẽ trái và cũng không được phép quay đầu xe, trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P103c"
},
{
    "signType": "P",
    "code": "P.104",
    "name": "Cấm mô tô",
    "detail": "Biển báo đường cấm tất cả các loại mô tô đi qua, trừ các loại xe mô tô được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P104"
},
{
    "signType": "P",
    "code": "P.105",
    "name": "Cấm ô tô và mô tô",
    "detail": "Biển báo đường cấm tất cả xe cơ giới và xe mô tô đi qua trừ xe gắn máy và xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P105"
},
{
    "signType": "P",
    "code": "P.106a",
    "name": "Cấm ô tô tải",
    "detail": "Biển báo đường cấm tất cả các loại xe ô tô tải trừ các xe được ưu tiên theo Luật Giao thông đường bộ, hiệu lực cấm đối với cả máy kéo và xe máy chuyên dùng.",
    "image": "P106a"
},
{
    "signType": "P",
    "code": "P.106b",
    "name": "Cấm ô tô tải theo trọng lượng",
    "detail": "Trọng lượng được tính theo tấn ghi trên biển",
    "image": "P106b"
},
{
    "signType": "P",
    "code": "P.106c",
    "name": "Cấm ô tô tải chở hàng nguy hiểm",
    "detail": "Biển báo P.106c đường cấm tất cả các loại xe ô tô tải chở hàng nguy hiểm.",
    "image": "P106c"
},
{
    "signType": "P",
    "code": "P.107",
    "name": "Cấm ô tô khách và ô tô tải",
    "detail": "Biển báo đường cấm xe ô tô khách và các loại xe ô tô tải, kể cả máy kéo và xe máy chuyên dùng đi qua, trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P107"
},
{
    "signType": "P",
    "code": "P.107a",
    "name": "Cấm ô tô khách",
    "detail": "Biển báo đường cấm ôtô chở khách đi qua trừ các xe ưu tiên theo quy định. Biển này không cấm xe buýt.",
    "image": "P107a"
},
{
    "signType": "P",
    "code": "P.107b",
    "name": "Cấm xe taxi",
    "detail": "Biển báo đường cấm ôtô taxi đi lại. Trường hợp cấm xe ôtô taxi theo giờ thì đặt biển phụ ghi giờ cấm.",
    "image": "P107b"
},
{
    "signType": "P",
    "code": "P.108",
    "name": "Cấm ôtô kéo rơ moóc",
    "detail": "Biển báo đường cấm tất cả các loại xe cơ giới kéo theo rơ moóc kể cả xe mô tô, máy kéo, xe ô tô khách kéo theo rơ moóc đi qua, trừ loại xe ô tô sơ mi rơ moóc và các xe được ưu tiên theo Luật Giao thông đường bộ (có kéo theo rơ moóc).",
    "image": "P108"
},
{
    "signType": "P",
    "code": "P.108a",
    "name": "Cấm xe sơ-mi rơ-moóc",
    "detail": "Biển báo đường cấm các loại xe sơ-mi-rơ-moóc và các xe kéo rơ- moóc trừ các xe được ưu tiên (có dạng xe sơ-mi-rơ-moóc hoặc có kéo theo rơ-moóc) theo quy định.",
    "image": "P108a"
},
{
    "signType": "P",
    "code": "P.109",
    "name": "Cấm máy kéo",
    "detail": "Biển báo đường cấm tất cả các loại máy kéo, kể cả máy kéo bánh hơi và bánh xích đi qua.",
    "image": "P109"
},
{
    "signType": "P",
    "code": "P.110a",
    "name": "Cấm xe đạp",
    "detail": "Biển báo đường cấm xe đạp đi qua. Biển không có giá trị cấm những người dắt xe đạp.",
    "image": "P110a"
},
{
    "signType": "P",
    "code": "P.110b",
    "name": "Cấm xe đạp thồ",
    "detail": "Biển báo đường cấm xe đạp thồ đi qua. Biển không có giá trị cấm người dắt loại xe này.",
    "image": "P110b"
},
{
    "signType": "P",
    "code": "P.111a",
    "name": "Cấm xe gắn máy",
    "detail": "Biển báo đường cấm xe gắn máy đi qua. Biển không có giá trị cấm đối với xe đạp.",
    "image": "P111a"
},
{
    "signType": "P",
    "code": "P.112",
    "name": "Cấm người đi bộ",
    "detail": "Biển báo đường cấm người đi bộ qua lại.",
    "image": "P112"
},
{
    "signType": "P",
    "code": "P.113",
    "name": "Cấm xe người kéo, đẩy",
    "detail": "Biển báo đường cấm xe người kéo đẩy đi qua. Biển không có giá trị cấm những xe nôi của trẻ em và phương tiện chuyên dùng để đi lại của những người khuyết tật.",
    "image": "P113"
},
{
    "signType": "P",
    "code": "P.114",
    "name": "Cấm xe súc vật kéo",
    "detail": "Biển báo đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.",
    "image": "P114"
},
{
    "signType": "P",
    "code": "P.115",
    "name": "Hạn chế trọng lượng xe",
    "detail": "Biển báo đường cấm các loại phương tiện giao thông đường bộ kể cả các xe được ưu tiên theo Luật Giao thông đường bộ có trọng lượng toàn bộ (cả xe và hàng) vượt quá trị số ghi trên biển tính bằng tấn đi qua.",
    "image": "P115"
},
{
    "signType": "P",
    "code": "P.116",
    "name": "Hạn chế trọng lượng trên trục xe",
    "detail": "Biển báo đường cấm các loại phương tiện giao thông đường bộ, kể cả các xe được ưu tiên theo Luật Giao thông đường bộ có trọng lượng toàn bộ (cả xe và hàng) phân bố trên một trục bất kỳ của xe vượt quá trị số ghi trên biển tính bằng tấn đi qua.",
    "image": "P116"
},
{
    "signType": "P",
    "code": "P.117",
    "name": "Hạn chế chiều cao",
    "detail": "Biển có hiệu lực cấm các loại phương tiện giao thông đường bộ đi qua, kể cả các xe được ưu tiên theo Luật Giao thông đường bộ có chiều cao (tính đến điểm cao nhất cả xe và hàng hóa) vượt quá trị số ghi trên biển tính bằng mét đi qua.",
    "image": "P117"
},
{
    "signType": "P",
    "code": "P.118",
    "name": "Hạn chế chiều ngang",
    "detail": "Biển có hiệu lực cấm các loại phương tiện giao thông đường bộ kể cả các xe được ưu tiên theo Luật Giao thông đường bộ có chiều ngang (cả xe và hàng hóa) vượt quá trị số ghi trên biển tính bằng mét đi qua.",
    "image": "P118"
},
{
    "signType": "P",
    "code": "P.119",
    "name": "Hạn chế chiều dài ô tô",
    "detail": "Biển báo đường cấm các loại xe (cơ giới và thô sơ), kể cả các xe được ưu tiên theo Luật Giao thông đường bộ, có độ dài toàn bộ (cả xe và hàng) vượt quá trị số ghi trên biển tính bằng mét đi qua.",
    "image": "P119"
},
{
    "signType": "P",
    "code": "P.120",
    "name": "Hạn chế chiều dài ô tô kéo moóc",
    "detail": "Biển báo đường cấm các loại phương tiện giao thông đường bộ kéo theo rơ moóc kể cả ô tô sơ mi rơ moóc và các xe được ưu tiên theo Luật Giao thông đường bộ kéo theo rơ moóc có độ dài toàn bộ (cả xe, rơ moóc và hàng) vượt quá trị số ghi trên biển đi qua.",
    "image": "P120"
},
{
    "signType": "P",
    "code": "P.121",
    "name": "Cự ly tối thiểu giữa hai xe",
    "detail": "Biển báo xe ô tô phải đi cách nhau một khoảng tối thiểu. Biển có hiệu lực cấm các xe ô tô không được đi cách nhau với cự ly nhỏ hơn trị số ghi trên biển tính bằng mét, kể cả các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P121"
},
{
    "signType": "P",
    "code": "P.123a",
    "name": "Cấm rẽ trái",
    "detail": "Biển báo đường cấm các loại phương tiện giao thông đường bộ (xe cơ giới và xe thô sơ) rẽ trái, trừ các xe được ưu tiên theo Luật Giao thông đường bộ. Biển không có giá trị cấm quay đầu xe.",
    "image": "P123a"
},
{
    "signType": "P",
    "code": "P.123b",
    "name": "Cấm rẽ phải",
    "detail": "Biển báo đường cấm các loại phương tiện giao thông đường bộ (xe cơ giới và xe thô sơ) rẽ phải, trừ các xe được ưu tiên theo Luật Giao thông đường bộ. Biển không có giá trị cấm quay đầu xe.",
    "image": "P123b"
},
{
    "signType": "P",
    "code": "P.124a",
    "name": "Cấm quay đầu xe",
    "detail": "Biển báo đường cấm các loại phương tiện giao thông đường bộ quay đầu xe theo kiểu chữ U, trừ các xe được ưu tiên theo Luật Giao thông đường bộ. Biển không có giá trị cấm rẽ trái để sang hướng đường khác.",
    "image": "P124a"
},
{
    "signType": "P",
    "code": "P.124b",
    "name": "Cấm ô tô quay đầu",
    "detail": "Biển báo đường cấm xe ô tô và xe mô tô 3 bánh quay đầu xe theo kiểu chữ U, trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P124b"
},
{
    "signType": "P",
    "code": "P.124c",
    "name": "Cấm rẽ trái và quay đầu xe",
    "detail": "Biển báo cấm các loại xe rẽ trái đồng thời cấm quay đầu, trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P124c"
},
{
    "signType": "P",
    "code": "P.124d",
    "name": "Cấm rẽ phải và quay đầu xe",
    "detail": "Biển báo cấm các loại xe rẽ phải đồng thời cấm quay đầu, trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P124d"
},
{
    "signType": "P",
    "code": "P.124e",
    "name": "Cấm ô tô rẽ trái và quay xe",
    "detail": "Biển báo cấm xe ôtô rẽ trái và đồng thời cấm quay đầu phải, trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P124e"
},
{
    "signType": "P",
    "code": "P.124f",
    "name": "Cấm ô tô rẽ phải và quay xe",
    "detail": "Biển báo cấm xe ôtô rẽ phải và đồng thời cấm quay đầu phải, trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P124f"
},
{
    "signType": "P",
    "code": "P.125",
    "name": "Cấm vượt",
    "detail": "Biển có hiệu lực cấm tất cả các loại xe cơ giới vượt nhau, kể cả các xe được ưu tiên theo Luật Giao thông đường bộ. được phép vượt xe mô tô 2 bánh, xe gắn máy. Biển hết hiệu lực cấm khi có biển số DP.133 'Hết cấm vượt' hoặc đến chỗ có biển số DP.135 'Hết tất cả các lệnh cấm' nếu đồng thời có nhiều biển cấm khác hết tác dụng.",
    "image": "P125"
},
{
    "signType": "P",
    "code": "P.126",
    "name": "Cấm ôtô tải vượt",
    "detail": "Biển có hiệu lực cấm các loại ôtô tải có khối lượng chuyên chở (theo Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường phương tiện giao thông cơ giới đường bộ) lớn hơn 3.500 kg (3,5 tấn) kể cả các xe được ưu tiên theo quy định vượt xe cơ giới khác. được phép vượt xe máy 2 bánh, xe gắn máy. Biển không có giá trị cấm các loại xe cơ giới khác vượt nhau và vượt xe ô tô tải.",
    "image": "P126"
},
{
    "signType": "P",
    "code": "P.127",
    "name": "Tốc độ tối đa cho phép",
    "detail": "Biển có hiệu lực cấm tất cả các loại xe cơ giới đường bộ chạy với tốc độ tối đa vượt quá trị số ghi trên biển (tính bằng km/h), trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "P127"
},
{
    "signType": "P",
    "code": "P.127a",
    "name": "Tốc độ tối đa cho phép về ban đêm",
    "detail": "Biển có hiệu lực cấm tất cả các loại xe cơ giới đường bộ chạy ban đêm với tốc độ tối đa vượt quá trị số ghi trên biển (tính bằng km/h), trừ một số trường hợp ưu tiên được quy định.",
    "image": "P127a"
},
{
    "signType": "P",
    "code": "P.127b",
    "name": "Tốc độ tối đa trên từng làn đường",
    "detail": "Biển ghép tốc độ tối đa cho phép trên từng làn đường",
    "image": "P127b"
},
{
    "signType": "P",
    "code": "P.127c",
    "name": "Tốc độ tối đa phương tiện trên từng làn đường",
    "detail": "Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường",
    "image": "P127c"
},
{
    "signType": "P",
    "code": "P.127d",
    "name": "Biển hết hạn chế tốc độ tối đa",
    "detail": "Biển hết hạn chế tốc độ tối đa cho phép theo biển ghép",
    "image": "P127d"
},
{
    "signType": "P",
    "code": "P.128",
    "name": "Cấm bóp còi",
    "detail": "Biển báo cấm các loại xe cơ giới sử dụng còi.",
    "image": "P128"
},
{
    "signType": "P",
    "code": "P.129",
    "name": "Kiểm tra",
    "detail": "Biển báo nơi đặt trạm kiểm tra, các loại phương tiện vận tải qua đó phải dừng lại để làm thủ tục kiểm tra, kiểm soát theo quy định.",
    "image": "P129"
},
{
    "signType": "P",
    "code": "P.130",
    "name": "Cấm dừng và đỗ xe",
    "detail": "Biển có hiệu lực cấm các loại xe cơ giới đường bộ dừng và đỗ lại ở phía đường có đặt biển,",
    "image": "P130"
},
{
    "signType": "P",
    "code": "P.131a",
    "name": "Cấm đỗ xe",
    "detail": "Biển số 131a có hiệu lực cấm các loại xe cơ giới đỗ ở phía đường có đặt biển vào bất kể ngày nào.",
    "image": "P131a"
},
{
    "signType": "P",
    "code": "P.131b",
    "name": "Cấm đỗ xe ngày lẻ",
    "detail": "Biển có hiệu lực cấm các loại xe cơ giới đỗ ở phía đường có đặt biển vào những ngày lẻ.",
    "image": "P131b"
},
{
    "signType": "P",
    "code": "P.131c",
    "name": "Cấm đỗ xe ngày chẵn",
    "detail": "Biển có hiệu lực cấm các loại xe cơ giới đỗ ở phía đường có đặt biển vào những ngày chẵn.",
    "image": "P131c"
},
{
    "signType": "P",
    "code": "P.132",
    "name": "Nhường cho xe ngược chiều qua đường hẹp",
    "detail": "Biển báo cho các loại phương tiện giao thông đường bộ (cơ giới và thô sơ), kể cả các xe được ưu tiên theo Luật Giao thông đường bộ đi theo chiều nhìn thấy biển phải nhường đường cho các loại xe cơ giới đi theo chiều ngược lại khi đi qua các đoạn đường và cầu hẹp.",
    "image": "P132"
},
{
    "signType": "P",
    "code": "DP.133",
    "name": "Hết cấm vượt",
    "detail": "Biển báo cho người lái xe biết hiệu lực của biển số P.125 'Cấm vượt' và biển số P.126 'Cấm ô tô tải vượt' hết tác dụng.",
    "image": "DP133"
},
{
    "signType": "P",
    "code": "DP.134",
    "name": "Hết hạn chế tốc độ tối đa",
    "detail": "Biển báo cho người lái xe biết hiệu lực của biển số P.127 'Hạn chế tốc độ tối đa' hết tác dụng. Kể từ biển này, các xe được phép chạy với tốc độ tối đa đã quy định trong Luật Giao thông đường bộ.",
    "image": "DP134"
},
{
    "signType": "P",
    "code": "DP.135",
    "name": "Hết tất cả các lệnh cấm",
    "detail": "Biển báo cho người lái xe biết hiệu lực của biển số P.121 'Cự ly tối thiểu giữa hai xe' và các biển từ biển số P.125 đến P.131 (a, b, c) được đặt trước đó cùng hết tác dụng.",
    "image": "DP135"
},
{
    "signType": "P",
    "code": "P.136",
    "name": "Cấm đi thẳng",
    "detail": "Biển được đặt trước nơi đường giao nhau và có hiệu lực cấm tất cả các loại phương tiện giao thông đường bộ (cơ giới và thô sơ) đi thẳng ở nơi đường giao nhau.",
    "image": "P136"
},
{
    "signType": "P",
    "code": "P.137",
    "name": "Cấm rẽ trái và rẽ phải",
    "detail": "Biển được đặt trước nơi đường giao nhau và có hiệu lực cấm tất cả các loại phương tiện giao thông đường bộ (cơ giới và thô sơ) rẽ trái và rẽ phải ở nơi đường giao nhau.",
    "image": "P137"
},
{
    "signType": "P",
    "code": "P.138",
    "name": "Cấm đi thẳng và rẽ trái",
    "detail": "Biển được đặt trước nơi đường giao nhau và có hiệu lực cấm tất cả các loại phương tiện giao thông đường bộ (cơ giới và thô sơ) đi thẳng và rẽ trái ở nơi đường giao nhau.",
    "image": "P138"
},
{
    "signType": "P",
    "code": "P.139",
    "name": "Cấm đi thẳng và rẽ phải",
    "detail": "Biển được đặt trước nơi đường giao nhau và có hiệu lực cấm tất cả các loại phương tiện giao thông đường bộ (cơ giới và thô sơ) đi thẳng và rẽ phải ở nơi đường giao nhau.",
    "image": "P139"
},
{
    "signType": "P",
    "code": "P.140",
    "name": "Cấm xe công nông và các loại xe tương tự",
    "detail": "Biển báo đường cấm tất cả các loại xe công nông và các loại xe tương tự đi qua.",
    "image": "P140"
},
{
    "signType": "P",
    "code": "S.508a",
    "name": "Biển cấm theo giờ",
    "detail": "Khi cần báo hiệu cấm các loại phương tiện giao thông đường bộ theo giờ trong thành phố, thị xã phải đặt biển phụ số S508(a,b) dưới biển cấm và có chú thích bằng tiếng Việt, phụ đề tiếng Anh trong biển này.",
    "image": "S508a"
},
{
    "signType": "P",
    "code": "S.508b",
    "name": "Biển cấm theo giờ",
    "detail": "Khi cần báo hiệu cấm các loại phương tiện giao thông đường bộ theo giờ trong thành phố, thị xã phải đặt biển phụ số S508(a,b) dưới biển cấm và có chú thích bằng tiếng Việt, phụ đề tiếng Anh trong biển này.",
    "image": "S508b"
},
{
    "signType": "W",
    "code": "W.201a",
    "name": "Chỗ ngoặt nguy hiểm bên trái",
    "detail": "Biển báo đường sắp đến chỗ ngoặt nguy hiểm.",
    "image": "W201a"
},
{
    "signType": "W",
    "code": "W.201b",
    "name": "Chỗ ngoặt nguy hiểm bên phải",
    "detail": "Biển báo đường sắp đến chỗ ngoặt nguy hiểm.",
    "image": "W201b"
},
{
    "signType": "W",
    "code": "W.201c",
    "name": "Chỗ ngoặt nguy hiểm có nguy cơ lật bên phải",
    "detail": "Biển số W.201c chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
    "image": "W201c"
},
{
    "signType": "W",
    "code": "W.201d",
    "name": "Chỗ ngoặt nguy hiểm có nguy cơ lật bên trái",
    "detail": "Biển số W.201d chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng bên phải.",
    "image": "W201d"
},
{
    "signType": "W",
    "code": "W.202a",
    "name": "Nhiều chỗ ngoặt nguy hiểm liên tiếp",
    "detail": "Biển báo sắp đến đoạn đường ngoặt liên tiếp (có từ 3 đoạn cong ngược chiều nhau) rất nguy hiểm, người lái xe cần giảm tốc độ.",
    "image": "W202a"
},
{
    "signType": "W",
    "code": "W.202b",
    "name": "Nhiều chỗ ngoặt nguy hiểm liên tiếp",
    "detail": "Biển báo sắp đến đoạn đường ngoặt liên tiếp (có từ 3 đoạn cong ngược chiều nhau) rất nguy hiểm, người lái xe cần giảm tốc độ.",
    "image": "W202b"
},
{
    "signType": "W",
    "code": "W.203a",
    "name": "Đường bị hẹp cả hai bên",
    "detail": "Biển báo sắp đến chỗ một đoạn đường bị hẹp đột ngột.",
    "image": "W203a"
},
{
    "signType": "W",
    "code": "W.203b",
    "name": "Đường bị hẹp bên trái",
    "detail": "Biển báo sắp đến chỗ một đoạn đường bị hẹp đột ngột.",
    "image": "W203b"
},
{
    "signType": "W",
    "code": "W.203c",
    "name": "Đường bị hẹp bên phải",
    "detail": "Biển báo sắp đến chỗ một đoạn đường bị hẹp đột ngột.",
    "image": "W203c"
},
{
    "signType": "W",
    "code": "W.204",
    "name": "Đường hai chiều",
    "detail": "Biển báo hiệu sắp đến đoạn đường chỉ có một làn đường mà tạm thời (đường do sửa chữa hoặc có trở ngại ở một phía đường mà phải tổ chức đi lại cho phương tiện cả hai chiều trên phía đường còn lại) hay thường xuyên các chiều xe đi và về vẫn phải dùng chung. Khi qua đoạn đường này, lái xe cần thận trọng với xe phía chiều ngược lại.",
    "image": "W204"
},
{
    "signType": "W",
    "code": "W.205a",
    "name": "Nơi giao nhau của đường đồng cấp",
    "detail": "Biển báo hiệu sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng.",
    "image": "W205a"
},
{
    "signType": "W",
    "code": "W.205b",
    "name": "Nơi giao nhau của đường đồng cấp",
    "detail": "Biển báo hiệu sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng.",
    "image": "W205b"
},
{
    "signType": "W",
    "code": "W.205c",
    "name": "Nơi giao nhau của đường đồng cấp",
    "detail": "Biển báo hiệu sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng.",
    "image": "W205c"
},
{
    "signType": "W",
    "code": "W.205d",
    "name": "Nơi giao nhau của đường đồng cấp",
    "detail": "Biển báo hiệu sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng.",
    "image": "W205d"
},
{
    "signType": "W",
    "code": "W.205e",
    "name": "Nơi giao nhau của đường đồng cấp",
    "detail": "Biển báo hiệu sắp đến nơi giao nhau của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng.",
    "image": "W205e"
},
{
    "signType": "W",
    "code": "W.206",
    "name": "Giao nhau chạy theo vòng xuyến",
    "detail": "Biển báo hiệu nơi giao nhau có bố trí đảo an toàn ở giữa điểm giao, các loại xe qua điểm giao vòng trái phải đi vòng xuyến qua đảo an toàn.",
    "image": "W206"
},
{
    "signType": "W",
    "code": "W.207a",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207a"
},
{
    "signType": "W",
    "code": "W.207b",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207b"
},
{
    "signType": "W",
    "code": "W.207c",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207c"
},
{
    "signType": "W",
    "code": "W.207d",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207d"
},
{
    "signType": "W",
    "code": "W.207e",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207e"
},
{
    "signType": "W",
    "code": "W.207f",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207f"
},
{
    "signType": "W",
    "code": "W.207g",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207g"
},
{
    "signType": "W",
    "code": "W.207h",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207h"
},
{
    "signType": "W",
    "code": "W.207i",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207i"
},
{
    "signType": "W",
    "code": "W.207k",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207k"
},
{
    "signType": "W",
    "code": "W.207l",
    "name": "Giao nhau với đường không ưu tiên",
    "detail": "Biển báo hiệu đường ưu tiên sắp đến nơi giao nhau với đường không ưu tiên.",
    "image": "W207l"
},
{
    "signType": "W",
    "code": "W.208",
    "name": "Giao nhau với đường ưu tiên",
    "detail": "Biển báo hiệu đường không đươc ưu tiên sắp đến nơi giao nhau với đường ưu tiên (biển được đặt trên đường không ưu tiên). Các xe đi trên đường có đặt biển này phải nhường đường cho xe đi trên đường ưu tiên khi qua nơi giao nhau, trừ các loại xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "W208"
},
{
    "signType": "W",
    "code": "W.209",
    "name": "Giao nhau có tín hiệu đèn",
    "detail": "Biển báo hiệu nơi giao nhau có sự điều khiển giao thông bằng tín hiệu đèn.",
    "image": "W209"
},
{
    "signType": "W",
    "code": "W.210",
    "name": "Giao nhau với đường sắt có rào chắn",
    "detail": "Biển báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt có rào chắn kín hay nửa kín ở cả hai bên đường sắt và có nhân viên ngành đường sắt điều khiển giao thông.",
    "image": "W210"
},
{
    "signType": "W",
    "code": "W.211a",
    "name": "Giao nhau với đường sắt không có rào chắn",
    "detail": "Biển báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt hoặc đường bộ và đường sắt có từng đoạn đi chung với nhau không có rào chắn, không có người điều khiển giao thông.",
    "image": "W211a"
},
{
    "signType": "W",
    "code": "W.211b",
    "name": "Giao nhau với đường tàu điện",
    "detail": "Biển báo hiệu sắp đến chỗ giao nhau cùng mức giữa đường bộ với đường tàu điện.",
    "image": "W211b"
},
{
    "signType": "W",
    "code": "W.212",
    "name": "Cầu hẹp",
    "detail": "Biển báo hiệu sắp đến cầu hẹp (loại cầu có chiều rộng lòng cầu nhỏ hơn hoặc bằng 4,5 m). Khi qua cầu này, lái xe phải đi chậm, quan sát, nhường nhau và dừng lại chờ ở hai đầu cầu.",
    "image": "W212"
},
{
    "signType": "W",
    "code": "W.213",
    "name": "Cầu tạm",
    "detail": "Biển báo hiệu sắp đến cầu tạm (loại cầu được làm để sử dụng tạm thời cho xe qua lại). Khi gặp biển này lái xe cần thận trọng và lưu ý sau mỗi trận mưa lũ hoặc khi nước ngập nhất thiết không qua cầu.",
    "image": "W213"
},
{
    "signType": "W",
    "code": "W.214",
    "name": "Cầu xoay-cầu cất",
    "detail": "Biển báo hiệu sắp đến cầu xoay, cầu cất (loại cầu trong từng thời gian có cắt giao thông đường bộ để cho tàu thuyền qua lại). Các phương tiện đi trên đường bộ phải chờ đợi.",
    "image": "W214"
},
{
    "signType": "W",
    "code": "W.215a",
    "name": "Kè vực sâu phía trước",
    "detail": "Biển báo hiệu sắp đến những chỗ có kè, vực sâu hoặc bờ sông áp sát đường, lái xe cần đề phòng tình huống nguy hiểm vượt kè, tụt xuống vực sâu (thường xảy ra ở những chỗ nguy hiểm).",
    "image": "W215a"
},
{
    "signType": "W",
    "code": "W.215b",
    "name": "Kè vực sâu phía trước",
    "detail": "Biển báo hiệu sắp đến những chỗ có kè, vực sâu hoặc bờ sông áp sát đường, lái xe cần đề phòng tình huống nguy hiểm vượt kè, tụt xuống vực sâu (thường xảy ra ở những chỗ nguy hiểm).",
    "image": "W215b"
},
{
    "signType": "W",
    "code": "W.215c",
    "name": "Kè vực sâu phía trước",
    "detail": "Biển báo hiệu sắp đến những chỗ có kè, vực sâu hoặc bờ sông áp sát đường, lái xe cần đề phòng tình huống nguy hiểm vượt kè, tụt xuống vực sâu (thường xảy ra ở những chỗ nguy hiểm).",
    "image": "W215c"
},
{
    "signType": "W",
    "code": "W.216a",
    "name": "Đường ngầm",
    "detail": "Biển báo hiệu sắp đến chỗ có đường ngầm (đường tràn), đoạn đường vượt qua sông, suối, khe cạn mà nước có thể tràn qua thường xuyên hoặc khi có lũ.",
    "image": "W216a"
},
{
    "signType": "W",
    "code": "W.216b",
    "name": "Đường ngầm có nguy cơ lũ quét",
    "detail": "Biển báo hiệu sắp đến chỗ có đường ngầm (đường tràn), đoạn đường vượt qua sông, suối, khe cạn thường xuyên có lũ quét.",
    "image": "W216b"
},
{
    "signType": "W",
    "code": "W.217",
    "name": "Bến phà",
    "detail": "Biển báo hiệu sắp đến bến phà. Người tham gia giao thông đường bộ phải tuân theo nội quy bến phà.",
    "image": "W217"
},
{
    "signType": "W",
    "code": "W.218",
    "name": "Cửa chui",
    "detail": "Biển báo hiệu sắp đến chỗ đường có cổng chui, kiểu cổng tò vò chắn ngang như cổng đường hầm, cổng thành, cầu vượt đường bộ dạng cầu vòm...",
    "image": "W218"
},
{
    "signType": "W",
    "code": "W.219",
    "name": "Dốc xuống nguy hiểm",
    "detail": "Biển báo hiệu sắp đến chỗ dốc xuống nguy hiểm. Trị số ghi trong biển chỉ độ dốc thực tế tính bằng %.",
    "image": "W219"
},
{
    "signType": "W",
    "code": "W.220",
    "name": "Dốc lên nguy hiểm",
    "detail": "Biển báo hiệu sắp đến chỗ dốc lên nguy hiểm. Trị số ghi trong biển chỉ độ dốc thực tế tính bằng %.",
    "image": "W220"
},
{
    "signType": "W",
    "code": "W.221a",
    "name": "Đường ổ gà, sống trâu",
    "detail": "",
    "image": "W221a"
},
{
    "signType": "W",
    "code": "W.221b",
    "name": "Đường có sóng mấp mô nhân tạo",
    "detail": "",
    "image": "W221b"
},
{
    "signType": "W",
    "code": "W.222a",
    "name": "Đường trơn",
    "detail": "Biển báo hiệu sắp đến đoạn đường có thể xảy ra trơn trượt đặc biệt là khi thời tiết xấu, mưa phùn. Lái xe cần tránh hãm phanh, tăng ga, sang số đột ngột hoặc cho xe chạy với tốc độ cao.",
    "image": "W222a"
},
{
    "signType": "W",
    "code": "W.222b",
    "name": "Lề đường nguy hiểm",
    "detail": "",
    "image": "W222b"
},
{
    "signType": "W",
    "code": "W.223a",
    "name": "Vách núi nguy hiểm",
    "detail": "",
    "image": "W223a"
},
{
    "signType": "W",
    "code": "W.223b",
    "name": "Vách núi nguy hiểm",
    "detail": "",
    "image": "W223b"
},
{
    "signType": "W",
    "code": "W.224",
    "name": "Đường người đi bộ cắt ngang",
    "detail": "Biển báo hiệu sắp đến phần đường ngang dành cho người đi bộ. Gặp biển này các lái xe phải nhường đường cho người đi bộ.",
    "image": "W224"
},
{
    "signType": "W",
    "code": "W.225",
    "name": "Trẻ em",
    "detail": "Biển báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua hoặc tụ tập trên đường như ở vườn trẻ, trường học, câu lạc bộ đi ra. Chiều dài của đoạn đường này có thể được chỉ dẫn bằng biển phụ số 501 'Phạm vi tác dụng của biển' đặt bên dưới biển chính.",
    "image": "W225"
},
{
    "signType": "W",
    "code": "W.226",
    "name": "Đường người đi xe đạp cắt ngang",
    "detail": "Biển báo hiệu gần đến chỗ thường có người đi xe đạp từ những đường nhỏ cắt ngang qua hoặc từ đường dành cho xe đạp đi nhập vào đường ô tô.",
    "image": "W226"
},
{
    "signType": "W",
    "code": "W.227",
    "name": "Công trường",
    "detail": "",
    "image": "W227"
},
{
    "signType": "W",
    "code": "W.228a",
    "name": "Đá lở",
    "detail": "",
    "image": "W228a"
},
{
    "signType": "W",
    "code": "W.228b",
    "name": "Đá lở",
    "detail": "",
    "image": "W228b"
},
{
    "signType": "W",
    "code": "W.228c",
    "name": "Sỏi đá bắn lên",
    "detail": "",
    "image": "W228c"
},
{
    "signType": "W",
    "code": "W.228d",
    "name": "Nền đường yếu",
    "detail": "",
    "image": "W228d"
},
{
    "signType": "W",
    "code": "W.229",
    "name": "Dải máy bay lên xuống",
    "detail": "",
    "image": "W229"
},
{
    "signType": "W",
    "code": "W.230",
    "name": "Gia súc",
    "detail": "",
    "image": "W230"
},
{
    "signType": "W",
    "code": "W.231",
    "name": "Thú rừng vượt qua đường",
    "detail": "",
    "image": "W231"
},
{
    "signType": "W",
    "code": "W.232",
    "name": "Gió ngang",
    "detail": "",
    "image": "W232"
},
{
    "signType": "W",
    "code": "W.233",
    "name": "Nguy hiểm khác",
    "detail": "",
    "image": "W233"
},
{
    "signType": "W",
    "code": "W.234",
    "name": "Giao nhau với đường hai chiều",
    "detail": "Biển báo hiệu trên đường một chiều sắp đến chỗ giao nhau với đường hai chiều.",
    "image": "W234"
},
{
    "signType": "W",
    "code": "W.235",
    "name": "Đường đôi",
    "detail": "Biển báo hiệu sắp đến đoạn đường đôi (chiều đi và chiều về phân biệt rõ ràng bằng giải phân cách cứng).",
    "image": "W235"
},
{
    "signType": "W",
    "code": "W.236",
    "name": "Hết đường đôi",
    "detail": "Biển báo hiệu sắp kết thúc đoạn đường đôi (đoạn đường hết giải phân cách cứng).",
    "image": "W236"
},
{
    "signType": "W",
    "code": "W.237",
    "name": "Đường có độ vòng lớn",
    "detail": "Biển báo hiệu sắp đến chiếc cầu có độ vồng rất lớn ảnh hưởng tới tầm nhìn.",
    "image": "W237"
},
{
    "signType": "W",
    "code": "W.238",
    "name": "Đường cao tốc phía trước",
    "detail": "Biển báo hiệu sắp đến đường cao tốc.",
    "image": "W238"
},
{
    "signType": "W",
    "code": "W.239",
    "name": "Đường cáp điện ở phía trên",
    "detail": "",
    "image": "W239"
},
{
    "signType": "W",
    "code": "W.240",
    "name": "Đường hầm phía trước",
    "detail": "Biển báo hiệu sắp tới đường hầm (đường chạy hai chiều xe mà chiếu sáng lại không tốt).",
    "image": "W240"
},
{
    "signType": "W",
    "code": "W.241",
    "name": "Ùn tắc giao thông",
    "detail": "",
    "image": "W241"
},
{
    "signType": "W",
    "code": "W.242a",
    "name": "Nơi đường sắt giao vuông góc với đường bộ",
    "detail": "Biển W.242a báo hiệu chỗ giao nhau chỉ có một đường sắt cắt ngang đường bộ.",
    "image": "W242a"
},
{
    "signType": "W",
    "code": "W.242b",
    "name": "Nơi 2 đường sắt giao nhau với đường bộ",
    "detail": "",
    "image": "W242b"
},
{
    "signType": "W",
    "code": "W.243a",
    "name": "Nơi đường sắt giao không vuông góc với đường bộ",
    "detail": "Đặt cách ray đường sắt gần nhất 50m",
    "image": "W243a"
},
{
    "signType": "W",
    "code": "W.243b",
    "name": "Nơi đường sắt giao không vuông góc với đường bộ",
    "detail": "Đặt cách ray đường sắt gần nhất 100m",
    "image": "W243b"
},
{
    "signType": "W",
    "code": "W.243c",
    "name": "Nơi đường sắt giao không vuông góc với đường bộ",
    "detail": "Đặt cách ray đường sắt gần nhất 150m",
    "image": "W243c"
},
{
    "signType": "W",
    "code": "W.244",
    "name": "Đoạn đường hay xảy ra tai nạn",
    "detail": "Biển báo hiệu đoạn đường phía trước thường xảy ra tai nạn để lái xe cần đặc biệt chú ý.",
    "image": "W244"
},
{
    "signType": "W",
    "code": "W.245a",
    "name": "Đi chậm",
    "detail": "",
    "image": "W245a"
},
{
    "signType": "W",
    "code": "W.245b",
    "name": "Đi chậm",
    "detail": "",
    "image": "W245b"
},
{
    "signType": "W",
    "code": "W.246a",
    "name": "Chú ý chướng ngại vật: Vòng tránh sang hai bên",
    "detail": "Biển báo hiệu phía trước có chướng ngại vật. người lái xe cần giảm tốc độ đi vòng tránh sang hai bên.",
    "image": "W246a"
},
{
    "signType": "W",
    "code": "W.246b",
    "name": "Chú ý chướng ngại vật: Vòng tránh sang bên trái",
    "detail": "Biển báo hiệu phía trước có chướng ngại vật. người lái xe cần giảm tốc độ đi vòng tránh sang bên trái.",
    "image": "W246b"
},
{
    "signType": "W",
    "code": "W.246c",
    "name": "Chú ý chướng ngại vật: Vòng tránh sang bên phải",
    "detail": "Biển báo hiệu phía trước có chướng ngại vật. người lái xe cần giảm tốc độ đi vòng tránh sang bên phải.",
    "image": "W246c"
},
{
    "signType": "W",
    "code": "W.247",
    "name": "Chú ý xe đỗ",
    "detail": "",
    "image": "W247"
},
{
    "signType": "R",
    "code": "R.122",
    "name": "Dừng lại",
    "detail": "Biển báo hiệu buộc các xe cơ giới và thô sơ kể cả xe được ưu tiên theo quy định phải dừng lại. Chỉ được phép đi nếu có người điều khiển giao thông hoặc đèn cờ cho phép đi. Nếu không thì chỉ được phép đi khi trên đường không còn nguy cơ gây mất an toàn giao thông.",
    "image": "R122"
},
{
    "signType": "R",
    "code": "R.301a",
    "name": "Các xe chỉ được đi thẳng",
    "detail": "Được đặt trước ngã ba, ngã tư. Các xe chỉ được đi thẳng ở khu vực ngã ba, ngã tư.",
    "image": "R301a"
},
{
    "signType": "R",
    "code": "R.301b",
    "name": "Các xe chỉ được rẽ phải",
    "detail": "Được đặt sau ngã ba, ngã tư. Các xe chỉ được rẽ phải ở khu vực trước mặt biển.",
    "image": "R301b"
},
{
    "signType": "R",
    "code": "R.301c",
    "name": "Các xe chỉ được rẽ trái",
    "detail": "Được đặt sau ngã ba, ngã tư. Các xe chỉ được rẽ trái ở khu vực trước mặt biển.",
    "image": "R301c"
},
{
    "signType": "R",
    "code": "R.301d",
    "name": "Các xe chỉ được rẽ phải",
    "detail": "Được đặt trước ngã ba, ngã tư. Các xe chỉ được rẽ phải ở phạm vi ngã ba, ngã tư đằng sau mặt biển.",
    "image": "R301d"
},
{
    "signType": "R",
    "code": "R.301e",
    "name": "Các xe chỉ được rẽ trái",
    "detail": "Được đặt trước ngã ba, ngã tư. Các xe chỉ được rẽ trái ở phạm vi ngã ba, ngã tư đằng sau mặt biển.",
    "image": "R301e"
},
{
    "signType": "R",
    "code": "R.301f",
    "name": "Các xe chỉ được đi thẳng và rẽ phải",
    "detail": "Được đặt trước ngã ba, ngã tư. Các xe chỉ được phép đi thẳng hay rẽ phải ở khu vực sau mặt biển.",
    "image": "R301f"
},
{
    "signType": "R",
    "code": "R.301g",
    "name": "Các xe chỉ được đi thẳng và rẽ trái",
    "detail": "Được đặt trước ngã ba, ngã tư. Các xe chỉ được phép đi thẳng hay rẽ trái ở khu vực sau mặt biển và được phép quay đầu xe để đi theo hướng ngược lại.",
    "image": "R301g"
},
{
    "signType": "R",
    "code": "R.301h",
    "name": "Các xe chỉ được rẽ trái và phải",
    "detail": "Được đặt sau ngã ba, ngã tư. Các xe chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.",
    "image": "R301h"
},
{
    "signType": "R",
    "code": "R.302a",
    "name": "Hướng phải đi vòng chướng ngại vật",
    "detail": "",
    "image": "R302a"
},
{
    "signType": "R",
    "code": "R.302b",
    "name": "Hướng phải đi vòng chướng ngại vật",
    "detail": "",
    "image": "R302b"
},
{
    "signType": "R",
    "code": "R.302c",
    "name": "Hướng phải đi vòng chướng ngại vật",
    "detail": "",
    "image": "R302c"
},
{
    "signType": "R",
    "code": "R.303",
    "name": "Nơi giao nhau chạy theo vòng xuyến",
    "detail": "Biển có hiệu lực bắt buộc các xe muốn chuyển hướng phải chạy vòng theo đảo an toàn theo hướng mũi tên tại nơi đường giao nhau (ngã ba, ngã tư).",
    "image": "R303"
},
{
    "signType": "R",
    "code": "R.304",
    "name": "Đường dành cho xe thô sơ",
    "detail": "Biển báo đường dành cho xe thô sơ (kể cả xe của người khuyết tật) và người đi bộ, bắt buộc phải đi theo đường dành riêng này, cấm phương tiện giao thông cơ giới kể cả các xe được ưu tiên theo Luật Giao thông đường bộ đi vào đường đã đặt biển này, trừ trường hợp đi cắt ngang qua nhưng phải bảo đảm tuyệt đối an toàn cho người đi bộ.",
    "image": "R304"
},
{
    "signType": "R",
    "code": "R.305",
    "name": "Đường dành cho người đi bộ",
    "detail": "Biển báo đường dành riêng cho người đi bộ.Các phương tiện giao thông đường bộ kể cả xe được ưu tiên theo Luật Giao thông đường bộ không được phép đi vào, trừ trường hợp đi cắt ngang qua, nhưng phải bảo đảm tuyệt đối an toàn cho người đi bộ.",
    "image": "R305"
},
{
    "signType": "R",
    "code": "R.306",
    "name": "Tốc độ tối thiểu cho phép",
    "detail": "Biển báo tốc độ tối thiểu cho phép. Biển có hiệu lực bắt buộc các loại xe cơ giới chạy với tốc độ không nhỏ hơn trị số ghi trên biển trong điều kiện giao thông thuận lợi và an toàn. Các loại xe có tốc độ tối đa theo quy định của nhà sản xuất không đạt tốc độ tối thiểu đã ghi trên biển không được phép đi vào đường này.",
    "image": "R306"
},
{
    "signType": "R",
    "code": "R.307",
    "name": "Hết hạn chế tốc độ tối thiểu",
    "detail": "Biển báo hết đoạn đường hạn chế tốc độ tối thiểu. Kể từ biển này các xe được phép chạy chậm hơn trị số ghi trên biển nhưng không được gây cản trở các xe khác.",
    "image": "R307"
},
{
    "signType": "R",
    "code": "R.308a",
    "name": "Tuyến đường cầu vượt cắt qua",
    "detail": "Biển số R.308a báo cho người lái xe chỉ được đi thẳng hoặc rẽ trái trên cầu vượt.",
    "image": "R308a"
},
{
    "signType": "R",
    "code": "R.308b",
    "name": "Tuyến đường cầu vượt cắt qua",
    "detail": "Biển số R.308b báo cho người lái xe chỉ được đi thẳng hoặc rẽ phải trên cầu vượt.",
    "image": "R308b"
},
{
    "signType": "R",
    "code": "R.309",
    "name": "Ấn còi",
    "detail": "Biển báo lệnh cho người lái xe phải bấm còi.",
    "image": "R309"
},
{
    "signType": "R",
    "code": "R.310a",
    "name": "Hướng đi phải theo cho xe chở hàng nguy hiểm",
    "detail": "",
    "image": "R310a"
},
{
    "signType": "R",
    "code": "R.310b",
    "name": "Hướng đi phải theo cho xe chở hàng nguy hiểm",
    "detail": "",
    "image": "R310b"
},
{
    "signType": "R",
    "code": "R.310c",
    "name": "Hướng đi phải theo cho xe chở hàng nguy hiểm",
    "detail": "",
    "image": "R310c"
},
{
    "signType": "R",
    "code": "R.403a",
    "name": "Đường dành cho ôtô",
    "detail": "Biển báo hiệu bắt đầu đường dành cho các loại ôtô đi lại.",
    "image": "R403a"
},
{
    "signType": "R",
    "code": "R.403b",
    "name": "Đường dành cho ôtô, xe máy",
    "detail": "Biển báo hiệu bắt đầu đường dành cho các loại ôtô, xe máy (kể cả xe gắn máy).",
    "image": "R403b"
},
{
    "signType": "R",
    "code": "R.404a",
    "name": "Hết đoạn đường dành cho ôtô",
    "detail": "Đến hết đoạn đường dành cho ôtô đi lại",
    "image": "R404a"
},
{
    "signType": "R",
    "code": "R.404b",
    "name": "Hết đoạn đường dành cho ôtô và xe máy",
    "detail": "Đến hết đoạn đường dành cho ôtô, xe máy đi lại",
    "image": "R404b"
},
{
    "signType": "R",
    "code": "R.411",
    "name": "Hướng đi trên mỗi làn đường phải theo",
    "detail": "Biển báo hiệu cho người tham gia giao thông biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường theo vạch kẻ đường.",
    "image": "R411"
},
{
    "signType": "R",
    "code": "R.412a",
    "name": "Làn đường dành cho xe khách",
    "detail": "Biển báo hiệu làn đường dành riêng cho ôtô khách (kể cả ôtô buýt).",
    "image": "R412a"
},
{
    "signType": "R",
    "code": "R.412b",
    "name": "Làn đường dành cho xe con",
    "detail": "",
    "image": "R412b"
},
{
    "signType": "R",
    "code": "R.412c",
    "name": "Làn đường dành cho xe tải",
    "detail": "",
    "image": "R412c"
},
{
    "signType": "R",
    "code": "R.412d",
    "name": "Làn đường dành cho xe mô tô",
    "detail": "",
    "image": "R412d"
},
{
    "signType": "R",
    "code": "R.412f",
    "name": "Làn đường dành cho xe ô tô",
    "detail": "",
    "image": "R412f"
},
{
    "signType": "R",
    "code": "R.413i",
    "name": "Kết thúc làn đường dành cho xe khách",
    "detail": "",
    "image": "R413i"
},
{
    "signType": "R",
    "code": "R.413j",
    "name": "Kết thúc làn đường dành cho xe con",
    "detail": "",
    "image": "R413j"
},
{
    "signType": "R",
    "code": "R.413k",
    "name": "Kết thúc làn đường dành cho xe tải",
    "detail": "",
    "image": "R413k"
},
{
    "signType": "R",
    "code": "R.413l",
    "name": "Kết thúc làn đường dành cho xe mô tô",
    "detail": "",
    "image": "R413l"
},
{
    "signType": "R",
    "code": "R.413n",
    "name": "Kết thúc làn đường dành cho xe ô tô",
    "detail": "",
    "image": "R413n"
},
{
    "signType": "R",
    "code": "R.415",
    "name": "Biển gộp làn đường theo phương tiện",
    "detail": "",
    "image": "R415"
},
{
    "signType": "R",
    "code": "R.420",
    "name": "Bắt đầu khu dân cư",
    "detail": "Biển báo hiệu bắt đầu đoạn đường vào phạm vi khu đông dân cư. Biển có tác dụng báo cho người tham gia giao thông biết phạm vi phải tuân theo những quy định đi đường được áp dụng ở khu đông dân cư.",
    "image": "R420"
},
{
    "signType": "R",
    "code": "R.421",
    "name": "Hết khu đông dân cư",
    "detail": "Biển báo hiệu hết đoạn đường qua phạm vi khu đông dân cư. Biển có tác dụng báo cho người tham gia giao thông biết phạm vi phải tuân theo những quy định đi đường được áp dụng ở khu đông dân cư đã hết hiệu lực.",
    "image": "R421"
},
{
    "signType": "R",
    "code": "R.E,9a",
    "name": "Cấm đỗ xe trong khu vực",
    "detail": "Biển báo Cấm đỗ xe trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    "image": "RE9a"
},
{
    "signType": "R",
    "code": "R.E,9b",
    "name": "Cấm đỗ xe theo giờ trong khu vực",
    "detail": "Biển báo Cấm đỗ xe theo giờ trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    "image": "RE9b"
},
{
    "signType": "R",
    "code": "R.E,9c",
    "name": "Khu vực đỗ xe",
    "detail": "Biển báo khu vực đỗ xe trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    "image": "RE9c"
},
{
    "signType": "R",
    "code": "R.E,9d",
    "name": "Hạn chế tốc độ tối đa trong khu vực",
    "detail": "Để quy định hạn chế tốc độ tối đa trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    "image": "RE9d"
},
{
    "signType": "R",
    "code": "R.E,10a",
    "name": "Hết cấm đỗ xe trong khu vực",
    "detail": "Để báo hiệu hết cấm đỗ xe trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    "image": "RE10a"
},
{
    "signType": "R",
    "code": "R.E,10a",
    "name": "Hết cấm đỗ xe theo giờ trong khu vực",
    "detail": "Để báo hiệu hết cấm đỗ xe theo giờ trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    "image": "RE10a"
},
{
    "signType": "R",
    "code": "R.E,10c",
    "name": "Hết khu vực đỗ xe",
    "detail": "Để quy định hết khu vực đỗ xe trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    "image": "RE10c"
},
{
    "signType": "R",
    "code": "R.E,10d",
    "name": "Hết hạn chế tốc độ tối đa trong khu vực",
    "detail": "Để quy định hết hạn chế tốc độ tối đa trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    "image": "RE10d"
},
{
    "signType": "R",
    "code": "R.E,11a",
    "name": "Báo hiệu có hầm chui",
    "detail": "Chỉ dẫn đoạn đường qua hầm có áp dụng quy định giao thông riêng.",
    "image": "RE11a"
},
{
    "signType": "R",
    "code": "R.E,11b",
    "name": "Kết thúc hầm chui",
    "detail": "Chỉ dẫn hết đoạn đường qua hầm, các quy định giao thông riêng không còn áp dụng.",
    "image": "RE11b"
},
{
    "signType": "I",
    "code": "I.401",
    "name": "Bắt đầu đường ưu tiên",
    "detail": "Biển chỉ dẫn các phương tiện trên trục đường chính được ưu tiên đi trước ở nơi đường giao nhau, các phương tiện từ đường nhánh ra phải dừng lại nhường đường cho phương tiện trên đường chính đi trước, trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    "image": "I401"
},
{
    "signType": "I",
    "code": "I.402",
    "name": "Hết đường ưu tiên",
    "detail": "Biển chỉ dẫn đã hết đoạn đường ưu tiên. Trên đoạn đường tiếp theo, các xe đi đúng với tốc độ quy định, qua nơi giao nhau ưu tiên bên phải.",
    "image": "I402"
},
{
    "signType": "I",
    "code": "I.405a",
    "name": "Đường cụt",
    "detail": "",
    "image": "I405a"
},
{
    "signType": "I",
    "code": "I.405b",
    "name": "Đường cụt",
    "detail": "",
    "image": "I405b"
},
{
    "signType": "I",
    "code": "I.405c",
    "name": "Đường cụt",
    "detail": "",
    "image": "I405c"
},
{
    "signType": "I",
    "code": "I.406",
    "name": "Được ưu tiên qua đường hẹp",
    "detail": "Biển chỉ dẫn có quyền được ưu tiên đi trước trên đoạn đường hẹp khi gặp xe đi ngược chiều, trừ trường hợp trên hướng đi ngược chiều có phương tiện đã đi vào phạm vi đường hẹp thì xe đi theo chiều ưu tiên cũng phải nhường đường.",
    "image": "I406"
},
{
    "signType": "I",
    "code": "I.407a",
    "name": "Đường một chiều",
    "detail": "Chỉ cho phép các loại phương tiệngiao thông đi vào theo chiều mũi tên chỉ, cấm quay đầu ngược lại (trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ).",
    "image": "I407a"
},
{
    "signType": "I",
    "code": "I.407b",
    "name": "Đường một chiều",
    "detail": "",
    "image": "I407b"
},
{
    "signType": "I",
    "code": "I.407b",
    "name": "Đường một chiều",
    "detail": "",
    "image": "I407b"
},
{
    "signType": "I",
    "code": "I.408",
    "name": "Nơi đỗ xe",
    "detail": "Biển chỉ dẫn những nơi được phép đỗ xe, những bãi đỗ xe, bến xe v.v...",
    "image": "I408"
},
{
    "signType": "I",
    "code": "I.408a",
    "name": "Nơi đỗ xe một phần trên hè phố",
    "detail": "Biển chỉ dẫn những nơi được phép đỗ xe một phần trên hè phố rộng, phải đặt biển số. Xe phải đổ từ 1⁄2 thân xe trở lên trên hè phố.",
    "image": "I408a"
},
{
    "signType": "I",
    "code": "I.409",
    "name": "Chỗ quay xe",
    "detail": "Biển chỉ dẫn vị trí được phép quay đầu xe kiểu chữ U. Biển không cấm rẽ trái",
    "image": "I409"
},
{
    "signType": "I",
    "code": "I.410",
    "name": "Khu vực quay xe",
    "detail": "Biển chỉ dẫn khu vực được phép quay đầu xe kiểu chữ U. Biển không cấm rẽ trái.",
    "image": "I410"
},
{
    "signType": "I",
    "code": "I.413a",
    "name": "Đường phía trước có làn đường dành cho ô tô khách",
    "detail": "Biển chỉ dẫn đường có làn đường dành riêng cho xe ô tô khách theo chiều ngược lại. Biển được đặt ở ngã ba, ngã tư đầu đường một chiều mà hướng ngược chiều có xe ô tô khách được phép chạy.",
    "image": "I413a"
},
{
    "signType": "I",
    "code": "I.413b",
    "name": "Rẽ ra đường có làn dành cho xe khách",
    "detail": "Biển chỉ dẫn ở ngã ba, ngã tư rẽ phải hoặc rẽ trái là rẽ ra đường có làn đường dành cho xe ô tô khách.",
    "image": "I413b"
},
{
    "signType": "I",
    "code": "I.413c",
    "name": "Rẽ ra đường có làn dành cho xe khách",
    "detail": "Biển chỉ dẫn ở ngã ba, ngã tư rẽ phải hoặc rẽ trái là rẽ ra đường có làn đường dành cho xe ô tô khách.",
    "image": "I413c"
},
{
    "signType": "I",
    "code": "I.418",
    "name": "Lối đi ở những chỗ cấm rẽ",
    "detail": "",
    "image": "I418"
},
{
    "signType": "I",
    "code": "I.423a",
    "name": "Đường người đi bộ sang ngang",
    "detail": "",
    "image": "I423a"
},
{
    "signType": "I",
    "code": "I.444",
    "name": "Xe kéo moóc",
    "detail": "Biển này đặt trên nóc buồng lái của xe kéo moóc",
    "image": "I444"
},
{
    "signType": "I",
    "code": "I.446",
    "name": "Nơi đỗ xe dành cho người tàn tật",
    "detail": "Biển chỉ dẫn vị trí thiết bị chuyên dùng cho người tàn tật.",
    "image": "I446"
},
{
    "signType": "I",
    "code": "I.447a",
    "name": "Cầu vượt liên thông",
    "detail": "Biển được đặt trước khi vào cầu vượt . Biển chỉ dẫn tại cầu vượt liên thông xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái hay rẽ phải.",
    "image": "I447a"
},
{
    "signType": "I",
    "code": "I.447b",
    "name": "Cầu vượt liên thông",
    "detail": "Biển được đặt trước khi vào cầu vượt . Biển chỉ dẫn tại cầu vượt liên thông xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái hay rẽ phải.",
    "image": "I447b"
},
{
    "signType": "I",
    "code": "I.448",
    "name": "Làn đường cứu nạn hay làn thoát xe khẩn cấp",
    "detail": "Biển chỉ dẫn gồm 3 cặp biển ở các cự ly 2 km, 1 km và 300 m nhằm chỉ dẫn cho ngƣời tham gia giao thông biết vị trí và khoảng cách có làn cứu nạn.",
    "image": "I448"
},
{
    "signType": "I",
    "code": "I.449",
    "name": "Biển tên đường",
    "detail": "Biển báo tên đƣờng cho các tuyến đƣờng đối ngoại.",
    "image": "I449"
},
{
    "signType": "S",
    "code": "S.501",
    "name": "Phạm vi tác dụng của biển",
    "detail": "Biển được đặt dưới các loại biển báo nguy hiểm, biển báo cấm hoặc hạn chế. Biển thông báo chiều dài đoạn đường nguy hiểm hay đoạn đường phải thi hành lệnh cấm hoặc hạn chế.",
    "image": "S501"
},
{
    "signType": "S",
    "code": "S.502",
    "name": "Khoảng cách đến đối tượng báo hiệu",
    "detail": "Biển được đặt dưới các loại biển báo nguy hiểm, biển báo cấm hoặc hạn chế, biển hiệu lệnh và biển chỉ dẫn . Biển thông báo khoảng cách thực tế từ vị trí đặt biển đến đối tượng báo hiệu ở phía trước.",
    "image": "S502"
},
{
    "signType": "S",
    "code": "S.503a",
    "name": "Hướng tác dụng của biển",
    "detail": "",
    "image": "S503a"
},
{
    "signType": "S",
    "code": "S.503b",
    "name": "Hướng tác dụng của biển",
    "detail": "",
    "image": "S503b"
},
{
    "signType": "S",
    "code": "S.503c",
    "name": "Hướng tác dụng của biển",
    "detail": "",
    "image": "S503c"
},
{
    "signType": "S",
    "code": "S.503d",
    "name": "Hướng tác dụng của biển",
    "detail": "",
    "image": "S503d"
},
{
    "signType": "S",
    "code": "S.503e",
    "name": "Hướng tác dụng của biển",
    "detail": "",
    "image": "S503e"
},
{
    "signType": "S",
    "code": "S.503f",
    "name": "Hướng tác dụng của biển",
    "detail": "",
    "image": "S503f"
},
{
    "signType": "S",
    "code": "S.504",
    "name": "Làn đường",
    "detail": "",
    "image": "S504"
},
{
    "signType": "S",
    "code": "S.506a",
    "name": "Hướng đường ưu tiên",
    "detail": "",
    "image": "S506a"
},
{
    "signType": "S",
    "code": "S.506b",
    "name": "Hướng đường ưu tiên",
    "detail": "",
    "image": "S506b"
}
]
