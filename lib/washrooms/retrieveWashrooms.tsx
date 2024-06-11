import {
  getVancouverParkWashroomData,
  getVancouverPublicWashroomData,
} from "./vancouverData";
import filterWashroomObject from "../util/washroomObjectFilter";
import inputDataTypeFilter from "../util/inputDataTypeFilter";
import data from "./surreyData.json";

export default async function retrieveWashrooms() {
  // get all the json files and functions containing the washroom data
  const washroomList = [
    getVancouverParkWashroomData,
    getVancouverPublicWashroomData,
    data.result,
  ];
  // Retrieves all the washroom data from the function which fetches data from API and JSON file.
  const washrooms = await Promise.all(
    washroomList.map(
      (washroomsContainer) =>
        inputDataTypeFilter(washroomsContainer) as Promise<any>
    )
  );
  // flatten the array
  const washroomsInOneArray = washrooms.flatMap((washroom) => washroom);
  // filter the object since it contains different keys from the json file
  const result = filterWashroomObject(washroomsInOneArray);
  return result;
}
