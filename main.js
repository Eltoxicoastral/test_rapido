function suma(n1, n2) {
    // Convertir los valores ingresados a números
    let resultado = Number(n1) + Number(n2);
    return resultado; // Devolver el resultado, no la función
}

// Solicitar los números al usuario
let n1 = prompt("Ingrese el primer número");
let n2 = prompt("Ingrese el segundo número");

// Calcular la suma
let total = suma(n1, n2);

// Mostrar el resultado
alert("El resultado es: " + total);