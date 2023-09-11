<?php
$sql = "CREATE TABLE Users(
    Nomeusuario VARCHAR(20), UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Senha VARCHAR (100),
  )";
  
  if ($conn->query($sql) === TRUE) {
    echo "Tabela Cadastro criada com sucesso";
  } else {
    echo "Erro ao criar tabela: " . $conn->error;
  }
  ?>