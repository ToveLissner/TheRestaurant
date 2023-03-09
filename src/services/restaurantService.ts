import axios from "axios";
import { IRestaurant } from "../models/IRestaurant";

export const createRestaurant = async (): Promise<IRestaurant> => {
  let response = await axios.post(
    "https://school-restaurant-api.azurewebsites.net/restaurant/create",
    {
      name: "Pancakes",
      address: {
        street: "Fleminggatan 36",
        zip: "112 33",
        city: "Stockholm",
      },
    }
  );
  return response.data;
};

export const getRestaurant = async (): Promise<IRestaurant> => {
  let response = await axios.get(
    "https://school-restaurant-api.azurewebsites.net/restaurant/6409b9ec4e7f91245cbd6d91"
  );

  return response.data;
};
