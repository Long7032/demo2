$(document).ready(function() {

    $("#AppleBrand").click(function() {
        $("#row2").css("display", "block");
        $(".col-md-4").css("display", "none");
        if ($("#lblSamsung").css("display") == "inline-block") {
            $(".Samsung").css("display", "block");
        }
        if ($("#lblLenovo").css("display") == "inline-block") {
            $(".Lenovo").css("display", "block");
        }
        if ($("#lblAlcatel").css("display") == "inline-block") {
            $(".Alcatel").css("display", "block");
        }
        $(".Apple").css("display", "block");
        $("#lblApple").css("display", "inline-block");
        $("#lblApple").text("Apple");
        $("#btnClear").css("display", "inline-block");
    })

    $("#SamsungBrand").click(function() {
        $("#row2").css("display", "block");
        $(".col-md-4").css("display", "none");
        if ($("#lblApple").css("display") == "inline-block") {
            $(".Apple").css("display", "block");
        }
        if ($("#lblLenovo").css("display") == "inline-block") {
            $(".Lenovo").css("display", "block");
        }
        if ($("#lblAlcatel").css("display") == "inline-block") {
            $(".Alcatel").css("display", "block");
        }
        $(".Samsung").css("display", "block");
        $("#lblSamsung").css("display", "inline-block");
        $("#lblSamsung").text("Samsung");
        $("#btnClear").css("display", "inline-block")
    })

    $("#LenovoBrand").click(function() {
        $("#row2").css("display", "block");
        $(".col-md-4").css("display", "none");
        if ($("#lblApple").css("display") == "inline-block") {
            $(".Apple").css("display", "block");
        }
        if ($("#lblAlcatel").css("display") == "inline-block") {
            $(".Alcatel").css("display", "block");
        }
        if ($("#lblSamsung").css("display") == "inline-block") {
            $(".Samsung").css("display", "block");
        }
        $(".Lenovo").css("display", "block");
        $("#lblLenovo").css("display", "inline-block");
        $("#lblLenovo").text("Lenovo");
        $("#btnClear").css("display", "inline-block")
    })


    $("#AlcatelBrand").click(function() {
        $("#row2").css("display", "block");
        $(".col-md-4").css("display", "none");
        if ($("#lblApple").css("display") == "inline-block") {
            $(".Apple").css("display", "block");
        }
        if ($("#lblSamsung").css("display") == "inline-block") {
            $(".Samsung").css("display", "block");
        }
        if ($("#lblLenovo").css("display") == "inline-block") {
            $(".Lenovo").css("display", "block");
        }
        $(".Alcatel").css("display", "block");
        $("#lblAlcatel").css("display", "inline-block");
        $("#lblAlcatel").text("Alcatel");
        $("#btnClear").css("display", "inline-block")
    })

    $("#btnClear").click(function() {
        $("#row2").css("display", "none");
        if ($("#row2").css("display") == "none") {
            $(".col-md-4").css("display", "block");
        }
        $("#btnClear").css("display", "none");
        $("#lblApple").css("display", "none");
        $("#lblSamsung").css("display", "none");
        $("#lblLenovo").css("display", "none");
        $("#lblAlcatel").css("display", "none");
    })

    $(".btn.btn-primary").click(function() {
        let search = $(".form-control").val();
        $(".col-md-4").css("display", "none")
        $(".col-md-4:contains(" + search + ")").css("display", "block");
    })
});