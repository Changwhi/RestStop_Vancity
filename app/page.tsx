import Image from "next/image";
import  { getVancouverParkWashroomData, getVancouverPublicWashroomData} from "@/app/lib/washrooms/vancouver";

export default async function Home() {
  const data = await getVancouverParkWashroomData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
    </main>
  );
}
