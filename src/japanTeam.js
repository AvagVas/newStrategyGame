import {
  PexotaBase,
  KavaleriaBase,
  ArtileriaBase,
  gameEngine,
  MilitaryUnitsFactory,
} from "./coreTeam/gameEngine";

class JapanPexota extends PexotaBase {}

class JapanKavaleria extends KavaleriaBase {}

class JapanArtileria extends ArtileriaBase {}

class JapanTeam extends MilitaryUnitsFactory {
  createPexota() {
    return new JapanPexota();
  }

  createKavaleria() {
    return new JapanKavaleria();
  }

  createArtileria() {
    return new JapanArtileria();
  }
}

const japanTeam = new JapanTeam("Japan");

gameEngine.registerMilitraryUnitsFactory(japanTeam);
