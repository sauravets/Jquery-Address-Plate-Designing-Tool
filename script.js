$(document).ready(function () {
    $("#myinput").keyup(function () {
        let txt = $("#myinput").val();
        $("#mydiv").html(txt);
    });

    // $(".black").addClass("black");
    // $("#first").css( "background,gray","height,100px","width,100px","border-radius, 50px",
    // "border, 1px solid black", "display,none");       
    $("<div>").attr({
        'class': 'black',
        'style': "background:gray,height:100px,width:100px,border-radius:50px;"
    }).append("#main");

});