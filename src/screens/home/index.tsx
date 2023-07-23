import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IMAGE_BASE_URL } from '../../api/api';
import { useNavigation } from '@react-navigation/native';
import homeScreenStyles from './styles';
import { IMovie } from '../../interfaces/MovieInterface';
import useFetchPopularMovies from '../../hooks/useFetchPopularMovies';

const HomeScreen = () => {
  const navigation = useNavigation<any>(); // Get the navigation object

  const { data, isLoading, isFetchingMore, fetchNext } =
    useFetchPopularMovies();

  const openDetailsScreen = (item: IMovie) => {
    navigation.navigate('Details', { movieDetail: item });
  };

  const ListFooterComponent = () => {
    return (
      <View
        style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
        {isFetchingMore && <ActivityIndicator />}
      </View>
    );
  };

  const ListEmptyComponent = () => {
    if (isLoading) {
      return (
        <View
          style={{
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator />
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={homeScreenStyles.imageContainer}
              onPress={() => openDetailsScreen(item)}>
              <Image
                style={homeScreenStyles.image}
                source={{ uri: IMAGE_BASE_URL + item?.poster_path }}
              />
            </TouchableOpacity>
          )}
          //Setting the number of column
          ListEmptyComponent={ListEmptyComponent}
          contentContainerStyle={{ flexGrow: 1 }}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={fetchNext}
          ListFooterComponent={ListFooterComponent}
        />
      ) : <Text>Movie details not found.</Text>
      }
    </View>
  );
};

export default HomeScreen;
