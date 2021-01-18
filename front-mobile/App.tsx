import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import Home from './src/Home';
import Routes from './src/Routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>

    < Routes />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
