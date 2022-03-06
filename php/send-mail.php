<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    
    $subject = "Mensaje desde Sitio Web";
    $name = $_POST["nom"];
    $from = $_POST["mail"];
    $message = "Enviado por: ".$name." - Mensaje: ".$_POST["msj"]." - E-mail: ".$from;    
    
    mail("unidadmedicavisual@gmail.com", $subject, $message);    
?>