/* Ejercicio 1

rear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades
*/

class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'izquierda' | 'centro' | 'derecha';

    constructor(titulo: string, color: string, fuente: string, alineacion: 'izquierda' | 'centro' | 'derecha') {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = alineacion;
    }

    // Método 1: Obtenemos las propiedades (titulo, color, fuente)
    public obtenerPropiedades(): { titulo: string, color: string, fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

     // Método 2: Establecemos la alineación (centro/izquierda/derecha)
    public establecerAlineacion(alineacion: 'izquierda' | 'centro' | 'derecha'): void {
        this.alineacion = alineacion;
    }

    // Método 3: Imprimimos todas las propiedades

    public imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}

    //INSTANCIA DE DEMOSTRACION DE USO

const miCabecera = new CabeceraPagina(
    "Mi primera página web",
    "azul",
    "Roboto",
    "centro"
);

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

class Calculadora {
    // Este método permite sumar dos números
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Este método permite restar dos números
    restar(a: number, b: number): number {
        return a - b;
    }

    // Este método permite multiplicar dos números
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Este método permite  dividir dos números
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }

    // Este método  calcula la potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Este método  calcula el factorial
    factorial(n: number): number {
        if (n < 0) throw new Error("El factorial no está definido para números negativos");
        if (n === 0 || n === 1) return 1;
        
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// DEMOSTRACIÓN DE USO

const calculadora = new Calculadora();

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

class Cancion {
    private titulo: string;
    private genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
    }

    // Método para establecer el autor
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método para obtener el autor
    public getAutor(): string {
        return this.autor;
    }

    // Método para mostrar los datos de la canción
    public mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

// DEMOSTRACIÓN DE USO

const cancion1 = new Cancion("Del estadio al cielo", "Pop");
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

class Cuenta {
    // Propiedades privadas de la cuenta
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    // Constructor para inicializar una nueva cuenta
    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    //Método para depositar dinero en la cuenta
    public depositar(cantidad: number): void {
        if (cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente: $${cantidad}`);
        }
    }

    // Método para retirar dinero de la cuenta
    public retirar(valor: number): void {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else if (this.cantidad === 0) {
            console.log("No hay efectivo en la cuenta.");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado: $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }

    //Método para mostrar los datos principales de la cuenta
    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
        console.log(`Número de Cuenta: ${this.numeroCuenta}`);
    }
}

// DEMOSTRACIÓN DE USO

// Creación de una nueva cuenta
const cuenta1 = new Cuenta("pepito fuentes", 100, "Ahorros", "123456789");

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

abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    //Método para determinar si la persona es mayor de edad
    public esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }

    public abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    public cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    public imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldo}`);
    }

    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.esMayorDeEdad();
    }
}

// Crear un objeto de la clase Empleado
const empleado1 = new Empleado("pepito", "fuentes", "Avenida nueva 123", "7890-2354", 20, 100000);

// Mostrar los datos del empleado
empleado1.mostrarDatos();

// Imprimir el sueldo del empleado
empleado1.imprimirSueldo();
