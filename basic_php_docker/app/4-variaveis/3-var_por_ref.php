<?php

  // O conceito de referância é maior que qualquer alteração que se faça entre as duas variáveis.

  $x = 10;
  $y =& $x;

  echo $x; // 10
  echo "<br>";
  echo $y; // 10
  echo "<br>";

  $y = 15;

  echo "Atribuição após referência.";
  echo "<br>";
  echo $x;  // 15
  echo "<br>";
  echo $y; // 15
  echo "<br>";

  $x = 20;

  echo "Atribuição após referência 2.";
  echo "<br>";
  echo $x; // 20
  echo "<br>";
  echo $y; // 20
  echo "<br>";

  $nome = "Anderson";

  $nome2 &= $nome;
  echo $nome; // Anderson
  echo "<br>";
  echo $nome2; // Anderson
  echo "<br>";

  $nome2 = "Elisa";
  echo $nome; // Elisa
  echo "<br>";
  echo $nome2; // Elisa