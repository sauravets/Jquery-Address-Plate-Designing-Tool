$(document).ready(function () {
    $("#myinput").keyup(function () {
        let txt = $("#myinput").val();
        $("#mydiv").html(txt);
    });

    $(".column").click(function () {
        $(".tick-mark").toggle();
        let new_color = $(this).data("bgcolor");
        $("#mydiv").css({ backgroundColor: new_color });
    });

    $(".text-color").click(function () {
        let txt_color = $(this).data("color");
        $("#mydiv").css({ color: txt_color });        
    });

    $(".font-style").click(function () {
        let font_style = $(this).data("font");
        $("#mydiv").css({ fontFamily: font_style });
        $("#mydiv").css({ 'fontSize': '45px' });
        $("#mydiv").css({ 'text-transform': 'uppercase' });
    });
});