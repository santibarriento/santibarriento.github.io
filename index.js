let numero1 = 20;
let numero2 = 10;
let calculado = false;
let resultado;

while (!calculado) {
    switch (prompt("¿Qué operación quieres realizar?")) {
        case "resta":
            restar();
            break;
        case "multiplicar":
            multiplicar();
            break;
        case "dividir":
            dividir();
            break;
        case "sumar":
            sumar();
            break;
        default:
            alert("Operación no permitida");
            break;
    }
    if (calculado) {
        alert("El resultado es: " + resultado);
    }
}

function restar() {
    resultado = numero1 - numero2;
    calculado = true;
}

function multiplicar() {
    resultado = numero1 * numero2;
    calculado = true;
}

function dividir() {
    resultado = numero1 / numero2;
    calculado = true;
}

function sumar() {
    resultado = numero1 + numero2;
    calculado = true;
}