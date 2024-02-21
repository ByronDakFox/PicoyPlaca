var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var PicoYPlacaPredictor = /** @class */ (function () {
    function PicoYPlacaPredictor() {
        var _a;
        this.restricciones = (_a = {},
            _a[DiaSemana.Lunes] = [1, 2],
            _a[DiaSemana.Martes] = [3, 4],
            _a[DiaSemana.Miércoles] = [5, 6],
            _a[DiaSemana.Jueves] = [7, 8],
            _a[DiaSemana.Viernes] = [9, 0],
            _a[DiaSemana.Sábado] = [],
            _a[DiaSemana.Domingo] = [],
            _a);
        // días feriados según las regulaciones locales
        this.feriados = [
            new Date("2024-01-01"), // Año Nuevo
            new Date("2024-04-12"), // Viernes Santo
            new Date("2024-05-01"), // Día del Trabajo
            new Date("2024-05-24"), // Batalla de Pichincha
            new Date("2024-08-10"), // Primer Grito de Independencia
            new Date("2024-10-09"), // Independencia de Guayaquil
            new Date("2024-11-02"), // Día de los Difuntos
            new Date("2024-11-03"), // Independencia de Cuenca
            new Date("2024-12-25") // Navidad
        ];
    }
    // días según las regulaciones 
    PicoYPlacaPredictor.prototype.obtenerDiaSemana = function (fecha) {
        var dia = fecha.getDay();
        switch (dia) {
            case 6:
                return DiaSemana.Domingo;
            case 0:
                return DiaSemana.Lunes;
            case 1:
                return DiaSemana.Martes;
            case 2:
                return DiaSemana.Miércoles;
            case 3:
                return DiaSemana.Jueves;
            case 4:
                return DiaSemana.Viernes;
            case 5:
                return DiaSemana.Sábado;
            default:
                throw new Error("Fecha inválida");
        }
    };
    PicoYPlacaPredictor.prototype.esFeriado = function (fecha) {
        // Verificar si la fecha dada coincide con alguna fecha feriada
        var fechaSinTiempo = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        return this.feriados.some(function (feriado) {
            var feriadoSinTiempo = new Date(feriado.getFullYear(), feriado.getMonth(), feriado.getDate());
            return feriadoSinTiempo.getTime() === fechaSinTiempo.getTime();
        });
    };
    PicoYPlacaPredictor.prototype.puedeCircular = function (placa, fecha, hora) {
        var dia = this.obtenerDiaSemana(fecha);
        var ultimoDigitoPlaca = parseInt(placa[placa.length - 1]);
        // Verificar si la fecha es un día feriado
        if (this.esFeriado(fecha)) {
            return true;
        }
        // Verificar si el día y el último dígito de la placa cumplen con las restricciones
        if (this.restricciones[dia].includes(ultimoDigitoPlaca)) {
            // Verificar la hora (si es entre 6:00 y 9:30 o entre 16:00 y 21:00)
            if ((hora >= 600 && hora <= 930) || (hora >= 1600 && hora <= 2100)) {
                return false; // No puede circular
            }
        }
        return true; // Puede circular
    };
    return PicoYPlacaPredictor;
}());
/*
// verificacion
const predictor = new PicoYPlacaPredictor();
const placaVehiculo = "ABC154";
const fecha = new Date("2024-02-20");
const hora = 830;

const puedeCircular = predictor.puedeCircular(placaVehiculo, fecha, hora);

if (puedeCircular) {
    console.log("El vehículo puede circular hoy a esta hora.");
} else {
    console.log("El vehículo NO puede circular hoy a esta hora.");
}
*/
const form = document.getElementById('predictionForm');
        const resultadoDiv = document.getElementById('result');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const placa = form.plateNumber.value.toUpperCase();
            const fecha = new Date(form.date.value);
            const horaString = form.hour.value;
            const hora = parseInt(horaString.substring(0, 2) + horaString.substring(3)); // Convertir hora a un número entero

            const predictor = new PicoYPlacaPredictor();
            const puedeCircular = predictor.puedeCircular(placa, fecha, hora);

            if (puedeCircular) {
                resultadoDiv.textContent = "El vehículo puede circular en esa fecha y hora.";
                resultadoDiv.style.color = "green";
            } else {
                resultadoDiv.textContent = "El vehículo NO puede circular en esa fecha y hora.";
                resultadoDiv.style.color = "red";
            }
        });
