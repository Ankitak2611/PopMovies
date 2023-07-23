import { StyleSheet } from 'react-native';

const detailsScreenStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    paddingBottom: 50,
    paddingTop: 20
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  titleContainer: {
    height: 56,
    justifyContent: 'center',
    backgroundColor: '#746A64',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 170,
    width: 115,
    marginRight: 20,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    color: 'white',
    marginLeft: 20,
  },
  movieOverview: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: '#757575',
    marginTop: 20,
    textAlign: 'justify',
  },
  textContainer: {
    flex: 1,
  },
  releaseDate: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
    color: '#212121',
  },
  rating: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 24,
    color: '#212121',
    marginTop: 40,
  },
  trailerHeading: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    color: '#757575',
  },
  trailerContainer: {
    padding: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  trailerLabelStyle: {
    fontSize: 14,
    marginLeft: 12,
    fontWeight: '400',
    lineHeight: 24,
    color: '#757575',
  },
  buttonContainer: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
  },
  favoriteText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    backgroundColor: '#746A64',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 15,
  },
  borderContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
    marginTop: 10,
  },
});

export default detailsScreenStyles;
