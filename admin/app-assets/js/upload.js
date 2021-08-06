function readURL(input) {
    if (input.files && input.files[0]) {
    	var reader = new FileReader();

        reader.onload = function (e) {
        	$('#blah')
            	.attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function addbus() {
	var bn = document.getElementById("BN").value;
	var ig = document.getElementById("ig").value;

	window.location.href = "http://localhost/bus24/admin/buses.html";

	/*if (bn == "" || bn == " ") {
		alert("Bus name cannot be empty");
	}
	else if (ig == "") {
		alert("Please select an image to upload");
	}
	else {

		/*img1 = document.getElementById("blah");

		base64 = img1.src;

		var link = document.createElement("a");

   		link.setAttribute("href", base64);
    	link.setAttribute("download", "james.jpg");
    	link.click();*/

    	/*img1 = document.getElementById("blah");

		base64 = img1.src;
		var file = dataURItoBlob(base64, 'image/png');
  		*/

  		/*jgk = document.querySelector("#blah");
  		const formData = new FormData();
  		//var file = dataURItoBlob(jgk.src, 'image/png');
  		//console.log(jgk.src[0])

  		var file = dataURLtoFile(jgk.src,'logo.jpg');
  		console.log(file)
  		formData.append('image/png', jgk);
    	fetch("http://localhost/bus24/assets/img/bus", {
    		method: 'POST',
    		body: file
  		})
    	
			.then(response => {
    			return response.json()
  			})
  			.then(data => {
    			console.log("here mmee");
  			})
  			.catch(err => {
    			// Do something for an error here
    			console.log(err);
  			})*/
  		
	//}
}

function dataURItoBlob(dataURI, type) {
    // convert base64 to raw binary data held in a string
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    console.log(byteString, mimeString)
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var bb = new Blob([ab], { type: type });
    return bb;
}

function dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }