import Map from "@/components/map";
import { getVancouverPublicWashroomData } from "@/lib/washrooms/vancouver";

export default async function MapPage() {
  const data = await getVancouverPublicWashroomData();
  return (
    <div>
      <h1>Map Page</h1>
      <Map washrooms={data}/>
    </div>
  );
}
