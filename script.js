jQuery(document).ready(function () {
    jQuery("#myinput").keyup(function () {
        let txt = jQuery("#myinput").val();
        jQuery("#mydiv").html(txt);
    });
    // Change background-color in address plate-
    jQuery(".background-color").click(function () {
        let new_color = jQuery(this).data("bgcolor");
        removebodyMark();
        jQuery(this).find('.background-mark').addClass("tick-mark");
        jQuery("#mydiv").css('backgroundColor', new_color);

    });
    // Change text-color in address plate-
    jQuery(".text-color").click(function () {
        let txt_color = jQuery(this).data("color");
        removetextMark();
        jQuery(this).find(".text-mark").addClass("tick-mark");
        jQuery("#mydiv").css({ color: txt_color });
    });
    // Change font-style in address plate-
    jQuery(".font-style").click(function () {
        let font_style = jQuery(this).data("font");
        removefontMark();
        jQuery(this).find(".font-mark").addClass("font-tickMark");
        jQuery("#mydiv").css({ fontFamily: font_style });
        jQuery("#mydiv").css({ 'text-transform': 'uppercase' });
        let capitalized = jQuery(this).data("text");
        jQuery("#mydiv").css({ textTransform: capitalized });
    });
    removebodyMark();
    //  function use to remove tick-mark from elements-
    function removebodyMark() {
        jQuery(".background-mark").removeClass("tick-mark");
    }
    removetextMark();
    function removetextMark() {
        jQuery(".text-mark").removeClass("tick-mark");
    }
    removefontMark();
    function removefontMark() {
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
        let new_color = jQuery('.tick-mark').closest('.background-color').attr('style');
        let txt_color = jQuery('.tick-mark').closest('.text-color').attr('style');
        let font_style = jQuery('.font-tickMark').closest('.font-style').data('font');
        let users = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Address_Plate: myinput,
            Background: new_color,
            TextColor: txt_color,
            FontStyle: font_style
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
    });
    show_customers_entries();

    function show_customers_entries() {
        let customerInformation = JSON.parse(localStorage.getItem('Users'));
        for (let i = 0; i <= customerInformation.length - 1; i++) {
            let takeObject = customerInformation[i];
            // let convertToarray = Object.entries(takeObject);  
            let convertToarray = $.map(takeObject, function(value, index){
                return [index,value];
            });
            for (let a = 0; a <= convertToarray.length-1 ; a++) {
                let convertedArray = convertToarray[a];                   
                jQuery("#customerInformation").append('<ul> <li>'+ convertedArray + '</li> </ul>');
            }
        }
    }
});

            // let customerDetails = jQuery("#table");
            // let ul = jQuery('<ul></ul>');
            // ul.attr('style', 'padding: 0; margin: 0;');
            // ul.attr('id', 'theList');
            // for (i = 0; i <= done.length - 1; i++) {
            //     let li = jQuery('<li></li>');                      // create li element.
            //     li.html = done[i];                                // assigning text to li using array value.
            //     console.log(li.html);
            //     li.attr('style', 'display: block;');              // remove the bullets.
            //     ul.append(li);                                   // append li to ul.
            // }  
            // customerDetails.append(ul);                         // add list to the div.
