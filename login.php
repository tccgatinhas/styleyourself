<?php
$servername = "localhost";
$username = "root";
$password = "";
$bd_name = "Cadastro"

$conn = mysqli_connect($servername, $username, $password, $bd_name);

if ($conn->connect_error){
die ("falha na conexão: ".$conn->connect_error);
}

$sql = "CREATE TABLE Usuario (
  Nome VARCHAR(60) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  Email VARCHAR (30),
  Senha VARCHAR (100),
  DataNas INT (20),
  Genero CHAR (1),
  Endereco VARCHAR (40)
)";

if ($conn->query($sql) === TRUE) {
  echo "Tabela Usuario criada com sucesso";
} else {
  echo "Erro ao criar tabela: " . $conn->error;
}
$conn->close();

?>