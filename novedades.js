class Novedades {
    constructor(legajo, nombre, fecha, unidadDeMedida, cantidad){
        this._legajo = legajo;
        this._nombre = nombre;
        this._fecha = fecha;
        this._unidadDeMedida = unidadDeMedida;
        this._cantidad = cantidad;
    }

    // Getter para el ID
    get legajo() {
        return this._legajo;
    }

    // Setter para el ID
    set legajo(newId) {
        this._legajo = newId;
    }

    // Getter para el nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para el nombre
    set nombre(newNombre) {
        this._nombre = newNombre;
    }

    // Getter para la fecha
    get fecha() {
        return this._fecha;
    }

    // Setter para la fecha
    set fecha(newFecha) {
        this._fecha = newFecha;
    }

    // Getter para la unidad de medida
    get unidadDeMedida() {
        return this._unidadDeMedida;
    }

    // Setter para la unidad de medida
    set unidadDeMedida(newUnidadDeMedida) {
        this._unidadDeMedida = newUnidadDeMedida;
    }

    // Getter para la cantidad
    get cantidad() {
        return this._cantidad;
    }

    // Setter para la cantidad
    set cantidad(newCantidad) {
        this._cantidad = newCantidad;
    }
}

module.exports = Novedades;