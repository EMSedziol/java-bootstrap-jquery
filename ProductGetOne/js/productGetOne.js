"use strict"

//  var pkid = 2; hard coded for testing that a record was pulled

$().ready(function () {

    $("#getpk").click(function () {
        console.log("Button has been clicked");
        var id = $("#pk").val();   // empty because it is retreiving data
        getData(id);
    });
    // this is greg doud server and data **** DO NOT CHANGE ****
});

function getData(id) {

    $.getJSON("HTTP://prs.doudsystems.com/Products/Get/" + id)
        .done(function (product) {
            console.log(product);
            fillData(product);
        });
}



function fillData(product) {
    $("#idx").val(product.ID);  // what is being sent to HTML
    $("#name").val(product.Name);
    $("#partNumber").val(product.VendorPartNumber);
    $("#price").val(product.Price);
    $("#unit").val(product.Unit);
}