import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import arenaOpus from '../../assets/images/arenaOpus.png';

export default function DetailsScreen({ route }) {
  return (
    <View style={styles.container}>
      <Image source={arenaOpus} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});
