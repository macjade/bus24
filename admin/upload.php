<?php
$pathname = ucfirst($_POST["busname"]);
$uppath = "C:/xampp/htdocs/bus24/assets/img/bus/".lcfirst($pathname);

if (!file_exists($uppath)) {
    mkdir($uppath, 0777, true);
}
$uploaddir = $uppath.'/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

echo "<p>";

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
  echo "File is valid, and was successfully uploaded.\n";
} else {
   echo "Upload failed";
   header("LOCATION: http://localhost:8080/bus24/404.html");
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, "http://localhost:3000/buses");
$result = curl_exec($ch);
curl_close($ch);

$obj = json_decode($result);
$ids = $obj[sizeof($obj)-1]->id;
$data = array(
  'id'      => $ids+1,
  'Name'    => $pathname,
  'image'       => "assets/img/bus/".lcfirst($pathname)."/".basename($_FILES['userfile']['name']),
  'status' => $_POST["mystat"],
  'verified' => $_POST["myv"]
);


for ($i = 0; $i < sizeof($obj); $i++) {
    if ($obj[$i]->Name != $pathname) {
        $x = "True";
        break;
    } 
    else {
        $x = "False";
    }
}

if ($x == "True") {
    $url = "http://localhost:3000/buses";
 
    //Initiate cURL.
    $chi = curl_init($url);
    $jsonDataEncoded = json_encode($data);
    
    //Tell cURL that we want to send a POST request.
    curl_setopt($chi, CURLOPT_POST, 1);
 
    //Attach our encoded JSON string to the POST fields.
    curl_setopt($chi, CURLOPT_POSTFIELDS, $jsonDataEncoded);
 
    //Set the content type to application/json
    curl_setopt($chi, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
 
    //Execute the request
    curl_exec($chi);
    curl_close($chi);
    header("LOCATION: http://localhost:8080/bus24/admin/buses.html");
}
else {
    echo "Vehicle already exist";
}
?> 
