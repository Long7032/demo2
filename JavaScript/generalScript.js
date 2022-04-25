class User {
    constructor(name, birthday, phoneNumber, email, accountName, password) {
        this.name = name;
        this.birthday = birthday;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.accountName = accountName;
        this.password = password;
    }
    compare(loginAccountName, loginPassword) {
        if (
            loginAccountName == this.accountName &&
            loginPassword == this.password
        ) {
            return true;
        }
        return false;
    }
}

class Phone {
    constructor(name, price, imgs, description, statis) {
        this.name = name;
        this.price = price;
        this.imgs = imgs;
        this.description = description;
        this.statis = statis;
    }
}

class PhoneStatis {
    constructor(
        screenSize,
        screenTech,
        rearCamera,
        frontCamera,
        chipset,
        ram,
        internalMemory,
        batteryCapacity,
        simSlot,
        os,
        screenResoluton,
        weight,
    ) {
        this.screenSize = screenSize;
        this.screenTech = screenTech;
        this.rearCamera = rearCamera;
        this.frontCamera = frontCamera;
        this.chipset = chipset;
        this.ram = ram;
        this.internalMemory = internalMemory;
        this.batteryCapacity = batteryCapacity;
        this.simSlot = simSlot;
        this.os = os;
        this.screenResoluton = screenResoluton;
        this.weight = weight;
    }
}

let users;
let phones;

if (sessionStorage.getItem("userArray") != null) {
    if (sessionStorage.getItem("userArray").length == 4) {
        users = [];
    } else {
        users = JSON.parse(sessionStorage.getItem("userArray"));
    }
} else {
    users = [];
}


if (sessionStorage.getItem("phoneArray") != null) {
    if (sessionStorage.getItem("phoneArray").length == 4) {
        phones = [];
    } else {
        phones = JSON.parse(sessionStorage.getItem("phoneArray"));
    }
} else {
    phones = [];
}

