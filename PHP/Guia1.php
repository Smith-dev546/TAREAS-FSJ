
<?php 

//Ejercicio 1

/*
function generarFibonacci($n) {
    $fibonacci = [];
    if ($n >= 1) {
        $fibonacci[] = 0;
    }
    if ($n >= 2) {
        $fibonacci[] = 1;
    }
    for ($i = 2; $i < $n; $i++) {
        $fibonacci[] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
    }
    print_r($fibonacci) ;
}

generarFibonacci(10)

*/

//Ejercicio 2
/*

function esPrimo($numero) {
    if ($numero <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false;
        }
    }
    return true;
}
$numero = 29; 
if (esPrimo($numero)) {
    echo "$numero es un número primo.";
} else {
    echo "$numero no es un número primo.";
} 

*/

//Ejercicio3
/*
Problema de Palíndromos:
Implementa una función llamada esPalindromo que determine si una cadena de texto dada es un palíndromo. Un palíndromo es una palabra, frase o secuencia que se lee igual en ambas direcciones.
*/

function esPalindromo($cadena) {
    
    $cadenaLimpia = preg_replace('/[^a-z0-9]/', '', strtolower($cadena));
    
    return $cadenaLimpia === strrev($cadenaLimpia);
}


function esPalindromoDetallado($cadena) {
   
    $cadenaLimpia = preg_replace('/[^a-z0-9]/', '', strtolower($cadena));
    
    
    $longitud = strlen($cadenaLimpia);
    for ($i = 0; $i < $longitud / 2; $i++) {
        if ($cadenaLimpia[$i] !== $cadenaLimpia[$longitud - 1 - $i]) {
            return false;
        }
    }
    return true;
}


$testCases = [
    "anilina",
    "reconocer",
    "oso",
    "radar",
    "A man a plan a canal Panama",
    "12321",
    "hola mundo",
    "php",
    "2002",
    "No subas, abusón"
];


foreach ($testCases as $test) {
    $resultado = esPalindromo($test) ? "✓ SÍ" : "✗ NO";
    echo "'{$test}' -> {$resultado} es palíndromo\n";
}

// Prueba interactiva
echo "\n=== PRUEBA INTERACTIVA ===\n";
echo "Escribe una palabra o frase (o 'salir' para terminar):\n";


while (true) {
    $input = trim(fgets(STDIN));
    
    if (strtolower($input) === 'salir') {
        break;
    }
    
    if (esPalindromo($input)) {
        echo "✓ '{$input}' SÍ es un palíndromo\n\n";
    } else {
        echo "✗ '{$input}' NO es un palíndromo\n\n";
    }
    
    echo "Escribe otra palabra o 'salir': ";
}


?>