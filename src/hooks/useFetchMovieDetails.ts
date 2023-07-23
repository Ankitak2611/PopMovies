import React, { useEffect, useState } from 'react';
import { IMovieDetail } from '../interfaces/IMovieDetail';
import { IMovie } from '../interfaces/MovieInterface';
import { getMovieDetails } from '../api/api';

export default function useFetchMovieDetails(movieListingData: IMovie) {
  const [state, updateState] = useState<{
    isLoading: boolean;
    data: IMovieDetail;
    error?: Error | null;
  }>({
    isLoading: true,
    data: { ...movieListingData, trailers: [] },
    error: null,
  });

  const fetchMovie = async () => {
    try {
      updateState(currState => ({ ...currState, isLoading: true }));
      const data = await getMovieDetails(movieListingData.id);
      updateState(currState => ({ ...currState, isLoading: false, data }));
    } catch (error) {
      updateState(currState => ({ ...currState, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return state;
}
