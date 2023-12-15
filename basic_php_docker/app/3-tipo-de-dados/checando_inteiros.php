<?php
if(is_int(5)) { // true
  echo "É um inteiro";
}

if(is_int("Não é um inteiro.")) { // false
  echo "É um inteiro";
}

$a = 10;
if(is_int($a)) { // true
  echo "É um inteiro";
}