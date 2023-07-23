import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const CustomHeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {/* Use the "arrowleft" icon from AntDesign */}
        <Icon name="arrowleft" size={28} style={styles.headerLeftIcon} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeaderLeft;
