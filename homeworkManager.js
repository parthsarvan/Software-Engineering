function addHomework() {
	var studentData = JSON.parse(localStorage.getItem("studentData"));

	var newHomework = {HWName : document.getElementById("nameBox").value,
						description : document.getElementById("descriptionBox").value,
						dueDate : new Date(document.getElementById("datePicker").value)};

	studentData.homeworks.push(newHomework);

	localStorage.setItem("studentData", JSON.stringify(studentData));
	window.location.reload();
}

function removeHomeworks() {
	var studentData = JSON.parse(localStorage.getItem("studentData"));

	for(var i = 0; i < studentData.homeworks.length; i++) {
		if(document.getElementById(i).checked) {
			if(document.getElementById("date" + i).classList.contains("late")) {
				studentData.procrastination += 10;
			}
			else {
				studentData.procrastination -= 10;

				if(procrastination < 0) {
					procrastination = 0;
				}
			}
			studentData.homeworks.splice(i, 1);
		}
	}

	localStorage.setItem("studentData", JSON.stringify(studentData));
	window.location.reload();
}