phones.push(
    //iPhone 13 Pro Max 128GB

    new Phone(
        "iPhone 13 Pro Max 128GB",
        "29350000", [
            "../Image/iphone13_pro_max/1.jpg",
            "../Image/iphone13_pro_max/2.jpg",
            "../Image/iphone13_pro_max/3.jpg"
        ],
        `Đánh giá iPhone 13 Pro Max – Hiệu năng vô đối, camera cực đỉnh
      iPhone 12 ra mắt cách đây chưa lâu, thì những tin đồn mới nhất về iPhone 13 Pro Max đã khiến bao tín đồ công nghệ ngóng chờ. Cụm camera được nâng cấp, màu sắc mới, đặc biệt là màn hình 120Hz với phần notch được làm nhỏ gọn hơn chính là những điểm làm cho thu hút mọi sự chú ý trong năm nay.
      
      Thiết kế cạnh phẳng sang trọng, nhiều màu sắc nổi bật
      Dòng iPhone 12 được Apple áp dụng ngôn ngữ thiết kế tương tự iPhone 12 năm ngoái với phần cạnh viền máy được dát phẳng sang trọng cùng bốn góc được làm bo cong nhẹ, đây có thể được xem là một thiết kế hoài cổ từ dòng iPhone 5 trước đó. Vì thế mà iPhone 13 Pro Max nói riêng, cũng như dòng điện thoại iPhone 13 nói chung, cũng sẽ đi theo ngôn ngữ thiết kế này.
      
      Điểm thay đổi lớn trên 13 Pro Max có thể là phần nhô của cụm camera. Trong khi đó mặt trước của thiết bị được phủ một lớp Ceramic Shield, loại vật liệu cứng hơn bất kỳ loại kính điện thoại thông minh nào hiện có trên thị trường, giúp bảo vệ màn hình iPhone hiệu quả.
      
      Thiết kế cạnh phẳng sang trọng, nhiều màu sắc nổi bật
      
      Xét về chất liệu, iPhone 13 Pro Max vẫn áp dụng chất liệu thép không gỉ như thế hệ trước đó. Mặt này cũng được phủ một lớp kính mờ giúp hạn chế bám bụi bẩn và vân tay. Ngoài ra, điện thoại cũng sẽ đảm bảo được khả năng chống bụi / nước chuẩn IP68.
      
      Về màu sắc, iPhone 13 phiên bản Pro Max sẽ được ra mắt với nhiều tùy chọn màu sắc khác nhau. Trong đó gồm một số màu nổi bật như: vàng, bạc, xanh, đen,...
      
      Màn hình với tai nhỏ nhỏ hơn, tốc độ làm tươi 120 Hz
      Một trong những yếu tố khiến iPhone 13 Pro Max đáng mong chờ đó là thiết kế notch "tai thỏ" được thu gọn lại. Ngoài kích cỡ màn hình 6.7 inch với tấm nền Super Retina XDR OLED, máy sẽ có thiết kế notch được thu hẹp lại, giúp tăng tỷ lệ hiển thị trên màn hình điện thoại. Tất nhiên, những cảm biến quan trọng như TrueDepth, Face ID hoặc camera selfie đều sẽ giữ nguyên vị trí.
      
      Màn hình notch thu nhỏ với tốc độ làm tươi 120 Hz
      
      Rất nhiều nguồn tin cho biết iPhone 13 Pro Max sẽ tăng cường trải nghiệm hình ảnh lên rất nhiều thông qua ProMotion - tích năng giúp đẩy tốc độ làm tươi màn ảnh lên 120 Hz. Đây cũng là chiếc iPhone đầu tiên có tốc độ làm tươi cao lên đến 120Hz, giúp hình ảnh chuyển động mượt mà hơn.
      
      Ngoài ra, những tính năng bổ trợ khác như Dolby Vision, True-tone hoặc gam màu rộng chuẩn HDR10 vẫn sẽ được tích hợp vào iPhone 13 Pro Max.  
      
      Camera nâng cấp, chụp ảnh chất lượng, quay phim chuyên nghiệp
      Như mọi chiếc iPhone mới khác, camera luôn là yếu tố được người dùng quan tâm nhất, và iPhone 13 Pro Max sẽ không làm người dùng thất vọng. Giống với ngôn ngữ thiết kế cho thân máy, ngôn ngữ thiết kế cho camera thường không xảy ra trong thời gian ngắn. Đó là lý do chiếc điện thoại này vẫn sẽ có bộ camera 3 ống kính xếp xen kẽ thành một cụm vuông, đặt ở góc trên bên trái của lưng máy.  
      
      Thay đổi lớn về camera đầu tiên nằm ở cảm biến. Máy được trang bị camera góc siêu rộng cải tiến lớn với ống kính khẩu độ f/1.8 và len 6P. Camera siêu rộng hiện tại trên iPhone 12 Pro Max đang ở khẩu độ f/2.4 và len 5P, nên nâng cấp trên sẽ cải thiện ảnh chụp thiếu sáng rất nhiều.
      
      Cảm biến LiDAR vẫn sẽ hiện diện trên iPhone 13 Pro Max. Tuy nhiên Apple dự kiến mang cảm biến này lên cả gia đình iPhone 13 và không dành riêng chỉ cho các máy Pro. Điều này được cho là nhằm mang đến trải nghiệm thực tế tăng cường (AR) tốt nhất cho tất cả người dùng.
      
      Camera nâng cấp đáng kể về cảm biến lẫn tính năng chụp ảnh
      
      Camera selfie không thay đổi so với model tiền nhiệm. Có thể iPhone 13 Pro Max sẽ chụp ảnh selfie góc rộng hơn một chút, nhưng còn lại phần lớn ở camera selfie đều giữ nguyên như trước. Và những tính năng như selfie slow-mo, memoji và animoji cũng sẽ hiện diện như nhiều tin đồn cho biết.
      
      Vi xử lý nâng cấp, dung lượng pin cải thiện
      Giống với nhiều thế hệ iPhone mới, vi xử lý dự đoán sẽ được nâng cấp lên một bậc với hiệu năng cải thiện đáng kể cùng khả năng hỗ trợ mạng 5G. Trong trường hợp này, iPhone 13 Pro Max sẽ mang trong mình chip Apple A15 Bionic với nhiều nâng cấp khác nhau, cả về hiệu năng xử lý lẫn kết nối internet tốc độ cao.
      
      Theo nhà sản xuất công bố, chip A15 thế hệ mới này cho hiệu năng đồ họa nhanh hơn tới 50% so với các thiết bị smartphone khác. Ngoài ra, khả năng kết nối 5G cũng được cải thiện đáng kể, cùng với đó là chế độ dữ liệu thông minh, giảm tốc độ khi không cần thiết để tiết kiệm điện năng.
      
      Vi xử lý nâng cấp hiệu năng, loại bỏ hoàn toàn cổng kết nối
      
      iPhone 13 Pro Max cũng được trang bị viên pin dung lượng lớn hơn, cho thời gian sử dụng tăng lên khoảng 2,5 giờ so với thế hệ trước đó. Máy cũng sẽ được trang bị công nghệ sạc nhanh và sạc nhanh không dây.
      
      viên pin dung lượng lớn
      
      Điện thoại iPhone 13 Pro Max giá bao nhiêu? Ra mắt khi nào?
      Điện thoại iPhone 13 Pro Max được ra mắt vào ngày 14 tháng 9 năm 2021 tại sự kiện "California Streaming" diễn ra trực tuyến tương tự năm ngoái cùng với 3 phiên bản khác là iPhone 13, 13 mini và 13 Pro.
      
      Với giá bán dao động từ 35 triệu ~ 50 triệu VNĐ (tùy theo RAM và bộ nhớ trong), Khách hàng có thể mua iPhone 13 Pro Max chính hãng VN/A tại CellphoneS để nhận ngay mức giá tốt nhất cùng nhiều ưu đãi hấp dẫn qua tổng đài tư vấn 1800.2097.`,
        new PhoneStatis(
            "6.7 inches",
            "OLED",
            `Camera góc rộng: 12MP, ƒ/1.5\nCamera góc siêu rộng: 12MP, ƒ/1.8\nCamera tele : 12MP, /2.8`,
            "12MP, ƒ/2.2",
            "Apple A15",
            "6 GB",
            "128 GB",
            "4,325mAh",
            "2 SIM (nano-SIM và eSIM)",
            "iOS 15",
            "2778 x 1284 pixel",
            "240g"
        )
    ),

    //iPhone SE 2022

    new Phone(
        "iPhone SE 2022",
        "12.490.000", [
            "../Image/iphoneSE/1.jpg",
            "../Image/iphoneSE/2.jpg",
            "../Image/iphoneSE/3.jpg"
        ],
        `Điện thoại iPhone SE 2022 có mấy màu?
      Thế hệ iPhone SE trước đó chỉ được trang bị ba phiên bản màu. Sang đến thế hệ SE 2022, thiết bị vẫn giữ lại ba màu sắc trên thế hệ trước lần lượt là đỏ, trắng và đen. Đặc biệt, iPhone SE 2022 sẽ không được trang bị thêm màu sắc mới.
      
      Ba màu sắc trên iPhone SE 2022:
      
      -  Đen (Midnight)
      
      -  Trắng (Starlight)
      
      -  Đỏ (PRODUCT RED)
      
      Với ba phiên bản màu sắc trên thì Midnight và Starlight sẽ là những sự lựa chọn an toàn, không bị lỗi thời sau thời gian sử dụng. Trong khi đó SE 2022 đỏ sẽ là một sự lựa chọn cá tính, hợp với các người dùng trẻ. Đặc biệt hơn khi Apple đã tuyên bố doanh số thu được từ phiên bản PRODUCT RED sẽ được quyên góp để chống lại căn bệnh AIDS.
      
      Điện thoại iPhone SE 2022 có bao nhiêu màu?
      
      Điện thoại iPhone SE 2022 bao nhiêu GB?
      Khi ra mắt, các nhà sản xuất thường cho ra mắt nhiều phiên bản cấu hình với từng giá bán cho người tiêu dung lựa chọn và iPhone SE 2022 cũng không ngoại lệ. Máy sẽ có ba phiên bản cấu hình bộ nhớ cho người dùng, lần lượt là:
      
      -  iPhone SE 2022 64GB
      
      -  iPhone SE 2022 128GB
      
      -  iPhone SE 2022 256GB
      
      Trong đó, phiên bản SE 64 GB thích hợp với người dùng  ít sử dụng, hay là sử dụng iPhone SE làm máy phụ, lâu lâu sử dụng để gọi điện và nhắn tin. Trong khi đó iPhone SE 2022 256GB thích hợp với đến những người dùng yêu thích chụp ảnh hay lưu trữ video ở định dạng HEIF và HEVC cũng như thường xuyên lưu trữ hình ảnh, video yêu thích.
      
      Điện thoại iPhone SE 2022 có bao nhiêu phiên bản?
      
      Ngoài ra, còn một số thông tin Apple sẽ cho ra mắt hai phiên bản cấu hình RAM là 3GB RAM và 4GB RAM.
      
      SE 2022 - iPhone đầu tiên được trang bị khung nhôm không carbon
      Nếu các thế hệ trước đó được Apple trang bị khung nhôm hoặc khung thép không gỉ thì tới SE 2022, máy được Apple trang bị khung nhôm không chứa Carbon. Đây là thế hệ iPhone đầu tiên của Apple được trang khung viền này.
      
      Mẫu iPhone đầu tiên được trang bị khung nhôm không carbon
      
      Việc đưa nhôm không carbon vào sản xuất iPhone 13 là hành động góp phần bảo vệ môi trường, hạn chế phát sinh và thải khí nhà kính ra môi trường, tuân theo kim chỉ nam trước đó Apple đưa ra khi loại bỏ cốc sạc ra khỏi thiết bị.
      
      Điện thoại iPhone SE 3 bền bỉ sau bài test va đập
      iPhonr SE 2022 được trang bị mặt kính cường lực ở cả hai mặt trước và sau và được Apple giới thiệu là vật liệu kinh cứng nhất với khả năng chống vỡ và chống trầy hiệu quả. Kếu quả, sau một số bài thử nghiệm thả rơi, thế hệ iPhone se 2022, thiết bị bền bỉ hơn so với thế hệ SE 2 và gần như bằng iPhone 13.
      
      Cụ thể, iPhone SE 2022 vẫn hoạt động và chỉ bị trầy xước nhẹ sau bài test thả rơi từ độ cao gần 2m xuống nền xi măng. Khi thả rơi ở độ cao tương tự nhưng hướng mặt lưng, mặt lưng nứt nhưng vẫn sống sót.
      
      iPhone SE 3 bền bỉ sau bài test va đập
      
      Trong bài test kháng nước, iPhone SE 2022 với chuẩn kháng nước và bụi bẩn IP67 vẫn trụ được sau thời gian ngâm 30 phút ở độ sâu 1 mét. Cụ thể, khi lấy lên thì iPhone SE 2022 có âm thanh bị biến dạng nhẹ do nước vào trong các lỗ loa. Nhưng sau một thời gian, âm thanh sẽ trở lại bình thường. Tuy nhiên, nhà sản xuất sẽ không bảo hành tính năng vào nước cho người dùng iPhone do đó hạn chế test và sử dụng tính năng kháng nước này của sản phẩm.
      
      Đánh giá hiệu năng iPhone SE 2022
      Được trang bị một phần cứng mạnh mẽ của iPhone 13, vậy iPhone SE 2022 có sở hữu được hiệu năng tương tự? Cụ thể, điện thoại iPhone SE 2022 ( iPhone SE 3) đạt được 1695 điểm đơn nhân và 4021 điểm đa nhân trên Geekbench. Trong khi đó, iPhone 13 với cùng con chipi Apple A15 đạt 1670 điểm đơn nhân và 4481 điểm đa nhân.
      
      Như vậy sự khác biệt về điểm số giữa hai thiết bị không có quá nhiều khác biệt và người dùng sẽ khó để nhận ra sự khác biệt này trong các tác vụ thường ngày. Và nếu so với thế hệ cũ – iPhone SE 2020, điểm hiệu năng trên SE 3 nhỉnh hơn khá nhiều khi số điểm trên thiết bị tiền nhiệm là 1300 điểm đơn nhân và 3300 điểm đa nhân.
      
      Đánh giá hiệu năng iPhone SE 2022
      
      Khi chấm điểm hiệu năng trên AnTuTu, iPhone SE 2022 mang lại 711969 điểm.
      
      Dung lượng RAM trên iPhone SE 2022 được nâng cấp
      iPhone SE thế hệ mới được Apple nâng cấp về dung lượng RAM. Cụ thể thì khi iPhone SE 2020 ra mắt trước đó được trang bị dung lượng bộ nhớ RAM 3GB thì đến SE 2022, máy được nâng cấp bộ nhớ RAM 4GB.
      
      Mức dung lượng RAM này tương đương với iPhone 13, hứa hẹn mang lại một hiệu năng cùng đa nhiệm không kém flagship vừa ra mắt không lâu trước đó.
      
      Điện thoại iPhone SE 2022 ra mắt vào ngày 8/3
      (cập nhật 5/3)
      
      Trước nhiều tin đồn Apple sẽ giới thiệu một mẫu điện thoại giá rẻ mới vào ngày 10/3. Tuy nhiên Apple ra mắt mẫu iPhone SE 2022 này sớm hơn, vào ngày 8/3 tại sự kiện Peek Performance.
      
      Về thiết kế, điện thoại iPhone SE 2022 sẽ được trang bị một thiết kế không quá khác biệt so với hệ hệ trước. Cụ thể là máy không được trang bị màn hình tràn viền tai thỏ mà sở hữu hai viền trên dưới dày và cảm biến vân tay TouchID. Ngoài ra, iPhone SE 2022 sẽ có nhiều tùy chọn màu sắc mới, nổi bật là màu xanh lá.
      
      Bên cạnh đó, vị trí logo cũng có sự thay đổi, đặt ở trung tâm như những mẫu điện thoại iPhone mới ra gần đây. Trước đó, cũng có nhiều đồn đoán rằng iPhone iPhone SE 3 sẽ sở hữu thiết kế tương tự như iPhone 13 nhưng chỉ có 1 camera sau thay vị cụm camera kép thiết kế đối xứng.
      
      Thiết kế không đổi, màu sắc đa dạng
      
      iPhone SE 3 sẽ không có nhiều tùy chọn màu sắc như dự kiến. Trước đó, có nhiều đồn đoán rằng iPhone SE 2022 sẽ có nhiều phiên bản màu như đỏ, vàng, xanh ngọc, xanh dương, và hồng… những màu sắc đã từng xuất hiện trước đó. Thay vào đó, SE 3 sẽ chỉ có ba tùy chọn màu cơ bản là đen, trắng và đỏ.
      
      Điện thoại iPhone SE 2022 giá bao nhiêu?
      Theo như thông tin trên trang GSMArena nổi tiếng, iPhone SE 2022 dự kiến sẽ có mức giá khởi điểm rơi vào khoảng 399 USD (tương đương 9.18 triệu đồng) cho phiên bản thấp nhất. Trong khi trang Gadgets Now lại dự đoán rằng, thế hệ tiếp theo của dòng SE sẽ có giá bán từ 33.458 INR (tương đương 10.18 triệu đồng). Cụ thể như sau:
      
       -  iPhone SE 2022 64GB: 12.990.000 đồng
      
       -  iPhone SE 2022 128GB: 14.990.000 đồng
      
       -  iPhone SE 2022 256GB: 17.990.000 đồng
      
      Tuy nhiên, sau khi chính thức được trình làng, điện thoại iPhone SE 2022 có giá bán tự kiến khoảng gần 13 triệu cho phiên bản cấu hình tiêu chuẩn và gần 18 triệu ở phiên bản 256GB bộ nhớ trong.
      
      Điện thoại iPhone SE 2022 khi nào ra mắt?
      Trang tin 9to5Mac mới đây cho hay, "Táo khuyết" đang lên kế hoạch tổ chức một sự kiện vào đầu tháng 3 của năm 2022. Đây nhiều khả năng sẽ là một sự kiện diễn ra trực tuyến với nhân vật chính được nhiều người mong chờ đó là iPhone SE 3 hay iPhone SE 2022.
      
      Điện thoại iPhone SE 2022 khi nào ra mắt?
      
      Tuy nhiên trang GSMArena vừa cập nhật, không loại trừ khả năng Apple sẽ trình làng mẫu iPhone SE mới này vào cuối tháng 4 hoặc đầu tháng 5 tới đây, cùng với đó công ty sẽ bắt đầu giao hàng các sản phẩm của mình vào khoảng thời gian tương tự. Nhưng Apple đã giới thiệu mẫu điện thoại giá rẻ của mình sớm hơn so với dự kiến, đúng dịp quốc tế phụ nữ 8/3.
      
      Đánh giá iPhone SE 2022 chi tiết
      Thế hệ iPhone SE 2 tuy sở hữu thiết kế cũ nhưng khá mạnh mẽ ở thời điểm ra mắt. Vậy phiên bản kế nhiệm iPhone SE 2022 thì như thế nào, có gì nổi bật.
      
      Thiết kế nhỏ gọn, sang trọng cùng touch ID
      Nhỏ gọn là một đặc điểm nhận dạng hàng đầu của dòng iPhone SE và thế hệ SE 2022 cũng không ngoại lệ. Cụ thể, iPhone SE 2022 tiếp tục là một thiết kế quen thuộc, không có quá nhiều khác biệt so với SE 2 hay SE thế hệ đầu.
      
      Bề ngoài của chiếc iPhone SE 3 năm 2022 mang kiểu dáng của chiếc iPhone SE 2 được ra mắt trước đó với hai viền dày trên và dưới và touch ID. Bốn cạnh của SE 3 bo cong nhẹ cực kỳ mạnh mẽ cùng khả năng cầm nắm chắc chắn. Hai mặt trước và sau máy sẽ là mặt lưng kính với thiết kế bóng bẩy, giúp người dùng tự tin khi cầm nắm và đặc biệt là để lộ ra logo trái táo được đặt chính giữa mặt lưng.
      
      Thiết kế nhỏ gọn, sang trọng cùng touch ID
      
      Ngoài ra, iPhone SE 3 cũng sẽ được trang bị chuẩn kháng nước và bụi bẩn giúp người dùng có thể thoải mái sử dụng trong nhiều điều kiện thời thiết khác nhau. iPhone SE thế hệ mới còn được trang bị công nghệ chống tràn hiệu quả.
      
      Thiết kế nhỏ gọn, sang trọng cùng touch ID
      
      Touch ID chính là một tính năng nhiều người dùng yêu thích. Touch ID trên iPhone SE 3 giúp người dùng mở khóa điện thoại hay đăng nhập vào các ứng dụng một cách nhanh chóng. Với Touch ID với độ bảo mật cao nhờ đó người dùng có thể an tâm sử dụng cho các ứng dụng tài chính, ngân hàng.
      
      Thiết kế nhỏ gọn, sang trọng cùng touch ID
      
      Màn hình Retina HD, hình ảnh sống động
      Không nằm ngoài dự kiến chiếc iPhone SE 2022 được trang bị tấm nền LCD với độ phân giải Retina HD display? Retina hiển nhiên sẽ mang lại màu sắc chân thực và chi tiết cực tốt, song OLED mới lại cho khả năng tiết kiệm pin nhiều hơn.
      
      Màn hình Retina HD, hình ảnh sống động
      
      Ngoài ra, màn hình kích thước 4.7 inches với màn hình hai viền dày quen thuộc. Ngoài ra, độ phân giải FullHD siêu sắc nét đủ để thấy được độ trong và độ chi tiết của máy.
      
      Hoạt động trên con chip Apple A15 Bionic, 4 GB RAM
      Từ trước đến nay Apple vẫn trung thành với con chip do chính mình làm ra, nhờ đó mà hiệu suất mới được tối ưu hoàn toàn. iPhone SE 2022 được cung cấp sức mạnh bởi con chip Apple A15 Bionic, bạn chẳng còn phải lo lắng về những tựa game PUBG Mobile, Liên quân hay Call of Duty ở cài đặt đồ họa cao nhất. Thế hệ iPhone SE 3 còn được trang bị hiệu suất đồ họa mạnh mẽ hơn gấp 1.2 lần so với thế hệ 2.
      
      Hoạt động trên con chip Apple A15 Bionic, 4 GB RAM
      
      Ngoài ra, Apple chưa tiết lộ chính thức dung lượng RAM của SE 3 nhưng có thể dự đoán điện thoại được trang bị bộ nhớ RAM dung lượng từ 3-4GB. Mức dung lượng RAM hứa hẹn mang lại trải nghiệm đa nhiệm mượt mà trong mọi tác vụ. 
      
      Pin dung lượng lớn, hỗ trợ sạc nhanh công suất 20W, hỗ trợ 5G
      Cũng như bộ nhớ RAM, dung lượng pin trên iPhone SE 2022 không được hãng công bố thông tin cụ thể. Tuy nhiên viên pin trên SE 3 chắc chắn sẽ mang lại một thời gian sử dụng ấn tượng. Nhờ con chip Apple A15 tiết kiệm điện cùng hệ điều hành iOS 15 nhờ đó tuổi thọ pin trên thiết bị tốt hơn. Ngoài ra, SE 3 còn được trang bị công suất sạc 20W giúp bổ sung năng lượng từ 0% - 50% chỉ trong vòng 30 phút cắm sạc.
      
      Pin dung lượng lớn, hỗ trợ sạc nhanh công suất 20W, hỗ trợ 5G
      
      Đặc biệt, thế hệ iPhone SE 2022 còn được trang bị mạng 5G giúp tăng tốc độ truyền tải. Với 5G, người dùng iPhone SE 3 có thể FaceTime ở độ nét cao, chơi game mượt mà hơn.
      
      Camera tương tự người tiền nhiệm
      Không được trang bị cụm camera kép như nhiều dòng điện thoại gần đây nhưng camera trên SE 3 vẫn mang lại cho người dùng những trải nghiệm hình ảnh vượt trội. Cụ thể, máy được trang bị camera sau đơn với độ phân giải 12MP.
      
      Camera tương tự người tiền nhiệm
      
      Tuy nhiên, nhờ sự hỗ trợ của con chip Apple A15 giúp những bức ảnh chất lượng hơn. Với chế độ Smart HDR 4 với khả năng tự động tinh chỉnh độ tương phản, tone màu da, ánh sáng hay Deep Fusion giúp nghiên cứu độ phơi sáng của từng điểm ảnh trong điều kiện ánh sáng yếu để tái tạo lại hình ảnh, chi tiết một cách chân thực nhất. SE 3 cũng sẽ hỗ trợ chụp ảnh chân dung với khả năng tập trung vào chủ thể, làm mờ hậu cảnh một cách đầy nghệ thuật.`,
        new PhoneStatis(
            "4.7 inches",
            "Liquid Retina",
            "Camera góc rộng: 12MP, ƒ/1.8",
            "7MP, ƒ/2.2",
            "Chip A15 Bionic 6 nhân",
            "4 GB",
            "64 GB",
            "1.820mAh",
            "2 SIM (nano-SIM và eSIM)",
            "iOS 15",
            "1334 x 750 pixels (HD+)",
            "144g"
        )
    )
)

