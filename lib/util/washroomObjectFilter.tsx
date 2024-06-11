export default function filterWashroomObject(washrooms: any) {
  const namesToExtract:Array<keyof {name?:string}> = ["name"];
  const coordinatesToExtract: Array<keyof { googlemapdest?: string, geo_point_2d?: string }> = ["googlemapdest", "geo_point_2d"];

  const filteredRasults = washrooms.map((washroom: any) => {
    // empty result object
    const filteredObject: { [key: string]: string } = {};
    filteredObject["name"] = "No name";
    // filter name
    for (const key of namesToExtract) {
      if (washroom.hasOwnProperty(key)) {
        filteredObject["name"] = washroom[key];
      }
    }
    // filter coordinates
    for (const key of coordinatesToExtract) {
      if (washroom.hasOwnProperty(key)) {
        filteredObject["geo_point_2d"] = washroom[key];          }
      }
    return Object.keys(filteredObject).length ? filteredObject : null;
  })

  return filteredRasults;

}
