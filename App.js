import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Stack from './src/navigation/Stack';
import {AppProvider} from './src/component/AppContext';
import {Provider} from 'react-redux';
import store from './src/redux/store';
export default function App() {
  return (
    (
      <Provider store={store}>
        <AppProvider>
          <Stack />
        </AppProvider>
      </Provider>
    )
  );
}
