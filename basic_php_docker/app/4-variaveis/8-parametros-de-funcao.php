<?php

  // Os parâmetros de função também são considerados tipos de variáveis.
  // Este recurso nos ajuda a criar funções com valores dinâmicos.
  // Podendo alterá-los a cada invocação da mesma.
  // Podemos passar mais de um parâmetro para uma função.

  function soma($a, $b) {
    echo $a + $b;
    echo "<br";
  }

  soma(2, 4); // 6
  soma(6, 8); // 14
  soma(10, 10); // 20