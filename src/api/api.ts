import axios from 'axios';
import { IMovie } from '../interfaces/MovieInterface';
import { IMovieDetail } from '../interfaces/IMovieDetail';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'YOUR_API_KEY';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getMovies = async (page = 1): Promise<Array<IMovie>> => {
  try {
    const response = await api.get(`/movie/popular?page=${page}`);
    return response?.data?.results;
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};

export const getMovieDetails = async (
  movieID: string,
): Promise<IMovieDetail> => {
  try {
    const response = await api.get(
      `/movie/${movieID}?append_to_response=videos`,
    );
    const trailersData = (response.data?.videos?.results as []) ?? [];
    return {
      ...response?.data,
      trailers: trailersData?.map((item: any) => item.key).reverse(),
    };
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};
