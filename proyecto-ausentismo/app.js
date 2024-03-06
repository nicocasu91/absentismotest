const TheoricalSegment = require("./horariosTeoricos");
const Empleado = require("./empleados");
const TimeManagement = require("./dailyContext");
const HorariosReales = require("./horariosReales")


empleado1 = new Empleado (1, 'Nicolas', 'Casuscelli');
console.log(empleado1);

let horarioManana = new TheoricalSegment(9, 18, true);
console.log(horarioManana);

let fichadaManana = new HorariosReales ('2024-03-05', 9, 19)

let context1 = new TimeManagement(empleado1.id, fichadaManana.fecha, horarioManana.startingHour, horarioManana.exitHour, fichadaManana.horarioInicioReal, fichadaManana.horarioFinReal, "Ausencia")
console.log(context1);

