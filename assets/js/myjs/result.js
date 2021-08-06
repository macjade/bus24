const url = window.location.href;
var baseUrl = url.split('?')[1];
var param = baseUrl.split('&');
var bus = param[0];
var gtype = param[1];



fetch('http://localhost:3000/'+bus)
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    //console.log(data)

    if (gtype == 'coaches' || gtype == 'Coaches') {
      mydata = data[0].coaches;
    }
    else if (gtype == 'minibus' || gtype == 'Minibus') {
      mydata = data[0].minibus;
    }
    else if (gtype == 'neighbourhood' || gtype == 'Neighbourhood') {
      mydata = data[0].neighbourhood;
    }
    else {
      mydata = "";
    }

    
    var restl = document.getElementById('busresult');
    for (var i = 0; i < mydata.length; i++) {
      var divTag1 = document.createElement('div');
      divTag1.className = 'col-lg-6 col-md-6';
        
      var divTag2 = document.createElement('div');
      divTag2.className = 'single-car-wrap';
        
      divTag1.appendChild(divTag2);
       
      var divTag3 = document.createElement('div');
       
      divTag2.appendChild(divTag3);
        
      var imgTag1 = document.createElement('img');
      imgTag1.src = mydata[i].images;
      imgTag1.alt = 'JSOFT';
        
      divTag3.appendChild(imgTag1);
        
      var divTag4 = document.createElement('div');
      divTag4.className = 'car-list-info without-bar';
        
      divTag2.appendChild(divTag4);
        
      var h2g = document.createElement('h2');
      h2g.innerHTML = mydata[i].Name;
      divTag4.appendChild(h2g);
        
      var h5g = document.createElement('h5');
      h5g.innerHTML = mydata[i].rent +" Rent /per a day";
      divTag4.appendChild(h5g);
        
      var p2 = document.createElement('p');
      p2.innerHTML = mydata[i].description;
      divTag4.appendChild(p2);
        
      var ulTag1 = document.createElement('ul');
      ulTag1.className = 'car-info-list';
      divTag4.appendChild(ulTag1);
        
      var liTag1 = document.createElement('li');
      liTag1.innerHTML = "AC";
      ulTag1.appendChild(liTag1);
        
      var liTag1 = document.createElement('li');
      liTag1.innerHTML = mydata[i].fuel;
      ulTag1.appendChild(liTag1);
        
      var liTag1 = document.createElement('li');
      liTag1.innerHTML = mydata[i].trans;
      ulTag1.appendChild(liTag1);
        
      var aTag = document.createElement('a');
      var Price = mydata[i].rent
      var price = Price.replace("₦", "");
      aTag.href = "pay.html?#"+baseUrl+"&"+mydata[i].Name+"&"+price;
      aTag.className = "rent-btn";
      aTag.innerHTML = "Book It";

      divTag4.appendChild(aTag);

      restl.appendChild(divTag1);
        
    }
	})
  
  .catch(err => {
    // Do something for an error here
    //window.location.href = '404.html'
    var restl = document.getElementById('busresult');
    var p3 = document.createElement('p');
    p3.innerHTML = "SORRY, WE COULDN'T FIND A BUS FOR YOU, OUR APOLOGIES";
    restl.appendChild(p3);
  })