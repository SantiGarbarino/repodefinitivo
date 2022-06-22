function enviarMail() {
  let dedicar1 = document.getElementById("dedicar1").checked;
  let dedicar2 = document.getElementById("dedicar2").checked; //preguntar pq cuando pongo dt no me lo reconoce
  if (dedicar1 != true && dedicar2 != true) return alert("Debe elegir una opción.");
  else
    return alert(
      "Hemos recibido su mail, en la brevedad nos estaremos comunicando con usted."
    );
}

const getRemainingTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime,
  };
};

const countdown = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval(() => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays}D:${t.remainHours}H:${t.remainMinutes}M:${t.remainSeconds}s`;

    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
  }, 1000);
};

countdown("Nov 21 2022 07:00:00 GMT-0500", "clock", "¡Ya empezó el Mundial!");

function confirmacion() {
	var pregunta = confirm("¿Deseas visitar la página oficial de la FIFA?")
	if (pregunta){
		alert("Te envío allí rápidamente")
		window.location = "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022";
	}
	else{
		alert("Quizás en otro momento...\n Gracias de todas formas")
	}
}

