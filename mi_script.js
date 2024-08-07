document.addEventListener('DOMContentLoaded', function () {

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
    let enlace = document.getElementsByTagName("a");
    console.log(enlace)
    //alert(enlace.length);
    let informacion = document.getElementById("info");
    informacion.innerHTML = 'El numero de enlaces es ' + enlace.length;
    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :
    let mensaje = "El penúltimo enlace apunta a: " + enlace[enlace.length - 2];
    informacion.innerHTML = informacion.innerHTML + "<br>" + mensaje;

    

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
});

