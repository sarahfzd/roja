$(document).ready(function () {
    debugger
    $("#phoneNumber").val('09');
    $("#phoneNumber").on('change', function () {
 
        // var tval = $(this).val();
        // $(this).val('09' + tval.substring(2, 11));
        // var number = $('#phoneNumber').val();
        // var orgNumber = tval.toString().length;
        // var userNumber = parseInt(number);
        // var countOfuserNumber = userNumber.toString().length - 1;
        // var tval = $(this).val();

        // var userNumber = parseInt(number);
        // var countOfuserNumber = userNumber.toString().length - 1;
        $(".login-btn").click(function (e) {
            debugger
            var number = $('#phoneNumber').val();
            var orgNumber = number.toString().length;
            if (orgNumber>11 || orgNumber<11) {
                $(".number-entered").addClass("visually-hidden")
                $(".empty-input-alert").removeClass("visually-hidden")
            }
            else {
                $("#phoneNumber").prop('disabled', true);
                $(".empty-input-alert").addClass("visually-hidden")
                $(".number-entered").removeClass("visually-hidden")
                $(".login-btn").html("ورود به حساب")
                $(".login-btn").addClass("second-login")
                var codeSent = true;
                if (codeSent) {
                    $(".second-login").click(function (e) {
           
                        var code = $(".code-insert").val();
                        if (code.length == 5) {
                            $(".wrong-code-alert").addClass("visually-hidden")
                            localStorage.setItem("entered", "true");
                            window.location = 'homePage.html';
                        }
                        else {
                            $(".wrong-code-alert").removeClass("visually-hidden")
                        }
                    });
                }
            }
        })
    });

});
