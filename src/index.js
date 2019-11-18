import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import './config/ReactotronConfig';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default function App() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Header />
      <Text>Hello</Text>
    </ScrollView>
  );
}
