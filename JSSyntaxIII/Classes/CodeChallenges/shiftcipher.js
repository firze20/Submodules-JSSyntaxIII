const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

class ShiftCipher {
    constructor(num) {
        this._num = num;
    }

    encrypt(message) {
        //store every word in array with upperCASE
        const messageArray = message.toLocaleUpperCase().split("");
        //array to store indexes
        const numIndexes = [];
        //forEach 
        messageArray.forEach((letter) =>
           //push index of the letters to the array if it finds include method
           alphabet.includes(letter) ? numIndexes.push(alphabet.indexOf(letter)) : numIndexes.push(letter)
        );

        //array of the encrypted message
        const cryptedMessage = [];

        numIndexes.forEach(indexNum => 
            cryptedMessage.push(this._forWardLetter(indexNum))
        );

        return cryptedMessage.join("");
    }

    decrypt(message) {
        //store every word in array with upperCASE
        const messageArray = message.toLocaleUpperCase().split("");
        //array to store indexes
        const numIndexes = [];
        //forEach 
        messageArray.forEach((letter) =>
           //push index of the letters to the array if it finds include method
           alphabet.includes(letter) ? numIndexes.push(alphabet.indexOf(letter)) : numIndexes.push(letter)
        );

        //array of the encrypted message
        const cryptedMessage = [];

        numIndexes.forEach(indexNum => 
            cryptedMessage.push(this._backWardLetter(indexNum))
        );

        return cryptedMessage.join("").toLowerCase();
    }

    _forWardLetter(letterOrIndex) {
        const alphabeth2betLength = alphabet.length-1;

        if(typeof letterOrIndex === "string") {
            return letterOrIndex
        }
        else {
            if((letterOrIndex + this._num) > alphabeth2betLength) {
                const result = (letterOrIndex + this._num) - alphabeth2betLength;
                return alphabet[result-1];
            }

            return alphabet[letterOrIndex + this._num];
        }
    }

    _backWardLetter(letterOrIndex) {
        const alphabeth2betLength = alphabet.length-1;

        if(typeof letterOrIndex === "string") {
            return letterOrIndex
        }
        else {
            if((letterOrIndex - this._num) < 0) {
                const result = (letterOrIndex - this._num) + alphabeth2betLength;
                console.log(result);
                return alphabet[result+1];
            }

            return alphabet[letterOrIndex - this._num];
        }
    }
}

const cipher2 = new ShiftCipher(2);

console.log(cipher2.encrypt('I love to code!'));
console.log(cipher2.decrypt('K NQXG VQ EQFG!'));