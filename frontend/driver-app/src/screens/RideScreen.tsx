import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { requestRide } from '../services/api';

const RideScreen = ({ navigation }) => {
  const [destination, setDestination] = useState('');

  const handleRequestRide = async () => {
    try {
      const response = await requestRide(destination);
      if (response.success) {
        Alert.alert('Sucesso', 'Corrida solicitada com sucesso!');
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao solicitar corrida');
    }
  };

  return (
    <View>
      <Text>Destino:</Text>
      <TextInput value={destination} onChangeText={setDestination} />
      <Button title="Solicitar Corrida" onPress={handleRequestRide} />
    </View>
  );
};

export default RideScreen;