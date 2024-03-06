class Empleado {
    constructor (id, firstName, lastName){
        this._id = id;
        this._firsName = firstName;
        this._lastName = lastName;
    }

    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }

    get firstName(){
        return this._firsName;
    }
    set firstName(firstName){
        this._firsName = firstName;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }

}

module.exports = Empleado;

console.log(module.exports);