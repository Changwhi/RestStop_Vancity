import Map from "@/components/map";
import { getVancouverPublicWashroomData } from "@/lib/washrooms/vancouver";

export default async function MapModule() {
  const data = await getVancouverPublicWashroomData();
  return (
    <div>
      <Map washrooms={data}/>
    </div>
  );
}
