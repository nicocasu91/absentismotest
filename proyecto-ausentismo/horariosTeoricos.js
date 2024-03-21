class HorarioTeorico {
    constructor (legajo, horaInicioTeorico, horaFinTeorica, esFeriado){
        this._horaInicioTeorico = horaInicioTeorico;
        this._horaFinTeorica = horaFinTeorica;
        this._esFeriado = esFeriado;
        this._legajo = legajo;
    }

    get horaInicioTeorico(){
        return this._horaInicioReal;
    }
    set horaInicioTeorico(horaInicioTeorico){
        this._horaInicioReal = horaInicioTeorico;
    }

    get horaFinTeorica(){
        return this._horaFinTeorica;
    }
    set horaFinTeorica(horaFinTeorica){
        this._horaFinTeorica = horaFinTeorica;
    }

    get esFeriado(){
        return this.esFeriado;
    }
    set esFeriado(esFeriado){
        this._esFeriado = esFeriado;
    }
        // Getter para el ID
        get legajo() {
            return this._legajo;
        }
    
        // Setter para el ID
        set legajo(newId) {
            this._legajo = newId;
        }

}

module.exports = HorarioTeorico;