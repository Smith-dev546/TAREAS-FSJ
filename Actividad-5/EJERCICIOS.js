/* Ejercicio 1

rear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente, alineacion) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = alineacion;
    }
    // Método 1: Obtenemos las propiedades (titulo, color, fuente)
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    };
    // Método 2: Establecemos la alineación (centro/izquierda/derecha)
    CabeceraPagina.prototype.establecerAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Método 3: Imprimimos todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
//INSTANCIA DE DEMOSTRACION DE USO
var miCabecera = new CabeceraPagina("Mi primera página web", "azul", "Roboto", "centro");
// Uso del método 3 (imprimir propiedades)
miCabecera.imprimirPropiedades();
// Uso del método 2 (cambiar alineación)
miCabecera.establecerAlineacion("derecha");
console.log("\nDespués de cambiar alineación:");
miCabecera.imprimirPropiedades();
/* Ejercicio 2

    Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial


*/
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Este método permite sumar dos números
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Este método permite restar dos números
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Este método permite multiplicar dos números
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Este método permite  dividir dos números
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    };
    // Este método  calcula la potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    // Este método  calcula el factorial
    Calculadora.prototype.factorial = function (n) {
        if (n < 0)
            throw new Error("El factorial no está definido para números negativos");
        if (n === 0 || n === 1)
            return 1;
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
// DEMOSTRACIÓN DE USO
var calculadora = new Calculadora();
console.log("=== Operaciones Básicas ===");
console.log("5 + 3 =", calculadora.sumar(5, 3));
console.log("5 - 3 =", calculadora.restar(5, 3));
console.log("5 * 3 =", calculadora.multiplicar(5, 3));
console.log("6 / 3 =", calculadora.dividir(6, 3));
console.log("\n=== Operaciones Avanzadas ===");
console.log("2 ^ 5 =", calculadora.potencia(2, 5));
console.log("5! =", calculadora.factorial(5));
//Ejercicio 3
/* Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción. */
var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }
    // Método para establecer el autor
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    // Método para obtener el autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // Método para mostrar los datos de la canción
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return Cancion;
}());
// DEMOSTRACIÓN DE USO
var cancion1 = new Cancion("Del estadio al cielo", "Pop");
cancion1.setAutor("Morat");
cancion1.mostrarDatos();
/*  Ejercicio 4

    Crea una clase llamada Cuenta y va contener lo siguiente:
    Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
    Métodos:
    • Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
    número de cuenta.
    • Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
    condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
    depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
    correctamente y la cantidad depositada.
    • Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
    que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
    cuanto le queda en su cuenta.
    Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
    si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
    • Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
    • Define un objeto de la clase Cuenta y llama sus métodos.

*/
var Cuenta = /** @class */ (function () {
    // Constructor para inicializar una nueva cuenta
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    //Método para depositar dinero en la cuenta
    Cuenta.prototype.depositar = function (cantidad) {
        if (cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += cantidad;
            console.log("Se ha depositado correctamente: $".concat(cantidad));
        }
    };
    // Método para retirar dinero de la cuenta
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else if (this.cantidad === 0) {
            console.log("No hay efectivo en la cuenta.");
        }
        else {
            this.cantidad -= valor;
            console.log("Se ha retirado: $".concat(valor, ". Saldo restante: $").concat(this.cantidad));
        }
    };
    //Método para mostrar los datos principales de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de Cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de Cuenta: ".concat(this.numeroCuenta));
    };
    return Cuenta;
}());
// DEMOSTRACIÓN DE USO
// Creación de una nueva cuenta
var cuenta1 = new Cuenta("pepito fuentes", 100, "Ahorros", "123456789");
// Mostrar los datos de la cuenta
cuenta1.mostrarDatos();
// Realizar operaciones de depósito y retiro
cuenta1.depositar(10);
cuenta1.retirar(30);
/*  Ejercicio 5

   Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.

*/
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    //Método para determinar si la persona es mayor de edad
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " no es mayor de edad."));
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log("El sueldo de ".concat(this.nombre, " ").concat(this.apellido, " es: $").concat(this.sueldo));
    };
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Apellido: ".concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
        this.esMayorDeEdad();
    };
    return Empleado;
}(Persona));
// Crear un objeto de la clase Empleado
var empleado1 = new Empleado("pepito", "fuentes", "Avenida nueva 123", "7890-2354", 20, 100000);
// Mostrar los datos del empleado
empleado1.mostrarDatos();
// Imprimir el sueldo del empleado
empleado1.imprimirSueldo();
