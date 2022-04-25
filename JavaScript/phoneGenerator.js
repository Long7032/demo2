phoneGenerator = () => {
	let phoneName = sessionStorage.getItem("phoneName");
	console.log(phoneName)
	console.log(phones)

	let phone;
	let kt = false;

	for (let i = 0; i < phones.length; i++) {
		if (phoneName == phones[i].name) {
			phone = phones[i];
			kt = true;
			break;
		}
	}

	if (kt == false) {
		phone = new Phone("Phone Name", "123", [], "(NONE)", null)
	}

	//.container

	document.querySelector("body > .container-fluid > .container").appendChild( document.createElement("header") )

	document.querySelector("body > .container-fluid > .container").appendChild( document.createElement("div") )
	document.querySelector(".container > div").setAttribute("class", "row");
	document.querySelector(".container > div").style.height = "450px";

	document.querySelector("body > .container-fluid > .container").appendChild( document.createElement("div") )
	document.querySelector(".container > div:nth-of-type(2)").setAttribute("class", "row");

	//.container > header

	document.querySelector(".container > header").appendChild( document.createElement("div") );
	document.querySelector(".container > header > div").setAttribute("class", "row");

	document.querySelector(".container > header > div").appendChild( document.createElement("h1") );
	document.querySelector(".container > header > div > h1").appendChild( document.createTextNode(phone.name) );

	//.container > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1)").setAttribute("class", "col-md-7");

	document.querySelector(".container > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2)").setAttribute("class", "col-md-5");

	//.container > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1)").setAttribute("class", "col-md-7");

	document.querySelector(".container > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(2)").setAttribute("class", "col-md-5");

	//.container > div:nth-of-type(1) > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").setAttribute("id", "myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").setAttribute("class", "carousel slide");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").setAttribute("data-ride", "carousel");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").appendChild( document.createElement("ol") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol").setAttribute("class", "carousel-indicators");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div").setAttribute("class", "carousel-inner");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").appendChild( document.createElement("a") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a").setAttribute("class", "left carousel-control");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a").setAttribute("href", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a").setAttribute("data-slide", "prev");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").appendChild( document.createElement("a") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").setAttribute("class", "right carousel-control");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").setAttribute("href", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").setAttribute("data-slide", "next");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol").appendChild( document.createElement("li") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li").setAttribute("data-target", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li").setAttribute("data-slide-to", "0");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li").setAttribute("class", "active");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol").appendChild( document.createElement("li") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li:nth-of-type(2)").setAttribute("data-target", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li:nth-of-type(2)").setAttribute("data-slide-to", "1");
	
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol").appendChild( document.createElement("li") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li:nth-of-type(3)").setAttribute("data-target", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li:nth-of-type(3)").setAttribute("data-slide-to", "2");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > div

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div").setAttribute("class", "item active");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2)").setAttribute("class", "item");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(3)").setAttribute("class", "item");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(1)").appendChild( document.createElement("img") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(1) > img").setAttribute("src", phone.imgs[0]);

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-child(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2)").appendChild( document.createElement("img") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > img").setAttribute("src", phone.imgs[1]);

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-child(3)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(3)").appendChild( document.createElement("img") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(3) > img").setAttribute("src", phone.imgs[2]);

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-child(1)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(1)").appendChild( document.createElement("span") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(1) > span").setAttribute("class", "glyphicon glyphicon-chevron-left");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(1)").appendChild( document.createElement("span") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(1) > span:nth-of-type(2)").setAttribute("class", "sr-only");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").appendChild( document.createElement("span") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2) > span").setAttribute("class", "glyphicon glyphicon-chevron-right");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").appendChild( document.createElement("span") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2) > span:nth-of-type(2)").setAttribute("class", "sr-only");

	//.container > div:nth-of-type(1) > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2)").appendChild( document.createElement("h2") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > h2").setAttribute("class", "col-md-12");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)").setAttribute("class", "row");
	
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2)").setAttribute("class", "row");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > h2

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > h2").appendChild( document.createTextNode(phone.price + "đ") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div").setAttribute("class", "col-md-12");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div").appendChild( document.createElement("button") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button").setAttribute("class", "col-md-12 btn btn-default");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button").setAttribute("id", "btnMuaNgay");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button").appendChild( document.createElement("h4") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button").appendChild( document.createElement("p") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button > h4

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button > h4").appendChild( document.createTextNode("Mua ngay") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button > p

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button > p").appendChild( document.createTextNode("(Giao hàng tận nhà hay nhận tại cửa hàng)") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div").setAttribute("class", "col-md-6");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)").setAttribute("class", "col-md-6");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div").appendChild( document.createElement("button") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button").setAttribute("id", "traGopQuaDienThoai");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button").setAttribute("class", "btn btn-default");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > button

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button").appendChild( document.createElement("h4") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button").appendChild( document.createElement("p") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > button > h4

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button > h4").appendChild( document.createTextNode("Trả Góp 0%") );
	
	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > button > p

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button > p").appendChild( document.createTextNode("Duyệt hồ sơ trong ̀5 phút") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)").appendChild( document.createElement("button") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button").setAttribute("id", "traGopQuaThe");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button").setAttribute("class", "btn btn-default");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button").appendChild( document.createElement("h4") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button").appendChild( document.createElement("p") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button > h4

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button > h4").appendChild( document.createTextNode("Trả Góp Qua Thẻ") );
	
	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button > p

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button > p").appendChild( document.createTextNode("Visa, MasterCard, FECredit") );
	
	//.container > div:nth-of-type(2) > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1) > div").setAttribute("id", "moTa");

	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)").setAttribute("id", "btnMoRongVaThuGon");

	//.container > div:nth-of-type(2) > div:nth-of-type(1) > div#moTa

	document.querySelector("#moTa").appendChild( document.createElement("h3") );
	document.querySelector("#moTa > h3").appendChild( document.createTextNode("Đánh giá " + phone.name) );
	document.querySelector("#moTa").appendChild( document.createElement("p") );
	document.querySelector("#moTa > p").appendChild( document.createTextNode(phone.description) );

	//.container > div:nth-of-type(2) > div:nth-of-type(1) > div#btnMoRongVaThuGon

	document.querySelector("#btnMoRongVaThuGon").appendChild( document.createElement("button") );
	document.querySelector("#btnMoRongVaThuGon > button").setAttribute("id", "btnMoRong");
	document.querySelector("#btnMoRongVaThuGon > button").appendChild( document.createTextNode("Mở rộng") )

	document.querySelector("#btnMoRongVaThuGon").appendChild( document.createElement("button") );
	document.querySelector("#btnMoRongVaThuGon > button:last-child").setAttribute("id", "btnThuGon");
	document.querySelector("#btnMoRongVaThuGon > button:last-child").appendChild( document.createTextNode("Thu gọn") )

	//.container > div:nth-of-type(2) > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(2) > div").setAttribute("id", "thongSo");

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo

	document.querySelector("#thongSo").appendChild( document.createElement("table") );
	document.querySelector("#thongSo > table").setAttribute("class", "table");
	document.querySelector("#thongSo > table").setAttribute("role", "table");

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table

	document.querySelector("#thongSo > table").appendChild( document.createElement("caption") );
	document.querySelector("#thongSo > table > caption").style.fontWeight = "bolder";
	document.querySelector("#thongSo > table > caption").style.fontSize = "24px";

	document.querySelector("#thongSo > table").appendChild( document.createElement("tbody") );

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > caption

	document.querySelector("#thongSo > table > caption").appendChild( document.createTextNode("Thông số kỹ thuật") )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tbody

	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(1)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(1)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(1) > th").appendChild( document.createTextNode("Màn hình") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(1)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(1) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.screenSize) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(2)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(2)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(2) > th").appendChild( document.createTextNode("Công nghệ màn hình") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(2)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(2) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.screenTech) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(3)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(3)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(3) > th").appendChild( document.createTextNode("Camera sau") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(3)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(3) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.rearCamera) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(4)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(4)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(4) > th").appendChild( document.createTextNode("Camera trước") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(4)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(4) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.frontCamera) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(5)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(5)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(5) > th").appendChild( document.createTextNode("Chipset") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(5)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(5) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.chipset) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(6)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(6)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(6) > th").appendChild( document.createTextNode("RAM") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(6)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(6) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.ram) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(7)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(7)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(7) > th").appendChild( document.createTextNode("Bộ nhớ trong") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(7)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(7) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.internalMemory) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(8)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(8)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(8) > th").appendChild( document.createTextNode("Dung lượng pin") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(8)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(8) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.batteryCapacity) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(9)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(9)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(9) > th").appendChild( document.createTextNode("Thẻ sim") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(9)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(9) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.simSlot) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(10)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(10)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(10) > th").appendChild( document.createTextNode("Hệ điều hành") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(10)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(10) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.os) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(11)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(11)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(11) > th").appendChild( document.createTextNode("Độ phân giải màn hình") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(11)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(11) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.screenResoluton) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(12)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(12)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(12) > th").appendChild( document.createTextNode("Trọng lượng") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(12)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(12) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.weight) )
}