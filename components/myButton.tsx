"use client";

import React from "react";

const getGeoLocation = () => {
  // Check if geolocation is supported by the browser
  if ("geolocation" in navigator) {
    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Do something with the location data, e.g. display on a map
        console.log(`Latitude: ${lat}, longitude: ${lng}`);
        alert(`Lat: ${lat}, Lng: ${lng}.`)
      },
      // Error callback function
      (error) => {
        // Handle errors, e.g. user denied location sharing permissions
        console.error("Error getting user location:", error);
      }
    );
  } else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
  }
};

export default function MyButton() {
  return (
    <button
      onClick={getGeoLocation}
      className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded"
    >
      Click Me
    </button>
  );
}
