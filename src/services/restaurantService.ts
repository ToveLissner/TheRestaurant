import axios from "axios";
import { IBooking } from "../models/IBooking";
import { ICustomer } from "../models/ICustomer";
import { IRestaurant } from "../models/IRestaurant";

// resturantId 6409b9ec4e7f91245cbd6d91

// saker som ej hör hit //

export function handleClick() {
  getBookings();
  // getRestaurant();
  // createBooking();
}

// let tove: ICustomer = {
//     name: "Tove",
//     lastname: "Lissner",
//     email: "tove.lissner@gmail.com",
//     phone: "0735516899",
//   };

// let sebastian: ICustomer = {
//   name: "Sebastian",
//   lastname: "Skoog",
//   email: "sebastian@gmail.com",
//   phone: "0707266666",
// };

// let test: IBooking = {
//   restaurantId: "6409b9ec4e7f91245cbd6d91",
//   date: "2023-03-14",
//   time: "18:00",
//   numberOfGuests: 6,
//   customer: sebastian,
// };

// getBookings[] // HELA LISTAN

export const getBookings = async (): Promise<IBooking[]> => {
  let response = await axios.get<IBooking[]>(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/6409b9ec4e7f91245cbd6d91"
  );

  // console.log(response.data);

  return response.data;
};

// createBooking

export const createBooking = async (): Promise<IBooking> => {
  let response = await axios.post(
    "https://school-restaurant-api.azurewebsites.net/booking/create",
    test
  );

  return response.data;
};

// createRestaurant //

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

// getRestaurant //

export const getRestaurant = async (): Promise<IRestaurant> => {
  let response = await axios.get<IRestaurant>(
    "https://school-restaurant-api.azurewebsites.net/restaurant/6409b9ec4e7f91245cbd6d91"
  );

  return response.data;
};

// getCustomer // OBS NÅGOT SOM EJ STÄMMER - måste nog använda customerId

export const getCustomer = async (): Promise<ICustomer> => {
  let response = await axios.get<ICustomer>(
    "https://school-restaurant-api.azurewebsites.net/customer/6409b9ec4e7f91245cbd6d91"
  );

  return response.data;
};
