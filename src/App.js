import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './routes/Index';

const App = () => {
  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
  );
}

export default App;
