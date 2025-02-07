export interface ICountryMainInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: ICountryMainInfo[] | null;
}

export interface IPopulationData {
  year: number;
  value: number;
}

export interface ICountryInfo extends ICountryMainInfo {
  population: IPopulationData[];
  flagUrl: string;
}