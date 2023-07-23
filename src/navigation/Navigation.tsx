import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomHeaderLeft from './CustomHeaderLeft';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import CustomHeaderRight from './CustomHeaderRight';
import { IMovie } from '../interfaces/MovieInterface';

// Create a stack navigator
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Pop Movies',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 20,
              lineHeight: 24,
              color: 'white',
              fontWeight: '700',
            },
            headerStyle: {
              backgroundColor: '#212121',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            headerLeft: () => <CustomHeaderLeft />,
            headerRight: () => <CustomHeaderRight />,
            headerTitle: (route.params?.movieDetail as IMovie).title,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              fontSize: 20,
              lineHeight: 24,
              color: 'white',
              fontWeight: '700',
            },
            headerStyle: {
              backgroundColor: '#212121',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
