var personList = [];

var kaydetButton = document.getElementById("kaydet");
kaydetButton.onclick = function () {
    var adi = document.getElementById("adi").value;
    var telNo = document.getElementById("telNo").value;
    var email = document.getElementById("email").value;

    if (adi != "" || telNo != "" || email != "") {
        var person = { adi, telNo, email };
        personList.push(person);
        localStorage.setItem("users", JSON.stringify(personList));

    }

}

var listeleButton = document.getElementById("listeleBtn");
listeleButton.onclick = function () {
    document.getElementById("listele").innerHTML = " ";
    html = "<br> <h2>Rehber Listesi </h2> <table class='table'>";
    html += "<tr> <th scope='col'> İsim </th> <th scope='col'> Email </th> <th scope='col'> Tel No </th> <tr>";

    var personList = JSON.parse(localStorage.getItem("users"));

    for (var i = 0; i < personList.length; i++) {
        html += "<td>" + personList[i].adi + " </td>"
        html += "<td>" + personList[i].telNo + " </td>"
        html += "<td>" + personList[i].email + " </td> </tr>"

        //   nameList = "<li>" + personList[i].adi + personList[i].email + personList[i].telNo + "</li>";
        //  document.getElementById("listele").innerHTML += nameList;
    }
    html += "</table>"
    document.getElementById("listele").innerHTML = html; 
}



