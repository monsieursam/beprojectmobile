/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useColorScheme} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import StackNavigator from 'routes/StackNavigator';
import darkTheme from 'themes/dark';
import lightTheme from 'themes/light';

const queryClient = new QueryClient();

axios.defaults.baseURL = 'https://beprojectback.herokuapp.com/api/';

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const App = () => {
  const scheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
