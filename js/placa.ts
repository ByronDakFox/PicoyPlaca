enum DiaSemana {
    Lunes,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}

class PicoYPlacaPredictor {
    private restricciones: Record<DiaSemana, number[]>;
    private feriados: Date[];

    constructor() {
        this.restricciones = {
            [DiaSemana.Lunes]: [1, 2],
            [DiaSemana.Martes]: [3, 4],
            [DiaSemana.Miércoles]: [5, 6],
            [DiaSemana.Jueves]: [7, 8],
            [DiaSemana.Viernes]: [9, 0],
            [DiaSemana.Sábado]: [],
            [DiaSemana.Domingo]: []
        };
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
            new Date("2024-12-25")  // Navidad
        ];
    }
   // días según las regulaciones 
    private obtenerDiaSemana(fecha: Date): DiaSemana {
        const dia = fecha.getDay();
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
    }

    private esFeriado(fecha: Date): boolean {
        // Verificar si la fecha dada coincide con alguna fecha feriada
        const fechaSinTiempo = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        return this.feriados.some(feriado => {
            const feriadoSinTiempo = new Date(feriado.getFullYear(), feriado.getMonth(), feriado.getDate());
            return feriadoSinTiempo.getTime() === fechaSinTiempo.getTime();
        });
    }

    public puedeCircular(placa: string, fecha: Date, hora: number): boolean {
        const dia = this.obtenerDiaSemana(fecha);
        const ultimoDigitoPlaca = parseInt(placa[placa.length - 1]);

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
    }
}

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

document.getElementById("predictionForm")!.addEventListener("submit", function(event) {
    event.preventDefault();

    const plateNumber = (document.getElementById("plateNumber") as HTMLInputElement).value;
    const date = new Date((document.getElementById("date") as HTMLInputElement).value);
    const horaInput = document.getElementById("hour") as HTMLInputElement;
    const horaString = horaInput.value;
    const hour = parseInt(horaString.split(":")[0]);
    const predictor = new PicoYPlacaPredictor();

    const puedeCircular = predictor.puedeCircular(plateNumber, date, hour);
    const resultElement = document.getElementById("result");

    if (puedeCircular) {
        resultElement!.innerText = "Puede circular";
        resultElement!.style.color = "green";
    } else {
        resultElement!.innerText = "No puede circular";
        resultElement!.style.color = "red";
    }
});