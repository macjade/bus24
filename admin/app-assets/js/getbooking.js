
function getbooking() {
    fetch('http://localhost:3000/Bookings')
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Work with JSON data here
            //console.log(data)
            var tbodyTg = document.getElementById("busesrt");
            for (var i = 0; i < data.length; i++) {
                //getresult(data[i].id, data[i].Name, data[i].image, data[i].status, data[i].verified);
                
                var trTag1 = document.createElement("tr");
               

                var tdTag2 = document.createElement("td");
                var spTag1 = document.createElement("span");
                var bTag1 = document.createElement("b");
                bTag1.innerHTML = data[i].Bname;

                
                spTag1.appendChild(bTag1);
                tdTag2.appendChild(spTag1);

                var smTag1 = document.createElement("small");
                smTag1.className = "d-block";
                smTag1.innerHTML = "#"+data[i].id;
                            
                tdTag2.appendChild(smTag1);
                trTag1.appendChild(tdTag2);

                var tdTag3 = document.createElement("td");
                tdTag3.innerHTML = data[i].Bemail;
                trTag1.appendChild(tdTag3);


                var tdTag4 = document.createElement("td");
                tdTag4.innerHTML = data[i].Breference;
                trTag1.appendChild(tdTag4);



                var tdTag5 = document.createElement("td");
                tdTag5.innerHTML = data[i].Bvehicle;
                trTag1.appendChild(tdTag5);

                
                var tdTag7 = document.createElement("td");
                tdTag7.innerHTML = data[i].Btype;
                trTag1.appendChild(tdTag7);

                var tdTag8 = document.createElement("td");
                tdTag8.innerHTML = data[i].Bmodel;
                trTag1.appendChild(tdTag8);



                var tdTag9 = document.createElement("td");
                tdTag9.innerHTML = data[i].Bloc;
                trTag1.appendChild(tdTag9);


                var tdTag10 = document.createElement("td");
                tdTag10.innerHTML = data[i].Bpick;
                trTag1.appendChild(tdTag10);


                var tdTag11 = document.createElement("td");
                tdTag11.innerHTML = data[i].Bdrop;
                trTag1.appendChild(tdTag11);


                var tdTag12 = document.createElement("td");
                tdTag12.innerHTML = data[i].Bamount;
                trTag1.appendChild(tdTag12);



                var tdTag13 = document.createElement("td");
                var drop_Date = new Date(data[i].Bdrop);
                var pick_Date = new Date(data[i].Bpick);
                var diffTime = drop_Date.getTime() - pick_Date.getTime(); 
                var diffDays = diffTime / (1000 * 3600 * 24);
                tdTag13.innerHTML = diffDays;
                trTag1.appendChild(tdTag13);


                tbodyTg.appendChild(trTag1);
            }
        })
        .catch(err => {
            // Do something for an error here
            console.log(err);
        })
}

