import { MovieCode } from "../interfaces/Movie";
import { Customer } from "../interfaces/Customer";
import { MovieCollection } from "../interfaces/Movie";

export const htmlStatement = (customer: Customer, movies: MovieCollection): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`;
  result += "<ul>\n";
  customer.rentals.forEach(r => {
    let movie = movies[r.movieID];
    let thisAmount = 0;

    switch (movie.code) {
      case MovieCode.REGULAR:
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case MovieCode.NEW:
        thisAmount = r.days * 3;
        break;
      case MovieCode.CHILDRENS:
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }

    frequentRenterPoints++;
    if (movie.code === MovieCode.NEW && r.days > 2) frequentRenterPoints++;

    result += `\t<li>${movie.title} - ${thisAmount}</li>\n`;
    totalAmount += thisAmount;
  });
  result += "</ul>\n";
  result += `<p>Amount owed is <em>${totalAmount}</em></p>\n`;
  result += `<p>You earned <em>${frequentRenterPoints}</em> frequent renter points</p>\n`;

  return result;
};
