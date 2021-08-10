import {
  PexotaBase,
  KavaleriaBase,
  ArtileriaBase,
  gameEngine
} from "./coreTeam/gameEngine";

class FrancePexota extends PexotaBase {}

class FranceKavaleria extends KavaleriaBase {}

class FranceArtileria extends ArtileriaBase {}

gameEngine.registerContry({
  country: "France",
  pexota: FrancePexota,
  kavaleria: FranceKavaleria,
  artileria: FranceArtileria
});
