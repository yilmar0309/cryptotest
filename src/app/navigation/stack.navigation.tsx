import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';

import InjectHOC from './InjectHOC';
import {Props} from './interfaceInject';

import TabsNavigation from './tabs.navigation';

import CurrencyDetail from '@screens/CurrencyDetail/CurrencyDetail';
import ExchangeDetail from '@screens/ExchangeDetail/ExchangeDetail';

enableScreens();
const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="TabsNavigation"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Stack.Screen
        name="TabsNavigation"
        component={InjectHOC<Props, {}>(TabsNavigation, {})}
      />
      <Stack.Screen
        name="CurrencyDetail"
        component={InjectHOC<Props, {}>(CurrencyDetail, {})}
      />
      <Stack.Screen
        name="ExchangeDetail"
        component={InjectHOC<Props, {}>(ExchangeDetail, {})}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
