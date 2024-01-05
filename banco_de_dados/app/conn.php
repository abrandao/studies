<?php

    $host = "mysql";
    $dbname = "bancodedados";
    $username = "sail";
    $password = "password";

    try {
      $conn = new PDO("mysql:host=$host;dbname=$dbname", $username,
      $password);
      echo "Conectado a $dbname em $host com sucesso.";
    } catch (PDOException $pe) {
      echo $pe;
      echo "<br>";
      echo "<br>";
      echo "<br>";
      die("Não foi possível se conectar ao banco de dados $dbname." );
  }

  echo "<br>";
  echo "<br>";
  echo "<br>";

  foreach(PDO::getAvailableDrivers() as $driver) {
    echo $driver;
  }

  if (PDO::getAvailableDrivers()) {
    echo $driver;
  } else {
    echo "Nao";
  }

  

?>