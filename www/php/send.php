<?php

$data = json_decode($_POST['local']); 
echo "done";
echo json_encode($data);
// $response = new Response('OK', Response::HTTP_OK);
// return $response;
?>