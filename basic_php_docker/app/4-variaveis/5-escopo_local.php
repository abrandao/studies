<?php

  // A variável local tem seu escopo definido dentro de uma função.
  // Ela não é acessível fora da mesma.
  // O seu valor sempre é resetado quando a função é finalizada.

  $x = 10;
  echo "$x Global <br>"; // 10 Global

  function teste() {
    $x = 5; 
    echo "$x Local <br>"; 
  }

  teste(); // 5 Local

  echo "$x Global <br>"; // 10 Global

  teste(); // 5 Local

  function testando() {
    $x = 12;
    echo "$x Local 2 <br>";
  }

  $x = 99;

  testando(); // 12 Local 2

  teste(); // 5 Local

  echo "$x Global <br>"; // 99 Global