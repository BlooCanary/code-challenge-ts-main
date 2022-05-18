import { MovieCode, MovieDetails } from "../interfaces/Movie";

export const getRentalCost = (movie: MovieDetails, days: number) => {
  let thisAmount = 0;
    switch (movie.code) {
      case MovieCode.REGULAR:
        thisAmount = 2;
        if (days > 2) {
          thisAmount += (days - 2) * 1.5;
        }
        break;
      case MovieCode.NEW:
        thisAmount = days * 3;
        break;
      case MovieCode.CHILDRENS:
        thisAmount = 1.5;
        if (days > 3) {
          thisAmount += (days - 3) * 1.5;
        }
        break;
      default:
        thisAmount = 1;
        break;
    }
  return thisAmount;
}