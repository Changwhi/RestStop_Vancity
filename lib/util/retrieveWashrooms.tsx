import { getVancouverParkWashroomData, getVancouverPublicWashroomData } from "../washrooms/vancouver";
import filterWashroomObject from "./washroomObjectFilter";

export default async function retrieveWashrooms() {
    const washroomList = [getVancouverParkWashroomData, getVancouverPublicWashroomData];
    const washrooms = await Promise.all(washroomList.map(func => func() as Promise<any>));
    const washroomsInOneArray = washrooms.flatMap(washroom => washroom); // flatten the array
    const result = filterWashroomObject(washroomsInOneArray);
    return result
}