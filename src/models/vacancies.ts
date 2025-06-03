export interface VacanciesResponse {
  vacancies: Vacancy[];
  total: number;
  totalFiltered: number;
  totalPages: number;
}

export interface Vacancy {
  title: string;
  description: string;
  numberOfPositions: number;
  postedDate: Date;
  closingDate: Date;
  startDate: Date;
  wage: Wage;
  hoursPerWeek: number;
  expectedDuration: ExpectedDuration;
  address: Address;
  otherAddresses: any[];
  location: Location;
  distance: number;
  employerName: string;
  course: Course;
  apprenticeshipLevel: ApprenticeshipLevel;
  providerName: ProviderName;
  ukprn: number;
  isDisabilityConfident: boolean;
  vacancyUrl: string;
  vacancyReference: string;
  isNationalVacancy: boolean;
  employerWebsiteUrl?: string;
}

export interface Address {
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  postcode: string;
  latitude: number;
  longitude: number;
  addressLine4?: string;
}

export type ApprenticeshipLevel = "Advanced" | "Intermediate";

export interface Course {
  larsCode: number;
  title: string;
  level: number;
  route: Route;
}

export type Route =
  | "Business and administration"
  | "Education and early years"
  | "Engineering and manufacturing";

export type ExpectedDuration = "15 Months" | "18 Months" | "36 Months";

export type ProviderName =
  | "CELLAR TAPES UK LTD"
  | "FIRST RUNG LIMITED"
  | "HARLOW COLLEGE";

export interface Wage {
  wageType: WageType;
  wageUnit: WageUnit;
  wageValue: number;

  wageAdditionalInformation?: string;

  workingWeekDescription?: string;
}

export type WageType = "ApprenticeshipMinimum" | "Custom";
export type WageUnit = "Annually";
