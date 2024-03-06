

class TimeManagement {
    constructor(legajo, fecha, horaInicioTeorico, horaFinTeorico, horaInicioReal, horaFinReal, novedades) {
        this._legajo = legajo;
        this._fecha = fecha;
        this._horaInicioTeorico = horaInicioTeorico;
        this._horaFinTeorico = horaFinTeorico;
        this._horaInicioReal = horaInicioReal;
        this._horaFinReal = horaFinReal;
        this._novedades = novedades;
    }

    // Getters y setters para legajo
    get legajo() {
        return this._legajo;
    }
    set legajo(value) {
        this._legajo = value;
    }

    // Getters y setters para fecha
    get fecha() {
        return this._fecha;
    }
    set fecha(value) {
        this._fecha = value;
    }

    // Getters y setters para horaInicioTeorico
    get horaInicioTeorico() {
        return this._horaInicioTeorico;
    }
    set horaInicioTeorico(value) {
        this._horaInicioTeorico = value;
    }

    // Getters y setters para horaFinTeorico
    get horaFinTeorico() {
        return this._horaFinTeorico;
    }
    set horaFinTeorico(value) {
        this._horaFinTeorico = value;
    }

    // Getters y setters para horaInicioReal
    get horaInicioReal() {
        return this._horaInicioReal;
    }
    set horaInicioReal(value) {
        this._horaInicioReal = value;
    }

    // Getters y setters para horaFinReal
    get horaFinReal() {
        return this._horaFinReal;
    }
    set horaFinReal(value) {
        this._horaFinReal = value;
    }

    // Getters y setters para novedades
    get novedades() {
        return this._novedades;
    }
    set novedades(value) {
        this._novedades = value;
    }

    asginarLegajo(legajo){
        this.legajo = legajo;
    }

    asignarNovedades(novedades) {
        this.novedades = novedades;
    }

    asignarHorarioTeorico(horaInicioTeorico, horaFinTeorico){
        this.horaInicioTeorico = horaInicioTeorico;
        this.horaFinTeorico = horaFinTeorico;
    }

    asignarHorarioReal(horaInicioReal, horaFinReal){
        this.horaInicioReal = horaInicioReal;
        this.horaFinReal = horaFinReal;
    }
}


module.exports = TimeManagement;