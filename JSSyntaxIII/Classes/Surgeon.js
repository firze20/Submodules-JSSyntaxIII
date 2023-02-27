class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    //getter for the name
    get name() {
        return this._name;
    }

    //getter for the department
    get department() {
        return this._department;
    }

    //getter
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    //method
    takeVacationDays(daysOff) {
        this._remainingVacationDays-= daysOff;
    }


}

// New Object SurgeonRomero
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

//New Object surgeonJackson
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name);

surgeonRomero.takeVacationDays(3);

console.log(surgeonRomero.remainingVacationDays);



