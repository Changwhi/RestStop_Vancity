import { getVancouverPublicWashroomData } from '@/lib/washrooms/vancouver';

describe('getVancouverPublicWashroomData', () => {
  beforeEach(() => {
    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          results: [
            {
              name: "Adanac Park",
              address: "1025 Boundary Road",
              type: "Public Toilet in Park",
              location: "East side, fieldhouse",
              summer_hours: "Dawn to Dusk",
              winter_hours: "Dawn to Dusk",
              wheel_access: "No",
              maintainer: "Parks & Recreation",
              note: "Caretaker on site",
              geom: {
                type: "Feature",
                geometry: {
                  coordinates: [-123.024071960319, 49.2758809677686],
                  type: "Point",
                },
                properties: {},
              },
              geo_local_area: "Hastings-Sunrise",
              primaryind: "1",
              geo_point_2d: { lon: -123.024071960319, lat: 49.2758809677686 },
            },
            {
              name: "Balaclava Park",
              address: "4594 Balaclava Street",
              type: "Public Toilet in Park",
              location: "Central, field house",
              summer_hours: "Dawn to Dusk",
              winter_hours: "Dawn to Dusk",
              wheel_access: "No",
              maintainer: "Parks & Recreation",
              note: "Caretaker on site",
              geom: {
                type: "Feature",
                geometry: {
                  coordinates: [-123.175460949361, 49.2452339943975],
                  type: "Point",
                },
                properties: {},
              },
              geo_local_area: "Dunbar-Southlands",
              primaryind: "3",
              geo_point_2d: { lon: -123.175460949361, lat: 49.2452339943975 },
            },
          ],
        }),
      }) as any // Mocking as any to avoid type error
    );
  });

  afterEach(() => {
    // Clear mock after each test
    jest.clearAllMocks();
  });

  it('should fetch data from the Vancouver public washrooms API', async () => {
    // Call the function
    await getVancouverPublicWashroomData();

    // Expect fetch to have been called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      'https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-washrooms/records?limit=20', {"headers": {"Content-Type": "application/json"}, "method": "GET"}
    );
  });

  it('should return the data fetched from the API', async () => {
    // Mocked response data
    const mockData =  [
        {
          name: "Adanac Park",
          address: "1025 Boundary Road",
          type: "Public Toilet in Park",
          location: "East side, fieldhouse",
          summer_hours: "Dawn to Dusk",
          winter_hours: "Dawn to Dusk",
          wheel_access: "No",
          maintainer: "Parks & Recreation",
          note: "Caretaker on site",
          geom: {
            type: "Feature",
            geometry: {
              coordinates: [-123.024071960319, 49.2758809677686],
              type: "Point",
            },
            properties: {},
          },
          geo_local_area: "Hastings-Sunrise",
          primaryind: "1",
          geo_point_2d: { lon: -123.024071960319, lat: 49.2758809677686 },
        },
        {
          name: "Balaclava Park",
          address: "4594 Balaclava Street",
          type: "Public Toilet in Park",
          location: "Central, field house",
          summer_hours: "Dawn to Dusk",
          winter_hours: "Dawn to Dusk",
          wheel_access: "No",
          maintainer: "Parks & Recreation",
          note: "Caretaker on site",
          geom: {
            type: "Feature",
            geometry: {
              coordinates: [-123.175460949361, 49.2452339943975],
              type: "Point",
            },
            properties: {},
          },
          geo_local_area: "Dunbar-Southlands",
          primaryind: "3",
          geo_point_2d: { lon: -123.175460949361, lat: 49.2452339943975 },
        },
      ] 

    const data = await getVancouverPublicWashroomData();

    // Expect the returned data to match the mocked response data
    expect(data).toEqual(mockData);
  });

 it('should handle fetch errors gracefully', async () => {
    // Mock fetch to return an error
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')));

    // Call the function
    try {
      await getVancouverPublicWashroomData();
    } catch (error) {
      // Expect the function to throw an error when fetch fails
      expect(error).toEqual(new Error('getVancouverPublicWashroomData: Error: Failed to fetch'));
    }
  });


});
