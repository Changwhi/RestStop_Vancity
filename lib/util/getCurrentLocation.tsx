"use client";
const getCurrentLocation = (): Promise<{ lat: number; lng: number }> => {
  const ERROR_TO_GET_USER_LOCATION = "Failed to get user location";
  const ERROR_TO_GEO_IS_NOT_SUPORTED = "Geolocation is not supported by this browser";

  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        // Success callback function
        (position) => {
          // Get the user's latitude and longitude coordinates
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          resolve({ lat, lng });
        },
        // Error callback function
        (error) => {
          // Handle errors, e.g. user denied location sharing permissions
          console.error(ERROR_TO_GET_USER_LOCATION, error);
          reject(error);
        }
      );
    } else {
      // Geolocation is not supported by the browser
      console.error(ERROR_TO_GEO_IS_NOT_SUPORTED);
      reject(ERROR_TO_GEO_IS_NOT_SUPORTED);
    }
  });
};

export default getCurrentLocation;
