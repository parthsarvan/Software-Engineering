var emptyMeter = document.getElementById("emptyMeter");
var filledMeter = document.getElementById("filledMeter");

var procrastination = JSON.parse(localStorage.getItem("studentData")).procrastination;

filledMeter.style.width = procrastination + "%";

if(procrastination >= 70) {
	filledMeter.style.backgroundColor = "#ff482b";
	emptyMeter.style.backgroundColor = "#ff9989";
}
else if(procrastination >= 40) {
	filledMeter.style.backgroundColor = "#fff742";
	emptyMeter.style.backgroundColor = "#fffb99";
} 
else {
	filledMeter.style.backgroundColor = "#92d050";
	emptyMeter.style.backgroundColor = 	 "#c5e0b4";
}