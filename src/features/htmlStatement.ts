import { Customer } from "../interfaces/Customer";
import { MovieCollection } from "../interfaces/Movie";
import { getRentalCost } from "../helpers/getRentalCost";
import { getFrequentRenterPoints } from "../helpers/getFrequentRenterPoints";

export const htmlStatement = (customer: Customer, movies: MovieCollection): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`;
  result += "<ul>\n";

  customer.rentals.forEach(r => {
    const movie = movies[r.movieID];
    const thisAmount = getRentalCost(movie, r.days);

    frequentRenterPoints += getFrequentRenterPoints(movie, r.days);
    result += `\t<li>${movie.title} - ${thisAmount}</li>\n`;
    totalAmount += thisAmount;
  });

  result += "</ul>\n";
  result += `<p>Amount owed is <em>${totalAmount}</em></p>\n`;
  result += `<p>You earned <em>${frequentRenterPoints}</em> frequent renter points</p>\n`;

  return result;
};
