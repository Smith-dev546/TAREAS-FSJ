<?php

interface FormatoSalida {
    public function mostrar($mensaje);
}

class SalidaConsola implements FormatoSalida {
    public function mostrar($mensaje) {
        echo "Consola: " . $mensaje . "<br>";
    }
}

class SalidaJSON implements FormatoSalida {
    public function mostrar($mensaje) {
        $datos = ['mensaje' => $mensaje];
        echo "JSON: " . json_encode($datos) . "<br>";
    }
}

class SalidaTXT implements FormatoSalida {
    public function mostrar($mensaje) {
        echo "TXT: Mensaje guardado en archivo - " . $mensaje . "<br>";
    }
}

class SistemaMensajes {
    private $estrategia;

    public function __construct(FormatoSalida $estrategia) {
        $this->estrategia = $estrategia;
    }

    public function setEstrategia(FormatoSalida $estrategia) {
        $this->estrategia = $estrategia;
    }

    public function mostrar($mensaje) {
        $this->estrategia->mostrar($mensaje);
    }
}

// Uso del sistema
$mensaje = "Hola mundo desde el patrón Strategy";

$consola = new SalidaConsola();
$json = new SalidaJSON();
$txt = new SalidaTXT();

$sistema = new SistemaMensajes($consola);
$sistema->mostrar($mensaje);

$sistema->setEstrategia($json);
$sistema->mostrar($mensaje);

$sistema->setEstrategia($txt);
$sistema->mostrar($mensaje);