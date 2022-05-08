/* una funcion es un conjunto de instrucciones
*
*declarar (crearlas)
*invocar (utilizarlas)
*/
//funciones declaradas:
function saludar (){ //declarandola
    console.log("Hola estudiante!")
}
saludar() //invocandola

// la estructrura basia: function nombre(){instrucciones}
 function saludarConParametro(nombre){
     console.log("Hola " + nombre)
 }
 saludarConParametro("Santiago") // me va a devolver Hola Santiago

 function sumarDOS(numero1, numero2){
     let resultado = numero1 + numero2
     return resultado
 }
 function mostrar(visible){
     console.log(visible)
 }
 mostrar(sumarDos(1,2))
/*******/
 function calculadora (numero1,numero2,operacion){
    if(operacion === "+"){
        return numero1 + numero2
    }
    else if(operacion === "-"){
        return numero1 - numero2
    }
    else if(operacion === "*"){
        return numero1 * numero2
    }
    else if(operacion === "/"){
        if(numero2 !== 0){
        return numero1 / numero2}
        else{
            return "No se puede dividir por cero"
        }
    }else{
        return "Ingrese una operación valida"
    }
}

mostrar(calculadora(1,2,"+"))
mostrar(calculadora(2,3,"-"))
mostrar(calculadora(5,10,"*"))
mostrar(calculadora(8,4,"/"))
mostrar(calculadora(8,0,"/"))

//funciones anonimas o funciones expresadas (es lo mismo):
let suma = function (a,b){
    return a + b
}
let resta = function (a,b){
    return a - b
}
mostrar(suma(1,2))
mostrar(resta(2,1))

/* diferencias entre las declaradas y las anonimas
la funcion declarada la puedo escribir despues de utilizarla y se ejecuta
igual, pero las anonimas son variables y hay que escribirlas para luego utilizarlas
sino te da error. esa es la ppal dif*/

//funcion flecha
let multiplicar = (a,b) => a*b //aca (a,b) van con parentesis pq ya son 2
mostrar(multiplicar(2,2))
//si en la funcion flecha usas un solo parametro va sin parentesis
let siguienteFlecha = numero => numero+1 //el = numero va sin ()
mostrar(siguienteFlecha(5))//6

/*EJERCICIO:
-Calcular costo total de productos y/o servicios seleccionados por el usuario.*/
function calcularCostos(eleccion1, eleccion2, eleccion3){
    let costoTotal = 0
    servicio1 = 1000 //limpieza de cutis
    servicio2 = 2000 //uñas esculpidas
    servicio3 = 3000 //uñas encarnadas
    if(eleccion1=="limpieza de cutis" || eleccion2 == "limpieza de cutis" || eleccion3 =="limpieza de cutis"){
    costoTotal = costoTotal + servicio1;
    } 
    if(eleccion1=="uñas esculpidas" || eleccion2 == "uñas esculpidas" || eleccion3 =="uñas esculpidas"){
    costoTotal = costoTotal + servicio2;
    }
    if(eleccion1=="uñas encarnadas" || eleccion2 == "uñas encarnadas" || eleccion3 =="uñas encarnadas"){
    costoTotal = costoTotal + servicio3; 
    }
mostrar(calcularCostos("limpieza de cutis", "uñas esculpidas","uñas encarnadas"))
//se puede mejorar en realidad, no esta del todo bien