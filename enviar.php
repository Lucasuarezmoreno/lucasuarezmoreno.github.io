<?php 
    if (isset($_POST['Nombre']) && isset($_POST['Email']) && isset($_POST['Mensaje'])) {
        $Nombre = $_POST['Nombre'];
        $Email = $_POST['Email'];
        $Mensaje = $_POST['Mensaje'];

        $from = $Email;
		$to = "suarezluca218@gmail.com";
		$subject = "Nuevo mensaje de ". $Email;
		$message = $Mensaje;
		$headers = "From:" . $from;
        if(mail($to,$subject,$message, $headers)){
            echo 1;
        }else{
            echo 0;
        };
    }else{
        echo 0;
    }

?>