import React from 'react';
import { StyleSheet, View } from 'react-native';
import ApiComponent from './components/ApiComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <ApiComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
