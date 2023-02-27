class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime() {
      const dataPerUser = 5 * this.users; //numero de users elevado a 5
      const remainingData = this.data - dataPerUser;
      return remainingData >= 10 ? true : false;
    }
  }


const test = new Network(20, 2);

console.log(test.movieTime());