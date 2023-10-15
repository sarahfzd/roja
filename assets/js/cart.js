$(document).ready(function () {
    
    $(".basket-btn").click(function(e){
        e.preventDefault();
        $(".basket-inner").addClass("basket-main-show")
    })

    $(".btn-close").click(function(e){
        e.preventDefault();
        $(".basket-inner").removeClass("basket-main-show")
    })

});
