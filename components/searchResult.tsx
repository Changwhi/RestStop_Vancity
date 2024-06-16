import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigateButton from "./navigateButton";
import { faCircleCheck, faRestroom } from "@fortawesome/free-solid-svg-icons";
import { PublicWashroomData, MapProps } from "@/types/washroom";
import { PinContainer } from "./UI/pinContainer";
import openGoogleMapApp from "@/lib/googleMap/openGoogleMapApp";
import { Coordinates } from "@/types/coordinate";
const BathroomCard: React.FC<{
  washroom: PublicWashroomData;
}> = ({ washroom }) => {
  const UNIT = "km";
  return (
    <section
      onClick={() =>
        openGoogleMapApp({
          lat: washroom.geo_point_2d.lat,
          lon: washroom.geo_point_2d.lon,
        })
      }
      className="">
        <PinContainer
          title="Go to this washroom"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] sm:w-[50rem]  xl:w-[20rem] h-[8rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-xl text-black dark:text-slate-100">
              {washroom.name}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                {washroom.distance.toFixed(2)}
                {UNIT}
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
    </section>
  );
};

const SearchResult: React.FC<MapProps> = ({ washrooms }) => {
  return (
    <>
      <section className="flex-col">
        <h3 className="text-2xl font-bold text-center p-5 pt-10">
          Most closest washrooms
        </h3>
        <div id="searchResult" className="flex flex-col justify-start items-center xl:flex-row xl:justify-center xl:items-center">
          {washrooms.map((bathroom, index) => (
            <BathroomCard key={index} washroom={bathroom} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SearchResult;
