"use strict"


$().ready(function() {

    console.log("in onClick");
    $("#getpk").click(function () {
        console.log("Button has been clicked");
        var id = $("#pk").val();
        getData(id);
    });

    // this is greg doud server and data
    console.log("end of onload");
    
});

function getData(id) {

    console.log("data should display or clear");
    $.getJSON("HTTP://prs.doudsystems.com/Vendors/Get/" + id)
        .done(function(vendors) {
            console.log(vendors);
            fillData(vendors);
        }).fail(function() {
            console.log("clear data");
            $("#idx").val("");
            $("#code").val("");
            $("#name").val("");
            $("#address").val("");
            $("#city").val("");
            $("#state").val("");
            $("#Zip").val("");
        });
}

function fillData(vendors) {
    $("#idx").val(vendors.ID);
    $("#code").val(vendors.Code);
    $("#name").val(vendors.Name);
    $("#address").val(vendors.Address);
    $("#city").val(vendors.City);
    $("#state").val(vendors.State)
    $("#zip").val(vendors.Zip);
}