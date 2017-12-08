var thingslike = [
    { Id: 1, Desc: 'Play music', Why: 'It sounds good' },
    { Id: 2, Desc: 'Watch movies', Why: 'mindlessness' },
    { Id: 3, Desc: 'Audio books', Why: 'eyes and hands free to do something else' },
];

$().ready(function() {
    console.log("It worked");
 //   $body.css("margin", "10px");
    loadTable();

    $("button").click(function() {
        addItem();
    });
});

function additem() {
    console.log("Add Items");
    var id = thingslike.length + 1;
    var desc = $("#desc").val();
    var why = $("why").val();
    var item = {
        Id: id, Desc: desc, Why: why
    }
    thingslike.push(item);
}

function loadTable() {
    console.log("Load Table");
    var tbody = $("tbody");
    tbody.empty();
    // til could be a or x
    for (var til of thingslike) {
        var item = "<tr>";
        item += "<td>" + til.Id + "</td>";
        item += "<td>" + til.Desc + "</td>";
        item += "<td>" + til.Why + "</td>";
        tbody.append(item);
    }
}