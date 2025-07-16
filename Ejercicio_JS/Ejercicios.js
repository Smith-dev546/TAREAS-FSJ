//Ejercicio 1

function MayorDeEdad(edad) {
    const mensaje = edad >= 18 ? "Es mayor de edad" : "No es mayor de edad";    //Utilizamos el ternario para verificar si es mayor de edad
    return mensaje;
}

//Ingresamos directamente la edad del usuario
const edad = 15;
console.log(MayorDeEdad(edad));

//Ejercicio 2

function calcularNota(nombre, carnet, examen, tareas, asistencia, investigacion) {

    // Cálculamos la nota final 
    const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
    
    // Mostrar los datos del alumno y su nota final
    console.log(`
        Datos del Alumno:
        Nombre: ${nombre}
        Carnet: ${carnet}
        Nota Final: ${notaFinal.toFixed(2)}
    `);
    
    return notaFinal;
}

// 
calcularNota("Pepito Fuentes", "U00000000", 85, 90, 100, 80);


//Ejercicio 3

function calcularAumento(nombre, salario, categoria) {
    let aumentoPorcentaje;
    
    // Determinamos el porcentaje de aumento según la categoría
    switch (categoria.toUpperCase()) {
        case 'A':
            aumentoPorcentaje = 0.15;
            break;
        case 'B':
            aumentoPorcentaje = 0.30;
            break;
        case 'C':
            aumentoPorcentaje = 0.10;
            break;
        case 'D':
            aumentoPorcentaje = 0.20;
            break;
        default:
            aumentoPorcentaje = 0; // Si la categoría no existe
    }

    const aumento = salario * aumentoPorcentaje;
    const nuevoSalario = salario + aumento;

    // Mostrar resultados
    console.log(`
        Datos del Empleado:
        Nombre: ${nombre}
        Salario actual: $${salario.toFixed(2)}
        Categoría: ${categoria.toUpperCase()}
        Aumento (${aumentoPorcentaje * 100}%): $${aumento.toFixed(2)}
        Nuevo salario: $${nuevoSalario.toFixed(2)}
    `);
}

// Ejemplo de uso:
calcularAumento("Jose", 4000, "B");


//EJercicio 4

function numeroMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Ejemplo de uso con entrada de usuario (puedes usar prompt en navegador):
const numero1 = parseInt(prompt("Ingrese el primer número entero:"));
const numero2 = parseInt(prompt("Ingrese el segundo número entero:"));

const mayor = numeroMayor(numero1, numero2);
console.log(`El número mayor es: ${mayor}`);

//Ejercicio 5
