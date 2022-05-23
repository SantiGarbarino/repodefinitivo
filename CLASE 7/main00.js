console.log("Soy externo")
//para acceder a un Id, selecciona solo el de ese id
let parrafo1 = document.getElementById("pConId")
console.log(parrafo1)
//para accede a una clase
let parrafo2 = document.getElementsByClassName("pConClase")
console.log(parrafo2)
//para acceder a una etiqueta, selecciona todo lo de esa etiqueta
let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

function cambiarTitular(){
    let titular1 = document.getElementById("titular")
titular1.innerText = "Otra cosa"      //Cambia el texto de lo que estaba en html por lo q escribi aca
}
// preguntar pq no aparece al sumar la edad
function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
    document.body.append("El nombre del usuario es: " + nombreUsuario + " y va a cumplir " + (parseInt(edadUsuario+1) + "años"))
    document.body.append(`El nombre del usuaruio es ${nombreUsuario} y su edad es ${edadUsuario} `) //temple literal
}
// query = consulta
let parrafos = document.querySelectorAll("p")
console.log(parrafos)

