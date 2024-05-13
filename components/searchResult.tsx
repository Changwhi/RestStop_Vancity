import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigateButton from "./navigateButton";
import { faCircleCheck, faRestroom } from "@fortawesome/free-solid-svg-icons";
import { PublicWashroomData, MapProps } from "@/types/washroom";

const BathroomCard: React.FC<{
  key: string;
  washroom: PublicWashroomData;
}> = ({ washroom }) => {
  return (
    <div className="flex justify-between rounded-lg space-x-4 border-2 p-2 m-2 border-white">
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
        <FontAwesomeIcon
          icon={faCircleCheck}
          style={{ color: "#0dc700" }}
          className="icon m-4" //Location of status icon
          transform="grow-11"
        />
      </div>
    </div>
  );
};

const SearchResult: React.FC<MapProps> = ({ washrooms }) => {
  return (
    <>
      <div className="text-white" id="result">
        <span className="flex justify-center">
          <h3>Result</h3>
        </span>
        {/* TODO: Populate the list with nearby bathrooms */}
        <div id="description-bar" className="flex justify-around">
          <span id="icon" className="mr-12"></span>
          {/* description bar spacing is here */}
          <span id="bathroom-title">Washroom</span>
          <span id="navigate">Navigate</span>
          <span id="status">Status</span>
        </div>
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
