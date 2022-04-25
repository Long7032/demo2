navbarGenerator = () => {
    let isAccount = false;
    // let userName = sessionStorage.getItem("userObj")
    // userName = userName.replaceAll('"', '')
    let userName;
    if (sessionStorage.getItem("userObj") != null) {
        userName = sessionStorage.getItem("userObj")
        userName = userName.replaceAll('"', '')
    } else {
        userName = "";
    }
    if (userName.length == 0) {
        isAccount = false;
    } else {
        isAccount = true;
    }

    // body > .container-fluid > nav

    document.querySelector("body > .container-fluid > nav").appendChild(document.createElement("div"))
    document.querySelector("body > .container-fluid > nav").setAttribute("class", "navbar navbar-inverse")

    // body > .container-fluid > nav > div

    document.querySelector("body > .container-fluid > nav > div").setAttribute("class", "container-fluid")
    document.querySelector("body > .container-fluid > nav > div").appendChild(document.createElement("div"))

    document.querySelector("body > .container-fluid > nav > div").appendChild(document.createElement("ul"))


    document.querySelector("body > .container-fluid > nav > div").appendChild(document.createElement("div"))

    // body > .container-fluid > nav > div > div.navbar-header

    document.querySelector("body > .container-fluid > nav > div > div").setAttribute("class", "navbar-header")
    document.querySelector("body > .container-fluid > nav > div > div.navbar-header").appendChild(document.createElement("a"))

    // body > .container-fluid > nav > div > div.navbar-header > a

    document.querySelector("body > .container-fluid > nav > div > div.navbar-header > a").setAttribute("class", "navbar-brand")
    document.querySelector("body > .container-fluid > nav > div > div.navbar-header > a").setAttribute("href", "trangChuPage.html")
    document.querySelector("body > .container-fluid > nav > div > div.navbar-header > a").appendChild(document.createElement("img"))

    // body > .container-fluid > nav > div > div.navbar-header > a > img

    document.querySelector("body > .container-fluid > nav > div > div.navbar-header > a > img").setAttribute("src", "../Image/logo.png")
    document.querySelector("body > .container-fluid > nav > div > div.navbar-header > a > img").setAttribute("width", "100%")
    document.querySelector("body > .container-fluid > nav > div > div.navbar-header > a > img").setAttribute("height", "30px")

    // body > .container-fluid > nav > div > ul

    document.querySelector("body > .container-fluid > nav > div > ul").setAttribute("class", "nav navbar-nav")
    document.querySelector("body > .container-fluid > nav > div > ul").appendChild(document.createElement("li"))
    document.querySelector("body > .container-fluid > nav > div > ul").appendChild(document.createElement("li"))
    document.querySelector("body > .container-fluid > nav > div > ul").appendChild(document.createElement("li"))
    document.querySelector("body > .container-fluid > nav > div > ul").appendChild(document.createElement("li"))
    document.querySelector("body > .container-fluid > nav > div > ul").appendChild(document.createElement("li"))
    document.querySelector("body > .container-fluid > nav > div > ul").appendChild(document.createElement("li"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(1)

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(1)").setAttribute("class", "dropdown")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(1)").appendChild(document.createElement("a"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(1) > a

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(1) > a").setAttribute("onclick", "openSmartPhonePage(this)")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(1) > a").appendChild(document.createTextNode("Điện Thoại"))


    // body > .container-fluid > nav > div > ul > li:nth-of-type(2)

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(2)").setAttribute("class", "dropdown")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(2)").appendChild(document.createElement("a"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(2) > a

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(2) > a").setAttribute("onclick", "openTabletPage(this)")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(2) > a").appendChild(document.createTextNode("Máy Tính Bảng"))


    // body > .container-fluid > nav > div > ul > li:nth-of-type(3)

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3)").setAttribute("class", "dropdown")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3)").appendChild(document.createElement("a"))
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3)").appendChild(document.createElement("ul"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(3) > a

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > a").setAttribute("class", "dropdown-toggle")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > a").setAttribute("href", "../HTML/smartPhonePage.html")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > a").setAttribute("data-toggle", "dropdown")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > a").appendChild(document.createTextNode("Tin Tức"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul").setAttribute("class", "dropdown-menu")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul").appendChild(document.createElement("li"))
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul").appendChild(document.createElement("li"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(1)

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(1)").appendChild(document.createElement("a"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(2)

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(2)").appendChild(document.createElement("a"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(1) > a

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(1) > a").setAttribute("onclick", "openNewsPage(this)")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(1) > a").appendChild(document.createTextNode("Tin Tức Mới"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(2) > a

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(2) > a").setAttribute("onclick", "openBlogPage(this)")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(3) > ul > li:nth-of-type(2) > a").appendChild(document.createTextNode("Blog Thảo Luận"))


    // body > .container-fluid > nav > div > ul > li:nth-of-type(4)

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(4)").appendChild(document.createElement("a"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(4) > a

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(4) > a").setAttribute("onclick", "openAboutUsPage(this)")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(4) > a").appendChild(document.createTextNode("About Us"))


    // body > .container-fluid > nav > div > ul > li:nth-of-type(5)

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5)").appendChild(document.createElement("form"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form").setAttribute("class", "navbar-form")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form").appendChild(document.createElement("div"))
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form").appendChild(document.createElement("button"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div").setAttribute("class", "form-group")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div").appendChild(document.createElement("input"))

    // body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div > input

    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div > input").setAttribute("id", "myInput")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div > input").setAttribute("type", "search")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div > input").setAttribute("class", "form-control")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div > input").setAttribute("placeholder", "Nhập thông tin cần tìm:")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div > input").setAttribute("name", "search")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > div > input").setAttribute("size", "30")

    // body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > button
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > button").style.margin = "0px 0px 0px 5px";
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > button").setAttribute("type", "button")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > button").setAttribute("class", "btn btn-primary")
    document.querySelector("body > .container-fluid > nav > div > ul > li:nth-of-type(5) > form > button").appendChild(document.createTextNode("Tìm kiếm"))


    // body > .container-fluid > nav > div > div:nth-of-type(2)

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2)").setAttribute("class", "navbar-form navbar-right")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2)").appendChild(document.createElement("span"))
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2)").appendChild(document.createElement("div"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > span

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > span").appendChild(document.createElement("a"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > span > a

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > span > a").appendChild(document.createElement("span"))
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > span > a").setAttribute("id", "btnSignIn")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > span > a").appendChild(document.createTextNode(" Đăng Nhập"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > span > a > span

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > span > a > span").setAttribute("class", "glyphicon glyphicon-log-in")

    // body > .container-fluid > nav > div > div:nth-of-type(2) > div

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div").setAttribute("class", "dropdown")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div").appendChild(document.createElement("a"))
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div").appendChild(document.createElement("ul"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > div > a

    // document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > a").setAttribute("href", "")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > a").setAttribute("id", "btnUser")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > a").setAttribute("class", "dropdown-toggle")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > a").setAttribute("data-toggle", "dropdown")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > a").appendChild(document.createElement("span"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > div > a > span

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > a > span").setAttribute("class", "glyphicon glyphicon-user")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > a > span").setAttribute("id", "userName")

    // body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul").setAttribute("class", "dropdown-menu")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul").appendChild(document.createElement("li"))
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul").appendChild(document.createElement("li"))
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul").appendChild(document.createElement("li"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(1)

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(1)").appendChild(document.createElement("a"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(1) > a

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(1) > a").setAttribute("onclick", "openUserTemplatePage(this)")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(1) > a").appendChild(document.createTextNode("Thông tin cá nhân"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(2)

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(2)").appendChild(document.createElement("a"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(2) > a

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(2) > a").setAttribute("id", "btnSignOut")
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(2) > a").appendChild(document.createElement("span"))
    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(2) > a").appendChild(document.createTextNode("Đăng xuất"))

    // body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(2) > a > span

    document.querySelector("body > .container-fluid > nav > div > div:nth-of-type(2) > div > ul > li:nth-of-type(2) > a > span").setAttribute("class", "glyphicon glyphicon-log-out")

    // Check if previos page have login

    if (isAccount) {
        document.querySelector("#btnSignUp").style.display = "none"
        document.querySelector("#btnSignIn").style.display = "none"

        document.querySelector("#btnUser").style.display = "block"
        document.querySelector("#btnUser span").innerHTML = userName;
        document.querySelector("#btnSignOut").style.display = "block"
    }

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
        $("#resultBirthday").html("Hợp lệ");
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
                $("#resultSignUp").html("Bạn đã đăng ký tài khoản thành công");

                $("#signInUserName").val($("#accountName").val());
                $("#signInPassword").val($("#password").val());
            } else {
                if (ktEmail) {
                    $("#resultSignUp").html("Email này đã đăng ký tài khoản");
                }
                if (ktAccountName) {
                    $("#resultSignUp").html("Đã có tài khoản có tên này");
                }
            }
        } else {
            $("#resultSignUp").html("Thông tin của bạn không hợp lệ");
        }
    });

    //Khi bấm nút đăng nhập

    $("#btnModalSignIn").click(() => {
        if (users.length != 0) {
            let kt = true;
            for (let i = 0; i < users.length; i++) {
                if (
                    $("#signInUserName").val() != users[i].accountName ||
                    $("#signInPassword").val() != users[i].password
                ) {
                    kt = false;
                    break;
                }
            }
            if (kt == true) {
                $("#resultSignIn").html("Bạn đã đăng nhập thành công");

                $("#btnSignUp").css("display", "none");
                $("#btnSignIn").css("display", "none");

                $("#btnUser").css("display", "block");
                $("#btnUser span").html($("#accountName").val());
                $("#btnSignOut").css("display", "block");
            } else {
                $("#resultSignIn").html("Tên tài khoản hoặc mật khẩu không đúng");
            }
        } else {
            $("#resultSignIn").html("Không thấy tài khoản hoặc mật khẩu");
        }
    });

    //Khi bấm nút đăng xuất

    $("#btnSignOut").click(() => {
        $("#btnSignUp").css("display", "block");
        $("#btnSignIn").css("display", "block");

        $("#btnUser").css("display", "none");
        $("#btnUser span").html("");
        $("#btnSignOut").css("display", "none");
    })
}