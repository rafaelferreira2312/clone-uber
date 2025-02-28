import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Bem-vindo ao Uber Clone!</Text>
      <Button title="Solicitar Corrida" onPress={() => navigation.navigate('Ride')} />
    </View>
  );
};

export default HomeScreen;