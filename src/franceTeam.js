import {
  PexotaBase,
  KavaleriaBase,
  ArtileriaBase,
  gameEngine,
  MilitaryUnitsFactory,
} from "./coreTeam/gameEngine";

class FrancePexota extends PexotaBase {}

class FranceKavaleria extends KavaleriaBase {}

class FranceArtileria extends ArtileriaBase {}

class FranceTeam extends MilitaryUnitsFactory {
  createPexota() {
    return new FrancePexota();
  }

  createKavaleria() {
    return new FranceKavaleria();
  }

  createArtileria() {
    return new FranceArtileria();
  }
}

const franceTeam = new FranceTeam("France");

gameEngine.registerMilitraryUnitsFactory(franceTeam);
