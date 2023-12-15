<?php

  echo true; // 1
  echo "<br>";
  echo false; // Não imprime valor na tela.

  if(true) {
    echo "É verdadeiro! <br>";
  }

  if(5 > 2) { // True
    echo "É verdadeiro! <br>";
  }

  $podeEntrar = true;
  if($podeEntrar) { // True
    echo "É verdadeiro! <br>";
  }

  // Checando se o valor é do tipo booleano.
  $a = true;

  if(is_bool($a)) { // true
    echo "É um booleano. <br>";
  }

  if(is_bool(0)) { // true
    echo "É um booleano. <br>";
  }

  if(is_bool(false)) { // false
    echo "É um booleano. <br>";
  }

  if(is_bool(0 == false)) { // true
    echo "É um booleano. <br>";
  }