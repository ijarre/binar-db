class Suwit {
  constructor(pemain, computer) {
    this.pemain = pemain;
    this.computer = computer;
  }

  mainkan() {
    if (this.computer == `${this.pemain}-lawan`) {
      return "DRAW";
    } else if (this.pemain == "batu") {
      switch (this.computer) {
        case "gunting-lawan":
          return "PLAYER 1 WIN";
          break;
        case "kertas-lawan":
          return "COM WIN";
          break;
      }
    } else if (this.pemain == "kertas") {
      switch (this.computer) {
        case "batu-lawan":
          return "PLAYER 1 WIN";
          break;
        case "gunting-lawan":
          return "COM WIN";
          break;
      }
    } else {
      switch (this.computer) {
        case "kertas-lawan":
          return "PLAYER 1 WIN";
          break;
        case "batu-lawan":
          return "COM WIN";
          break;
      }
    }
  }
}

export default Suwit;
