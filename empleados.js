class Empleado {
    constructor (legajo, nombre, apellido){
        this._legajo = legajo;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get legajo(){
        return this._legajo;
    }
    set legajo(legajo){
        this._legajo = legajo;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
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

module.exports = Empleado;

