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
            let convertToarray = jQuery.map(takeObject, function (value, index) {
                return [index, value];
            });
            let tbody ='';          
                tbody += "<tr  id='row_" + "'>";
                tbody += "<td>" +takeObject.FirstName+ "</td>"; 
                tbody += "<td>" +takeObject.LastName+ "</td>"; 
                tbody += "<td>" +takeObject.Email+ "</td>"; 
                tbody += "<td>" +takeObject. Address_Plate+ "</td>"; 
                tbody += "<td>" +takeObject.Background+ "</td>"; 
                tbody += "<td>" +takeObject.TextColor+ "</td>"; 
                tbody += "<td>" +takeObject.FontStyle+ "</td>"; 
                tbody += "</tr>";
                jQuery("#table").append(tbody);
            // }
        }
    }
});
