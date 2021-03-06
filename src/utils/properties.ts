import { Country } from "../domain/Country";
import { AvailableHints, availableHints } from "../state";
import { format, formatPlace } from "./formatting";
import { getCountry } from "../services/restCountries";
import {
  FactbookCountry,
  getCoastline,
  getCountryInformation,
  getMeanElevation,
  getTallestPoint,
} from "../services/factbook";
import { getFlagGoodnessHint } from "../services/flagGoodness";
import { getSideOfRoadMessage } from "./propertyFormats";
import { DENMARK_SIZE } from "../data/constants";

export const isCountryValid = (name: string): boolean => true;

export const isHintsValid = (
  properties: AvailableHints[] | string[]
): properties is AvailableHints[] =>
  !(properties as AvailableHints[]).some((p) => !availableHints.includes(p));

export const getProperties = (text: string): AvailableHints[] => {
  return text.split(",").map((s) => s.trim().toLowerCase()) as AvailableHints[];
};

export const getCountryNameAndProperties = (
  text: string
): [string, AvailableHints[]] => {
  const [argument1, argument2] = text.split(";");
  const name = argument1.trim().toLowerCase();
  return [name, getProperties(argument2)];
};

const mapPropertyToHint = async (
  property: AvailableHints,
  country: Country[0],
  factbookCountry: FactbookCountry,
  countryName: string
) => {
  switch (property) {
    case "area":
      return "Arealet er " + format(country.area) + "km².";
    case "borders":
      if (country.borders) {
        return "Landet grenser til " + country.borders.length + " andre land.";
      }
      return "Landet grenser ikke til noen andre land.";
    case "population":
      return "Det har " + format(country.population) + " innbyggere.";
    case "continent":
      if (country.region) {
        return "Landet ligger i " + formatPlace(country.region) + ".";
      }
      if (country.region) {
        return "Landet ligger i " + country.region + ".";
      }
      return "Det er uvisst hvor landet ligger.";
    case "tallest point":
      return `Landets høyeste punkt er ${format(
        getTallestPoint(factbookCountry)
      )} m.o.h.`;
    case "mean elevation":
      return `Gjennomsnittlig høyde er ${format(
        getMeanElevation(factbookCountry)
      )} m.o.h.`;
    case "coast":
      return `Landet har ${format(
        getCoastline(factbookCountry)
      )} km med kystlinje.`;
    case "flag goodness":
      return getFlagGoodnessHint(countryName);
    case "road side":
      return getSideOfRoadMessage(country);
    case "denmarks":
      return `Landet er ${(country.area / DENMARK_SIZE).toFixed(2)} Danmarker.`;
    case "flag":
      return;
  }
  console.log("Ikke gjenkjent: ", property);
  throw Error("En egenskap er ikke gjenkjent");
};

export const generateHints = async (
  countryName: string,
  properties: AvailableHints[]
) => {
  const [country] = await getCountry(countryName);
  const factbook = await getCountryInformation(countryName);
  let result = "";
  for (let p of properties) {
    const hint = await mapPropertyToHint(p, country, factbook, countryName);
    if (hint !== undefined) {
      result += "\n" + hint;
    }
  }
  return result;
};
