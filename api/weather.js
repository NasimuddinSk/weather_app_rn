import axios from "axios";
import { apiKey } from "../constants";

const forcastEndpoint = (params) =>
  `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

const locationEndpoint = (params) =>
  `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchWeatherForecast = (params) => {
  return apiCall(forcastEndpoint(params));
};

export const fetchLocations = (params) => {
  return apiCall(locationEndpoint(params));
};
