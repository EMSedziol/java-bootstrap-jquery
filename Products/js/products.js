"use strict"

$().ready(function() {

    // this is greg doud server and data
    console.log("Before JSON Call");
    $.getJSON("HTTP://prs.doudsystems.com/Products/List")
        .done(function(products) {
            console.log(products);
            buildTable(products);
        });
    console.log("After JSON call");
});

function buildTable(products) {
    // build the table here
    var tbody = $("#products");
    tbody.empty()
    for (var product of products) {
        console.log(products.Name);
        var line = "<tr>";
        line += "<td>" + product.Name + "</td>";
        line += "<td>" + product.VendorPartnumber + "</td>";
        line += "<td>" + product.Unit
        line += "<td>" + product.Price + "</td>";
        line += "</tr>";
        tbody.append(line);
        console.log(line);
    }
}