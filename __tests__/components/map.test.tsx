import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Map from "@/components/map";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: jest.fn(() => ({ current: document.createElement("div") })),
}));

describe("Map Component", () => {
  test("renders without crashing", () => {
    const washrooms = [
      {
        name: "Test Washroom",
        distance: 0.5,
        address: "123 Test St",
        type: "Public",
        location: "Test Location",
        summer_hours: "10:00 AM - 5:00 PM",
        winter_hours: "11:00 AM - 4:00 PM",
        wheel_access: "Yes",
        maintainer: "Test Maintainer",
        note: "Test Note",
        geom: {
          type: "Point",
          coordinates: [49.2827, -123.1207],
        },
        geo_local_area: "Test Area",
        primaryind: "Test",
        geo_point_2d: {
          type: "Point",
          coordinates: [49.2827, -123.1207],
          lat: 49.2827,
          lon: -123.1207,
        },
      },
      {
        name: "Test Washroom",
        distance: 0.5,
        address: "123 Test St",
        type: "Public",
        location: "Test Location",
        summer_hours: "10:00 AM - 5:00 PM",
        winter_hours: "11:00 AM - 4:00 PM",
        wheel_access: "Yes",
        maintainer: "Test Maintainer",
        note: "Test Note",
        geom: {
          type: "Point",
          coordinates: [49.2827, -123.1207],
        },
        geo_local_area: "Test Area",
        primaryind: "Test",
        geo_point_2d: {
          type: "Point",
          coordinates: [49.2827, -123.1207],
          lat: 49.2827,
          lon: -123.1207,
        },
      },
    ];

    render(<Map washrooms={washrooms} />);
  });
});

// describe("Map component", async() => {

//   it("Should render a map properly", async () => {
//     const data = await getVancouverPublicWashroomData();
//     render(<Map washrooms={data} />);

//     const map = screen.getByTestId("map");

//     expect(map).toBeInTheDocument();

//     expect(map).toHaveAttribute("data-testid", "map");

//     // expect(map).toHaveAttribute("data-map-id", "what_is_the_best_practice");

//   });
// });
