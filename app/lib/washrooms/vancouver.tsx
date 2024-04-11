// For public washrooms in vancouver
interface WashroomData {
  total_count: number;
  results: [
    {
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
      };
    }
  ];
}

export async function getVancouverPublicWashroomData(): Promise<WashroomData> {
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
    throw new Error("Failed to fetch data" + response.statusText);
  }

  const responseData: WashroomData = await response.json();
  console.log(responseData.results[0]);
  return responseData;
}

// For washroom at parks in vancouver
interface ParkData {
  parkid: number;
  name: string;
  location: string;
  notes: string | null;
  summerhours: string;
  winterhours: string;
}

interface ParkApiResponse {
  total_count: number;
  results: ParkData[];
}


export async function getVancouverParkWashroomData(): Promise<ParkApiResponse> {
  const response = await fetch(
    "https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/parks-washrooms/records?limit=94",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data" + response.statusText);
  }

  const responseData: ParkApiResponse = await response.json();
  console.log(responseData.results);
  return responseData;
}
