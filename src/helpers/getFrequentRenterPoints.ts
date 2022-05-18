import { MovieCode, MovieDetails } from "../interfaces/Movie";

export const getFrequentRenterPoints = (movie: MovieDetails, days: number) => {
    if (movie.code === MovieCode.NEW && days > 2) return 2;
    return 1;
}