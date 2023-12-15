<?php

  $pessoa = [
    "nome"=> "Anderson",
    "idade"=> 41,
    "Profissão"=> "Programador",
    "Graduação"=> "Sistemas da Informação"
  ];

  // Desafio
  $maioridade = 18;
  if($pessoa['idade'] >= $maioridade) {
    echo  "A pessoa é maior de idade.";
  }