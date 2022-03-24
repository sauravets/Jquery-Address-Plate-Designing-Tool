jQuery(document).ready(function () {
    jQuery("#myinput").keyup(function () {
        let txt = jQuery("#myinput").val();
        jQuery("#mydiv").html(txt);
    });
    // Change background-color in address plate-
    jQuery(".background-color").click(function () {
        let new_color = jQuery(this).data("bgcolor");
        remove_tickMark();
        jQuery(this).find('.background-mark').addClass("tick-mark");
        jQuery("#mydiv").css('backgroundColor', new_color);
    });
    // Change text-color in address plate-
    jQuery(".text-color").click(function () {
        let txt_color = jQuery(this).data("color");
        remove_tickMark();
        jQuery(this).find(".text-mark").addClass("tick-mark");
        jQuery("#mydiv").css({ color: txt_color });
    });
    // Change font-style in address plate-
    jQuery(".font-style").click(function () {
        let font_style = jQuery(this).data("font");
        remove_tickMark();
        jQuery(this).find(".font-mark").addClass("font-tickMark");
        jQuery("#mydiv").css({ fontFamily: font_style });
        jQuery("#mydiv").css({ 'text-transform': 'uppercase' });
        let capitalized = jQuery(this).data("text");
        jQuery("#mydiv").css({ textTransform: capitalized });
    });
    remove_tickMark();
    //  function use to remove tick-mark from elements-
    function remove_tickMark() {
        jQuery(".background-mark").removeClass("tick-mark");
        jQuery(".text-mark").removeClass("tick-mark");
        jQuery(".font-mark").removeClass("font-tickMark");
    }
    jQuery(".done").click(function (e) {
        e.preventDefault();
        jQuery("#myform").show();
    });
    jQuery(".close").click(function (e) {
        e.preventDefault();
        jQuery("#myform").hide();
    });
    // jQuery(".save").click(function (e) {
    //     e.preventDefault();
    //     let customer_information;
    //     // if no existing data create an array
    //     customer_information = !!localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[];
    //     let firstName = jQuery("#firstName").val();
    //     let lastName = jQuery("#lastName").val();
    //     let email = jQuery("#email").val();
    //     let users = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email
    //     };
    //     // customer_information.push(users);
    //   localStorage.setItem('users',JSON.stringify(users));
    // });
    jQuery(".save").click(function (e) {
        e.preventDefault();
        let firstName = jQuery("#firstName").val();
        let lastName = jQuery("#lastName").val();
        let email = jQuery("#email").val();
        let myinput = jQuery("#myinput").val();
        let users = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address_plate: myinput
        };
        let customerArr = [];

        if (!localStorage.getItem('Users')) {
            customerArr.push(users);
            localStorage.setItem('Users', JSON.stringify(customerArr));
        } else {
            customerArr = JSON.parse(localStorage.getItem('Users'));
            customerArr.push(users);
            localStorage.setItem('Users', JSON.stringify(customerArr));
        }
        // jQuery("#entries").html("hello");
    });
    show_entries();

    function show_entries() {
        let entries = JSON.parse(localStorage.getItem('Users'));
        console.log(entries);
        // document.write(JSON.stringify(entries));
    }
    jQuery(".try").click(function () {
        jQuery("#entries").html("hello");
    });
});