
const url = window.location.href;
var baseUrl = url.split('?')[1];
var param = baseUrl.split('&');

var Vehicle = param[0];
var vehicle = Vehicle.replace("%20", " ");
var bustype = param[1];
var Pick_loc = param[2];
var pick_loc = Pick_loc.replace("%20", " ");
var pick_date = param[3];
var drop_date = param[4];
var bus_Model = param[5];
var bus_model = bus_Model.replace("%20", " ");
var price = param[6];
var Name = param[7];
var name = Name.replace("%20", " ");
var email = param[8];
var phone = param[9];
var reference = param[10];

var drop_Date = new Date(drop_date);
var pick_Date = new Date(pick_date);
var diffTime = drop_Date.getTime() - pick_Date.getTime(); 
var diffDays = diffTime / (1000 * 3600 * 24);

const myData = {
	Breference: reference,
	Bname: name,
	Bemail: email,
	Bphone: phone,
	Bvehicle: vehicle,
	Btype: bustype,
	Bmodel: bus_model,
	Bloc: pick_loc,
	Bpick: pick_date,
	Bdrop: drop_date,
	Bamount: "₦"+parseInt(price, 10)*diffDays+".00" 

};

var noref = [];

const otherParam={
	headers:{
		"content-type":"application/json; charset=UTF-8"
	},
	body: JSON.stringify(myData),
	method: "POST"
};

fetch("http://localhost:3000/Bookings")
	.then(response => {
    	return response.json()
  	})
  	.then(data => {
    	for (var i = 0; i < data.length; i++) {
        	noref.push(data[i]["Breference"]);
      	}
      	addbook();
  	})
  .catch(err => {
    // Do something for an error here
    console.log(err);
  })

document.getElementById("tnk").innerHTML = "Thanks for your order, "+name+".";
document.getElementById("pt").innerHTML = "Here's your  order number "+reference+". Review your receipt.";
document.getElementById("refp").innerHTML = reference;

document.getElementById("fn").innerHTML = name;

document.getElementById("em").innerHTML = email;

document.getElementById("ph").innerHTML = phone;

document.getElementById("vh").innerHTML = vehicle;

document.getElementById("bt").innerHTML = bustype;

document.getElementById("bm").innerHTML = bus_model;

document.getElementById("pl").innerHTML = pick_loc;

document.getElementById("pd").innerHTML = pick_date;

document.getElementById("dd").innerHTML = drop_date;

document.getElementById("sb").innerHTML = "₦"+price+".00";

document.getElementById("rd").innerHTML = "x"+diffDays;

document.getElementById("tt").innerHTML = "₦"+parseInt(price, 10)*diffDays+".00";


function addbook() {
	if (noref.includes(reference) == false) {
		fetch("http://localhost:3000/Bookings", otherParam)
			.then(response => {
    			return response.json()
  			})
  			.then(data => {
    			// Work with JSON data here
    			//console.log(data)
    			console.log("Successfully Added");
  			})
  			.catch(err => {
    			// Do something for an error here
    			console.log(err);
  			})
  	}
  	else {
  		console.log("Already added");
  	}
}