interface IMedia {
    _title: string;
    _isCheckedOut: boolean;
    _ratings: number[];
    getAverageRating(): number; // returns average rating
    toggleCheckOutStatus(status: boolean): void; // sets check to true or false
    addRating(rating: number): void; // 
}

interface IBook {
    _author: string;
    _pages: number;
}

interface IMovie {
    _director: string;
    _runTime: number;
}

interface ICd {
    _artist: string;
    _songs: string[];
}

// Parent Class
class MediaTS implements IMedia {
    _title: string;
    _isCheckedOut: boolean;
    _ratings: number[];
    constructor(title: string) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    public get title (): string {
        return this._title
    }

    public get isCheckedOut (): boolean {
        return this._isCheckedOut
    }

    public get ratings (): number[] {
        return this._ratings;
    }

    public getAverageRating(): number {
        const _length = this._ratings.length;
        let sum = 0;
        this._ratings.forEach(rating => {
            sum+= rating;
        });
        const average = sum / _length;
        return average;
    }

    public addRating (rating: number): void {
        this._ratings.push(rating);
    }

    public toggleCheckOutStatus (status: boolean): void {
        this._isCheckedOut = status;
    }
}

//SubClasses

class BookTS extends MediaTS implements IBook {
    _author: string;
    _pages: number;
    constructor(title: string, author: string, pages: number) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    public get author(): string {
        return this._author;
    }

    public get pages(): number {
        return this._pages;
    }

}

class MovieTS extends MediaTS implements IMovie {
    _director: string;
    _runTime: number;
    constructor(title: string, director: string, runTime: number) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    public get director(): string {
        return this._director;
    }

    public get runTime(): number {
        return this._runTime;
    }
}

class CDTS extends MediaTS implements ICd {
    _artist: string;
    _songs: string[];
    constructor(title: string, artist: string, songs: string[]) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    public get artist(): string {
        return this._artist;
    }

    public get songs(): string[] {
        return this._songs;
    }
}

const harryPotter = new BookTS("Harry Potter and the Philosopher's Stone", "J.K. ROWLING", 230);

const halloWeen = new MovieTS("Halloween kills", "John Carpenter", 90);

const quimBarreiros = new CDTS("Chupa Teresa", "Quim Barreiros", ["O Sorvateiro", "Vou-te Procurar", "Os Amores que tive", "Bochecha Inchada", "Bicho de Pé"]);

//Ratings
harryPotter.addRating(4);
harryPotter.addRating(5);
harryPotter.addRating(1);

halloWeen.addRating(2);
halloWeen.addRating(4);
halloWeen.addRating(2);

quimBarreiros.addRating(1);
quimBarreiros.addRating(3);
quimBarreiros.addRating(2);

//--Ratings

//STATUS 

harryPotter.toggleCheckOutStatus(true);
halloWeen.toggleCheckOutStatus(true);
quimBarreiros.toggleCheckOutStatus(false);

//GET TITLES
console.log(harryPotter.title);
console.log(halloWeen.title);
console.log(quimBarreiros.title);

//--GET TITLES

// CHECK OUT
console.log(harryPotter.isCheckedOut);
console.log(halloWeen.isCheckedOut);
console.log(quimBarreiros.isCheckedOut);
//--CHECK OUT

//RATINGS
console.log(harryPotter.ratings);
console.log(halloWeen.ratings);
console.log(quimBarreiros.ratings);
//--RATINGS


console.log(harryPotter.getAverageRating());
console.log(halloWeen.getAverageRating());
console.log(quimBarreiros.getAverageRating());


//get author and pages
console.log(harryPotter.author);
console.log(harryPotter.pages);

//get director and runtime
console.log(halloWeen.director);
console.log(halloWeen.runTime);

//get artist and sogns

console.log(quimBarreiros.artist);
console.log(quimBarreiros.songs);

console.log(harryPotter);
console.log(halloWeen);
console.log(quimBarreiros);