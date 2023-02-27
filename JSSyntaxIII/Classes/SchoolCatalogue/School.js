class School {
    constructor(name, level) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = 0;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get getNumberOfStudents() {
        return this._numberOfStudents;
    }
    
    set setNumberOfStudents(newNumberOfStudents) {
        if(typeof newNumberOfStudents === "number") {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log("Invalid input: numberOfStudents must be set to a Number.");
        }
    }

    quickFacts() {
        return `${this.name} educates ${this.getNumberOfStudents} at the ${this.level} school level.`;
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const random = Math.floor(Math.random() * (substituteTeachers.length - 0));
        return substituteTeachers[random];
    }
}

class PrimarySchool extends School {
    constructor(name, pickupPolicy) {
        super(name, "primary");
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name) {
        super(name, "middle");
    }
}

class HighSchool extends School {
    constructor(name, sportsTeam) {
        super(name, "high");
        this._sportsTeam = sportsTeam;
    }

    get sportsTeam() {
        return this._sportsTeam;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.setNumberOfStudents = 514;

console.log(lorraineHansbury.getNumberOfStudents);

console.log(lorraineHansbury.quickFacts());

// calling static method 
console.log(PrimarySchool.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.setNumberOfStudents = 415;

console.log(alSmith.sportsTeam);



