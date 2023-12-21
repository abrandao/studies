<?php

  // A principal característica da variável global é ser declarada fora de funções.
  // Por comportamento padrão não são acessíveis dentro de funções.
  // Precisamos utilizar a palavra global para isso.
  // Essa função da variável global não ser acessível dentro de funções, previne muitos problemas no software.

  $teste = "asd";

  echo "$teste global 1 <br>"; // asd global 1

  if(5 > 2) {
    $teste = "dsa";

    echo "$teste if <br>"; // dsa if
  }

  echo "$teste global 2 <br>"; // asd global 2

  function funcao() {

    $teste = "xrxr";
    echo "$teste local <br>";
  }

  funcao(); // xrxr local

  function testandoGlobal() {
    global $teste;
    $teste = 2;
    echo "$teste global função <br>";
  }

  testandoGlobal(); // 2 global função

  echo "$teste global 3 <br>"; // 2 global 3