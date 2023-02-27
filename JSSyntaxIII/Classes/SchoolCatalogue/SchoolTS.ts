interface ISchool {
    _name: string;
    _level: "primary" | "middle" | "high";
    _numberOfStudents: number;
}

interface IPrimarySchool {
    _pickupPolicy: string;
}

interface IHighSchool {
    _sportsTeam: string[];
}

class SchoolTS implements ISchool {
    _name: string;
    _level: "primary" | "middle" | "high";
    _numberOfStudents: number;
    constructor(name: string, level: "primary" | "middle" | "high") {
        this._name = name;
        this._level = level;
        this._numberOfStudents = 0;
    }

    public get name(): string {
        return this._name
    }

    public get level(): string {
        return this._level;
    }

    public get getNumberOfStudents(): number {
        return this._numberOfStudents;
    }

    public set setNumberOfStudents(newNumberOfStudents: number) {
        this._numberOfStudents = newNumberOfStudents;
    }

    public quickFacts(): string {
        return `${this.name} educates ${this.getNumberOfStudents} at the ${this.level} school level.`;
    }

    public static pickSubstituteTeacher(substituteTeachers: string[]): string {
        const random = Math.floor(Math.random() * (substituteTeachers.length - 0));
        return substituteTeachers[random];
    }
}

class PrimarySchoolTS extends SchoolTS implements IPrimarySchool {
    _pickupPolicy: string;
    constructor(name: string, pickupPolicy: string) {
        super(name, "primary");
        this._pickupPolicy = pickupPolicy;
    }

    public get pickupPolicy(): string {
        return this._pickupPolicy
    }
}

class MiddleTS extends SchoolTS {
    constructor(name: string) {
        super(name, "middle");
    }
}

class HighTS extends SchoolTS implements IHighSchool {
    _sportsTeam: string[];
    constructor(name: string, sportsTeam: string[]) {
        super(name, "high");
        this._sportsTeam = sportsTeam;
    }

    public get sportsTeam(): string[] {
        return this._sportsTeam;
    }
}

const lorraineHansbury_ts = new PrimarySchoolTS('Lorraine Hansbury', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury_ts.setNumberOfStudents = 514; // call a setter

console.log(lorraineHansbury_ts.quickFacts());

// calling static method 
console.log(PrimarySchoolTS.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighTS('Al E. Smith', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.setNumberOfStudents = 415;

console.log(alSmith.sportsTeam);