// HoosierHelper: Written by Andrew Kim

var course = prompt("Enter course name\nExample: Bus-A 100").trim();

if (course != null && course.split(" ").length == 2) {
	course = course.split(" ");
	var subject = course[0];
	var number = course[1];
	open("http://gradedistribution.registrar.indiana.edu/reports.php?subj=" + subject +
	 "&crse=" + number + "&term=4168&rept=1&result=HTM");
} else {
	alert("ERROR: Please enter course or format it correctly.");
}