"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useState } from "react";

interface PublicWashroomData {
  name: string;
  address: string;
  type: string;
  location: string;
  summer_hours: string;
  winter_hours: string;
  wheel_access: string;
  maintainer: string;
  note: string;
  geom: {
    type: string;
    coordinates: number[];
  };
  geo_local_area: string;
  primaryind: string;
  geo_point_2d: {
    type: string;
    coordinates: number[];
    lat: number;
    lon: number;
  };
}

interface MapProps {
  washrooms: PublicWashroomData[];
}

export default function Map({ washrooms }: MapProps) {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } =
        (await google.maps.importLibrary(
          "marker"
        )) as google.maps.MarkerLibrary;

      const mapOptions: google.maps.MapOptions = {
        center: { lat: 49.2827, lng: -123.1207 }, // Vancouver coordinates
        zoom: 12,
        mapId: "what_is_the_best_practice",
      };

      const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
      });

      // set up the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // put up a marker
      washrooms.forEach((washroom: PublicWashroomData) => {
        // set up icon

        const parser = new DOMParser();

        // A marker with a custom inline SVG.
        const pinSvgString =
          '<svg xmlns="http://www.w3.org/2000/svg" fill="blue" width="20" viewBox="0 0 640 512"><path d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V325.2c-8.1 9.2-21.1 13.2-33.5 9.4c-16.9-5.3-26.3-23.2-21-40.1l30.9-99.1C44.9 155.3 82 128 124 128h8c42 0 79.1 27.3 91.6 67.4l30.9 99.1c5.3 16.9-4.1 34.8-21 40.1c-12.4 3.9-25.4-.2-33.5-9.4V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H120zM320 0c13.3 0 24 10.7 24 24V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24zM464 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM440 480V384H422.2c-10.9 0-18.6-10.7-15.2-21.1l9-26.9c-3.2 0-6.4-.5-9.5-1.5c-16.9-5.3-26.3-23.2-21-40.1l29.7-95.2C428.4 156.9 467.6 128 512 128s83.6 28.9 96.8 71.2l29.7 95.2c5.3 16.9-4.1 34.8-21 40.1c-3.2 1-6.4 1.5-9.5 1.5l9 26.9c3.5 10.4-4.3 21.1-15.2 21.1H584v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H504v96c0 17.7-14.3 32-32 32s-32-14.3-32-32z"></path></svg>';
        const pinSvg = parser.parseFromString(
          pinSvgString,
          "image/svg+xml"
        ).documentElement;

        const marker = new AdvancedMarkerElement({
          position: {
            lat: washroom.geo_point_2d.lat,
            lng: washroom.geo_point_2d.lon,
          },
          map,
          title: washroom.name,
          content: pinSvg,
        });
        marker.addListener("click", () => {
            infoWindow.close();
          infoWindow.setContent(
            marker.title + "<br>" +
            washroom.geo_point_2d.lat + ", " + washroom.geo_point_2d.lon 
          );
          infoWindow.open(map, marker);
        });
      });
    };
    initMap();
  }, [washrooms]);

  return <div style={{ height: "600px" }} ref={mapRef}></div>;
}