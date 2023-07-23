import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const CustomHeaderRight = () => {

  return (
    <View style={styles.container}>
      {/* Use the "arrowRight icon from MaterialCommunityIcons */}
      <Icon name="dots-vertical" size={28} style={styles.headerRightIcon} color="white" />
    </View>
  );
};

export default CustomHeaderRight;
