class HorariosReales {
    constructor(fecha, horarioInicioReal, horarioFinReal) {
        this._fecha = fecha;
        this._horarioInicioReal = horarioInicioReal;
        this._horarioFinReal = horarioFinReal;
    }

    // Getter y setter para la propiedad fecha
    get fecha() {
        return this._fecha;
    }
    set fecha(value) {
        this._fecha = value;
    }

    // Getter y setter para la propiedad horarioInicioReal
    get horarioInicioReal() {
        return this._horarioInicioReal;
    }
    set horarioInicioReal(value) {
        this._horarioInicioReal = value;
    }

    // Getter y setter para la propiedad horarioFinReal
    get horarioFinReal() {
        return this._horarioFinReal;
    }
    set horarioFinReal(value) {
        this._horarioFinReal = value;
    }
}

module.exports = HorariosReales;