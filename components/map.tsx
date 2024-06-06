"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useState } from "react";
import { getClosestWashrooms } from "@/lib/util/getClosestWashrooms";
import SearchButton from "./searchButton";
import getCurrentLocation from "@/lib/util/getCurrentLocation";
import SearchResult from "./searchResult";
import { PublicWashroomData, MapProps } from "@/types/washroom";

export default function Map({ washrooms }: MapProps) {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [buttonClicked, setButtonClicked] = useState(false);
  const [closestWashrooms, setCloasestWashrooms] = useState<
    PublicWashroomData[]
  >([]);
  const mapRef = React.useRef<HTMLDivElement>(null);

  const searchButtonHandler = async () => {
    // Scroll to the search result section
    const currentSection = document.getElementById("result");
    if (currentSection) {
      currentSection.scrollIntoView({ behavior: "smooth" });
    }
    // Get the user's current location
    try {
      const currentLocation = await getCurrentLocation();
      setUserLocation({ lat: currentLocation.lat, lng: currentLocation.lng });
      setButtonClicked(true);
      const closestWashrooms = getClosestWashrooms(
        { lat: userLocation.lat, lon: userLocation.lng },
        washrooms,
        3
      );
      setCloasestWashrooms(closestWashrooms);
    } catch (error) {
      console.error("Error getting current location:", error);
    }
  };

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

      if (userLocation.lat != 0 && userLocation.lat != 0) {
        mapOptions.center = { lat: userLocation.lat, lng: userLocation.lng };
      }

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
'<svg height="35" width="35" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 639.623 639.623" xml:space="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path style="fill:#00248f;" d="M304.394,205.437c0,4.514-3.644,8.187-8.158,8.187c-4.484,0-8.158-3.674-8.158-8.187v-44.259 h-5.315l0.039,138.727c0,6.067-4.866,10.991-10.982,10.991c-5.97,0-10.864-4.836-10.952-10.855l-0.049-0.088v-89.475h-4.934 v89.387c0,6.097-4.944,11.021-11.011,11.021c-6.087,0-11.011-4.924-11.011-11.021l0.039-138.482h-5.071v43.985h-0.068 l0.068,0.352c0,4.543-3.664,8.158-8.197,8.158c-4.494,0-8.148-3.625-8.148-8.158l0.02-0.352h-0.02v-47.522 c0,0-0.948-20.39,26.76-20.908h38.758c0,0,24.591-0.303,26.379,20.908v47.522L304.394,205.437L304.394,205.437z M259.618,130.705 c10.669,0,19.316-8.666,19.316-19.316c0-10.708-8.647-19.374-19.316-19.374c-10.649,0-19.345,8.666-19.345,19.374 C240.263,122.039,248.958,130.705,259.618,130.705z M366.923,133.079c10.591,0,19.208-8.617,19.208-19.247 c0-10.591-8.608-19.218-19.208-19.218c-10.591,0-19.277,8.617-19.277,19.218C347.657,124.472,356.333,133.079,366.923,133.079z M377.456,139.313h-22.96c-27.659,0.489-34.45,20.781-34.45,20.781l-15.652,47.346h0.039l-0.039,0.322 c0,4.494,3.654,8.178,8.129,8.178c4.485,0,8.109-3.674,8.109-8.178l-0.02-0.322h0.02l15.642-43.809h5.081l-24.738,74.937h24.728 l-0.029,62.988c0,6.009,4.895,10.913,10.972,10.913c6.067,0,11.011-4.905,11.011-10.913l-0.078-62.959h4.944v63.037l0.078,0.059 c0.068,5.989,4.895,10.776,10.904,10.776c6.018,0,10.884-4.866,10.884-10.894l-0.02-62.979h24.846l-24.846-75.191h5.266 l15.632,44.024v0.059c0,4.475,3.605,8.139,8.109,8.139c4.484,0,8.129-3.654,8.129-8.139v-0.059l-15.632-47.336 C409.746,139.039,377.456,139.313,377.456,139.313z M521.321,201.451c0,111.321-201.471,438.172-201.471,438.172 S118.302,312.763,118.302,201.451C118.302,90.208,208.51,0,319.851,0C431.123-0.01,521.321,90.198,521.321,201.451z M475.724,201.441c0-85.968-69.945-155.893-155.883-155.893c-86.017,0-155.961,69.935-155.961,155.893 c0,85.997,69.945,155.912,155.961,155.912C405.789,357.354,475.724,287.438,475.724,201.441z"></path> </g> </g> </g> </g></svg>'
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
            marker.title +
              "<br>" +
              washroom.geo_point_2d.lat +
              ", " +
              washroom.geo_point_2d.lon
          );
          infoWindow.open(map, marker);
        });
      });
    };
    initMap();
  }, [washrooms, userLocation]);

  return (
    <>
      <div style={{ height: "600px" }} ref={mapRef}></div>
      <section id="result">
        {<SearchButton onClick={searchButtonHandler} />}
        {buttonClicked && <SearchResult washrooms={closestWashrooms} />}
      </section>
    </>
  );
}
