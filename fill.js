start_hour = "09"
finish_hour = "18"

function fill_times(start_hour, finish_hour) {	

	function generate_time(hour) {	
		var minutes = "45"
		if (Math.random() < 0.25) {  minutes = "00"	} else 
		if (Math.random() < 0.50) {  minutes = "15"	} else 
		if (Math.random() < 0.75) {  minutes = "30" } 

		return hour + ":" + minutes
	}

	lines = document.getElementsByTagName("tr")

	for (i = 0; i < lines.length; i++) {
		console.log(lines[i].id)
		var day_type = lines[i].firstElementChild.className
		if (day_type == "WeekDayHeader") {
			lines[i].children[2].firstChild.value = generate_time(start_hour)
			lines[i].children[3].firstChild.value = generate_time(finish_hour)
		}
	}
}

fill_times(start_hour, finish_hour)
