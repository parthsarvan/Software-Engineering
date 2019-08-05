var studentData = JSON.parse(localStorage.getItem("studentData"));
var homeworkList = document.getElementById("homeworkList");

var index = 0;
for(var homework of studentData.homeworks) {
	var listItem = document.createElement("div");

	var checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	checkBox.setAttribute("id", index);

	var HWName = document.createElement("p");
	HWName.appendChild(document.createTextNode(homework.HWName));

	var fullDueDate = new Date(homework.dueDate);
	var dueDateString = (fullDueDate.getMonth() + 1) + "/" + (fullDueDate.getDate() + 1) + "/" + fullDueDate.getFullYear();

	var dueDate = document.createElement("p");
	dueDate.appendChild(document.createTextNode(dueDateString));
	dueDate.setAttribute("id", "date" + index);

	if(fullDueDate < new Date()) {
		dueDate.setAttribute("class", "late");
	}

	listItem.appendChild(checkBox);
	listItem.appendChild(HWName);
	listItem.appendChild(dueDate);
	homeworkList.appendChild(listItem);
	index++;
}