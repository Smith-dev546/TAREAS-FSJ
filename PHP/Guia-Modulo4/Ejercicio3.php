<?php
// Función simple de Insertion Sort
function insertionSort($nombres) {
    // Recorremos desde el segundo elemento hasta el final
    for ($i = 1; $i < count($nombres); $i++) {
        $clave = $nombres[$i];  // Elemento actual a insertar
        $j = $i - 1;
        
        // Mover elementos mayores a la derecha
        while ($j >= 0 && $nombres[$j] > $clave) {
            $nombres[$j + 1] = $nombres[$j];
            $j = $j - 1;
        }
        
        // Insertar el elemento en su posición correcta
        $nombres[$j + 1] = $clave;
    }
    
    return $nombres;
}

// Lista de nombres desordenados
$nombres = ["Carlos", "Ana", "Beatriz", "David", "Elena"];

// Mostrar antes y después
echo "ANTES: " . implode(", ", $nombres) . "<br>";
$ordenados = insertionSort($nombres);
echo "DESPUÉS: " . implode(", ", $ordenados) . "<br>";
?>