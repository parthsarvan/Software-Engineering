var studentData = JSON.parse(localStorage.getItem("studentData"));
var calendar = document.getElementById("calendar");

var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

var daysDiv = document.createElement("div");
daysDiv.setAttribute("id", "days");
for(var i = 0; i < 7; i++) {
	var day = document.createElement("div");
	day.setAttribute("class", "day");
	var dayText = document.createElement("p");
	dayText.appendChild(document.createTextNode(days[i]));
	day.appendChild(dayText);
	daysDiv.appendChild(day);
}

calendar.appendChild(daysDiv);

var datesDiv = document.createElement("div");
datesDiv.setAttribute("id", "dates");
for(var i = -2; i <= 30; i++) {
	var day = document.createElement("div");	

	if(i == 27) {
		day.setAttribute("id", "today");
	}

	var date = document.createElement("p");

	if(i <= 0) {
		date.appendChild(document.createTextNode(""));
		day.setAttribute("class", "empty");
	}
	else {
		date.appendChild(document.createTextNode(i));
		day.setAttribute("class", "date");
	}
	day.appendChild(date);

	for(var homework of studentData.homeworks) {
		var dueDate = new Date(homework.dueDate);
		console.log(dueDate.getMonth());
		if(dueDate.getMonth() == 10 && dueDate.getDate() == i - 1 && dueDate.getFullYear() == "2017") {
			var dueHW = document.createElement("p");
			dueHW.appendChild(document.createTextNode(homework.HWName));

			day.appendChild(dueHW);
		}
	}
	
	datesDiv.appendChild(day);
}

calendar.appendChild(datesDiv);