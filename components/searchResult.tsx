import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigateButton from "./navigateButton";
import { faCircleCheck, faRestroom } from "@fortawesome/free-solid-svg-icons";
import { PublicWashroomData, MapProps } from "@/types/washroom";

const BathroomCard: React.FC<{
  key: string;
  washroom: PublicWashroomData;
}> = ({ washroom }) => {
  const UNIT = "km";
  return (
    <section className="flex justify-between w-5/6 md:w-2/5 rounded-lg space-x-4 border-2 p-2 m-2 border-black dark:border-white">
      <FontAwesomeIcon
        icon={faRestroom}
        className="icon m-3"
        transform="grow-7"
      />
      <section className="flex-col items-start w-full">
        <p className="text-lg">{washroom.name}</p>
        <p className="text-xs">{washroom.distance.toFixed(2)}{UNIT}</p>
      </section>
      <section className="flex justify-end">
        <NavigateButton
          lat={washroom.geo_point_2d.lat}
          lon={washroom.geo_point_2d.lon}
        ></NavigateButton>
      </section>
    </section>
  );
};

const SearchResult: React.FC<MapProps> = ({ washrooms }) => {
  return (
    <>
      <section className="flex-col">
        <h3 className="text-2xl font-bold text-center p-5" >Most closest washrooms</h3>
        <div id="searchResult" className="flex flex-col items-center">
          {washrooms.map((bathroom) => (
            <BathroomCard key={bathroom.primaryind} washroom={bathroom} />
          ))}
        </div>{" "}
      </section>
    </>
  );
};

export default SearchResult;
