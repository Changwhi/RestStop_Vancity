import { PublicWashroomData } from "@/types/washroom";
import { Coordinates } from "@/types/coordinate";

function calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
  const R = 6371; // Radius of the earth in km
  const dLat = (coord2.lat - coord1.lat) * (Math.PI / 180);
  const dLon = (coord2.lon - coord1.lon) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1.lat * (Math.PI / 180)) *
      Math.cos(coord2.lat * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

export function getClosestWashrooms(
  userLocation: Coordinates,
  washrooms: PublicWashroomData[],
  numberOfWashrooms: number
): PublicWashroomData[] {
  const washroomsWithDistance = washrooms.map(washroom => ({
    ...washroom,
    distance: calculateDistance(
      {
        lat: washroom.geo_point_2d.lat,
        lon: washroom.geo_point_2d.lon
      },
      userLocation
    )
  }));

  washroomsWithDistance.sort((a, b) => a.distance - b.distance);

  return washroomsWithDistance.slice(0, numberOfWashrooms);
}
