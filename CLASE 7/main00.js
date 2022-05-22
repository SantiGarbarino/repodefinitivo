console.log("Soy externo")
//para acceder a un Id
let parrafo1 = document.getElementById("pConId")
console.log(parrafo1)
//para accede a una clase
let parrafo2 = document.getElementsByClassName("pConClase")
console.log(parrafo2)
//para acceder a una etiqueta
let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

function cambiarTitular(){
    let titular1 = document.getElementById("titular")
titular1.innerText = "Otra cosa"      //Cambia el texto de lo que estaba en html por lo q escribi aca
}