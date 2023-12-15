<?php

  class Pessoa {
    function falar() {
      echo "Olá, pessoal!";
    }
  }

  $nathalia = new Pessoa();
  $nathalia->nome = "Nathália";

  echo $nathalia->nome;

  echo "<br>";

  $nathalia->falar();