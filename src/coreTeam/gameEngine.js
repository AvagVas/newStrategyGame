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
    this._numberOfPexota = 3;
    this._numberOfKavaleria = 5;
    this._numberOfArtileria = 2;

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
      pexotaArray.push(new unitsFactory.pexota());
    }
    for (let i = 0; i < this._numberOfKavaleria; i++) {
      kavaleriaArray.push(new unitsFactory.kavaleria());
    }
    for (let i = 0; i < this._numberOfArtileria; i++) {
      artileriaArray.push(new unitsFactory.artileria());
    }
  }

  createInitialUnits() {
    const player1UnitsFactory = this._registeredCountriesUnitsFactory[0];
    const player2UnitsFactory = this._registeredCountriesUnitsFactory[1];

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

    // const isPlayer1UnitsFactoryEqualFirstCountry =
    //   player1UnitsFactory.country === this._firstPlayerCountry;
    // const isPlayer2UnitsFactoryEqualFirstCountry =
    //   player2UnitsFactory.country === this._secondPlayerCountry;
    // try {
    //   for (let i = 0; i < this._numberOfPexota; i++) {
    //     if (isPlayer1UnitsFactoryEqualFirstCountry) {
    //       this.player1Pexotas.push(new player1UnitsFactory.pexota());
    //     }
    //     if (isPlayer2UnitsFactoryEqualFirstCountry) {
    //       this.player2Pexotas.push(new player2UnitsFactory.pexota());
    //     }
    //   }

    //   for (let i = 0; i < this._numberOfKavaleria; i++) {
    //     if (isPlayer1UnitsFactoryEqualFirstCountry) {
    //       this.player1Kavalerias.push(new player1UnitsFactory.kavaleria());
    //     }
    //     if (isPlayer2UnitsFactoryEqualFirstCountry) {
    //       this.player2Kavalerias.push(new player2UnitsFactory.kavaleria());
    //     }
    //   }

    //   for (let i = 0; i < this._numberOfArtileria; i++) {
    //     if (isPlayer1UnitsFactoryEqualFirstCountry) {
    //       this.player1Artilerias.push(new player1UnitsFactory.artileria());
    //     }
    //     if (isPlayer2UnitsFactoryEqualFirstCountry) {
    //       this.player2Artilerias.push(new player2UnitsFactory.artileria());
    //     }
    //   }
    // } catch (error) {
    //   throw new Error("createInitialUnits is not implemented!!!");
    // }
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

export { gameEngine, PexotaBase, KavaleriaBase, ArtileriaBase };
