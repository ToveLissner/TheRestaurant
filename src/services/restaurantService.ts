import axios from "axios";
import { IBooking } from "../models/IBooking";
import { IBookingFromDB } from "../models/IBookingsFromDB";
import { IBookingUpdate } from "../models/IBookingUpdate";
import { ICustomerFromDB } from "../models/ICustomerFromDB";
import { IRestaurant } from "../models/IRestaurant";

// getBookings[] // HELA LISTAN // OBS det vi får tillbaka är ju fel???

export const getBookings = async (): Promise<IBooking[]> => {
  let response = await axios.get<IBooking[]>(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/6409b9ec4e7f91245cbd6d91"
  );

  return response.data;
};

// korrekt svar tillbaka //

export const getBookingsFromDB = async (): Promise<IBookingFromDB[]> => {
  let response = await axios.get<IBookingFromDB[]>(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/6409b9ec4e7f91245cbd6d91"
  );

  return response.data;
};

// getBooking //

export const getBooking = async (
  booking: IBookingFromDB
): Promise<IBookingFromDB> => {
  let response = await axios.get<IBookingFromDB>(
    `https://school-restaurant-api.azurewebsites.net/booking/restaurant/${booking._id}`
  );

  return response.data;
};

// getCustomer //

export const getCustomer = async (
  customerId: string
): Promise<ICustomerFromDB> => {
  let response = await axios.get<ICustomerFromDB>(
    `https://school-restaurant-api.azurewebsites.net/customer/${customerId}`
  );

  return response.data;
};

// removeBooking //

export const removeBooking = async (
  booking: IBookingFromDB
): Promise<boolean> => {
  let response = await axios.delete(
    `https://school-restaurant-api.azurewebsites.net/booking/delete/${booking._id}`
  );

  return response.status === 200;
};

// updateBooking //

export const updateBooking = async (
  booking: IBookingUpdate
): Promise<IBookingFromDB> => {
  let response = await axios.put<IBookingFromDB>(
    `https://school-restaurant-api.azurewebsites.net/booking/update/${booking.id}`,
    booking
  );

  return response.data;
};

// createBooking

export const createBooking = async (
  newBooking: IBooking
): Promise<IBooking> => {
  let response = await axios.post(
    "https://school-restaurant-api.azurewebsites.net/booking/create",
    newBooking
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

// resturantId 6409b9ec4e7f91245cbd6d91 //
