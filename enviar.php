<?php
$destino="suarezluca218@gmail.com";
$nombre= $_post["nombre_completo"];
$email= $_post["email"];
$mensaje= $_post["mensaje"];
$contenido="Nombre: " . $nombre . "\nEmail: " . $email . "\nMensaje: " . $mensaje;
mail($destino, "contacto", $contenido);
header("location:index.html")
?>