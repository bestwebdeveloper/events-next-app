import axios from 'axios';

type GeoLocationResult = {
  results: {
    geometry: {
      lat: number;
      lng: number;
    };
  };
};

type WeatherResult = {
  properties: {
    timeseries: Timeseries[];
  };
};

type Timeseries = {
  data: {
    instant: {
      details: WeatherDetails;
    };
  };
};

export type WeatherDetails = {
  air_pressure_at_sea_level: number;
  air_temperature: number;
  cloud_area_fraction: number;
  relative_humidity: number;
  wind_from_direction: number;
  wind_speed: number;
};

export async function getWeather(place: string): Promise<WeatherDetails> {
  // Using axios here to solve weird timeout issue with request to coords api
  const { data: geoInfo } = await axios.get<GeoLocationResult>(`${process.env.NEXT_PUBLIC_COORDS_API_URL}${place}`);
  const { lat, lng } = geoInfo.results[0].geometry;
  const weatherInfo: WeatherResult = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_API_URL}lat=${lat}&lon=${lng}`
  ).then(result => result.json());

  return weatherInfo.properties.timeseries[0].data.instant.details;
}
