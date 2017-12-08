"use strict"

$().ready(function() {

    // this is greg doud server and data
    console.log("Before JSON Call");
    $.getJSON("HTTP://prs.doudsystems.com/Vendors/List")
        .done(function(vendors) {
            console.log(vendors);
            buildTable(vendors);
        });
    console.log("After JSON call");
});

function buildTable(vendors) {
    // build the table here
    var tbody = $("#vendors");
    tbody.empty()
    for (var vendor of vendors) {
        console.log(vendor.Name);
        var line = "<tr>";
        line += "<td>" + vendor.Code + "</td>";
        line += "<td>" + vendor.Name + "</td>";
        line += "<td>" + vendor.City + "/" + vendor.State + "</td>";
        line += "<td>" + vendor.Email + "</td>";
        line += "<td>" + (vendor.IsRecommended ? "Yes" : "No") + "</td>";
        line += "</tr>";
        tbody.append(line);
        console.log(line);
    }
}