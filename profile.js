var studentData = JSON.parse(localStorage.getItem("studentData"));
var profileDiv = document.getElementById("profile");

var nameString = document.createElement("h1");
nameString.appendChild(document.createTextNode(studentData.fname + " " + studentData.lname));

var email = document.createElement("p");
email.appendChild(document.createTextNode("email : " + studentData.email));

var editButton = document.createElement("input");
editButton.setAttribute("type", "button");
editButton.setAttribute("value", "Edit Profile");

profileDiv.appendChild(nameString);
profileDiv.appendChild(email);
profileDiv.appendChild(editButton);