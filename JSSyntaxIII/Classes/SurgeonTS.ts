interface ISurgeon {
    _name: string;
    _department: string;
    _remainingVacationDays: number;
}

class SurgeonTS implements ISurgeon {
    _name: string;
    _department: string;
    _remainingVacationDays: number;

    constructor(name: string, department: string) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    //getter for the name

    get name(): string {
        return this._name;
    }

    //getter for department
    get department(): string {
        return this._department;
    }

    //getter for remainingVacationDays

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff: number): void {
        this._remainingVacationDays -= daysOff;
    }
}

//New Object
const surgeonRamira = new SurgeonTS('Ramira Melona', 'Cardiovascular');

const surgeonPeter = new SurgeonTS('Peter', 'Oral');

console.log(surgeonRamira);

surgeonPeter.takeVacationDays(19);

console.log(surgeonPeter);