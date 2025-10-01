<?php
// Lista con números mezclados (positivos, negativos y duplicados)
$lista = [7, -3, 2, 9, -3, 0, -1, 5];

echo "ANTES: " . implode(", ", $lista) . "<br>";

// Bubble Sort simple
for ($i = 0; $i < count($lista); $i++) {
    for ($j = 0; $j < count($lista) - 1; $j++) {
        // Ordenar de mayor a menor
        if ($lista[$j] < $lista[$j + 1]) {
            // Intercambiar
            $temp = $lista[$j];
            $lista[$j] = $lista[$j + 1];
            $lista[$j + 1] = $temp;
        }
    }
}

echo "DESPUÉS: " . implode(", ", $lista) . "<br>";
?>