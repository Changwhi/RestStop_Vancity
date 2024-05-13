'use client';
import { Coordinates } from "@/types/coordinate";

const openGoogleMapApp = (props: Coordinates) => {
  const latitude = props.lat;
  const longitude = props.lon;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
  window.open(googleMapsUrl, "_blank");
  return true;
};

export default openGoogleMapApp;
