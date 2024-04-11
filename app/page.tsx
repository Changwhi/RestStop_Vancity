import Image from "next/image";

export default function Home() {
  return (
    <div>
      Main Page
      <div className="grid grid-flow-col gap-3">
        <div className="bg-blue-400 col-span-1">Hero</div>
        <div className="bg-red-400 col-span-1">Map</div>
      </div>
    </div>
  );
}
