class MilitaryUnit {
  static count = 0;
  constructor() {
    this.id = ++MilitaryUnit.count;
  }
}

class PexotaBase extends MilitaryUnit {} // 3

class KavaleriaBase extends MilitaryUnit {} //5

class ArtileriaBase extends MilitaryUnit {} // 2

class NotFareGameException extends Error {
  constructor() {
    super("This game is not fare!!!");
  }
}

class GameEngine {
  constructor() {
    this._registeredCountriesNames = [];
    this._registeredCountriesUnitsFactory = [];
    this._firstPlayerCountry = "";
    this._secondPlayerCountry = "";

    this.player1Pexotas = [];
    this.player2Pexotas = [];

    this.player1Kavalerias = [];
    this.player2Kavalerias = [];

    this.player1Artilerias = [];
    this.player2Artilerias = [];
  }

  registerContry(countryUnitsFactory) {
    this._registeredCountriesNames.push(countryUnitsFactory.country);
    this._registeredCountriesUnitsFactory.push(countryUnitsFactory);
  }

  getCountries() {
    return this._registeredCountriesNames;
  }

  setFirstPlayerCountry(countryName) {
    this._firstPlayerCountry = countryName;
  }

  setSecondPlayerCountry(countryName) {
    this._secondPlayerCountry = countryName;
  }

  _validateGame() {
    if (!this._firstPlayerCountry) {
      throw new Error("For player1 no country selected");
    }

    if (!this._secondPlayerCountry) {
      throw new Error("For player2 no country selected");
    }

    if (this.player1Pexotas.length !== 3) {
      throw new NotFareGameException();
    }

    if (this.player2Pexotas.length !== 3) {
      throw new NotFareGameException();
    }

    if (this.player1Kavalerias.length !== 5) {
      throw new NotFareGameException();
    }

    if (this.player2Kavalerias.length !== 5) {
      throw new NotFareGameException();
    }

    if (this.player1Artilerias.length !== 2) {
      throw new NotFareGameException();
    }

    if (this.player2Artilerias.length !== 2) {
      throw new NotFareGameException();
    }
  }

  _createInitialUnits() {
    throw new Error("_createInitialUnits method is not implemented");
  }

  startGame() {
    try {
      console.log("GAME STARTED");
      console.log(
        `-----------${this._firstPlayerCountry} VS ${this._secondPlayerCountry}----------`
      );
      this._createInitialUnits();
      this._validateGame();
    } catch (error) {
      console.log("GAME FINISHED, because: ", error.message);
    }
  }
}

const gameEngine = new GameEngine();

export { gameEngine, PexotaBase, KavaleriaBase, ArtileriaBase };
