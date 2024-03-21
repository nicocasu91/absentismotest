const TheoricalSegment = require("./horariosTeoricos");
const Empleado = require("./empleados");
const TimeManagement = require("./contextodiario");
const HorariosReales = require("./horariosReales");
const HorarioTeorico = require("./horariosTeoricos");
const Novedades = require("./novedades");
const NovedadesProcesadas = require("./novedadesProcesadas")


empleado1 = new Empleado (1, 'Nicolas', 'Casuscelli');


let horarioManana = new HorarioTeorico(1, 9, 18, true);


let fichadaManana = new HorariosReales (1, '2024-03-05', 9, 19)

let nuevaNovedad = new Novedades (1, 'Ausencia', '2024-03-05', 'dia', 1);

function procesarDia (legajo, fecha) {
    if(nuevaNovedad.unidadDeMedida == 'dia'){
        nuevaNovedad.cantidad = parseInt(nuevaNovedad.cantidad) * 8;
    }
    else{
        console.log('Nada que procesar')
    }
    return new NovedadesProcesadas (nuevaNovedad.legajo, nuevaNovedad.nombre, nuevaNovedad.fecha, nuevaNovedad.unidadDeMedida, nuevaNovedad.cantidad);
}

let nuevoProcesamiento = procesarDia(1, '2024-03-05');
console.log(nuevoProcesamiento);


