var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var studentData = {homeworks : [], courses : []};

	if ( username == "Sruthi" && password == "Sruthi123"){
		location.href="index.html";
		return false;
	}else if ( username == "Sarvan" && password == "Sarvan123"){
		location.href="index.html";
		return false;
	}else if ( username == "Michael" && password == "Michael123"){
		studentData.fname = "Michael";
		studentData.lname = "Walsh";
		studentData.email = "michael123@fake.com";
		studentData.procrastination = 20;
		studentData.homeworks.push({HWName : "CS 999 HW 3", description : "Design fast algorithms", dueDate : new Date(2017, 11, 2)});
		studentData.homeworks.push({HWName : "CS 444 HW 2", description : "Have fun with it", dueDate : new Date(2017, 11, 7)});
		studentData.courses.push({code : "CS 999"});
		studentData.courses.push({code : "CS 444"});

		localStorage.setItem("studentData", JSON.stringify(studentData));
		location.href="index.html";
		return false;
	}else if ( username == "Tianran" && password == "Tianran123"){
		location.href="index.html";
		return false;
	}
	else{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}