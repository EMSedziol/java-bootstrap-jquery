"use strict"

$().ready(function() {

    // this is greg doud server and data
    console.log("Before JSON Call");
    $.getJSON("HTTP://prs.doudsystems.com/Vendors/Get/1")
        .done(function(vendors) {
            console.log(vendors);
         //   getName(vendors);
        });
    console.log("After JSON call");
});

function getName(vendors) {

    return $(".name").val(vendor.Name);
}