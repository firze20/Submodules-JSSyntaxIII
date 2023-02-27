class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
   
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
  }

function balloonAttack(p1, p2) {
    const p1BallonsLeft = p1.hitsPerMinute - p2.hitsPerMinute;
    const p2BallonsLeft = p2.hitsPerMinute - p1.hitsPerMinute;

    if(p1BallonsLeft > p2BallonsLeft) {
        return `${p1.name}`;
    }

    else if(p1BallonsLeft === p2BallonsLeft) {
        return `Tie`;
    }

    else {
        return `${p2.name}`;
    }
}

const peter = new Player('Peter', 50);

const michael = new Player('Michael', 40);

console.log(balloonAttack(peter, michael));



