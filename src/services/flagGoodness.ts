import { CountryName, stringToCountryName } from '../domain/CountryName';

export enum FlagGoodness {
  GOOD, BAD, HALF_DECENT, UNCERTAIN
}

const { GOOD, BAD, HALF_DECENT, UNCERTAIN } = FlagGoodness;

export const getFlagGoodnessHint = (name: string) => {
  const goodness = getFlagGoodness(name);
  return `Landets flaggbrahet er: ${flagGoodnessText(goodness)}`;
}

const flagGoodnessText = (goodness: FlagGoodness) => {
  switch (goodness) {
    case GOOD:
      return 'BRA (forholdsvis enkelt å tegne med linjal og passer)';
    case BAD:
      return 'DORLI (å tegne dette med flagget med linjal og passer, eller å definere det som en SVG, ses på som en praktisk umulig oppgave)';
    case HALF_DECENT:
      return 'SEMIÅLREIT (praktisk veldig vanskelig å tegne med linjal og passer, men det burde la seg gjøre å definere flagget som en SVG)';
    case UNCERTAIN:
      return 'UKJENT (da tipper jeg er det dårlig)';
  }
}

const getFlagGoodness = (name: string): FlagGoodness => {
  try {
    return FLAG_GOODNESS[stringToCountryName(name)];
  } catch {
    return UNCERTAIN;
  }
}


