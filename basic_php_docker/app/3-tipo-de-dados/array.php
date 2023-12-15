<?php

  // Array é um tipo de dado que serve para agrupar um conjunto de valores.
  // Arrays aceitam todos os tipos de dados em sua lista.
  // Sempre entre [] e separados por vírgula.
 
  $a = [1, 2, 3];
  print_r($a);

  echo "<br>";

  echo $a[0]; // Primeiro elemento do Array.
  echo "<br>";

  $arr = ["Anderson", 41, true];
  print_r($arr);
  echo "<br>";
  print_r($arr[1]);
  echo "<br>";

  // Arrays Associativos
  // A estrutura é basicamente um array com chave e valor.
  // $arr = ['nome' => 'Anderson', 'idade' => 29]

  $arr = ['nome' => 'shark', 'patas' => 4, 'cor' => 'marrom'];
  echo $arr['nome']; // shark
  echo "<br>";
  print_r($arr);
  echo "<br>";
  print_r($arr['patas']);
  echo "<br>";

  $arrAssoc = ['chave' => 'valor', 'bool' => true];
  echo "<br>";
  print_r($arrAssoc);