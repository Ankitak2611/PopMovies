import { Text, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import detailsScreenStyles from './styles';

export interface ITrailerViewProps {
  videoId: string;
  index: number;
}

export default function TrailerView(props: ITrailerViewProps) {
  const openTrainer = () => {
    Linking.openURL(`https://www.youtube.com/watch?v=${props.videoId}`);
  };

  return (
    <TouchableOpacity style={detailsScreenStyles.trailerContainer} onPress={openTrainer}>
      <Icon name="play-circle-outline" size={20} color="#757575" />
      <Text style={detailsScreenStyles.trailerLabelStyle}>
        Play trailer {props.index + 1}
      </Text>
    </TouchableOpacity>
  );
}
