<?php
$servername = "localhost";
$username = "root";
$password = "";

$conn = mysqli_connect($servername, $username, $password);

if ($conn->connect_error){
    die ("falha na conexão: ".$conn->connect_error);
    }

$sql = "CREATE DATABASE Cadastro";
if ($conn->query($sql)=== TRUE) {
 echo "Banco de dados criado com sucesso";
} else {
 echo "Erro ao criar banco de dados: " . $conn->error;
}
$conn->close();
?>