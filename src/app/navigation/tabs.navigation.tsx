import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import InjectHOC from './InjectHOC';
import {Props, SliceCrypto, SliceExchange} from './interfaceInject';

import {getAllCryptoRedux} from '@presenter/io/cryptoSlice';
import {getAllExchangeRedux} from '@presenter/io/exchangeSlice';

import Home from '@screens/Currency/Currency';
import Exchange from '@screens/Exchange/Exchange';

const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, lazy: true}}>
      <Tab.Screen
        name="Home"
        component={InjectHOC<Props, SliceCrypto>(Home, {getAllCryptoRedux})}
        options={{
          tabBarLabel: 'Currency',
          tabBarIcon: ({color, size}: {color: string; size: number}) => (
            <MaterialCommunityIcons name="bitcoin" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Exchange"
        component={InjectHOC<Props, SliceExchange>(Exchange, {
          getAllExchangeRedux,
        })}
        options={{
          tabBarLabel: 'Exchange',
          tabBarIcon: ({color, size}: {color: string; size: number}) => (
            <MaterialCommunityIcons
              name="stack-exchange"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigation;
