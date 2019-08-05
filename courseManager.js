function addCourse() {
	var studentData = JSON.parse(localStorage.getItem("studentData"));

	var newCourse = {code : document.getElementById("nameBox").value,
						location : document.getElementById("locationBox").value,
						professor : document.getElementById("professorBox").value,
						endDate : new Date(document.getElementById("datePicker").value)};

	studentData.courses.push(newCourse);

	localStorage.setItem("studentData", JSON.stringify(studentData));
	window.location.reload();
}

function removeCourses() {
	var studentData = JSON.parse(localStorage.getItem("studentData"));

	for(var i = 0; i < studentData.courses.length; i++) {
		if(document.getElementById(i).checked) {
			studentData.courses.splice(i, 1);
		}
	}

	localStorage.setItem("studentData", JSON.stringify(studentData));
	window.location.reload();
}