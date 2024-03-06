class TheoricalSegment {
    constructor (startingHour, exitHour, isWorkingDay){
        this._startingHour = startingHour;
        this._exitHour = exitHour;
        this._isWorkingDay = isWorkingDay;
    }

    get startingHour(){
        return this._startingHour;
    }
    set startingHour(startingHour){
        this._startingHour = startingHour;
    }

    get exitHour(){
        return this._exitHour;
    }
    set exitHour(exitHour){
        this._exitHour = exitHour;
    }

    get isWorkingDay(){
        return this.isWorkingDay;
    }
    set isWorkingDay(isWorkingDay){
        this._isWorkingDay = isWorkingDay;
    }

}

module.exports = TheoricalSegment;