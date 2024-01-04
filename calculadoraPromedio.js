const nombreAlumno = (prompt("Ingrese el nombre del alumno: "));
let primeraNota, segundaNota, terceraNota;


while (true) {
    primeraNota = parseFloat(prompt("Ingresa la primera nota:"));
    if (!isNaN(primeraNota) && primeraNota >= 0 && primeraNota <= 10) {
        break;
    } else {
        alert("Por favor ingresa nuevamente la primera nota válida entre 0 y 10");
    }
}


while (true) {
    segundaNota = parseFloat(prompt("Ingresa la segunda nota:"));
    if (!isNaN(segundaNota) && segundaNota >= 0 && segundaNota <= 10) {
        break;
    } else {
        alert("Por favor ingresa nuevamente la segunda nota válida entre 0 y 10");
    }
}


while (true) {
    terceraNota = parseFloat(prompt("Ingresa la tercera nota:"));
    if (!isNaN(terceraNota) && terceraNota >= 0 && terceraNota <= 10) {
        break;
    } else {
        alert("Por favor ingresa nuevamente la tercera nota válida entre 0 y 10");
    }
}

const promedioNotas = (primeraNota + segundaNota + terceraNota) / 3;



if (promedioNotas >= 7) {
    alert(nombreAlumno + ", ¡felicidades! Has aprobado con un promedio de " + promedioNotas + ".");
}else{
    alert(nombreAlumno + ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + promedioNotas + ".");
}