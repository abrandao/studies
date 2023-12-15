<?php

  // Os dois tipos de aspas se comportam da mesma forma, neste caso.
  echo "Testando texto de aspas duplas. <br>";
  echo 'Testando texto de aspas simples. <br>';

  echo "Ele disse 'Olá'! <br>"; // Não gera um erro.

  $idade = 15;

  echo "Ele tem $idade anos. <br>"; // Ele tem 15 anos.
  echo 'Ele tem $idade anos. <br>'; // Ele tem $idade anos.


  // Verificando se é uma string - is_string()
  $str = "Anderson";
  $num = 22;

  if(is_string($str)) {
    echo "$str é uma string.";
  }

  if(is_string($num)) {
    echo "$str é uma string.";
  }