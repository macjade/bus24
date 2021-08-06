function getbus() {
	
	
	fetch('http://localhost:3000/buses')
  		.then(response => {
    		return response.json()
  		})
  		.then(data => {
    		// Work with JSON data here
    		//console.log(data)
    		for (var i = 0; i < data.length; i++) {
  				getresult(data[i].id, data[i].Name, data[i].image, data[i].status, data[i].verified);
			}
  		})
  		.catch(err => {
    		// Do something for an error here
    		console.log(err);
  		})
    forbuses();
}

function getresult(id, name, image, status, verified) {

	var ID = id;
	var Name = name;
	var Image = image;
	var Status = status;
	var Verified = verified;

	fetch('http://localhost:3000/'+Name)
  		.then(response => {
    		return response.json()
  		})
  		.then(data => {
    		// Work with JSON data here
    		//console.log(data)
    		var tbodyTg = document.getElementById("busesrt");
    		for (var j = 0; j < data.length; j++) {
 				var trTag1 = document.createElement("tr");

 				var tdTag1 = document.createElement("td");
 				trTag1.appendChild(tdTag1);

    			var imgTag1 = document.createElement("img");
    			imgTag1.className = "round mr-1";
    			imgTag1.src = "../"+Image;
    			imgTag1.alt = "avtar img holder";
    			imgTag1.height = "32";
    			imgTag1.width = "32";

    			tdTag1.appendChild(imgTag1);

    			

    			var tdTag2 = document.createElement("td");
    			var spTag1 = document.createElement("span");
    			var bTag1 = document.createElement("b");
    			bTag1.innerHTML = Name;

    			
    			spTag1.appendChild(bTag1);
    			tdTag2.appendChild(spTag1);

				var smTag1 = document.createElement("small");
    			smTag1.className = "d-block";
    			smTag1.innerHTML = "#"+ID;
    						
    			tdTag2.appendChild(smTag1);
    			trTag1.appendChild(tdTag2);

    			var tdTag3 = document.createElement("td");
    			var iTag1 = document.createElement("i");
    			if (data[0].coaches) {
    				iTag1.className = "feather icon-check";
    			}
    			else {
    				iTag1.className = "feather icon-x";	
    			}
    						
    			tdTag3.appendChild(iTag1);
    			trTag1.appendChild(tdTag3);


    			var tdTag4 = document.createElement("td");
    			var iTag2 = document.createElement("i");
    			if (data[0].minibus) {
    				iTag2.className = "feather icon-check";
    			}
    			else {
    				iTag2.className = "feather icon-x";	
    			}
    						
    			tdTag4.appendChild(iTag2);
    			trTag1.appendChild(tdTag4);



    			var tdTag5 = document.createElement("td");
    			var iTag3 = document.createElement("i");
    			if (data[0].neighbourhood) {
    				iTag3.className = "feather icon-check";
    			}
    			else {
    				iTag3.className = "feather icon-x";	
    			}
    						
    			tdTag5.appendChild(iTag3);
    			trTag1.appendChild(tdTag5);

    			
    			var tdTag7 = document.createElement("td");
    			if (Status == "Active") {
    				tdTag7.className = "text-success";
    				tdTag7.innerHTML = "Active";
    			}
    			else if (Status == "Inactive") {
   					tdTag7.className = "text-danger";
    				tdTag7.innerHTML = "Inactive"; 				
    			}
    			else {
    				tdTag7.className = "text-primary";
    				tdTag7.innerHTML = "Pending";	
    			}

				trTag1.appendChild(tdTag7);

    			var tdTag8 = document.createElement("td");
    			var iTag5 = document.createElement("i");
    			if (Verified == "Yes") {
    				iTag5.className = "feather icon-check";
    			}
    			else {
    				iTag5.className = "feather icon-x";	
    			}
    						   						
    			tdTag8.appendChild(iTag5);
    			trTag1.appendChild(tdTag8);



    			var tdTag9 = document.createElement("td");
    			/*var aTag1 = document.createElement("a");
    			aTag1.href = "buses.html#";

    			var iTag6 = document.createElement("i");
    			iTag6.className = "m-1 feather icon-edit-2";*/

    			var aTag2 = document.createElement("a");
    			aTag2.href = "#";
                aTag2.id = ""+ID;
                aTag2.setAttribute("onclick","todelete('"+ID+"', '"+Name+"', '"+Image+"', '"+Status+"', '"+Verified+"');");
                
                

    			var iTag7 = document.createElement("i");
    			iTag7.className = "feather icon-trash";
    					    						
    			//aTag1.appendChild(iTag6);
    			aTag2.appendChild(iTag7);
    			//tdTag9.appendChild(aTag1);
    			tdTag9.appendChild(aTag2);
    			trTag1.appendChild(tdTag9);


    			tbodyTg.appendChild(trTag1);
			}
  		})
  		.catch(err => {
    		// Do something for an error here
    		console.log(err);
  		})
}

function todelete(ID, name, Image, Status, Verified) {
    const myData = {
        id: ID,
        Name: name,
        image: Image,
        status: Status,
        verified: Verified 
    };
    
    if (window.confirm("Are you sure you want to delete "+name+" bus from database")) {
        const otherParam={
            //headers:{
            //    "content-type":"application/json; charset=UTF-8"
            //},
            //body: JSON.stringify(myData),
            method: "DELETE"
        };
        //
       fetch("http://localhost:3000/buses/"+ID, otherParam)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Work with JSON data here
                //console.log(data)
                tocallphp(name);
            })
            .catch(err => {
                // Do something for an error here
                console.log(err);
            })
  } else {
    console.log("Error");
  }

      
}

function tocallphp(Name) {
    
    fetch("http://localhost/bus24/admin/delete.php?name="+Name)
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            //console.log(data)
            /*var result = <?php toremove("C:/xampp/htdocs/bus24/assets/img/bus/"+name+"/"); ?>
            if (result == "Done") {
                alert("Delete Successful");
            }
            else {
                alert("Delete unSuccessful");   
            }*/

            if (data.status == "Pass") {
                if (alert("Delete Successful")){

                }else{
                    location.reload();
                }
            }
            else {
                alert("Delete Unsuccessful");
            }
        })
        .catch(err => {
            // Do something for an error here
            console.log(err);
        })
}

function forbuses() {
    var vehicle = ["Acura", "Alfa-Romero", "Aston-Martin", "Audi", "Bmw", "Buick", "Chevrolet", "Chrysler", "Fiat", "Ford", "Geely", "General-Motors", "GMC", "Honda", "Hyundia", "Infiniti", "Kia", "Lexus", "Mazda", "Mercedes-benz", "Mini", "Mitsubishi", "Nissan", "Peugeot", "Ram", "Renault", "Subaru", "Suzuki", "Tata-Motors", "Toyota", "Volkswagen", "Volvo"];
    //var existv = [];
    //var result = [];
    fetch('http://localhost:3000/buses')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            //console.log(data)
           
            var existv = [];
            for (var i = 0; i < data.length; i++) {
                existv.push(data[i].Name);
            }
            var result = arr_diff(existv, vehicle);
            for (var j = 0; j < result.length; j++) {
                vType = document.getElementById('BN');
                vType.options.add(new Option(result[j], result[j]));
            }
        })
        .catch(err => {
            // Do something for an error here
            console.log(err);
        })

    //console.log(arrDifference(vehicle, existv));

    
}

function arr_diff(a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}
