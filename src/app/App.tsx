import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

import StackNavigation from '@navigation/stack.navigation';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <NavigationContainer theme={MyTheme}>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
