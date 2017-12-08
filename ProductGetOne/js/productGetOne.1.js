"use strict"

var pkid = 2;

$().ready(function() {

    // this is greg doud server and data
 //   console.log("Before JSON Call");
    $.getJSON("HTTP://prs.doudsystems.com/Products/Get/" + pkid)
        .done(function(product) {
            console.log(product);
            fillData(product)
        });
  //  console.log("After JSON call");
});

function fillData(product) {
    $("#idx").val(product.ID);
    $("#name").val(product.Name);
    $("#partNumber").val(product.VendorPartNumber);
    $("#price").val(product.Price);
    $("#unit").val(product.Unit);
}