accion = () => {
    let texto = document.getElementById("ustedEs");
    let textoEdad = document.getElementById("edad");
    let nombre = document.getElementById("formularioNombre").value;
    let apellidos = document.getElementById("formularioApellidos").value;
    let fecha = new Date(document.getElementById("formularioFecha").value);
    let hoy = new Date();
    let edad = 0;


    if(nombre!="" && apellidos != "" && fecha!="Invalid Date"){
        
        edad = Math.abs(hoy - fecha);
        edad /= (1000*3600*24*365);
        edad = edad.toFixed();

        texto.innerHTML='Usted es ' + nombre + " " + apellidos +".";
        textoEdad.innerHTML="Usted tiene " + edad + " años.";
    }
}