// For public washrooms in vancouver
interface PublicWashroomApiResponse {
  total_count: number;
  results: PublicWashroomData[];
}
interface PublicWashroomData {
  name: string;
  address: string;
  type: string;
  location: string;
  summer_hours: string;
  winter_hours: string;
  wheel_access: string;
  maintainer: string;
  note: string;
  geom: {
    type: string;
    coordinates: number[];
  };
  geo_local_area: string;
  primaryind: string;
  geo_point_2d: {
    type: string;
    coordinates: number[];
    lat: number;
    lon: number;
  };
}

export async function getVancouverPublicWashroomData(): Promise<
  PublicWashroomData[]
> {
  // constants for text
  const NAME_OF_THIS_COMPONENT = "getVancouverPublicWashroomData";
  const FAILED_FETCHING_DATA = "Failed to fetch data";
  try {
    const response = await fetch(
      "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-washrooms/records?limit=20",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(FAILED_FETCHING_DATA + response.statusText);
    }

    const responseData: PublicWashroomApiResponse = await response.json();
    return responseData.results;
  } catch (error) {
    throw new Error(NAME_OF_THIS_COMPONENT + ": " + error);
  }
}

// For washroom at parks in vancouver
interface ParkWashroomData {
  parkid: number;
  name: string;
  location: string;
  notes: string | null;
  summerhours: string;
  winterhours: string;
}

interface ParkApiResponse {
  total_count: number;
  results: ParkWashroomData[];
}

export async function getVancouverParkWashroomData(): Promise<ParkWashroomData[]> {
  // constants for text
  const NAME_OF_THIS_COMPONENT = "getVancouverParkWashroomData";
  const FAILED_FETCHING_DATA = "Failed to fetch data";

  try {
    const response = await fetch(
      "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/parks/records?limit=20&refine=washrooms%3A%22Y%22",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(FAILED_FETCHING_DATA + response.statusText);
    }

    const responseData: ParkApiResponse = await response.json();
    return responseData.results;
  } catch (error: any) {
    throw new Error(NAME_OF_THIS_COMPONENT + ": " + error.message);
  }
}
