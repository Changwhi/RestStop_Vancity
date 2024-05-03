"use client";
import openGoogleMapApp from "@/lib/openGoogleMapApp";
import NavigateButtonIcon from "./icon/navigateButton";

interface Pros {
  lat: number;
  lon: number;
}

const NavigateButton = ({ lat, lon }: Pros) => {
  return (
    <button
      onClick={() => openGoogleMapApp({ lat: lat, lon: lon })}
    >
      <NavigateButtonIcon />
    </button>
  );
};

export default NavigateButton;
