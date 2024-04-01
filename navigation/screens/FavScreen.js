import * as React from 'react';
import { View, Text } from 'react-native';

export default function FavScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{ fontSize: 20, fontWeight: 'bold' }}>Favourites Screen</Text>
    </View>
  );
}