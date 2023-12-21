<?php

  // A variável estática é declarada com a instrução static.
  // O valor da mesma é mantido e alterado a cada execução de uma função.
  // É interessante este comportamento pois as variáveis de escopo local sempre são resetadas.

  function teste() {
    $a = 0;
    $a++;

    echo "$a <br>";
  }

  teste(); // 1
  teste(); // 1
  teste(); // 1

  function testeStatic() {
    static $a = 0;
    $a++;

    echo "$a <br>";
  }
  
  // O valor é mantido entre chamadas de função.
  testeStatic(); // 1
  testeStatic(); // 2
  testeStatic(); // 3
