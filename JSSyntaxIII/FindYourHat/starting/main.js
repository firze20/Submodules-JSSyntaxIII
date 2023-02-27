const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    currentState() {
        //joining each element and then seperating ("\r\n") to make a new line
        const currentState = this.field.map(e => e.join('')).join('\r\n');
        console.log(currentState);
        this.playGame();
    }

    //getter property
    get field() {
        return this._field;
    }

    set field(field) {
        this._field = field;
    }

    #movingUpward() {
        const playerPosition = this.#currentPlayerPosition(this.field);
        const line = playerPosition[0];
        const column = playerPosition[1];

        if(line-1 < 0) {
            console.log("You can't move upwards you are the edge!");
            this.currentState();
        }

        else {
            if(this.field[line-1][column] !== fieldCharacter) {
                if(this.field[line-1][column] === hat) {
                    console.log('You won the game! Congrats here is your hat ^');
                }
                else {
                    console.log("Game Over! You fell into a hole x( ");
                }
            }
            else {
                this._field[line-1][column] = pathCharacter;
                this._field[line][column] = fieldCharacter;
                this.currentState();
            }
        }
    }

    #movingDownward() {
        const playerPosition = this.#currentPlayerPosition(this.field);
        const line = playerPosition[0];
        const column = playerPosition[1];

        if(line+1 >= this.field.length) {
            console.log("You can't move downwards you are at the edge!");
            this.currentState();
        }

        else {
            if(this.field[line+1][column] !== fieldCharacter) {
                if(this.field[line+1][column] === hat) {
                    console.log('You won the game! Congrats here is your hat ^');
                }
                else {
                    console.log("Game Over! You fell into a hole x( ");
                }
            }

            else {
                this._field[line+1][column] = pathCharacter;
                this._field[line][column] = fieldCharacter;
                this.currentState();
            }
        }

    }

    #movingLeft() {
        const playerPosition = this.#currentPlayerPosition(this.field);
        const line = playerPosition[0];
        const column = playerPosition[1];

        if(column-1 < 0) {
            console.log("You can't move left you are at the edge!");
            this.currentState();
        }

        else {
            if(this.field[line][column-1] !== fieldCharacter) {
                if(this.field[line][column-1] === hat) {
                    console.log('You won the game! Congrats here is your hat ^');
                }
                else {
                    console.log("Game Over! You fell into a hole x( ");
                }
            }
            else {
                this._field[line][column-1] = pathCharacter;
                this._field[line][column] = fieldCharacter;
                this.currentState();
            }
        }
    }

    #movingRight() {
        const playerPosition = this.#currentPlayerPosition(this.field);
        const line = playerPosition[0];
        const column = playerPosition[1];

        if(column+1 >= this.field[line].length) {
            console.log("You can't move downwards you are at the edge!");
            this.currentState();
        }

        else {
            if(this.field[line][column+1] !== fieldCharacter) {
                if(this.field[line][column+1] === hat) {
                    console.log('You won the game! Congrats here is your hat ^');
                }
                else {
                    console.log("Game Over! You fell into a hole x( ");
                }
            }
            else {
                this._field[line][column+1] = pathCharacter;
                this._field[line][column] = fieldCharacter;
                this.currentState();
            }
        }
    }

    // returns the current Position of the player
    #currentPlayerPosition(lines) {
        let currentPlayerPosition = -1;
        let i;
        //break the loop once finds the position
        for(i=0; i < lines.length; i++) {
            if(lines[i].indexOf(pathCharacter) > -1) {
                currentPlayerPosition = lines[i].indexOf(pathCharacter);
                break;
            }
        }
    
        return [i, currentPlayerPosition];
    }


   
    playGame() {
        let move = prompt('Which direction do you want to move to? (w for Up, s for Down, a for Left, d for Right)');
        switch(move.toLowerCase()) {
            case 'w':
                this.#movingUpward();
                break;
            case 's':
                this.#movingDownward();
                break;
            case 'a':
                this.#movingLeft();
                break;
            case 'd':
                this.#movingRight();
                break;
            default:
                'Inser either (w for Up, s for Down, a for Left, d for Right)'
                this.currentState();
                break;
        }
    }

    static generateField(height, width, percentage) {
        const fieldGenerated = [];
        const hatPositionAlt = Math.floor(Math.random() * (height - 1) +  1);
        const hatPositionLat = Math.floor(Math.random() * (width - 1) +  1);
        const areaField = height * width;
        const numberOfHoles = Math.floor((percentage * areaField) / 100 + 1);
        console.log(numberOfHoles);
        for(let lines = 0; lines <= height-1; lines++) {
            fieldGenerated.push([]);
            for(let columns=0; columns <= width-1; columns++) {
                fieldGenerated[lines].push(fieldCharacter)
            } 
        }
        let holes = 0
        do {
            let holePositionAlt = Math.floor(Math.random() * (height - 1) +  1);
            let holePositionLat = Math.floor(Math.random() * (width - 1) +  1);
            if(fieldGenerated[holePositionAlt][holePositionLat] = hole) {
                do {
                    holePositionAlt = Math.floor(Math.random() * (height - 1) +  1);
                    holePositionLat = Math.floor(Math.random() * (width - 1) +  1);
                    fieldGenerated[holePositionAlt][holePositionLat] = hole; 
                } while (fieldGenerated[holePositionAlt][holePositionLat] !== hole);
            }
            holes += 1;
        } while (holes <= numberOfHoles);
        fieldGenerated[0][0] = pathCharacter;
        //Positioning the hat in random place 
        fieldGenerated[hatPositionAlt][hatPositionLat] = hat;
        return fieldGenerated;
    }
}



/*const myField = new Field(
    [
        ['*', '░', 'O'],
        ['░', 'O', '░'],
        ['░', '^', '░'],
    ]
  );*/


//myField.playGame();

const randomField = Field.generateField(5, 5, 10);


const game = new Field(randomField);

game.playGame();











