//interface
interface IHospitalEmployee {
    _name: string;
    _remainingVacationDays: number;
    takeVacationDays(daysOff: number): void; 
}

interface INurse {
    _certifications: string[];
}

interface IDoctor {
    _insurance: string;
}

//Parent Class Implementing interface 

class HospitalEmployeeTS implements IHospitalEmployee {
    _name: string;
    _remainingVacationDays: number;
    constructor(name: string) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    public get name(): string {
        return this._name;
    }

    public get remainingVacationDays(): number {
        return this._remainingVacationDays;
    }

    public takeVacationDays(daysOff: number): void {
        this._remainingVacationDays -= daysOff;
    }

    public static generatePassword(): number {
        return Math.floor(Math.random() * (10000 - 0));
    }
}

// Sub Classes

class NurseTS extends HospitalEmployeeTS implements INurse {
    _certifications: string[];
    constructor(name: string, certifications: string[]) { 
        super(name);
        this._certifications = certifications; //property that parent class doesn't contain
    }

    get certifications (): string[] {
        return this._certifications;
    }

    public addCertification(newCertification: string): void {
        this._certifications.push(newCertification);
    }
}

class DoctorTS extends HospitalEmployeeTS implements IDoctor {
    _insurance: string;
    constructor(name: string, insurance: string) {
        super(name);
        this._insurance = insurance;
    }
}

const nurseOlynykTS = new NurseTS('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynykTS.takeVacationDays(5);

console.log(nurseOlynykTS.remainingVacationDays);

nurseOlynykTS.addCertification('Genetics');

console.log(nurseOlynykTS.certifications); 

console.log(HospitalEmployeeTS.generatePassword()); //Calling Static Method

// DOCTOR class

const doctor_Peter = new DoctorTS('Peter', 'none');

console.log(doctor_Peter);

doctor_Peter.takeVacationDays(10);

console.log(doctor_Peter._remainingVacationDays);




