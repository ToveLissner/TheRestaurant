import { ICustomer } from "./ICostumer";

export interface IBooking {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: ICustomer;
}