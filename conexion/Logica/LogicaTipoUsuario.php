<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
include "..\Datos\DatoTipoUsuario.php";
$DatoTipoUsuario = new DatoTipoUsuario();
$postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $option = $request->option;
        switch ($option) {
            case 'cargarTipoUsuario':
            $DatoTipoUsuario->cargarTipoUsuario();
                break;
            
            default:
                # code...
                break;
        }
       
    }
    else {
        echo "Not called properly with username parameter!";
    }
//


?>