/* function mostrarinfo(){
    let titular1 = document.getElementById("Informacion")
titular1.innerText = "Nacionalidad: Argentina"
*/
//PREGUNTAR CUAL ES LA DIFERENCIA ENTRE PONER innerText con poner innerHTML 
function mostrarinf21(){
    let contenedor = document.getElementById("comentario21")   
    contenedor.innerHTML = "<ul> <li>Nacionalidad: Argentina</li> <li>Edad: 52 años</li> <li>Club: Atletico de Madrid (España)</li> </ul>" 
}

 function mostrarinf22(){
     let contenedor = document.getElementById("comentario22")   
     contenedor.innerHTML = "<ul> <li>Nacionalidad: Argentina</li> <li>Edad: 44 años</li> <li>Seleccion: Argentina</li> </ul>"
 }

function mostrarinf23(){
    let contenedor = document.getElementById("info23")   // preguntar pq aca lo hice distinto e igual no me da lo que quiero 
    contenedor.innerHTML = "<ul> <li>Nacionalidad: Francia</li> <li>Edad: 49 años</li> <li>Club: Desempleado (-)</li></ul>"
}

function mostrarinf24(){
    let contenedor = document.getElementById("comentario24")   
    contenedor.innerHTML = "<ul> <li>Nacionalidad: Argentina</li> <li>Edad: 36 años</li> <li>Club: Racing Club (Argentina)</li></ul>"
}

/*
<div id="comentario23">
            <input type="button" onclick="mostrarinf23()" value="Mostrar Informacion">
          </div> 
          
function mostrarinf23(){
    let contenedor = document.getElementById("comentario23")   //preguntar aca pq puse let contenedor
    contenedor.innerHTML = "<ul> <li>Nacionalidad: Francia</li> <li>Edad: 49 años</li> <li>Club: Desempleado (-)</li></ul>"
}*/