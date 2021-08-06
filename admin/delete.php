<?php
	$target = "C:/xampp/htdocs/bus24/assets/img/bus/".$_GET["name"]."/";
	$status = '';
	if (is_dir($target)) {
    	$files = glob( $target . '*', GLOB_MARK ); //GLOB_MARK adds a slash to directories returned

    	foreach( $files as $file ){
        	unlink( $file );      
    	}

    	rmdir( $target );
    	$status = "Pass";

	}
	else {
		$status = "Error";
	}
	echo json_encode([
  		"status" => $status
	]);
?>