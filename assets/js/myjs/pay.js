
function tosubmit(){
  var FN=document.getElementById("FN").value;
  var EM=document.getElementById("em").value;
  var PH=document.getElementById("ph").value;
  const Url = window.location.href;
  url = Url.replace("#","");
  var baseUrl = url.split('?')[1];

  if (FN == ""){
    alert("Fullname field cannot be empty")
  }
  else if (EM == "") {
    alert("Email field cannot be empty")
  }
  else if (!validateEmail(EM)) {
    alert("Invalid Email")
  }
  else if (PH == "") {
    alert("Phone number field cannot be empty")
  }
  else if (PH.substring(0,3) != '090' && PH.substring(0,3) != '080' && PH.substring(0,3) != '081' && PH.substring(0,3) != '070') {
    alert("Incorrect phone number");
  }
  else if (PH.length != 11) {
   alert("Incorrect phone number") 
  }
  else {
    window.location.href = "pay1.html?"+baseUrl+"&"+FN+"&"+EM+"&"+PH;
  }
    
}


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}