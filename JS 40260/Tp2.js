/*
Es un sistema que permitirá registrar el presentismo y la ausencia de los alumnos totales ingresados.
Se mostrará dentro de los 30 días la situación final de todos los alumnos.
Cualquier alumno que pase de 18 faltas será reprobado.
*/

let cantidad = prompt("¿Cuantos almunos hay en su clase? ( Indicar numero total de alumnos )");
let alumnosTotales = [];
for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt("Indicar presencia ingresando la letra P (cualquier otra letra o palabra será tomada como una ausencia)",nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}


for (i= 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    Presentes: ${alumnosTotales[alumno][1]}:<br>
    Ausencias: ${30 - alumnosTotales[alumno][1]}:<br>`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "REPROBADO POR INASISTENCIA<br>"
    } else {
        resultado+= "<br><br>"
    }
    document.write(resultado)
    }

    
