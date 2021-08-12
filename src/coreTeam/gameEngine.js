class MilitaryUnit {
  static count = 0;
  constructor() {
    this.id = ++MilitaryUnit.count;
  }
}

class PexotaBase extends MilitaryUnit {} // 3

class KavaleriaBase extends MilitaryUnit {} //5

class ArtileriaBase extends MilitaryUnit {} // 2

// Our abstract factory which should be implemented by all country teams(mandatory)
// all methods should be implemented.
class MilitaryUnitsFactory {
  constructor(countryName) {
    if (!countryName) {
      throw new Error("Country name should be provided");
    }
    this.countryName = countryName;

    if (this.constructor.name === "MilitaryUnitsFactory") {
      throw new TypeError(
        "You can't create object from abstract MilitaryUnitsFactory"
      );
    }

    const proto = Object.getPrototypeOf(this);
    const superProto = MilitaryUnitsFactory.prototype;
    const childMethodNames = Object.getOwnPropertyNames(proto);

    const missingMethodName = Object.getOwnPropertyNames(superProto).find(
      (name) => {
        return !childMethodNames.includes(name);
      }
    );

    if (missingMethodName) {
      throw new TypeError(
        `Your class ${this.countryName} didn't implement ${missingMethodName} method!!! Please provide`
      );
    }
  }

  createPexota() {}

  createKavaleria() {}

  createArtileria() {}
}
class NotFareGameException extends Error {
  constructor() {
    super("This game is not fare!!!");
  }
}

class GameEngine {
  constructor() {
    this._militaryUnitsFactories = [];
    this._numberOfPexota = 3;
    this._numberOfKavaleria = 5;
    this._numberOfArtileria = 2;

    // this._registeredCountriesNames = [];
    // this._registeredCountriesUnitsFactory = [];
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
    throw new Error(
      "Don't use 'registerContry' method, use 'registerMilitraryUnitsFactory'!!!"
    );
  }

  registerMilitraryUnitsFactory(factory) {
    if (!factory?.countryName) {
      throw new Error("No Valid country provided!");
    }

    this._militaryUnitsFactories.push(factory);
  }

  getCountries() {
    // return this._registeredCountriesNames;
    return this._militaryUnitsFactories;
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

    if (this.player1Pexotas.length !== this._numberOfPexota) {
      throw new NotFareGameException();
    }

    if (this.player2Pexotas.length !== this._numberOfPexota) {
      throw new NotFareGameException();
    }

    if (this.player1Kavalerias.length !== this._numberOfKavaleria) {
      throw new NotFareGameException();
    }

    if (this.player2Kavalerias.length !== this._numberOfKavaleria) {
      throw new NotFareGameException();
    }

    if (this.player1Artilerias.length !== this._numberOfArtileria) {
      throw new NotFareGameException();
    }

    if (this.player2Artilerias.length !== this._numberOfArtileria) {
      throw new NotFareGameException();
    }
  }

  createUnits(pexotaArray, kavaleriaArray, artileriaArray, unitsFactory) {
    for (let i = 0; i < this._numberOfPexota; i++) {
      pexotaArray.push(unitsFactory.createPexota());
    }
    for (let i = 0; i < this._numberOfKavaleria; i++) {
      kavaleriaArray.push(unitsFactory.createKavaleria());
    }
    for (let i = 0; i < this._numberOfArtileria; i++) {
      artileriaArray.push(unitsFactory.createKavaleria());
    }
  }

  createInitialUnits() {
    const player1UnitsFactory = this._militaryUnitsFactories[0];
    const player2UnitsFactory = this._militaryUnitsFactories[1];

    try {
      this.createUnits(
        this.player1Pexotas,
        this.player1Kavalerias,
        this.player1Artilerias,
        player1UnitsFactory
      );
      this.createUnits(
        this.player2Pexotas,
        this.player2Kavalerias,
        this.player2Artilerias,
        player2UnitsFactory
      );
    } catch (error) {
      throw new Error("!!!createInitialUnits is not implemented!!!");
    }
  }

  startGame() {
    try {
      console.log("GAME STARTED");
      console.log(
        `-----------${this._firstPlayerCountry} VS ${this._secondPlayerCountry}----------`
      );
      this.createInitialUnits();
      this._validateGame();
      console.log("GAME FINISHED");
    } catch (error) {
      console.log("GAME FINISHED, because: ", error.message);
    }
  }
}

const gameEngine = new GameEngine();
console.log(gameEngine);

export {
  gameEngine,
  PexotaBase,
  KavaleriaBase,
  ArtileriaBase,
  MilitaryUnitsFactory,
};
