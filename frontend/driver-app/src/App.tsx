import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Text>Driver App</Text>
    </NavigationContainer>
  );import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import AppNavigator from './navigation/AppNavigator';
  
  const App = () => {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
  };
  
  export default App;
}
