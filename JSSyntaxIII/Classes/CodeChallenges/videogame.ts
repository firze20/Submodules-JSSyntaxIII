interface IVideoGame {
    _name: string;
    _hitsPerMinute: number;
}

class PlayerTS implements IVideoGame {
    _name: string;
    _hitsPerMinute: number;
    _ballons: number;

    constructor(name: string, hitsPerMinute: number) {
        this._name = name;
        this._hitsPerMinute = hitsPerMinute;
        this._ballons = 100;
    }

    public get name(): string {
        return this._name;
    }

    public get histPerMinute(): number {
        return this._hitsPerMinute;
    }

    public status(): void {
        console.log(`Player: ${this._name} -- Balllons Left: ${this._ballons}`);
    }
}

function ballonAttack(p1: PlayerTS, p2: PlayerTS): string {
    const p1BallonsLeft = p1.histPerMinute - p2.histPerMinute;
    const p2BallonsLeft = p2.histPerMinute - p1.histPerMinute;

    if(p1BallonsLeft > p2BallonsLeft) {
        return `The winner is ${p1.name} with ${p1BallonsLeft} left!`;
    }

    else if(p1BallonsLeft === p2BallonsLeft) {
        return `Both players draw, nobody wins.`;
    }

    else {
        return `The winner is ${p2.name} with ${p2BallonsLeft} left!`;
    }
}

const player1 = new PlayerTS('Pedro', 70);

const player2 = new PlayerTS('Filipe', 75);

console.log(ballonAttack(player1, player2));



