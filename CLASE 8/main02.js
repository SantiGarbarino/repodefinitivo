function detectarEdad(){
    let edadUsuario = document.getElementById("edad").value
    if(edadUsuario < 18)
    return(alert("Lo siento, debe ser mayor de edad para ingresar a la web"))

    let condiciones = document.getElementById("bases").checked
    if(condiciones!= true)
        return(alert("Debe estar de acuerdo con las condiciones"))

    let nombreUsuario = getElementById("nombre")
    let apellidoUsuario = getElementById("apellido")

    let datosUsuario = (document.body.append(`El nombre de usuario es ${nombreUsuario} ${apellidoUsuario} y tiene  ${edadUsuario} años`))
    if(edadUsuario < 18 && condiciones!= true ){
        return(datosUsuario)}
        
}

