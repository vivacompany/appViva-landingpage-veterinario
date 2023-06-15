<?php

$host = "localhost";
$user = "root";
$pass = "";
$port = 3306;
$dbname = "e_viva_landingpage";

try{
    $conn = new mysqli($host, $user, $pass, $dbname);
}catch(Exception $err){
}



switch($_REQUEST["acao"]){
    
    case "insertData":
        $nome = $_POST["nome"];
        $area = $_POST["area"];
        $email = $_POST["email"];
        $telefone = $_POST["telefone"];
        $privacidade = $_POST["privacidade"];

        $sql = "INSERT INTO veterinario(nome, telefone, email, area, privacidade) VALUES('$nome', '$telefone', '$email', '$area', '$privacidade')";        
        $result = $conn->query($sql);

        if($result = true) {
            print "<script>location.href='./obrigado.html';</script>";
        }

        break;

}


?>
