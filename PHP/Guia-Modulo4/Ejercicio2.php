<?php
// La forma más fácil de ordenar palabras
$palabras = ["zorro", "gato", "perro", "ave", "ballena"];

echo "ANTES: " . implode(", ", $palabras) . "<br>";

// Ordenar alfabéticamente (A-Z)
sort($palabras);

echo "DESPUÉS: " . implode(", ", $palabras) . "<br>";
?>