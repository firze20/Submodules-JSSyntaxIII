interface IShiftCipher {
    _num: number;
}

const alphabeth2 = Array.from(Array(26)).map((e, i) => i + 65);
const alphabeth2bet = alphabeth2.map((x) => String.fromCharCode(x));
console.log(alphabeth2bet);


class ShiftCipherTS implements IShiftCipher {
    _num: number;

    constructor(num: number) {
        this._num = num;
    }

    public encrypt (message: string): string {
        //store every word in array with upperCASE
        const messageArray = message.toLocaleUpperCase().split("");
        //array to store indexes
        const numIndexes: any[] = [];
        //forEach 
        messageArray.forEach((letter) =>
           //push index of the letters to the array if it finds include method
           alphabeth2bet.includes(letter) ? numIndexes.push(alphabeth2bet.indexOf(letter)) : numIndexes.push(letter)
        );

        //array of the encrypted message
        const cryptedMessage: string[] = [];

        numIndexes.forEach(indexNum => 
            cryptedMessage.push(this._forWardLetter(indexNum))
        );

        return cryptedMessage.join("");

    }

    public decrypt (message: string) : string {
        //store every word in array with upperCASE
        const messageArray = message.toLocaleUpperCase().split("");
        //array to store indexes
        const numIndexes: any[] = [];
        //forEach 
        messageArray.forEach((letter) =>
           //push index of the letters to the array if it finds include method
           alphabeth2bet.includes(letter) ? numIndexes.push(alphabeth2bet.indexOf(letter)) : numIndexes.push(letter)
        );

        //array of the encrypted message
        const cryptedMessage: string[] = [];

        numIndexes.forEach(indexNum => 
            cryptedMessage.push(this._backWardLetter(indexNum))
        );

        return cryptedMessage.join("").toLowerCase();
    }

    private _forWardLetter (letterOrIndex: number | string): string {

        const alphabeth2betLength = alphabeth2bet.length-1;

        if(typeof letterOrIndex === "string") {
            return letterOrIndex
        }
        else {
            if((letterOrIndex + this._num) > alphabeth2betLength) {
                const result = (letterOrIndex + this._num) - alphabeth2betLength;
                return alphabeth2bet[result-1];
            }

            return alphabeth2bet[letterOrIndex + this._num];
        }
    }

    private _backWardLetter (letterOrIndex: number | string): string {

        const alphabeth2betLength = alphabeth2bet.length-1;

        if(typeof letterOrIndex === "string") {
            return letterOrIndex
        }
        else {
            if((letterOrIndex - this._num) < 0) {
                const result = (letterOrIndex - this._num) + alphabeth2betLength;
                console.log(result);
                return alphabeth2bet[result+1];
            }

            return alphabeth2bet[letterOrIndex - this._num];
        }
    }
}

const cipher = new ShiftCipherTS(3);

console.log(cipher.encrypt('I love to code!'));
console.log(cipher.decrypt('M PSZI XS ASHI!'));