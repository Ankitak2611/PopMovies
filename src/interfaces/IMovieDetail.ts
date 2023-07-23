import { IMovie } from './MovieInterface';

export interface IMovieDetail extends IMovie {
  trailers?: Array<string>;
}
