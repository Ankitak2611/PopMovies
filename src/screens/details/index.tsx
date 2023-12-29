import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { IMAGE_BASE_URL } from '../../api/api';
import detailsScreenStyles from './styles';
import { useRoute } from '@react-navigation/native';
import { IMovie } from '../../interfaces/MovieInterface';
import useFetchMovieDetails from '../../hooks/useFetchMovieDetails';
import TrailerView from './TrailerView';

const DetailsScreen: React.FC = () => {
  const route = useRoute<any>();

  const movieDetail = route?.params?.movieDetail as IMovie;

  var date = new Date(movieDetail?.release_date);
  var releaseDate =
    date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

  const { data } = useFetchMovieDetails(movieDetail);

  return (
    <ScrollView
      style={detailsScreenStyles.container}
      contentContainerStyle={detailsScreenStyles.scrollView}>
      <View>
        <View style={detailsScreenStyles.imageContainer}>
          <Image
            style={detailsScreenStyles.image}
            source={{ uri: IMAGE_BASE_URL + movieDetail?.poster_path }}
          />
          <View style={detailsScreenStyles.textContainer}>
            <Text style={detailsScreenStyles.releaseDate}>{releaseDate}</Text>
            <Text
              style={
                detailsScreenStyles.rating
              }>{`${movieDetail.vote_average}/10`}</Text>
            <TouchableOpacity onPress={() => { }} style={detailsScreenStyles.buttonContainer}>
              <Text style={detailsScreenStyles.favoriteText}>Add to Favorite</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={detailsScreenStyles.movieOverview}>
          {movieDetail.overview}
        </Text>
      </View>
      {data?.trailers?.length !== 0 &&
        <View>
          <Text style={detailsScreenStyles.trailerHeading}>TRAILERS</Text>
          <View
            style={detailsScreenStyles.borderContainer}
          />
          {data.trailers?.map((videoId: string, index: number) => {
            return <TrailerView index={index} videoId={videoId} key={videoId} />;
          })}
        </View>
      }
    </ScrollView>
  );
};

export default DetailsScreen;
