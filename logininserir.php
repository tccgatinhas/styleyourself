<?php
$Nome = $_POST['nome'];
$Email = $_POST['email'];
$Senha = $_POST['senha'];
$DataN = $_POST['data'];
$Genero = $_POST['genero'];
$Endereco = $_POST['endereco'];
$servername = "localhost";
$username = "root";
$password = "";
$bd_name = "Cadastro"

$conn = mysqli_connect($servername, $username, $password, $bd_name);

$sql = "INSERT INTO Login (Nome, Email, Senha, DataN, Genero, Endereco) VALUES ('$Nome', '$Email, $Senha $DataN $Genero $Endereco')";
mysqli_query ($conn, $sql);
echo "Login inserido com sucesso!";
?>