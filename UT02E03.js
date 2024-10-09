"use strict";
/*UT02E03: Comprobador de número de tarjeta de crédito
Vence hoy a las 23:59
Instrucciones
Una vez hemos calentado con el comprobador de la letra del DNI, vamos a subir un poco la dificultad.

En este ejercicio queremos verificar si un número de 16 dígitos introducido por el usuario es un número válido de tarjeta de crédito. Para ello, investiga sobre el algoritmo de Luhn.

La verificación ha de tener lugar en una función llamada verificarNumeroTarjeta()
La primera línea del archivo ha de ser: "use strict";

Haz este ejercicio en un repositorio git nuevo y súbelo a GitHub. Para marcar esta tarea como entregada, indica la URL del repositorio GitHub donde está el código.*/


function verificarNumeroTarjeta(numero) {  
        let numCadena = numero.toString(); // Convertir el número a cadena. (.toString)
        let cadenaNumeros = []; // Array para almacenar los numeros pasados a digitos de la cadena
        for (let i = 0; i < numCadena.length; i++) {
        cadenaNumeros.push(Number(numCadena[i])); //Number()= Si la cadena de texto contiene solo números, Number() la convierte en un número.
        }
 
    if (cadenaNumeros.length !== 16) {
        return alert("El número de tarjeta no contiene 16 numeros, no es válido.");
      
    }
    /*APLICACION DEL ALGORITMO DE LUHN
    - Se recorre el array de derecha a izquierda, duplicando cada segundo dígito.(duplicamos por indice impar 1,3,5..)
    - Si al duplicarlo el valor es mayor que 9, se le resta 9.
    - Todos los dígitos (modificados o no) se suman y al final se verifica si la suma total es divisible por 10.
    Resultado: Si la suma es divisible por 10, el número de tarjeta es válido.*/
   //console.log("estoy aqui");
    let suma = 0;
    for (let i = 0; i < cadenaNumeros.length; i++) {
        let digito = cadenaNumeros[cadenaNumeros.length - 1 - i];
        // Si es un índice impar (segundo, cuarto, etc.), duplicamos el valor del dígito
        if (i % 2 === 1) {
            digito *= 2;
            // Si el valor de digito del indice impar es mayor que 9, restamos 9 para obtener un solo dígito
            if (digito > 9) {
                digito -= 9;
            }
        }
        // Sumamos el valor de todos los digitos
        suma += digito;
    }
    // El número es válido si la suma es divisible por 10
    if(suma % 10 === 0){
        return alert("El número de tarjeta es válido.");
    }else{
        return alert("El número de tarjeta no es válido.");
    }
}


let numeroTarjeta = prompt("Introduce un número de tarjeta de crédito de 16 dígitos:");
verificarNumeroTarjeta(numeroTarjeta);

