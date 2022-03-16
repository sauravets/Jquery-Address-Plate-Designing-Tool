$(document).ready(function () {
    $("#myinput").keyup(function () {
        let txt = $("#myinput").val();
        $("#mydiv").html(txt);
    });

    $(".column").click(function(){
        $(".tick-mark").toggle();
        
    });
});