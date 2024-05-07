export interface PublicWashroomData {
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
