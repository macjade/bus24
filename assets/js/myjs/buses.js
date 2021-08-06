
fetch('http://localhost:3000/buses')
  .then(response => {
    return response.json()
  })
  .then(data => {
    
    for (var i = 0; i < data.length; i++) {
  		busType = document.getElementById('bustype');
		busType.options.add(new Option(data[i].Name, data[i].id));
	}
  })
  .catch(err => {
    console.log(err);
  })

function bustype() {
	var sel = document.getElementById('bustype');
	return (sel.options[sel.selectedIndex].text)
}

function b_type() {
	var sel = document.getElementById('b_type');
	return (sel.options[sel.selectedIndex].text)
}

function submitbtn() {
	var Bustype = bustype();
	var B_type = b_type();
	var get_loc = document.getElementById("locate");
	var pickup = document.getElementById("startDate").value;
	var dropoff = document.getElementById("endDate").value;
	if (get_loc.options[get_loc.selectedIndex].text == "Select") {
		alert("Please select your pickup location")
	}
	else if (pickup == "") {
		alert("Please select a pickup date.")
	}
	else if (dropoff == "") {
		alert("Please select a dropoff date.")
	}
	else if (Bustype == "Select") {
		alert("Please select your preferred bus.")
	}
	else if (B_type == "Select") {
		alert("Please select a bus type.")
	}
	else {
		var get_buses = "busresult.html?"+Bustype+"&"+B_type+"&"+get_loc.options[get_loc.selectedIndex].text+"&"+pickup+"&"+dropoff;
		window.location.href= get_buses;
		console.log(get_buses);
	}
}