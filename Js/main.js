// function saludo(){
//     alert("Bienvenido amiguito");
// }

function circulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}

function rectangulo(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");

}

function moveTop(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("moveTop");
}

function left(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("left");
}

function right(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("right");
}

function bottom(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("bottom");
}

function diagonal(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("diagonal");
}

function imagen(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("imagen");
}

function rombo(){
    var figura = document.querySelector("#figura");
    figura.classList.toggle("rombo");
}

function suma(){
    var A = 0;
    var B = 0;
    var suma = 0;

    alert("Algortimo que suma dos valores ingresados por el usuario")

    A = parseInt(prompt("Ingrese el primer valor a sumar"));
    B = parseInt(prompt("Ingrse el segundo valor a sumar"));

    suma = A + B;

    alert("El resultado de la suma es: " + suma)
}

function operaciones(){
    var A = 0;
    var B = 0;
    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var division = 0;

    alert("Algoritmo que capture dos valores y los suma, resta, multiplica y divide")

    A = parseFloat(prompt("Ingrese el primer valor"));
    B = parseFloat(prompt("Ingrese el segundo valor "));

    suma = A + B;
    resta = A - B;
    multiplicacion = A * B;
    division = A / B;

    alert("El resultado de las operaciones son:\nLa suma es: " + suma + "\nLa resta es: " + resta + "\nLa multiplicación es: " + multiplicacion + "\nLa división es: " + division)
    
}
 
// function promedio2(){
//     var nota1 = 0;
//     var nota2 = 0;
//     var nota3 = 0;
//     var nota4 = 0;
//     var nota5 = 0;
//     var nota6 = 0;
//     var nota7 = 0;
//     var suma = 0;
//     var promedio = 0;

//     alert("Ingrese las siete calificaciones del estudiante para sacar el promedio y ver si aprueba o no")
    
//     nota1 = parseFloat(prompt("Ingrese la calificación 1"));
//     nota2 = parseFloat(prompt("Ingrese la calificación 2"));
//     nota3 = parseFloat(prompt("Ingrese la calificación 3"));
//     nota4 = parseFloat(prompt("Ingrese la calificación 4"));
//     nota5 = parseFloat(prompt("Ingrese la calificación 5"));
//     nota6 = parseFloat(prompt("Ingrese la calificación 6"));
//     nota7 = parseFloat(prompt("Ingrese la calificación 7"));

//     suma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7;
//     promedio = suma / 7;

//     if (promedio >= 6.2){
//         alert("El promedio es: " + promedio.toFixed(2) + "\nEl estudiante ha aprobado")
//     } else{
//         alert("El promedio es: " + promedio.toFixed(2) + "\nEl estudiante no aprobo")
//     }
// }

// function promedio() {
//     var suma = 0;
//     var numNotas = 7;

//     for (var i = 0; i < numNotas; i++ ) {
//       var nota = parseFloat(prompt("Ingresa la nota " + (i+1)));
//       suma += nota;
//     }
  
//     var promedio = suma / numNotas;
  
//     if (promedio >= 6.2) {
//       alert("Tu promedio es " + promedio.toFixed(2) + " y has aprobado.");
//     } else {
//       alert("Tu promedio es " + promedio.toFixed(2) + " y has reprobado.");
//     }
//   }
  
function promedio() {
    var suma = 0;
    var numNotas = 7;
    
    alert("Ingrese las siete calificaciones para calcular el promedio y ver si aprueba o reprueba")

    for (var i = 0; i < numNotas; i++ ) {
      var nota_valida = false;
      while (!nota_valida) {
        var nota = parseFloat(prompt("Ingrese la calificación " + (i+1)));
        if (nota >= 1 && nota <= 10) {
          nota_valida = true;
          suma += nota;
        } else {
          alert("La calificación debe estar entre 1 y 10");
        }
      }
    }
  
    var promedio = suma / numNotas;
  
    if (promedio >= 6.2) {
      alert("Tu promedio es " + promedio.toFixed(2) + "\nHas aprobado.");
    } else {
      alert("Tu promedio es " + promedio.toFixed(2) + "\nHas reprobado.");
    }
}

function triangulo(){
  var base = 0;
  var altura = 0;

  alert("Calcular el area de un triangulo")

  base = parseFloat(prompt("Ingrese la base del triangulo"));
  altura = parseFloat(prompt("Ingrese la altura del triangulo"));
  var area = (base * altura) / 2;

  alert("El area del triangulo es:\n" + area)

}

function capitalinv(){
  var capital = 0;
  var años = 0;
  var ganancias = 0;
  var total = 0;

  alert("Calcular el interes compuesto que podria obtener por su capital en cierta cantidad de años")

  capital = parseInt(prompt("Ingrese el capital"));
  años = parseInt(prompt("Ingrese la cantidad de años"));

  var  ganancias = 12 * 0.017 * años * capital;
  var total = capital + ganancias;

  alert("Lo obtenido a un plazo de " + años + " años por la cantidad de $" + capital + " de pesos seria:\n" + "Capital inicial: $" + capital + " de pesos\n" + "Las ganancias serian: $" + ganancias.toFixed(2) + " de pesos\n" + "El capital total es: $" + total.toFixed(2) + " de pesos.")

}

function descuento(){
  var kilos = 0;
  var precio = 4500;
  var total = 0;

  alert("Calcular el precio final aplicando el descuento correspondiente segun la cantidad de kilos comprados.")

  kilos = parseFloat(prompt("Ingrese la cantidad de kilos"));

  if (kilos >= 0 && kilos <= 2) {
    total = kilos * precio;
    alert("El total a pagar por " + kilos + " kilos de manzanas son: $" + total)
  }
  if (kilos >= 3 && kilos <= 5){
    total = (kilos * precio) - kilos * (precio * 0.1);
    alert("El total a pagar por " + kilos + " kilos de manzanas son: $" + total)
  }

  if (kilos >= 6 && kilos <= 9){
    total = (kilos * precio) - kilos * (precio * 0.15);
    alert("El total a pagar por " + kilos + " kilos de manzanas son: $" + total)
  }

  if (kilos >= 10) {
    total = (kilos * precio) - kilos * (precio * 0.2);
    alert("El total a pagar por " + kilos + " kilos de manzanas son: $" + total)
  }

}



