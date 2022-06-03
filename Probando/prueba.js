function mostrarinf21(){
    let contenedor = document.getElementById("comentario21")   
    contenedor.innerHTML = "<ul> <li>Nacionalidad: Argentina</li> <li>Edad: 52 años</li> <li>Club: Atletico de Madrid (España)</li> </ul>"
}

 function mostrarinf22(){
     let contenedor = document.getElementById("comentario22")   
     contenedor.innerHTML = "<ul> <li>Nacionalidad: Argentina</li> <li>Edad: 44 años</li> <li>Seleccion: Argentina</li> </ul>"
 }

function mostrarinf23(){
    let contenedor = document.getElementById("info23")   // preguntar
    contenedor.innerHTML = "<ul> <li>Nacionalidad: Francia</li> <li>Edad: 49 años</li> <li>Club: Desempleado (-)</li></ul>"
}

function mostrarinf24(){
    let contenedor = document.getElementById("comentario24")   
    contenedor.innerHTML = "<ul> <li>Nacionalidad: Argentina</li> <li>Edad: 36 años</li> <li>Club: Racing Club (Argentina)</li></ul>"
}

function enviarMail(){
    let dedicar = document.getElementById("dedicar").checked; //preguntar pq cuando pongo dt no me lo reconoce
    if (dedicar != true)
        return alert("Debe elegir una opción.");
    else
        return alert("Hemos recibido su mail, en la brevedad nos estaremos comunicando con usted.");
}

const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline);
      el.innerHTML = `${t.remainDays}D:${t.remainHours}H:${t.remainMinutes}M:${t.remainSeconds}s`;
  
      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };
  
  countdown('Nov 21 2022 07:00:00 GMT-0500', 'clock', '¡Ya empezó el Mundial!');