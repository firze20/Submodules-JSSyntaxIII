interface INetwork {
    _users: number;
    _data: number;
}

class NetworkTS implements INetwork {
    _users: number;
    _data: number;

    constructor(data: number, users: number) {
        this._data = data;
        this._users = users
    }

    public movieTime(): boolean {
        const dataPerUser = 5 * this._users; //numero de users elevado a 5
        const remainingData = this._data - dataPerUser;
        return remainingData >= 10 ? true : false;
    }
}

const test2 = new NetworkTS(20, 2);

console.log(test2.movieTime());