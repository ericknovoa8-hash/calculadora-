console.log ("Hola, esta es mi sistema matematico de operaciones basicas: ");
var opcion = prompt(ingrese su opcion: 1 para suma, 2 para resta, 3 para multiplicacion, 4 para division);

var num1 = parseFloat(prompt("Ingrese el primer numero: "));
var num2 = parseFloat(prompt("Ingrese el segundo numero: "));

switch (opcion) {
    case "1":
        var resultado = num1 + num2;
        console.log("El resultado de la suma es: " + resultado);
        break;
    case "2":
        var resultado = num1 - num2;
        console.log("El resultado de la resta es: " + resultado);
        break;
    case "3":
        var resultado = num1 * num2;
        console.log("El resultado de la multiplicacion es: " + resultado);
        break;
    case "4":
        if (num2 !== 0) {
            var resultado = num1 / num2;
            console.log("El resultado de la division es: " + resultado);
        } else {
            console.log("Error: No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Opcion no valida. Por favor, ingrese una opcion del 1 al 4.");
}