export const FLAG_GOODNESS: Record<CountryName, FlagGoodness> = {
  AFGHANISTAN: BAD,
  ALBANIA: BAD,
  ALGERIA: HALF_DECENT,
  ANDORRA: BAD,
  ANGOLA: BAD,
  ANTIGUA_AND_BARBUDA: HALF_DECENT,
  ARGENTINA: BAD,
  ARMENIA: GOOD,
  AUSTRALIA: HALF_DECENT,
  AUSTRIA: GOOD,
  AZERBAIJAN: HALF_DECENT,
  THE_BAHAMAS: GOOD,
  BAHRAIN: GOOD,
  BANGLADESH: GOOD,
  BARBADOS: HALF_DECENT,
  BELARUS: BAD,
  BELGIUM: GOOD,
  BELIZE: BAD,
  BENIN: GOOD,
  BHUTAN: BAD, // SO BAD
  BOLIVIA: BAD,
  BOSNIA_AND_HERZEGOVINA: HALF_DECENT,
  BOTSWANA: GOOD,
  BRAZIL: BAD,
  BRUNEI: BAD,
  BULGARIA: GOOD,
  BURKINA_FASO: GOOD,
  BURMA: GOOD,
  BURUNDI: HALF_DECENT,
  CAMBODIA: BAD,
  CAMEROON: GOOD,
  CANADA: HALF_DECENT,
  CAPE_VERDE: HALF_DECENT,
  CENTRAL_AFRICAN_REPUBLIC: GOOD,
  CHAD: GOOD,
  CHILE: GOOD,
  CHINA: HALF_DECENT,
  COLOMBIA: GOOD,
  COMOROS: HALF_DECENT,
  CONGO_DR: GOOD,
  CONGO: GOOD,
  COSTA_RICA: BAD,
  COTE_D_IVOIRE: GOOD,
  CROATIA: BAD,
  CUBA: GOOD,
  CYPRUS: BAD,
  CZECHIA: GOOD,
  DENMARK: GOOD,
  DJIBOUTI: GOOD,
  DOMINICA: BAD,
  DOMINICAN_REPUBLIC: BAD,
  ECUADOR: BAD,
  EGYPT: BAD,
  EL_SALVADOR: BAD,
  EQUATORIAL_GUINEA: BAD,
  ERITREA: BAD,
  ESTONIA: GOOD,
  ESWATINI: BAD,
  ETHIOPIA: HALF_DECENT,
  FIJI: BAD,
  FINLAND: GOOD,
  FRANCE: GOOD,
  GABON: GOOD,
  THE_GAMBIA: GOOD,
  GEORGIA: GOOD,
  GERMANY: GOOD,
  GHANA: GOOD,
  GREECE: GOOD,
  GRENADA: BAD,
  GUATEMALA: BAD,
  GUINEA: GOOD,
  GUINEA_BISSAU: GOOD,
  GUYANA: GOOD,
  HAITI: BAD,
  HONDURAS: HALF_DECENT,
  HUNGARY: GOOD,
  ICELAND: GOOD,
  INDIA: BAD,
  INDONESIA: GOOD,
  IRAN: BAD,
  IRAQ: BAD,
  IRELAND: GOOD,
  ISRAEL: GOOD,
  ITALY: GOOD,
  JAMAICA: GOOD,
  JAPAN: GOOD,
  JORDAN: GOOD,
  KAZAKHSTAN: BAD,
  KENYA: BAD,
  KIRIBATI: BAD,
  NORTH_KOREA: GOOD,
  SOUTH_KOREA: HALF_DECENT,
  KOSOVO: BAD,
  KUWAIT: GOOD,
  KYRGYZSTAN: BAD,
  LAOS: GOOD,
  LATVIA: GOOD,
  LEBANON: BAD,
  LESOTHO: BAD,
  LIBERIA: GOOD,
  LIBYA: HALF_DECENT,
  LIECHTENSTEIN: BAD,
  LITHUANIA: GOOD,
  LUXEMBOURG: GOOD,
  MADAGASCAR: GOOD,
  MALAWI: BAD,
  MALAYSIA: HALF_DECENT,
  MALDIVES: GOOD,
  MALI: GOOD,
  MALTA: BAD,
  MARSHALL_ISLANDS: BAD,
  MAURITANIA: HALF_DECENT,
  MAURITIUS: GOOD,
  MEXICO: BAD,
  MICRONESIA: HALF_DECENT,
  MOLDOVA: BAD,
  MONACO: GOOD,
  MONGOLIA: BAD,
  MONTENEGRO: BAD,
  MOROCCO: GOOD,
  MOZAMBIQUE: BAD,
  NAMIBIA: HALF_DECENT,
  NAURU: HALF_DECENT,
  NEPAL: BAD,
  NETHERLANDS: BAD,
  NEW_ZEALAND: HALF_DECENT,
  NICARAGUA: BAD,
  NIGER: GOOD,
  NIGERIA: GOOD,
  NORWAY: GOOD,
  NORTH_MACEDONIA: GOOD,
  MACEDONIA: GOOD,
  OMAN: BAD,
  PAKISTAN: HALF_DECENT,
  PALAU: GOOD,
  PANAMA: GOOD,
  PAPUA_NEW_GUINEA: BAD,
  PARAGUAY: BAD,
  PERU: BAD,
  PHILIPPINES: BAD,
  POLAND: GOOD,
  PORTUGAL: BAD,
  QATAR: GOOD,
  ROMANIA: GOOD,
  RUSSIA: GOOD,
  RWANDA: BAD,
  SAINT_KITTS_AND_NEVIS: HALF_DECENT,
  SAINT_LUCIA: GOOD,
  SAINT_VINCENT_AND_THE_GRENADINES: GOOD,
  SAMOA: HALF_DECENT,
  SAN_MARINO: BAD,
  SAO_TOME_AND_PRINCIPE: HALF_DECENT,
  SAUDI_ARABIA: BAD,
  SENEGAL: GOOD,
  SERBIA: BAD,
  SEYCHELLES: GOOD,
  SIERRA_LEONE: GOOD,
  SINGAPORE: HALF_DECENT,
  SLOVAKIA: BAD,
  SLOVENIA: BAD,
  SOLOMON_ISLANDS: HALF_DECENT,
  SOMALIA: GOOD,
  SOUTH_AFRICA: GOOD,
  SOUTH_SUDAN: GOOD,
  SPAIN: BAD,
  SRI_LANKA: BAD,
  SUDAN: GOOD,
  SURINAME: GOOD,
  SWEDEN: GOOD,
  SWITZERLAND: GOOD,
  SYRIA: HALF_DECENT,
  TAJIKISTAN: BAD,
  TANZANIA: GOOD,
  THAILAND: GOOD,
  TIMOR_LESTE: GOOD,
  TOGO: GOOD,
  TONGA: GOOD,
  TRINIDAD_AND_TOBAGO: GOOD,
  TUNISIA: HALF_DECENT,
  TURKEY: HALF_DECENT,
  TURKMENISTAN: BAD,
  TUVALU: HALF_DECENT,
  UGANDA: BAD,
  UKRAINE: GOOD,
  UNITED_ARAB_EMIRATES: GOOD,
  UNITED_KINGDOM: GOOD,
  UNITED_STATES: HALF_DECENT,
  URUGUAY: BAD,
  UZBEKISTAN: HALF_DECENT,
  VANUATU: BAD,
  VATICAN_CITY: BAD,
  VENEZUELA: BAD,
  VIETNAM: GOOD,
  YEMEN: GOOD,
  ZAMBIA: BAD,
  ZIMBABWE: BAD,
}
