import {
  PexotaBase,
  KavaleriaBase,
  ArtileriaBase,
  gameEngine
} from "./coreTeam/gameEngine";

class JapanPexota extends PexotaBase {}

class JapanKavaleria extends KavaleriaBase {}

class JapanArtileria extends ArtileriaBase {}

gameEngine.registerContry({
  country: "Japan",
  pexota: JapanPexota,
  kavaleria: JapanKavaleria,
  artileria: JapanArtileria
});
