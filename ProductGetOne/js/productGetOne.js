"use strict"

//  var pkid = 2; hard coded for testing that a record was pulled
var listVendors =  [];

$().ready(function () {

    $("#getpk").click(function () {
        console.log("Button has been clicked");
        var id = $("#pk").val();   // empty because it is retreiving data
        getData(id);
    });
    // this is greg doud server and data **** DO NOT CHANGE ****

    console.log("list of has been clicked");
    fillList();

});

function getData(id) {

    $.getJSON("HTTP://prs.doudsystems.com/Products/Get/" + id)
        .done(function (product) {
            console.log(product);
            fillData(product);
        }).fail(function () {
            $("#idx").val("");
            $("#name").val("");
            $("#partNumber").val("");
            $("#price").val("");
            $("#unit").val("");
        });
}



function fillData(product) {
    $("#idx").val(product.ID);  // what is being sent to HTML
    $("#name").val(product.Name);
    $("#partNumber").val(product.VendorPartNumber);
    $("#price").val(product.Price);
    $("#unit").val(product.Unit);
}

function fillList(products) {

    $.getJSON("HTTP://prs.doudsystems.com/Products/List")
        .done(function (products) {
            console.log(products);

            for (var product of products) {
                var select = $("#products");
                var option = "<option value='" + product.ID + "'>" + product.Name + "</option>";
                select.append(option);
            }
        });
}