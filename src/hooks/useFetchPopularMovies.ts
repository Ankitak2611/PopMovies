import { useEffect, useState } from 'react';
import { getMovies } from '../api/api';
import { IMovie } from '../interfaces/MovieInterface';
import debounce from 'lodash.debounce';

export default function useFetchPopularMovies() {
  const [state, updateState] = useState<{
    isLoading: boolean; // Initial data loading
    isFetchingMore?: boolean; // load more
    error?: Error | null;
    data: Array<IMovie>;
    page: number;
  }>({
    isLoading: true,
    isFetchingMore: false,
    error: null,
    data: [],
    page: 1,
  });

  const fetchNext = debounce(async () => {
    // If already loading do nothing
    if (state.isLoading || state.isFetchingMore) {
      return;
    }

    updateState(currState => {
      return {
        ...currState,
        error: null,
        isFetchingMore: true,
      };
    });

    try {
      const moviesData = await getMovies(state.page + 1);

      updateState(currState => {
        return {
          ...currState,
          isFetchingMore: false,
          page: currState.page + 1,
          data: [...currState.data, ...moviesData],
        };
      });
    } catch (error: any) {
      updateState(currState => {
        return {
          ...currState,
          error,
          isFetchingMore: false,
        };
      });
    }
  }, 500);

  const fetchMovies = async () => {
    updateState(currState => {
      return {
        ...currState,
        error: null,
        isLoading: true,
      };
    });

    try {
      const moviesData = await getMovies();
      updateState(currState => {
        return {
          ...currState,
          isLoading: false,
          page: 1,
          data: moviesData,
        };
      });
    } catch (error: any) {
      console.log('error while fetching movie', error);
      updateState(currState => {
        return {
          ...currState,
          error,
          isLoading: false,
        };
      });
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    ...state,
    fetchNext,
  };
}
