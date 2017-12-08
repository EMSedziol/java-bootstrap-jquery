"use strict"

$().ready(function() {

    // this is greg doud server and data
    console.log("Before JSON Call");
    $.getJSON("HTTP://prs.doudsystems.com/Users/List")
        .done(function(users) {
            console.log(users);
            buildTable(users);
        });
    console.log("After JSON call");
});

function buildTable(users) {
    // build the table here
    for (var user of users) {
        console.log(user.FirstName, user.LastName);
    };
};