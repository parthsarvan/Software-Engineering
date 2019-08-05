var studentData = JSON.parse(localStorage.getItem("studentData"));
var courseList = document.getElementById("courseList");

var index = 0;
for(var course of studentData.courses) {
	var listItem = document.createElement("div");

	var checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	checkBox.setAttribute("id", index);

	var code = document.createElement("p");
	code.appendChild(document.createTextNode(course.code));

	listItem.appendChild(checkBox);
	listItem.appendChild(code);
	courseList.appendChild(listItem);
	index++;
}