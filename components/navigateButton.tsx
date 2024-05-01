"use client";
import openGoogleMapApp from "@/lib/openGoogleMapApp";
import NavigateButtonIcon from "./icon/navigateButton";

interface Position {
  lat: number;
  lon: number;
}

const NavigateButton = ({ Position }: { Position: Position }) => {
  return (
    <button
      onClick={() => openGoogleMapApp({ lat: Position.lat, lon: Position.lon })}
    >
      <NavigateButtonIcon />
    </button>
  );
};

export default NavigateButton;
