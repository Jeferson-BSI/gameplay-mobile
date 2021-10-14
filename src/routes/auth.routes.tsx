import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { SingIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen name="SignIn" component={SingIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
