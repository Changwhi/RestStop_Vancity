"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useState } from "react";

export default function Map() {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 19.020145856138136,
        lng: -98.24006775697993,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "what_is_the_best_practice",
      };

      // set up the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // put up a marker
      const marker = new AdvancedMarkerElement({
        position: position,
        map: map,
        title: "Hello World!",
      });
      const marker2 = new AdvancedMarkerElement({
        position: {
          lat: 18.020145856138136,
          lng: -97.24006775697993,
        },
        map: map,
      });
    };
    initMap();
  }, []);

  return <div style={{ height: "600px" }} ref={mapRef}></div>;
}