$(document).ready(function() {
    //Modal

    //Mở modal đăng ký 
    $(document).ready(function() {
        $("#btnSignUp").click(function() {
            $("#modalSignUp").modal();
        })
    })

    //Mở modal đăng nhập
    $(document).ready(function() {
        $("#btnSignIn").click(function() {
            $("#modalSignIn").modal();
        })
    })

    //Biểu thức chính quy

    //Kiểm tra họ tên

    kiemTraHoTen = () => {
        let regexp = /^(\p{Lu}{1}\p{Ll}*)(\s\p{Lu}{1}\p{Ll}*)+/u;
        if ($("#name").val() == "") {
            $("#resultName").html("Bắt buộc");
            return false;
        }
        if (!regexp.test($("#name").val())) {
            $("#resultName").html("Không hợp lệ");
            return false;
        }
        $("#resultName").html("Hợp lệ");
        return true;
    }
    $("#name").blur(kiemTraHoTen);

    //Kiểm tra ngày sinh

    kiemTraNgaySinh = () => {
        if ($("#birthday").val() == "") {
            $("#resultBirthday").html("Bắt buộc");
            return false;
        }
        let today = new Date();

        let birthday = new Date($("#birthday").val());
        if (birthday > today) {
            $("#resultBirthday").html("Nhỏ hơn ngày hiện tại");
        } else {
            $("#resultBirthday").html("Hợp lệ");
        }

        return true;
    }
    $("#birthday").blur(kiemTraNgaySinh);

    //Kiểm tra số điện thoại

    kiemTraSoDienThoai = () => {
        let regexp = /^0[0-9]{9}$/;
        if ($("#phoneNumber").val() == "") {
            $("#resultPhoneNumber").html("Bắt buộc");
            return false;
        }
        if (!regexp.test($("#phoneNumber").val())) {
            $("#resultPhoneNumber").html("Không hợp lệ");
            return false;
        }
        $("#resultPhoneNumber").html("Hợp lệ");
        return true;
    }
    $("#phoneNumber").blur(kiemTraSoDienThoai);

    //Kiểm tra email

    kiemTraEmail = () => {
        let regexp = /^[a-zA-Z]{1}[\w\d]*@(gmail|yahoo)\.com$/;
        if ($("#email").val() == "") {
            $("#resultEmail").html("Bắt buộc");
            return false;
        }
        if (!regexp.test($("#email").val())) {
            $("#resultEmail").html("Không hợp lệ");
            return false;
        }
        $("#resultEmail").html("Hợp lệ");
        return true;
    }
    $("#email").blur(kiemTraEmail);

    //Kiểm tra tên tài khoản

    kiemTraTenTaiKhoan = () => {
        let regexp = /^[a-zA-Z_]{1}([\s\w])*/;
        if ($("#accountName").val() == "") {
            $("#resultAccountName").html("Bắt buộc");
            return false;
        }
        if (!regexp.test($("#accountName").val())) {
            $("#resultAccountName").html("Không hợp lệ");
            return false;
        }
        $("#resultAccountName").html("Hợp lệ");
        return true;
    }
    $("#accountName").blur(kiemTraTenTaiKhoan);

    //Kiểm tra mật khẩu

    kiemTraMatKhau = () => {
        let regexp = /[\p{L}\d]{10,}/u;
        if ($("#password").val() == "") {
            $("#resultPassword").html("Bắt buộc");
            return false;
        }
        if (!regexp.test($("#password").val())) {
            $("#resultPassword").html("Không hợp lệ");
            return false;
        }
        $("#resultPassword").html("Hợp lệ");
        return true;
    }
    $("#password").blur(kiemTraMatKhau);

    //Kiểm tra mật khẩu nhập lại

    kiemTraMatKhauNhapLai = () => {
        if ($("#password").val() != $("#checkPassword").val()) {
            $("#resultCheckPassword").html("Không đúng");
            return false;
        } else {
            $("#resultCheckPassword").html("Đúng");
            return true;
        }
    }
    $("#checkPassword").blur(kiemTraMatKhauNhapLai);

    //Khi bấm nút đăng ký tài khoản

    $("#btnModalSignUp").click(() => {
        if (
            kiemTraHoTen() &&
            kiemTraNgaySinh() &&
            kiemTraSoDienThoai() &&
            kiemTraEmail() &&
            kiemTraTenTaiKhoan() &&
            kiemTraMatKhau() &&
            kiemTraMatKhauNhapLai()
        ) {
            let ktAccountName = false;
            let ktEmail = false;
            for (let i = 0; i < users.length; i++) {
                if (
                    users[i].accountName == $("#accountName").val() ||
                    users[i].email == $("#email").val()
                ) {
                    if (users[i].accountName == $("#accountName").val()) {
                        ktAccountName = true;
                    }
                    if (users[i].email == $("#email").val()) {
                        ktEmail = true;
                    }
                    break;
                }
            }
            if (!ktAccountName && !ktEmail) {
                users.push(
                    new User(
                        $("#name").val(),
                        $("#birthday").val(),
                        $("#phoneNumber").val(),
                        $("#email").val(),
                        $("#accountName").val(),
                        $("#password").val()
                    )
                );
                $("#resultSignUp").css("color", "green");
                $("#resultSignUp").html("Bạn đã đăng ký tài khoản thành công");

                $("#signInUserName").val($("#accountName").val());
                $("#signInPassword").val($("#password").val());
            } else {
                if (ktEmail) {
                    $("#resultSignUp").css("color", "red");
                    $("#resultSignUp").html("Email này đã đăng ký tài khoản");
                }
                if (ktAccountName) {
                    $("#resultSignUp").css("color", "red");
                    $("#resultSignUp").html("Đã có tài khoản có tên này");
                }
            }
        } else {
            $("#resultSignUp").css("color", "red");
            $("#resultSignUp").html("Thông tin của bạn không hợp lệ");
        }
    });

    //Khi bấm nút đăng nhập

    $("#btnModalSignIn").click(() => {
        if (users.length != 0) {
            let kt = false;
            for (let i = 0; i < users.length; i++) {
                if (
                    $("#signInUserName").val() == users[i].accountName &&
                    $("#signInPassword").val() == users[i].password
                ) {
                    kt = true;
                    break;
                }
            }
            if (kt == true) {
                $("#resultSignIn").css("color", "green");
                $("#resultSignIn").html("Bạn đã đăng nhập thành công");
                $("#btnSignUp").css("display", "none");
                $("#btnSignIn").css("display", "none");

                $("#btnUser").css("display", "block");
                $("#btnUser span").html($("#signInUserName").val());
                $("#btnSignOut").css("display", "block");
            } else {
                $("#resultSignIn").css("color", "red");
                $("#resultSignIn").html("Tên tài khoản hoặc mật khẩu không đúng");
            }
        } else {
            $("#resultSignIn").css("color", "red");
            $("#resultSignIn").html("Không thấy tài khoản hoặc mật khẩu");
        }
        $("#resultSignIn").html("");
    });

    //Khi bấm nút đăng xuất

    $("#btnSignOut").click(() => {
        $("#btnSignUp").css("display", "block");
        $("#btnSignIn").css("display", "block");
        $("#btnUser").css("display", "none");
        $("#btnUser span").html("");
        $("#btnSignOut").css("display", "none");
    })

    //Khi bấm vào nút mua ngay

    $("#btnMuaNgay").click(function() {
        $("#myModalBuyNow").modal();
        $("#buyNowName").val(users[currentUserNo].name);
        $("#buyNowPhoneNumber").val(users[currentUserNo].phoneNumber);
        $("#buyNowEmail").val(users[currentUserNo].email);
    })
});