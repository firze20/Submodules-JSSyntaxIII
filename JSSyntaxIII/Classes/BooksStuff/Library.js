class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        const _length = this._ratings.length;
        let sum = 0;
        this._ratings.forEach(rating => {
            sum+= rating;
        });
        const average = sum / _length;
        return average;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }

    toggleCheckOutStatus(status) {
        this._isCheckedOut = status;
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}

const harryPotter2 = new Book("Harry Potter and the Philosopher's Stone", "J.K. ROWLING", 230);

const halloween2 = new Movie("halloween2 kills", "John Carpenter", 90);

const chupaTeresa = new CD("Chupa Teresa", "Quim Barreiros", ["O Sorvateiro", "Vou-te Procurar", "Os Amores que tive", "Bochecha Inchada", "Bicho de Pé"]);

//Ratings
harryPotter2.addRating(4);
harryPotter2.addRating(5);
harryPotter2.addRating(1);

halloween2.addRating(2);
halloween2.addRating(4);
halloween2.addRating(2);

chupaTeresa.addRating(1);
chupaTeresa.addRating(3);
chupaTeresa.addRating(2);

//--Ratings

//STATUS 

harryPotter2.toggleCheckOutStatus(true);
halloween2.toggleCheckOutStatus(true);
chupaTeresa.toggleCheckOutStatus(false);

//GET TITLES
console.log(harryPotter2.title);
console.log(halloween2.title);
console.log(chupaTeresa.title);

//--GET TITLES

// CHECK OUT
console.log(harryPotter2.isCheckedOut);
console.log(halloween2.isCheckedOut);
console.log(chupaTeresa.isCheckedOut);
//--CHECK OUT

//RATINGS
console.log(harryPotter2.ratings);
console.log(halloween2.ratings);
console.log(chupaTeresa.ratings);
//--RATINGS


console.log(harryPotter2.getAverageRating());
console.log(halloween2.getAverageRating());
console.log(chupaTeresa.getAverageRating());


//get author and pages
console.log(harryPotter2.author);
console.log(harryPotter2.pages);

//get director and runtime
console.log(halloween2.director);
console.log(halloween2.runTime);

//get artist and sogns

console.log(chupaTeresa.artist);
console.log(chupaTeresa.songs);

console.log(harryPotter2);
console.log(halloween2);
console.log(chupaTeresa);