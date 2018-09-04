interface DgAtts {
  ID: string;
  Des: string;
  DES: string;
  CD: string;
  DEP: string;
  PG: string;
  PE: string;
  PP: string;
  TEQU: string;
  FN: string;
  FG: string;
  DIV: string;
  TS: string;
  WIDSEASON: string;
  WIDCOMP: string;
  IDUNICO: string;
  TEMP: string;
}

interface DG {
  $: DgAtts;
}

interface EqAtts {
  ID: string;
  NB: string;
  PA: string;
  PACOI: string;
  COR: string;
  URL: string;
  WIDEQ: string;
  FUND: string;
}

export interface Eq {
  $: EqAtts;
}

interface Equipos {
  Eq: Eq[];
}

interface JgAtts {
  ID: string;
  CE: string;
  NB: string;
  NC: string;
  PA: string;
  PACOI: string;
  FCH: string;
  DE: string;
  AL: string;
  PE: string;
  DO: string;
  DD: string;
  SK: string;
  HA: string;
  Eq: string;
  WIDJG: string;
}

interface Jg {
  $: JgAtts;
}

interface Jugadore {
  Jg: Jg[];
}

interface EnAtts {
  ID: string;
  NB: string;
  CE: string;
  PA: string;
  PACOI: string;
  FCH: string;
  TIPO: string;
}

interface En {
  $: EnAtts;
}

interface Entrenadore {
  En: En[];
}

interface Competicion {
  DG: DG[];
  Equipos: Equipos[];
  Jugadores: Jugadore[];
  Arbitros: string[];
  Entrenadores: Entrenadore[];
  Presidentes: string[];
  Estadios: string[];
  Equipaciones: string[];
}

export interface cyclingCompetition {
  Competicion: Competicion;
}