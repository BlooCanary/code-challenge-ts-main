import { Customer } from "../interfaces/Customer";
import { MovieCollection } from "../interfaces/Movie";
import { getRentalCost } from "../helpers/getRentalCost";
import { getFrequentRenterPoints } from "../helpers/getFrequentRenterPoints";

export const statement = (customer: Customer, movies: MovieCollection): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;

  customer.rentals.forEach(r => {
    const movie = movies[r.movieID];
    const thisAmount = getRentalCost(movie, r.days);

    frequentRenterPoints += getFrequentRenterPoints(movie, r.days);
    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  });
  
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};
