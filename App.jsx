import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Color from 'react-native-material-color';
import LinearGradient from 'react-native-linear-gradient';

import ChatList from './Component/ChatList/ChatList';
import AppHeader from './Component/Header/Header';

import 'react-native-gesture-handler';
import Navigation from './Component/Navigation/Navigation';

function App() {
  return (
    <SafeAreaProvider style={styles.content}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default App;
