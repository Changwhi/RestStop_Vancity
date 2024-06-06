import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigateButton from "./navigateButton";
import { faCircleCheck, faRestroom } from "@fortawesome/free-solid-svg-icons";
import { PublicWashroomData, MapProps } from "@/types/washroom";

const BathroomCard: React.FC<{
  key: string;
  washroom: PublicWashroomData;
}> = ({ washroom }) => {
  return (
    <div className="flex justify-between rounded-lg space-x-4 border-2 p-2 m-2 border-black dark:border-white">
      <FontAwesomeIcon
        icon={faRestroom}
        className="icon m-3"
        transform="grow-7"
      />
      <div className="flex flex-col">
        <h3>{washroom.name}</h3>
        <p className="text-xs">{washroom.address}</p>
      </div>
      <div className="flex justify-end">
        <NavigateButton
          lat={washroom.geo_point_2d.lat}
          lon={washroom.geo_point_2d.lon}
        ></NavigateButton>
        {/* <FontAwesomeIcon
          icon={faCircleCheck}
          style={{ color: "#0dc700" }}
          className="icon m-4" //Location of status icon
          transform="grow-11"
        /> */}
      </div>
    </div>
  );
};

const SearchResult: React.FC<MapProps> = ({ washrooms }) => {
  return (
    <>
      <div>
        <h3 className="text-lg text-center p-5" >Most closest washrooms</h3>
        <div id="searchResult" className="flex flex-col">
          {washrooms.map((bathroom) => (
            <BathroomCard key={bathroom.primaryind} washroom={bathroom} />
          ))}
        </div>{" "}
      </div>
    </>
  );
};

export default SearchResult;
