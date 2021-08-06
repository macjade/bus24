
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

var mytable = document.getElementById("myinv");

var trTag1 = document.createElement('tr');
mytable.appendChild(trTag1);

var tdTag11 = document.createElement('td');
tdTag11.innerHTML = "Full Name";
trTag1.appendChild(tdTag11);

var tdTag12 = document.createElement('td');
tdTag12.innerHTML = name;
trTag1.appendChild(tdTag12);


var trTag2 = document.createElement('tr');
mytable.appendChild(trTag2);

var tdTag21 = document.createElement('td');
tdTag21.innerHTML = "Email";
trTag2.appendChild(tdTag21);

var tdTag22 = document.createElement('td');
tdTag22.innerHTML = email;
trTag2.appendChild(tdTag22);


var trTag3 = document.createElement('tr');
mytable.appendChild(trTag3);

var tdTag31 = document.createElement('td');
tdTag31.innerHTML = "Phone";
trTag3.appendChild(tdTag31);

var tdTag32 = document.createElement('td');
tdTag32.innerHTML = phone;
trTag3.appendChild(tdTag32);


var trTag4 = document.createElement('tr');
mytable.appendChild(trTag4);

var tdTag41 = document.createElement('td');
tdTag41.innerHTML = "Vehicle";
trTag4.appendChild(tdTag41);

var tdTag42 = document.createElement('td');
tdTag42.innerHTML = vehicle;
trTag4.appendChild(tdTag42);


var trTag5 = document.createElement('tr');
mytable.appendChild(trTag5);

var tdTag51 = document.createElement('td');
tdTag51.innerHTML = "Bus Type";
trTag5.appendChild(tdTag51);

var tdTag52 = document.createElement('td');
tdTag52.innerHTML = bustype;
trTag5.appendChild(tdTag52);



var trTag6 = document.createElement('tr');
mytable.appendChild(trTag6);

var tdTag61 = document.createElement('td');
tdTag61.innerHTML = "Bus Model";
trTag6.appendChild(tdTag61);

var tdTag62 = document.createElement('td');
tdTag62.innerHTML = bus_model;
trTag6.appendChild(tdTag62);


var trTag7 = document.createElement('tr');
mytable.appendChild(trTag7);

var tdTag71 = document.createElement('td');
tdTag71.innerHTML = "Pick-up location";
trTag7.appendChild(tdTag71);

var tdTag72 = document.createElement('td');
tdTag72.innerHTML = pick_loc;
trTag7.appendChild(tdTag72);



var trTag8 = document.createElement('tr');
mytable.appendChild(trTag8);

var tdTag81 = document.createElement('td');
tdTag81.innerHTML = "Pick-up Date";
trTag8.appendChild(tdTag81);

var tdTag82 = document.createElement('td');
tdTag82.innerHTML = pick_date;
trTag8.appendChild(tdTag82);



var trTag9 = document.createElement('tr');
mytable.appendChild(trTag9);

var tdTag91 = document.createElement('td');
tdTag91.innerHTML = "Drop-off Date";
trTag9.appendChild(tdTag91);

var tdTag92 = document.createElement('td');
tdTag92.innerHTML = drop_date;
trTag9.appendChild(tdTag92);



var trTag10 = document.createElement('tr');
mytable.appendChild(trTag10);

var tdTag101 = document.createElement('td');
tdTag101.innerHTML = "Price";
trTag10.appendChild(tdTag101);

var tdTag102 = document.createElement('td');
tdTag102.innerHTML = "₦"+price+" per day";
trTag10.appendChild(tdTag102);


var drop_Date = new Date(drop_date);
var pick_Date = new Date(pick_date);
var diffTime = drop_Date.getTime() - pick_Date.getTime(); 
var diffDays = diffTime / (1000 * 3600 * 24);

var trTag11 = document.createElement('tr');
mytable.appendChild(trTag11);

var tdTag111 = document.createElement('td');
tdTag111.innerHTML = "Number of renting days";
trTag11.appendChild(tdTag111);

var tdTag112 = document.createElement('td');
tdTag112.innerHTML = diffDays;
trTag11.appendChild(tdTag112);


var trTag12 = document.createElement('tr');
mytable.appendChild(trTag12);

var tdTag121 = document.createElement('td');
tdTag121.innerHTML = "Total Amount";
trTag12.appendChild(tdTag121);

var tdTag122 = document.createElement('td');
tdTag122.innerHTML = "₦"+parseInt(price, 10)*diffDays;
trTag12.appendChild(tdTag122);
