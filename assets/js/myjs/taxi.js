function findtaxi() {
	var pick = document.getElementById("pickf");
	var drop = document.getElementById("dropf");

	if (pick.options[pick.selectedIndex].text == "Pick-up Location") {
		alert('Select pick up location')
	}	
	else if (drop.options[drop.selectedIndex].text == "Drop-off Location") {
		alert('Select drop off location')
	}
	else {
		document.getElementById("whereto").innerHTML = "Buses going from "+pick.options[pick.selectedIndex].text+" to "+drop.options[drop.selectedIndex].text;
		document.getElementById('ourcartabcontent').innerHTML = "";

		fetch('http://localhost:3000/Taxi')
  			.then(response => {
    			return response.json()
  			})
  			.then(data => {
    			// Work with JSON data here
    			//console.log(data)
    			var content = document.getElementById('ourcartabcontent'); 
   
      			for (var i = 0; i < Object.keys(data[1]).length; i++) {
      				
      				incr = i+1;

      				var divTag1 = document.createElement('div');
        			
        			if (i == 0) {
      					divTag1.className = 'tab-pane fade show active';
        			}
        			else {
        				divTag1.className = 'tab-pane fade';
        			}
        			divTag1.id = 'ourcar_'+ incr.toString();
        			divTag1.role = 'tabpanel';
        			divTag1["aria-labelledby"] = 'ourcar_item_'+ incr.toString();
        			//document.write('yes');
        			var divTag2 = document.createElement('div');
        			divTag2.className = 'row';
        			divTag1.appendChild(divTag2);
        
        			var divTag3 = document.createElement('div');
        			divTag3.className = 'col-lg-8 text-center';
        			divTag2.appendChild(divTag3);
        
        			var divTag4 = document.createElement('div');
        			divTag4.className = 'display-table';
        			divTag3.appendChild(divTag4);
        
        			var divTag5 = document.createElement('div');
        			divTag5.className = 'display-table-cell';
        			divTag4.appendChild(divTag5);
        
        			var divTag6 = document.createElement('div');
        			divTag6.className = 'ourcar-pic';
        			divTag5.appendChild(divTag6);
        
        			getobj = Object.keys(data[1]);
        			theobj = data[1][getobj[i]][0];
        
        			var imgTag = document.createElement('img');
        			imgTag.src = theobj.images;
      				imgTag.alt = 'JSOFT';
        			divTag6.appendChild(imgTag);
        
        			var divTag7 = document.createElement('div');
        			divTag7.className = 'col-lg-4';
        			divTag2.appendChild(divTag7);
        
        			var divTag8 = document.createElement('div');
        			divTag8.className = 'ourcar-info text-center';
        			divTag7.appendChild(divTag8);
        
        			var h2Tag = document.createElement('h2');
        			h2Tag.innerHTML = data[0][drop.options[drop.selectedIndex].text]+' ';
        			divTag8.appendChild(h2Tag);
        
        			var spanTag = document.createElement('span');
        			spanTag.innerHTML = 'Bus fee';
        			h2Tag.appendChild(spanTag);
        
        			var tbTag = document.createElement('table');
        			tbTag.className = 'our-table';
        			divTag8.appendChild(tbTag);
        
        			var trTag1 = document.createElement('tr');
        			tbTag.appendChild(trTag1);
        
        			var tdTag1 = document.createElement('td');
        			tdTag1.innerHTML = 'Model';
        			trTag1.appendChild(tdTag1);
        
        			var tdTag2 = document.createElement('td');
        			tdTag2.innerHTML = theobj.Model;
        			trTag1.appendChild(tdTag2);
        
        
        
        
        			var trTag2 = document.createElement('tr');
        			tbTag.appendChild(trTag2);
        
        			var tdTag3 = document.createElement('td');
        			tdTag3.innerHTML = 'Doors';
        			trTag2.appendChild(tdTag3);
        
        			var tdTag4 = document.createElement('td');
        			tdTag4.innerHTML = theobj.Doors;
        			trTag2.appendChild(tdTag4);
        
        
        
        			var trTag3 = document.createElement('tr');
        			tbTag.appendChild(trTag3);
        
        			var tdTag5 = document.createElement('td');
        			tdTag5.innerHTML = 'Seats';
        			trTag3.appendChild(tdTag5);
        
        			var tdTag6 = document.createElement('td');
        			tdTag6.innerHTML = theobj.Seats;
        			trTag3.appendChild(tdTag6);
        
        
        
        			var trTag4 = document.createElement('tr');
        			tbTag.appendChild(trTag4);
        
        			var tdTag7 = document.createElement('td');
        			tdTag7.innerHTML = 'Transmission';
        			trTag4.appendChild(tdTag7);
        
       				var tdTag8 = document.createElement('td');
        			tdTag8.innerHTML = theobj.Trans;
        			trTag4.appendChild(tdTag8);
        
        
        
        			var trTag5 = document.createElement('tr');
        			tbTag.appendChild(trTag5);
        
        			var tdTag9 = document.createElement('td');
        			tdTag9.innerHTML = 'Model';
        			trTag5.appendChild(tdTag9);
        
        			var tdTag10 = document.createElement('td');
        			tdTag10.innerHTML = theobj.AC;
        			trTag5.appendChild(tdTag10);
        
        			content.appendChild(divTag1);

        		}
  			})
  			.catch(err => {
    			// Do something for an error here
    			alert(err)
  			})
	}
}